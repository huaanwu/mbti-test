/**
 * 知识库加载器：按需 fetch .json + 内存缓存 + IndexedDB 持久缓存
 *
 * 手机端优化：
 * - 按需加载：MBTI 结果页只加载对应星座/塔罗
 * - 单文件 .json：3 个请求替代 90 次 .md 请求
 * - IndexedDB：二次访问秒开，离线可用
 *
 * 暴露：
 *   window.MBTI_DATA = { ready, zodiac: [...], tarot: [...], error }
 *   window.loadZodiac() → Promise
 *   window.loadTarotMajor() → Promise
 *   window.loadTarotMinor() → Promise
 *   window.loadShengxiao() → Promise
 *   window.getZodiac(id)
 *   window.getTarot(id)
 *   window.getZodiacByDate(month, day)
 */

(function() {
  'use strict';

  const DATA_BASE = 'data';
  const CACHE_DB = 'mbti-cache-v1';
  const CACHE_STORE = 'knowledge';
  const CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 天

  const MBTI_DATA = {
    ready: false,
    loading: false,
    error: null,
    zodiac: [],
    tarotMajor: [],
    tarotMinor: [],
    numerology: null
  };
  window.MBTI_DATA = MBTI_DATA;

  // ========== IndexedDB 缓存 ==========
  async function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(CACHE_DB, 1);
      req.onerror = () => reject(req.error);
      req.onsuccess = () => resolve(req.result);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(CACHE_STORE)) {
          db.createObjectStore(CACHE_STORE, { keyPath: 'key' });
        }
      };
    });
  }

  async function getCache(key) {
    try {
      const db = await openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(CACHE_STORE, 'readonly');
        const store = tx.objectStore(CACHE_STORE);
        const req = store.get(key);
        req.onsuccess = () => {
          const data = req.result;
          if (!data) return resolve(null);
          if (Date.now() - data.ts > CACHE_TTL) return resolve(null);
          resolve(data.value);
        };
        req.onerror = () => reject(req.error);
      });
    } catch (e) {
      return null;
    }
  }

  async function setCache(key, value) {
    try {
      const db = await openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(CACHE_STORE, 'readwrite');
        const store = tx.objectStore(CACHE_STORE);
        const req = store.put({ key, value, ts: Date.now() });
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch (e) {
      // 静默失败，不影响功能
    }
  }

  // ========== 网络加载 ==========
  async function fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`fetch 失败 ${url}: ${res.status}`);
    return res.json();
  }

  async function loadWithCache(key, url) {
    // 1. 内存缓存
    if (MBTI_DATA[key]) {
      return MBTI_DATA[key];
    }
    // 2. IndexedDB 缓存
    const cached = await getCache(key);
    if (cached) {
      MBTI_DATA[key] = cached;
      console.log(`📦 ${key} 从 IndexedDB 恢复`);
      return cached;
    }
    // 3. 网络加载
    const data = await fetchJSON(url);
    MBTI_DATA[key] = data;
    await setCache(key, data);
    console.log(`🌐 ${key} 从网络加载: ${data.length} 条`);
    return data;
  }

  // ========== 按需加载 API ==========
  async function loadZodiac() {
    return loadWithCache('zodiac', `${DATA_BASE}/zodiac.json`);
  }
  window.loadZodiac = loadZodiac;

  async function loadTarotMajor() {
    return loadWithCache('tarotMajor', `${DATA_BASE}/tarot-major.json`);
  }
  window.loadTarotMajor = loadTarotMajor;

  async function loadTarotMinor() {
    return loadWithCache('tarotMinor', `${DATA_BASE}/tarot-minor.json`);
  }
  window.loadTarotMinor = loadTarotMinor;

  async function loadShengxiao() {
    return loadWithCache('shengxiao', `${DATA_BASE}/zodiac-shengxiao.json`);
  }
  window.loadShengxiao = loadShengxiao;

  async function loadNumerology() {
    return loadWithCache('numerology', `${DATA_BASE}/numerology.json`);
  }
  window.loadNumerology = loadNumerology;
  // 兼容旧 API：一次性加载全部（星座+塔罗大+塔罗小）
  async function loadAllData() {
    if (MBTI_DATA.ready) return MBTI_DATA;
    if (MBTI_DATA.loading) {
      while (MBTI_DATA.loading) await new Promise(r => setTimeout(r, 50));
      return MBTI_DATA;
    }
    MBTI_DATA.loading = true;
    try {
      await Promise.all([loadZodiac(), loadTarotMajor(), loadTarotMinor(), loadShengxiao()]);
      await loadNumerology();
      // 兼容旧格式：tarot = major + minor
      MBTI_DATA.tarot = [...MBTI_DATA.tarotMajor, ...MBTI_DATA.tarotMinor];
      MBTI_DATA.ready = true;
      console.log(`✅ 知识库加载完成：${MBTI_DATA.zodiac.length} 星座 + ${MBTI_DATA.tarot.length} 塔罗`);
    } catch (e) {
      MBTI_DATA.error = e.message;
      console.error('❌ 知识库加载失败：', e);
      throw e;
    } finally {
      MBTI_DATA.loading = false;
    }
    return MBTI_DATA;
  }
  window.loadAllData = loadAllData;

  // ========== 便捷查询 ==========
  function getZodiac(id) {
    return MBTI_DATA.zodiac.find(z => z.id === id || z.nameCn === id) || null;
  }
  window.getZodiac = getZodiac;

  function getTarot(id) {
    return MBTI_DATA.tarot.find(t => t.id === id) || null;
  }
  window.getTarot = getTarot;

  const ZODIAC_RANGES = [
    [3, 21, 4, 19, 'aries'], [4, 20, 5, 20, 'taurus'],
    [5, 21, 6, 21, 'gemini'], [6, 22, 7, 22, 'cancer'],
    [7, 23, 8, 22, 'leo'], [8, 23, 9, 22, 'virgo'],
    [9, 23, 10, 23, 'libra'], [10, 24, 11, 22, 'scorpio'],
    [11, 23, 12, 21, 'sagittarius'], [12, 22, 12, 31, 'capricorn'],
    [1, 1, 1, 19, 'capricorn'], [1, 20, 2, 18, 'aquarius'],
    [2, 19, 3, 20, 'pisces'],
  ];
  function getZodiacByDate(month, day) {
    const v = month * 100 + day;
    const r = ZODIAC_RANGES.find(r => {
      const s = r[0] * 100 + r[1], e = r[2] * 100 + r[3];
      return s <= e ? (v >= s && v <= e) : (v >= s || v <= e);
    });
    return r ? getZodiac(r[4]) : null;
  }
  window.getZodiacByDate = getZodiacByDate;

  // ========== 生命灵数 便捷查询 ==========
  function getNumerology(value) {
    if (!MBTI_DATA.numerology) return null;
    const v = String(value);
    return MBTI_DATA.numerology.numbers?.[v] || null;
  }
  window.getNumerology = getNumerology;
})();
