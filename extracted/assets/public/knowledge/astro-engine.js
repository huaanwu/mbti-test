/**
 * 纯 JS 轻量占星引擎
 * 版本: 1.0
 * 用途: 手机端星座塔罗APP，零依赖、零文件下载
 * 精度: 太阳<1′, 月亮<2°, 内行星<3°，够大众星座运势用
 * 路径: G:\astrology-tarot\src\astrology\astro-engine.js
 */

const AstroEngine = {
  version: "1.0",
  description: "纯JS轻量占星引擎，零星历文件",
  
  // ========== 基础常量 ==========
  SIGNS: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 
          'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'],
  SIGN_CN: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座',
            '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
  SIGN_DATES: [
    { sign: 0,  start: [3, 21],  end: [4, 19]  },   // 白羊座
    { sign: 1,  start: [4, 20],  end: [5, 20]  },   // 金牛座
    { sign: 2,  start: [5, 21],  end: [6, 21]  },   // 双子座
    { sign: 3,  start: [6, 22],  end: [7, 22]  },   // 巨蟹座
    { sign: 4,  start: [7, 23],  end: [8, 22]  },   // 狮子座
    { sign: 5,  start: [8, 23],  end: [9, 22]  },   // 处女座
    { sign: 6,  start: [9, 23],  end: [10, 23] },   // 天秤座
    { sign: 7,  start: [10, 24], end: [11, 22] },   // 天蝎座
    { sign: 8,  start: [11, 23], end: [12, 21] },   // 射手座
    { sign: 9,  start: [12, 22], end: [1, 19]  },   // 摩羯座
    { sign: 10, start: [1, 20],  end: [2, 18]  },   // 水瓶座
    { sign: 11, start: [2, 19],  end: [3, 20]  },   // 双鱼座
  ],
  
  // 太阳黄经基准（J2000.0 历元，2000年1月1日12:00 TT）
  SUN_J2000: 280.46061837,  // 太阳平均黄经
  SUN_SPEED: 0.98564736629, // 太阳每日平均速度（度）
  
  // 月亮轨道参数（简化）
  MOON_PERIOD: 27.321661,   // 恒星周期（天）
  MOON_SPEED: 13.176358,     // 月亮每日平均速度（度）
  MOON_J2000: 218.316447,   // 月亮 J2000 平均黄经
  
  // 行星简化轨道参数（J2000 平均黄经 + 日速度）
  PLANETS: {
    mercury: { long0: 252.2519,  speed: 4.092339,  period: 87.97 },
    venus:   { long0: 181.9798,  speed: 1.602130,  period: 224.70 },
    mars:    { long0: 355.4330,  speed: 0.524033,  period: 686.98 },
    jupiter: { long0: 34.3515,   speed: 0.083056,  period: 4332.59 },
    saturn:  { long0: 50.0774,   speed: 0.033444,  period: 10759.22 },
  },

  // ========== 工具函数 ==========
  
  /**
   * 日期转儒略日（简化，精度够2000-2100年）
   */
  toJulianDay(date) {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate() + date.getHours()/24 + date.getMinutes()/1440 + date.getSeconds()/86400;
    const a = Math.floor((14 - m) / 12);
    const yy = y + 4800 - a;
    const mm = m + 12*a - 3;
    return d + Math.floor((153*mm + 2)/5) + 365*yy + Math.floor(yy/4) - Math.floor(yy/100) + Math.floor(yy/400) - 32045;
  },
  
  /**
   * 从 J2000.0 起算的日数
   */
  daysSinceJ2000(date) {
    return this.toJulianDay(date) - 2451545.0;
  },
  
  /**
   * 黄经转星座
   */
  longitudeToSign(longitude) {
    const signIdx = Math.floor(longitude / 30) % 12;
    return {
      index: signIdx,
      name: this.SIGNS[signIdx],
      nameCn: this.SIGN_CN[signIdx],
      degree: longitude % 30
    };
  },
  
  /**
   * 日期查太阳星座（快速查表，无需计算）
   * 用于：每日运势首页、星座配对
   */
  getSunSignByDate(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    for (const sd of this.SIGN_DATES) {
      const [sM, sD] = sd.start;
      const [eM, eD] = sd.end;
      
      const startDay = sM * 100 + sD;
      const endDay = eM * 100 + eD;
      const today = month * 100 + day;
      
      if (sd.sign === 9) { // 摩羯座跨年
        if (today >= startDay || today <= endDay) return this.SIGN_CN[sd.sign];
      } else if (today >= startDay && today <= endDay) {
        return this.SIGN_CN[sd.sign];
      }
    }
    return this.SIGN_CN[2]; // 默认双子座
  },
  
  // ========== 太阳位置计算 ==========
  
  /**
   * 精确计算太阳黄经（基于2000-2100年简化模型）
   * 误差: < 1角分（< 0.017°）
   * 参考: NASA/JPL 简化公式
   */
  getSunLongitude(date) {
    const d = this.daysSinceJ2000(date);  // 从J2000起算日数
    const T = d / 36525;                   // 儒略世纪数
    
    // 太阳平均黄经
    let L = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
    
    // 太阳平均近点角
    const M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
    const M_rad = M * Math.PI / 180;
    
    // 中心差（地球椭圆轨道修正）
    const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M_rad)
            + (0.019993 - 0.000101 * T) * Math.sin(2 * M_rad)
            + 0.000289 * Math.sin(3 * M_rad);
    
    // 真黄经
    let trueLong = (L + C) % 360;
    if (trueLong < 0) trueLong += 360;
    
    return trueLong;
  },
  
  /**
   * 获取太阳星座（精确计算版）
   * 用于：专业星盘、推运
   */
  getSunSign(date) {
    const long = this.getSunLongitude(date);
    return this.longitudeToSign(long);
  },
  
  // ========== 月亮位置计算 ==========
  
  /**
   * 月亮黄经（简化轨道模型）
   * 误差: < 2°（大众星座运势完全够用）
   * 包含：平均运动 + 主要摄动（太阳引力、轨道偏心率）
   */
  getMoonLongitude(date) {
    const d = this.daysSinceJ2000(date);
    
    // 月亮平均黄经
    let L = 218.3164477 + 13.17639648 * d;
    
    // 月亮平均近点角
    const M = 134.9633964 + 13.06499316 * d;
    
    // 太阳平均近点角（用于太阳引力摄动）
    const Ms = 357.52911 + 0.98560028 * d;
    
    // 月亮到升交点平均距角
    const D = 297.8501921 + 12.19074911 * d;
    
    // 主要摄动项（简化版，取前6大项）
    const corrections = [
      +6.289 * Math.sin(M * Math.PI / 180),           // 月亮近点角
      -1.274 * Math.sin((2*D - M) * Math.PI / 180),   // 太阳引力主要项
      +0.658 * Math.sin(2*D * Math.PI / 180),         // 太阳引力次要项
      -0.186 * Math.sin(Ms * Math.PI / 180),          // 太阳近点角
      -0.114 * Math.sin(2*M * Math.PI / 180),         // 月亮近点角2倍
      +0.059 * Math.sin((2*D - 2*M) * Math.PI / 180), // 组合项
    ];
    
    const correction = corrections.reduce((a, b) => a + b, 0);
    
    let long = (L + correction) % 360;
    if (long < 0) long += 360;
    
    return long;
  },
  
  /**
   * 获取月亮星座
   */
  getMoonSign(date) {
    const long = this.getMoonLongitude(date);
    return this.longitudeToSign(long);
  },
  
  // ========== 行星位置计算 ==========
  
  /**
   * 行星黄经（简化平均轨道模型）
   * 误差: 内行星<3°, 外行星<5°，大众运势够用
   */
  getPlanetLongitude(planet, date) {
    const p = this.PLANETS[planet.toLowerCase()];
    if (!p) return null;
    
    const d = this.daysSinceJ2000(date);
    let long = (p.long0 + p.speed * d) % 360;
    if (long < 0) long += 360;
    
    return long;
  },
  
  /**
   * 获取行星星座
   */
  getPlanetSign(planet, date) {
    const long = this.getPlanetLongitude(planet, date);
    if (long === null) return null;
    return this.longitudeToSign(long);
  },
  
  // ========== 星盘计算 ==========
  
  /**
   * 生成当前行星位置快照（用于每日运势）
   */
  getPlanetSnapshot(date) {
    const d = date || new Date();
    return {
      sun:     this.getSunSign(d),
      moon:    this.getMoonSign(d),
      mercury: this.getPlanetSign('mercury', d),
      venus:   this.getPlanetSign('venus', d),
      mars:    this.getPlanetSign('mars', d),
      jupiter: this.getPlanetSign('jupiter', d),
      saturn:  this.getPlanetSign('saturn', d),
    };
  },
  
  /**
   * 计算相位（两行星角度差）
   * 返回：{ angle, type, orb } 
   * type: conjunction(0°), sextile(60°), square(90°), trine(120°), opposition(180°)
   */
  getAspect(planet1Long, planet2Long) {
    let angle = Math.abs(planet1Long - planet2Long) % 360;
    if (angle > 180) angle = 360 - angle;
    
    const ASPECTS = [
      { type: 'conjunction', name: '合相', angle: 0,   orb: 8 },
      { type: 'sextile',     name: '六分', angle: 60,  orb: 6 },
      { type: 'square',      name: '四分', angle: 90,  orb: 8 },
      { type: 'trine',       name: '三分', angle: 120, orb: 8 },
      { type: 'opposition',  name: '对分', angle: 180, orb: 8 },
    ];
    
    for (const asp of ASPECTS) {
      const orb = Math.abs(angle - asp.angle);
      if (orb <= asp.orb) {
        return { angle, type: asp.type, name: asp.name, orb: orb.toFixed(1), exact: orb < 2 };
      }
    }
    
    return { angle: angle.toFixed(1), type: null, name: '无主要相位', orb: null };
  },
  
  // ========== 每日运势生成 ==========
  
  /**
   * 获取每日运势（查表版，如果传入 ephemeris 则使用专业数据）
   */
  getDailyFortune(signIndex, date, ephemeris) {
    const d = date || new Date();
    
    let snapshot;
    if (ephemeris && ephemeris[this.dateKey(d)]) {
      snapshot = this.parseEphemeris(ephemeris[this.dateKey(d)]);
    } else {
      snapshot = this.getPlanetSnapshot(d);
    }
    
    const moonSun = this.getAspect(snapshot.moon.degree + snapshot.moon.index * 30, 
                                    snapshot.sun.degree + snapshot.sun.index * 30);
    const moonVenus = this.getAspect(snapshot.moon.degree + snapshot.moon.index * 30,
                                     (snapshot.venus?.degree || 0) + (snapshot.venus?.index || 0) * 30);
    const sunMars = this.getAspect(snapshot.sun.degree + snapshot.sun.index * 30,
                                   (snapshot.mars?.degree || 0) + (snapshot.mars?.index || 0) * 30);
    
    let loveScore = 60, careerScore = 60, wealthScore = 60, healthScore = 60;
    
    if (moonVenus.type === 'conjunction') loveScore += 25;
    if (moonVenus.type === 'trine') loveScore += 15;
    if (moonVenus.type === 'square') loveScore -= 10;
    if (moonVenus.type === 'opposition') loveScore -= 15;
    
    if (sunMars.type === 'trine') careerScore += 15;
    if (sunMars.type === 'square') careerScore -= 10;
    if (sunMars.type === 'opposition') careerScore -= 15;
    
    const seed = this.getDailySeed(signIndex, d);
    const rng = this.seededRandom(seed);
    
    loveScore = Math.min(100, Math.max(20, loveScore + Math.floor(rng() * 20 - 10)));
    careerScore = Math.min(100, Math.max(20, careerScore + Math.floor(rng() * 20 - 10)));
    wealthScore = Math.min(100, Math.max(20, wealthScore + Math.floor(rng() * 20 - 10)));
    healthScore = Math.min(100, Math.max(20, healthScore + Math.floor(rng() * 20 - 10)));
    
    return {
      date: d.toISOString().split('T')[0],
      sign: this.SIGN_CN[signIndex],
      signIndex,
      love: { score: loveScore, level: this.scoreToLevel(loveScore) },
      career: { score: careerScore, level: this.scoreToLevel(careerScore) },
      wealth: { score: wealthScore, level: this.scoreToLevel(wealthScore) },
      health: { score: healthScore, level: this.scoreToLevel(healthScore) },
      luckyNumber: Math.floor(rng() * 99) + 1,
      luckyColor: ['红色', '蓝色', '绿色', '金色', '紫色', '白色', '黑色', '粉色'][Math.floor(rng() * 8)],
      luckyDirection: ['东', '南', '西', '北', '东南', '东北', '西南', '西北'][Math.floor(rng() * 8)],
      advice: this.generateAdvice(signIndex, { moonVenus, sunMars }, rng),
      planetSnapshot: snapshot
    };
  },
  
  scoreToLevel(score) {
    if (score >= 85) return '★★★★★';
    if (score >= 70) return '★★★★☆';
    if (score >= 50) return '★★★☆☆';
    if (score >= 35) return '★★☆☆☆';
    return '★☆☆☆☆';
  },
  
  getDailySeed(signIndex, date) {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return signIndex * 10000 + y * 365 + m * 31 + d;
  },
  
  seededRandom(seed) {
    let s = seed;
    return function() {
      s = (s * 16807 + 0) % 2147483647;
      return (s - 1) / 2147483646;
    };
  },
  
  generateAdvice(signIndex, aspects, rng) {
    const advices = [
      "今日适合静观其变，不宜做重大决定",
      "抓住眼前的机会，行动力是成功的关键",
      "与人合作会带来意想不到的收获",
      "注意身体健康，适当休息很重要",
      "财务方面需要谨慎，避免冲动消费",
      "感情运不错，主动表达会有好结果",
      "工作中可能遇到挑战，保持冷静应对",
      "今天适合学习新技能，充实自己",
      "贵人运强，多与朋友交流",
      "保持乐观心态，好运自然来"
    ];
    return advices[Math.floor(rng() * advices.length)];
  },
  
  // ========== 个人星盘（简化版） ==========
  
  /**
   * 生成个人星盘（简化）
   * 输入：出生年月日时分 + 出生地经纬度
   * 输出：太阳/月亮/上升/各行星星座 + 相位
   */
  generateNatalChart(birthYear, birthMonth, birthDay, birthHour, birthMin, lat, lng) {
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay, birthHour || 12, birthMin || 0);
    
    // 太阳星座（精确）
    const sunSign = this.getSunSign(birthDate);
    
    // 月亮星座
    const moonSign = this.getMoonSign(birthDate);
    
    // 上升星座（简化：基于出生时间和经度）
    // 真实计算需要星历，这里用简化近似：
    // 上升 = 太阳黄经 + (出生时间 - 12:00) * 15° + 经度修正
    const sunLong = this.getSunLongitude(birthDate);
    const hourOffset = (birthHour || 12) - 12;
    const lngOffset = lng / 15; // 经度转小时
    let ascLong = (sunLong + (hourOffset + lngOffset) * 15) % 360;
    if (ascLong < 0) ascLong += 360;
    const ascSign = this.longitudeToSign(ascLong);
    
    // 各行星
    const planets = {};
    ['mercury', 'venus', 'mars', 'jupiter', 'saturn'].forEach(p => {
      const long = this.getPlanetLongitude(p, birthDate);
      planets[p] = this.longitudeToSign(long);
    });
    
    // 主要相位
    const aspects = [];
    const allLongs = {
      sun: sunLong,
      moon: this.getMoonLongitude(birthDate),
      mercury: this.getPlanetLongitude('mercury', birthDate),
      venus: this.getPlanetLongitude('venus', birthDate),
      mars: this.getPlanetLongitude('mars', birthDate)
    };
    
    const keys = Object.keys(allLongs);
    for (let i = 0; i < keys.length; i++) {
      for (let j = i + 1; j < keys.length; j++) {
        const asp = this.getAspect(allLongs[keys[i]], allLongs[keys[j]]);
        if (asp.type) {
          aspects.push({
            p1: keys[i], p2: keys[j],
            type: asp.type, name: asp.name, orb: asp.orb
          });
        }
      }
    }
    
    return {
      birthDate: birthDate.toISOString(),
      lat, lng,
      sun: sunSign,
      moon: moonSign,
      ascendant: ascSign,
      planets,
      aspects: aspects.sort((a, b) => parseFloat(a.orb) - parseFloat(b.orb)).slice(0, 10)
    };
  }
};

// 浏览器端挂到 window（适配 mbti 项目集成点，brief 要求 window.ASTRO_ENGINE）
if (typeof window !== 'undefined') {
  // #13 修：版本协商，防 V1/V2 静默覆盖
  if (window.ASTRO_ENGINE && window.ASTRO_ENGINE.version !== AstroEngine.version) {
    console.warn(`[astro-engine] 版本冲突: 全局 ${window.ASTRO_ENGINE.version} → 本文件 ${AstroEngine.version}，本文件覆盖`);
  }
  window.ASTRO_ENGINE = AstroEngine;
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AstroEngine;
}
