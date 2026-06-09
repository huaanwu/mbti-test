/**
 * #H2 简化版八字计算（V0，0 依赖）
 * 支持 1900-2100 年（80+ 年范围内）
 *
 * 四柱：年柱/月柱/日柱/时柱
 * - 年柱：(year-4) % 60 → 60 甲子表
 * - 月柱：节气换月 + 五虎遁
 * - 日柱：基于已知基准日（公历 1900-01-01 是甲戌日）+ Julian Day 偏移
 * - 时柱：五鼠遁 + 12 时辰
 *
 * 五行：金/木/水/火/土（用天干地支对应）
 * 纳音：60 甲子纳音表
 *
 * 简化：不算起运年龄、不排大运流年（V0 够 MVP）
 */

// 60 甲子表（0=甲子, 1=乙丑, ..., 59=癸亥）
const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];  // 10 天干
const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];  // 12 地支
const WUXING_MAP = {
  '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土',
  '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水',
  '子': '水', '丑': '土', '寅': '木', '卯': '木', '辰': '土',
  '巳': '火', '午': '火', '未': '土', '申': '金', '酉': '金',
  '戌': '土', '亥': '水',
};
// 12 时辰（每 2 小时一个）
const HOUR_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 已知基准日：公历 1900-01-01 是「甲戌」日
// 甲戌 = 60 甲子表中索引 10（甲=0, 戌=10 → 甲子索引 = 0*6+10? 不对，60 甲子用统一索引）
// 正确算法：(year-1900)*365 + (year-1900)/4 - ... → 算出与基准日相差几天 → mod 60
const BAZI_BASE_DATE = new Date(1900, 0, 1);  // 1900-01-01
const BAZI_BASE_INDEX = 10;  // 甲戌 = 索引 10

