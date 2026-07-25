/**
 * 农历转换工具库（1900-2100）
 * 纯 JS，零外部依赖
 * 挂载到 window.LUNAR
 */
(function () {
  'use strict';

  // ==================== 农历数据表 ====================
  // 每个年份一个十六进制数：
  // 低 4 位 → 闰月月份（0=无闰月）
  // 高 12 位 → 每月大小月（1=大月30天, 0=小月29天），从正月到十二月
  // 第 16 位 → 闰月大小（1=大月, 0=小月）
  var LUNAR_INFO = [
    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
    0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
    0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06aa0, 0x1a6c4, 0x0aae0,
    0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
    0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
    0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
    0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a4d0, 0x0d150, 0x0f252,
    0x0d520
  ]; // 1900-2100

  var START_YEAR = 1900;
  var END_YEAR = 2100;

  // 天干地支
  var GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  var ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  var SHENGXIAO_CN = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];

  // 农历月份名
  var LUNAR_MONTH_CN = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
  var LUNAR_DAY_CN = [
    '', '初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
    '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
    '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'
  ];

  // ==================== 核心函数 ====================

  /** 获取某年农历信息 */
  function getLunarYearInfo(year) {
    if (year < START_YEAR || year > END_YEAR) return null;
    var info = LUNAR_INFO[year - START_YEAR];
    var leapMonth = info & 0xf;
    var leapBig = (info >> 16) & 0x1;
    var months = [];
    for (var i = 0; i < 12; i++) {
      // bit 4-15 依次为 正月 到 腊月 的大小月标记，不因闰月移位
      var bitPos = 4 + i;
      months.push({ month: i + 1, days: ((info >> bitPos) & 0x1) ? 30 : 29, isLeap: false });
    }
    if (leapMonth) {
      months.splice(leapMonth, 0, { month: leapMonth, days: leapBig ? 30 : 29, isLeap: true });
    }
    return { year: year, leapMonth: leapMonth, months: months };
  }

  /** 获取某农历年的总天数 */
  function getLunarYearDays(year) {
    var info = LUNAR_INFO[year - START_YEAR];
    var leapMonth = info & 0xf;
    var total = 0;
    for (var i = 0; i < 12; i++) {
      var bitPos = 4 + i;
      total += ((info >> bitPos) & 0x1) ? 30 : 29;
    }
    if (leapMonth) {
      total += ((info >> 16) & 0x1) ? 30 : 29;
    }
    return total;
  }

  /** 获取某农历月天数 */
  function getLunarMonthDays(year, month) {
    var yi = getLunarYearInfo(year);
    if (!yi) return 0;
    for (var i = 0; i < yi.months.length; i++) {
      if (yi.months[i].month === month && !yi.months[i].isLeap) {
        return yi.months[i].days;
      }
    }
    return 0;
  }

  /** 公历某年某月天数 */
  function solarMonthDays(y, m) {
    if (m === 2) return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 29 : 28;
    return [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
  }

  /** 公历日期距离 1900-01-31 的天数偏移 */
  function solarToDays(y, m, d) {
    var days = 0;
    for (var i = START_YEAR; i < y; i++) {
      days += (i % 4 === 0 && i % 100 !== 0) || i % 400 === 0 ? 366 : 365;
    }
    for (var i = 1; i < m; i++) {
      days += solarMonthDays(y, i);
    }
    return days + d - 1;
  }

  /** 公历 → 农历 */
  function solarToLunar(y, m, d) {
    if (y < START_YEAR || y > END_YEAR) return null;
    var offset = solarToDays(y, m, d) - solarToDays(START_YEAR, 1, 31);
    var ly = START_YEAR;
    while (ly <= END_YEAR) {
      var yDays = getLunarYearDays(ly);
      if (offset < yDays) break;
      offset -= yDays;
      ly++;
    }
    if (ly > END_YEAR) return null;
    var yi = getLunarYearInfo(ly);
    for (var i = 0; i < yi.months.length; i++) {
      if (offset < yi.months[i].days) {
        return {
          year: ly,
          month: yi.months[i].month,
          day: offset + 1,
          isLeap: yi.months[i].isLeap,
          yearCn: GAN[(ly - 4) % 10] + ZHI[(ly - 4) % 12] + '年',
          monthCn: (yi.months[i].isLeap ? '闰' : '') + LUNAR_MONTH_CN[yi.months[i].month - 1] + '月',
          dayCn: LUNAR_DAY_CN[offset + 1],
          shengxiao: SHENGXIAO_CN[(ly - 4) % 12]
        };
      }
      offset -= yi.months[i].days;
    }
    return null;
  }

  /** 农历 → 公历 */
  function lunarToSolar(y, m, d, isLeap) {
    if (y < START_YEAR || y > END_YEAR) return null;
    var yi = getLunarYearInfo(y);
    var days = 0;
    var found = false;
    for (var i = 0; i < yi.months.length; i++) {
      if (yi.months[i].month === m && !!yi.months[i].isLeap === !!isLeap) {
        days += (d - 1);
        found = true;
        break;
      }
      days += yi.months[i].days;
    }
    if (!found || d > (yi.months.filter(function (x) { return x.month === m && !!x.isLeap === !!isLeap; })[0] || {}).days) return null;

    // 累加目标农历年之前所有农历年的总天数
    var lunarDaysBefore = 0;
    for (var ly = START_YEAR; ly < y; ly++) {
      lunarDaysBefore += getLunarYearDays(ly);
    }

    // baseOffset：从公历 1900-01-01 算起的绝对天数偏移
    var baseOffset = solarToDays(START_YEAR, 1, 31) + lunarDaysBefore + days;
    // 从 1900-01-01 开始，逐公历年查找（total 从 0 开始）
    var total = 0;
    var sy = START_YEAR;
    while (sy <= END_YEAR) {
      var yDays = (sy % 4 === 0 && sy % 100 !== 0) || sy % 400 === 0 ? 366 : 365;
      if (total + yDays > baseOffset) {
        var remain = baseOffset - total;
        for (var sm = 1; sm <= 12; sm++) {
          var smd = solarMonthDays(sy, sm);
          if (remain < smd) {
            return { year: sy, month: sm, day: remain + 1 };
          }
          remain -= smd;
        }
        return null;
      }
      total += yDays;
      sy++;
    }
    return null;
  }

  /** 获取农历年的闰月（0 = 无） */
  function getLeapMonth(year) {
    if (year < START_YEAR || year > END_YEAR) return 0;
    return LUNAR_INFO[year - START_YEAR] & 0xf;
  }

  /** 获取农历年的月份列表（含闰月标记） */
  function getLunarMonths(year) {
    var yi = getLunarYearInfo(year);
    if (!yi) return [];
    return yi.months;
  }

  // ==================== 导出 ====================
  window.LUNAR = {
    solarToLunar: solarToLunar,
    lunarToSolar: lunarToSolar,
    getLunarYearInfo: getLunarYearInfo,
    getLunarMonthDays: getLunarMonthDays,
    getLunarYearDays: getLunarYearDays,
    getLeapMonth: getLeapMonth,
    getLunarMonths: getLunarMonths,
    LUNAR_MONTH_CN: LUNAR_MONTH_CN,
    LUNAR_DAY_CN: LUNAR_DAY_CN,
    START_YEAR: START_YEAR,
    END_YEAR: END_YEAR
  };
})();