// 节气月（简版）：用月份近似（实际要算立春/惊蛰/清明等 24 节气）
// 简化：1月≈丑月, 2月≈寅月, 3月≈卯月, 4月≈辰月, 5月≈巳月, 6月≈午月, 7月≈未月, 8月≈申月, 9月≈酉月, 10月≈戌月, 11月≈亥月, 12月≈子月
// 实际：年柱以立春为界，月柱以节气为界。V0 简化用月份近似（误差 ±15 天）
const MONTH_TO_ZHI = ['', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子'];  // index 1-12

// 五虎遁年起月（年干 → 1月寅的天干）
// 甲己之年丙作首（甲/己年 1 月 = 丙寅）
// 乙庚之岁戊为头（乙/庚年 1 月 = 戊寅）
// 丙辛必定寻庚起（丙/辛年 1 月 = 庚寅）
// 丁壬壬位顺行流（丁/壬年 1 月 = 壬寅）
// 戊癸之年何处起（戊/癸年 1 月 = 甲寅）
const NIAN_GAN_TO_MONTH_GAN = {
  '甲': '丙', '己': '丙',
  '乙': '戊', '庚': '戊',
  '丙': '庚', '辛': '庚',
  '丁': '壬', '壬': '壬',
  '戊': '甲', '癸': '甲',
};

// 五鼠遁日起时（日干 → 子时的天干）
// 甲己还加甲（甲/己日 子时 = 甲子）
// 乙庚丙作初（乙/庚日 子时 = 丙子）
// 丙辛从戊起（丙/辛日 子时 = 戊子）
// 丁壬庚子居（丁/壬日 子时 = 庚子）
// 戊癸何方发（戊/癸日 子时 = 壬子）
const RI_GAN_TO_HOUR_GAN = {
  '甲': '甲', '己': '甲',
  '乙': '丙', '庚': '丙',
  '丙': '戊', '辛': '戊',
  '丁': '庚', '壬': '庚',
  '戊': '壬', '癸': '壬',
};

// 60 甲子纳音表（V0 简版只给常用 30 个）
const NAYIN_TABLE = {
  0: '海中金', 1: '海中金',
  2: '炉中火', 3: '炉中火',
  4: '大林木', 5: '大林木',
  6: '路旁土', 7: '路旁土',
  8: '剑锋金', 9: '剑锋金',
  10: '山头火', 11: '山头火',
  12: '涧下水', 13: '涧下水',
  14: '城头土', 15: '城头土',
  16: '白蜡金', 17: '白蜡金',
  18: '杨柳木', 19: '杨柳木',
  20: '泉中水', 21: '泉中水',
  22: '大海水', 23: '大海水',
  24: '炉中火', 25: '炉中火',
  26: '沙中金', 27: '沙中金',
  28: '天上水', 29: '天上水',
  30: '壁上土', 31: '壁上土',
  32: '金箔金', 33: '金箔金',
  34: '覆灯火', 35: '覆灯火',
  36: '天河水', 37: '天河水',
  38: '大驿土', 39: '大驿土',
  40: '钗钏金', 41: '钗钏金',
  42: '桑柘木', 43: '桑柘木',
  44: '大溪水', 45: '大溪水',
  46: '沙中土', 47: '沙中土',
  48: '天上火', 49: '天上火',
  50: '石榴木', 51: '石榴木',
  52: '大海水', 53: '大海水',
  54: '壁上土', 55: '壁上土',
  56: '金箔金', 57: '金箔金',
  58: '覆灯火', 59: '覆灯火',
};

/**
 * 算 60 甲子索引（天干 + 地支）
 */
function ganzhiIndex(gan, zhi) {
  const ganIdx = HEAVENLY_STEMS.indexOf(gan);
  const zhiIdx = EARTHLY_BRANCHES.indexOf(zhi);
  if (ganIdx < 0 || zhiIdx < 0) return -1;
  // 60 甲子索引 = (天干 mod 10) 和 (地支 mod 12) 配合
  // 简化：枚举 (ganIdx + 60) * 12 找到 zhiIdx
  for (let i = 0; i < 60; i++) {
    if (i % 10 === ganIdx && i % 12 === zhiIdx) return i;
  }
  return -1;
}

/**
 * 算年柱
 * V0 简化：以公历 1 月 1 日为界（实际应以立春为界，±15 天误差）
 */
function getYearPillar(year) {
  // 1900 年是庚子年（索引 36）→ 但实际公历 1900-01-01 在 1899 农历己亥年
  // V0 简化：公历年 - 4 = 甲子索引（不考虑立春）
  const idx = ((year - 4) % 60 + 60) % 60;
  return {
    gan: HEAVENLY_STEMS[idx % 10],
    zhi: EARTHLY_BRANCHES[idx % 12],
    idx,
  };
}

/**
 * 算月柱
 * V0 简化：用公历月份近似（实际以节气为界）
 */
function getMonthPillar(year, month) {
  const yearPillar = getYearPillar(year);
  const monthZhi = MONTH_TO_ZHI[month];  // 1月=丑, 2月=寅, ...
  const monthZhiIdx = EARTHLY_BRANCHES.indexOf(monthZhi);
  // 月干 = (年干对应 1月寅的天干) + (month-1) * (天干+1) 顺序
  const startGan = NIAN_GAN_TO_MONTH_GAN[yearPillar.gan];
  const startGanIdx = HEAVENLY_STEMS.indexOf(startGan);
  // 寅月 (1月) 用 startGan，后续月 +1 顺序
  // monthZhiIdx: 子=11, 丑=0, 寅=1, 卯=2, ..., 亥=10
  // 从寅(1) 起算
  const offset = monthZhiIdx >= 1 ? monthZhiIdx - 1 : monthZhiIdx + 11;
  const monthGanIdx = (startGanIdx + offset) % 10;
  return {
    gan: HEAVENLY_STEMS[monthGanIdx],
    zhi: monthZhi,
    idx: ganzhiIndex(HEAVENLY_STEMS[monthGanIdx], monthZhi),
  };
}

/**
 * 算日柱（基于 1900-01-01 = 甲戌日，索引 10）
 * V0 简化：忽略公历/农历换日
 */
function getDayPillar(year, month, day) {
  const target = new Date(year, month - 1, day);
  const diffDays = Math.floor((target - BAZI_BASE_DATE) / (1000 * 60 * 60 * 24));
  const idx = ((BAZI_BASE_INDEX + diffDays) % 60 + 60) % 60;
  return {
    gan: HEAVENLY_STEMS[idx % 10],
    zhi: EARTHLY_BRANCHES[idx % 12],
    idx,
  };
}

/**
 * 算时柱
 * hour: 0-23 (24 → 0)
 */
function getHourPillar(dayGan, hour) {
  const hourBranchIdx = Math.floor((hour + 1) / 2) % 12;  // 23-0 → 子(0)
  const hourBranch = EARTHLY_BRANCHES[hourBranchIdx];
  const startGan = RI_GAN_TO_HOUR_GAN[dayGan];
  const startGanIdx = HEAVENLY_STEMS.indexOf(startGan);
  const hourGanIdx = (startGanIdx + hourBranchIdx) % 10;
  return {
    gan: HEAVENLY_STEMS[hourGanIdx],
    zhi: hourBranch,
    idx: ganzhiIndex(HEAVENLY_STEMS[hourGanIdx], hourBranch),
  };
}

/**
 * 算四柱 + 五行 + 纳音 + 大运
 * @param {number} year 公历年
 * @param {number} month 公历月 1-12
 * @param {number} day 公历日 1-31
 * @param {number} hour 0-23（24 视作 12）
 * @returns {object} { year, month, day, time, dayGan, wuxing, nayin, dayun, allChars }
 */
function getBaziFromBirthday(year, month, day, hour) {
  if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) {
    return null;
  }
  if (year < 1900 || year > 2100) {
    console.warn('getBaziFromBirthday: 范围 1900-2100，超出范围 V0 简化不保证');
  }
  const hourVal = Number.isFinite(hour) ? hour : 12;

  const yearP = getYearPillar(year);
  const monthP = getMonthPillar(year, month);
  const dayP = getDayPillar(year, month, day);
  const hourP = getHourPillar(dayP.gan, hourVal);

  // 四柱字符串
  const allChars = `${yearP.gan}${yearP.zhi} ${monthP.gan}${monthP.zhi} ${dayP.gan}${dayP.zhi} ${hourP.gan}${hourP.zhi}`;

  // 五行统计
  const counts = { 金: 0, 木: 0, 水: 0, 火: 0, 土: 0 };
  const chars = [yearP.gan, yearP.zhi, monthP.gan, monthP.zhi, dayP.gan, dayP.zhi, hourP.gan, hourP.zhi];
  for (const c of chars) {
    if (WUXING_MAP[c]) counts[WUXING_MAP[c]]++;
  }
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const dominant = sorted[0][0];
  const lacking = sorted.filter(([, v]) => v === 0).map(([k]) => k).join('、') || '无';

  // 纳音（年柱）
  const nayin = NAYIN_TABLE[yearP.idx] || '';

  // 大运（V0 简化：只标顺逆）
  const yangGan = ['甲', '丙', '戊', '庚', '壬'];
  const isYang = yangGan.includes(yearP.gan);
  // 男阳女阴顺行；男阴女阳逆行（V0 简化：只看年干）
  const direction = isYang ? '顺行' : '逆行';

  return {
    year: { gan: yearP.gan, zhi: yearP.zhi, idx: yearP.idx },
    month: { gan: monthP.gan, zhi: monthP.zhi, idx: monthP.idx },
    day: { gan: dayP.gan, zhi: dayP.zhi, idx: dayP.idx },
    time: { gan: hourP.gan, zhi: hourP.zhi, idx: hourP.idx },
    allChars,
    dayGan: dayP.gan,  // 日主（八字核心）
    wuxing: { counts, dominant, lacking },
    nayin,
    dayun: { isYang, direction, note: 'V0 简化版' },
  };
}

// 暴露到 window（让 app.js 用）
if (typeof window !== 'undefined') {
  window.getBaziFromBirthday = getBaziFromBirthday;
}
