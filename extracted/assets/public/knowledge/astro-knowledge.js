/**
 * 占星解读知识库 V1.0 - 配合顾总 astro-engine.js
 * 版本: 1.0
 * 用途: AI prompt 注入 + 前端展示
 * 覆盖: 8 行星含义 + 12 星座太阳过境 + 12 月亮位置 + 6 相位
 * 路径: src/knowledge/astro-knowledge.js
 *
 * 数据风格跟 tarot-knowledge-v2.js / zodiac-knowledge.js 对齐
 * sign 取值跟 ZODIAC_KNOWLEDGE.signs[].id 一致（aries/taurus/.../pisces）
 */

const ASTRO_KNOWLEDGE = {
  version: "1.0",
  updateDate: "2026-06-05",
  system: "西方占星(Western Astrology)",
  planetCount: 8,
  signCount: 12,
  aspectCount: 6,

  // ========== 8 行星含义 ==========
  // 字段: name(中文) / enName / symbol / keywords / meaning(200-400字) / domain(影响领域)
  planets: {
    sun: {
      name: "太阳", enName: "Sun", symbol: "☉",
      keywords: ["自我", "生命力", "领导力", "核心人格", "意志"],
      domain: "核心自我、人生方向",
      meaning: "太阳代表一个人的核心自我、生命力和意志。它是你最本质的性格，决定你是谁、想要什么、要往哪去。太阳星座是最重要的'主星座'，影响你的核心人格、领导风格和人生方向。太阳过境一个星座约 30 天，这段时间该星座主题的能量成为主导。健康、活力、父亲形象也与太阳相关。太阳代表的不是你'表现'出来的样子（那是上升），而是你'是'谁——是内在的火焰和驱动力。"
    },
    moon: {
      name: "月亮", enName: "Moon", symbol: "☽",
      keywords: ["情绪", "潜意识", "安全感", "本能反应", "母亲"],
      domain: "情感需求、内心世界",
      meaning: "月亮代表一个人的情感世界、潜意识和内心需求。它是你'不设防时'的反应模式，决定你如何处理情绪、需要什么样的安全感。月亮的相位影响亲密关系、饮食习惯、直觉力和记忆。月亮的舒适感决定你能否在关系中放松。月亮过境一个星座约 2.5 天，情绪主题也跟着快速切换。月亮也是母亲、家、归属感的象征——你童年在情感上的'印记'，往往会以月亮星座的方式表达出来。"
    },
    mercury: {
      name: "水星", enName: "Mercury", symbol: "☿",
      keywords: ["思维", "表达", "学习", "沟通", "信息处理"],
      domain: "思考方式、沟通能力",
      meaning: "水星代表一个人的思维方式、表达能力和学习模式。它决定你如何思考、说话、写作、处理信息。水星在哪个星座影响你的'思维风格'——水星双子可能思维跳跃、点子多；水星摩羯可能逻辑严密、说话保守。水星逆行期间（每年 3-4 次，每次约 3 周）常常出现沟通误会、电子设备故障、计划打乱、文件丢失——这是西方占星最被广泛关注的'事件'，建议重要决定避开水逆。"
    },
    venus: {
      name: "金星", enName: "Venus", symbol: "♀",
      keywords: ["爱情", "审美", "价值观", "享受", "金钱"],
      domain: "爱情观、审美偏好",
      meaning: "金星代表一个人的爱情观、审美偏好和价值观。它决定你喜欢什么样的人、被什么吸引、如何表达爱意。金星还影响你的艺术品味、物质享受和金钱态度——金星金牛可能对物质安全感有强烈需求，金星天秤可能极度重视关系的和谐与美感。金星过境一个星座约 4-5 周，影响这段时间你对'美'和'爱'的理解。女性的爱情模式尤其受金星影响。"
    },
    mars: {
      name: "火星", enName: "Mars", symbol: "♂",
      keywords: ["行动", "欲望", "勇气", "竞争", "愤怒"],
      domain: "行动方式、欲望表达",
      meaning: "火星代表一个人的行动方式、欲望表达和勇气来源。它决定你如何追求目标、应对冲突、表达愤怒。火星的能量是'立即行动'——和土星的'谨慎规划'形成对比。火星所在星座决定你'想要什么就冲'的样式：火星白羊是直接冲锋，火星天蝎是暗中蓄力。火星过境一个星座约 6-8 周，影响这段时间你的行动力和冲突方式。健康、身体活力也与火星相关。"
    },
    jupiter: {
      name: "木星", enName: "Jupiter", symbol: "♃",
      keywords: ["扩张", "幸运", "成长", "信仰", "智慧"],
      domain: "成长方向、人生机遇",
      meaning: "木星代表一个人的成长方向、幸运领域和信仰体系。它是占星里的'大吉星'，影响你的人生机遇、跨文化视野、哲学思考和高阶学习。木星所在星座代表'你最容易获得幸运和扩展的领域'。木星过境一个星座约 1 年，触发该领域的成长和机遇——木星过射手时，旅行、教育、出版相关的事特别顺；木星过摩羯时，事业、结构、长期目标特别顺。木星也是'信念'的象征，告诉你什么值得相信。"
    },
    saturn: {
      name: "土星", enName: "Saturn", symbol: "♄",
      keywords: ["约束", "责任", "纪律", "长期目标", "考验"],
      domain: "责任、长期成就",
      meaning: "土星代表一个人的责任、纪律和长期目标。它是占星里的'老师'(传统叫'大凶星'，其实更准确是严师)，通过挑战和限制教会你成熟。土星所在星座代表'你最需要努力和坚持的领域'。土星过境一个星座约 2.5 年。土星回归(约 29-30 岁)是人生重要节点——青年期的结束、成年的开始。土星也代表父亲形象、权威、传统、时间和结构——它的功课是'学会延迟满足'。"
    },
    uranus: {
      name: "天王星", enName: "Uranus", symbol: "♅",
      keywords: ["变革", "创新", "独立", "突变", "解放"],
      domain: "革新能量、个人觉醒",
      meaning: "天王星代表一个人的革新能量和独立性。它带来突变、突破和解放，常常以'突然'的形式出现——突然的灵感、突如其来的变化、电光火石的领悟。天王星所在星座代表'你最需要打破常规、活出自我的领域'。天王星过境一个星座约 7 年，影响一代人的集体意识——天王星过水瓶时(2018-2026)，科技、社群、人道主义议题集体觉醒。天王星的能量是'电'，带来觉醒也带来混乱，需要接地。"
    }
  },

  // ========== 12 星座 × 太阳过境 ==========
  // 字段: title / period(大概日期范围) / energy(简述) / reading(100-150字解读)
  sunInSigns: {
    aries: {
      title: "太阳过白羊",
      period: "3.21 - 4.19",
      energy: "开创、冲动、勇敢",
      reading: "春分开始,象征新周期的开启。这段时间适合做决定、开启新项目、追求自己想要的。白羊能量直接、充满活力,但也容易因太急躁而犯错。重要的不是完美计划,而是先动起来。"
    },
    taurus: {
      title: "太阳过金牛",
      period: "4.20 - 5.20",
      energy: "稳定、感官、持久",
      reading: "春天进入稳定期,强调感官享受、物质安全和持久价值。这段时间适合做长期规划、享受美食、接触大自然。金牛能量缓慢、耐心、坚定,但也可能变得固执、占有欲强。别催自己,也别被催。"
    },
    gemini: {
      title: "太阳过双子",
      period: "5.21 - 6.21",
      energy: "灵活、好奇、多面",
      reading: "信息爆炸期,强调沟通、学习、好奇心。适合社交、阅读、写文章、处理多任务。双子能量灵活机智,但也容易分心、不够深入。这段时间适合'广撒网',而不是'深挖一口井'。"
    },
    cancer: {
      title: "太阳过巨蟹",
      period: "6.22 - 7.22",
      energy: "情感、关怀、家庭",
      reading: "夏至前后,情感主题被放大。适合陪伴家人、整理家居、照顾自己。巨蟹能量温柔、关怀、保护,但也可能情绪化、过度敏感。这段时间允许自己'软下来',休息、回归内在。"
    },
    leo: {
      title: "太阳过狮子",
      period: "7.23 - 8.22",
      energy: "自信、创造、舞台",
      reading: "盛夏的舞台期,强调自我表达、创造力、领导力。适合登台表演、追求爱情、展示才华。狮子能量大方、热情、自信,但也可能自我中心、爱面子。这是'被看见'的季节,大胆发光。"
    },
    virgo: {
      title: "太阳过处女",
      period: "8.23 - 9.22",
      energy: "细节、健康、效率",
      reading: "夏末整理期,强调细节、健康、效率。适合整理房间、改进流程、关注身体。处女能量务实、精确、追求完美,但也可能挑剔、焦虑。别让'完美主义'阻挡'完成'。"
    },
    libra: {
      title: "太阳过天秤",
      period: "9.23 - 10.23",
      energy: "和谐、美感、关系",
      reading: "秋分前,关系和美感主题主导。适合约会、合作、调停冲突。天秤能量优雅、平衡、好交际,但也可能优柔寡断、回避冲突。这段时间'关系'是你最好的镜子。"
    },
    scorpio: {
      title: "太阳过天蝎",
      period: "10.24 - 11.22",
      energy: "深度、激情、转化",
      reading: "深秋转化期,强调深度、激情、真相。适合心理探索、亲密关系、放下旧事。天蝎能量深刻、有力、专注,但也可能占有欲强、记仇。这段时间适合'看见平时看不见的'。"
    },
    sagittarius: {
      title: "太阳过射手",
      period: "11.23 - 12.21",
      energy: "自由、冒险、哲学",
      reading: "初冬探索期,强调自由、冒险、哲学思考。适合旅行、学习、追求理想。射手能量乐观、爱冒险、直言不讳,但也可能不切实际、不耐烦。允许自己'跳出去'看更大的世界。"
    },
    capricorn: {
      title: "太阳过摩羯",
      period: "12.22 - 1.19",
      energy: "目标、责任、长期",
      reading: "冬至前后,建设期主导。适合规划未来、攀登事业、严肃承诺。摩羯能量坚定、踏实、有野心,但也可能冷酷、过度工作。这段时间'长期主义'会得到回报。"
    },
    aquarius: {
      title: "太阳过水瓶",
      period: "1.20 - 2.18",
      energy: "独立、创新、人道",
      reading: "深冬革新期,强调独立、创新、人道主义。适合打破常规、加入社群、追求理想。水瓶能量原创、前瞻、反叛,但也可能疏离、固执。'与众不同的你'才是你最有价值的部分。"
    },
    pisces: {
      title: "太阳过双鱼",
      period: "2.19 - 3.20",
      energy: "直觉、灵性、慈悲",
      reading: "初春收尾期,强调直觉、灵性、慈悲。适合艺术创作、冥想、放下执念。双鱼能量梦幻、同情、直觉强,但也可能逃避现实、过度情绪化。允许自己'在梦里待一会儿'。"
    }
  },

  // ========== 12 星座 × 月亮位置 ==========
  // 字段: title / energy(简述) / reading(80-100字解读)
  moonInSigns: {
    aries: {
      title: "月亮白羊",
      energy: "冲动、外露、即时",
      reading: "情绪来得快去得也快,直接表达不绕弯。需要新鲜感和刺激维持情绪健康。耐心是最大的功课,别让'立刻想要'毁了'可以等到'的好事。"
    },
    taurus: {
      title: "月亮金牛",
      energy: "稳定、缓慢、感官",
      reading: "需要稳定、安全、感官享受来安抚情绪。一旦被激怒,恢复得慢但记得清。最怕被迫改变。美食、大自然、稳定关系是情绪最好的修复剂。"
    },
    gemini: {
      title: "月亮双子",
      energy: "多变、好奇、思维",
      reading: "通过谈话和思考处理情绪。容易分心但适应力强。需要多样化的刺激来维持情绪平衡。情绪低落时找朋友聊天,比独处更治愈。"
    },
    cancer: {
      title: "月亮巨蟹",
      energy: "丰富、保护、归巢",
      reading: "情感最丰富、记忆最深刻、对'家'极度依恋。情绪起伏大但善于照顾他人。最需要安全感——稳定的居所、稳定的关系、可口的家常菜。"
    },
    leo: {
      title: "月亮狮子",
      energy: "戏剧、慷慨、骄傲",
      reading: "需要被看见、被赞美来获得情绪满足。大方热情但自尊心强。容易因被忽视而受伤。情绪低落时,做让自己'发光'的事——表演、创作、表达。"
    },
    virgo: {
      title: "月亮处女",
      energy: "分析、服务、焦虑",
      reading: "通过解决问题和服务他人来处理情绪。容易焦虑、过度分析。需要学会'放下控制'——不是所有事都要完美,也不是所有人需要你照顾。"
    },
    libra: {
      title: "月亮天秤",
      energy: "和谐、依赖、审美",
      reading: "需要和谐的人际关系来维持情绪平衡。避免冲突、追求公正。但做决定时容易犹豫。独处反而可能情绪更好——你不需要为所有人'平衡'。"
    },
    scorpio: {
      title: "月亮天蝎",
      energy: "深刻、强烈、神秘",
      reading: "情感最深刻、最强烈、最持久。直觉敏锐但容易记仇。最需要学会'放下'和'信任'。情绪是信号,不是敌人——别压抑也别沉溺。"
    },
    sagittarius: {
      title: "月亮射手",
      energy: "自由、乐观、逃避",
      reading: "需要自由、冒险、乐观展望来处理情绪。容易逃避负面情绪。需要学会'面对现实'——有些事不能'换个城市'就消失。"
    },
    capricorn: {
      title: "月亮摩羯",
      energy: "纪律、压抑、成熟",
      reading: "用纪律和责任来控制情绪。表面冷静但内心压力大。需要学会'放松'和'接受脆弱'。不是所有情绪都要'压下去'——表达出来才会真的过去。"
    },
    aquarius: {
      title: "月亮水瓶",
      energy: "独立、疏离、人道",
      reading: "需要独立和理性来处理情绪。可能显得疏离或古怪。最需要学会'表达情感'——理性分析不能替代真实连接,允许自己被触动。"
    },
    pisces: {
      title: "月亮双鱼",
      energy: "敏感、共情、梦幻",
      reading: "情感最丰富、最敏感、最有同理心。容易吸收他人情绪,边界模糊。需要学会'建立边界'——不是不善良,是保护自己才能持续善良。"
    }
  },

  // ========== 6 相位含义 ==========
  // 字段: name(中文) / angle(角度) / enName / nature(吉/中性/挑战) / meaning(80-100字)
  aspects: {
    conjunction: {
      name: "合相", enName: "Conjunction", angle: 0, symbol: "☌",
      nature: "中性", natureLabel: "中性",
      meaning: "最强的相位,能量完全融合。两颗行星的力量合并,可能放大优点也可能放大缺点。性质取决于涉及的行星——太阳合木星是吉,太阳合土星是挑战。"
    },
    opposition: {
      name: "冲相", enName: "Opposition", angle: 180, symbol: "☍",
      nature: "挑战", natureLabel: "挑战",
      meaning: "代表对立与张力。两股相反的力量拉扯,产生动态平衡。常出现在关系中,带来互补也带来冲突。化解方式:看到对面的视角,而非消灭对方。"
    },
    trine: {
      name: "三分(拱)", enName: "Trine", angle: 120, symbol: "△",
      nature: "吉", natureLabel: "和谐",
      meaning: "和谐相位,能量顺畅流动。天赋和机遇常由此而来,事情'自然而然就对了'。但也容易因太顺而懒散——别把天赋当借口不努力。"
    },
    square: {
      name: "四分(刑)", enName: "Square", angle: 90, symbol: "□",
      nature: "挑战", natureLabel: "挑战",
      meaning: "挑战相位,代表内在冲突和成长机会。能量像'卡住',不舒服但蕴含巨大动力。需要主动调整才能化解压力——是动力的来源,也是成熟的契机。"
    },
    sextile: {
      name: "六分(六合)", enName: "Sextile", angle: 60, symbol: "⚹",
      nature: "吉", natureLabel: "温和",
      meaning: "温和的合作相位。能量通过机会和调整来表达。需要主动把握,否则会'白白浪费'。比三分温和,需要你稍微推一下才会发生。"
    },
    quincunx: {
      name: "梅花(映)", enName: "Quincunx", angle: 150, symbol: "⚻",
      nature: "挑战", natureLabel: "不调和",
      meaning: "不调和相位,两股能量找不到共同语言。常带来'怎么调整都不对'的困惑。化解方式:接受两件事本来就属于不同领域,不必强求统一。"
    }
  },

  // ========== 工具方法 ==========

  /**
   * 获取行星含义
   * @param {string} planetKey 'sun' | 'moon' | 'mercury' | ...
   */
  getPlanet(planetKey) {
    return this.planets[planetKey] || null;
  },

  /**
   * 获取太阳在指定星座的解读
   * @param {string} signKey 'aries' | 'taurus' | ...
   */
  getSunInSign(signKey) {
    return this.sunInSigns[signKey] || null;
  },

  /**
   * 获取月亮在指定星座的解读
   * @param {string} signKey
   */
  getMoonInSign(signKey) {
    return this.moonInSigns[signKey] || null;
  },

  /**
   * 获取相位含义
   * @param {string} aspectKey 'conjunction' | 'opposition' | ...
   */
  getAspect(aspectKey) {
    return this.aspects[aspectKey] || null;
  },

  /**
   * 组装简版星图解读（用于 AI prompt 注入）
   * @param {Object} chart ASTRO_ENGINE.generateNatalChart() 返回的星图（顾总 V1.0 结构）
   * @returns {string} 适合塞进 prompt 的一段文本
   */
  formatChartForPrompt(chart) {
    if (!chart) return '';
    const lines = [];
    const planetCn = { sun: '太阳', moon: '月亮', mercury: '水星', venus: '金星', mars: '火星', jupiter: '木星', saturn: '土星', uranus: '天王星' };
    // 太阳/月亮直接在 chart 顶层
    ['sun', 'moon'].forEach(key => {
      const p = chart[key];
      if (!p || !p.nameCn) return;
      const deg = p.degree != null ? `${p.degree.toFixed(1)}°` : '';
      lines.push(`${planetCn[key]}在${p.nameCn}${deg}`);
    });
    // 5 内行星在 chart.planets
    if (chart.planets) {
      ['mercury', 'venus', 'mars', 'jupiter', 'saturn'].forEach(key => {
        const p = chart.planets[key];
        if (!p || !p.nameCn) return;
        const deg = p.degree != null ? `${p.degree.toFixed(1)}°` : '';
        lines.push(`${planetCn[key]}在${p.nameCn}${deg}`);
      });
    }
    // 上升
    if (chart.ascendant && chart.ascendant.nameCn) {
      const deg = chart.ascendant.degree != null ? `${chart.ascendant.degree.toFixed(1)}°` : '';
      lines.push(`上升${chart.ascendant.nameCn}${deg}`);
    }
    // 前 3 个主要相位
    if (chart.aspects && chart.aspects.length) {
      const topAsp = chart.aspects.slice(0, 3).map(a => {
        if (!a.p1 || !a.p2) return null;  // #7 修：aspect 结构异常时跳过
        const p1cn = planetCn[a.p1] || a.p1;
        const p2cn = planetCn[a.p2] || a.p2;
        return `${p1cn}${a.name}${p2cn}(容差${a.orb}°)`;
      }).filter(Boolean);
      if (topAsp.length) lines.push(`相位：${topAsp.join('、')}`);
    }
    return lines.join('；');
  }
};

// 英文星座 → 中文
function signEnToCn(signEn) {
  const map = {
    aries: '白羊', taurus: '金牛', gemini: '双子', cancer: '巨蟹',
    leo: '狮子', virgo: '处女', libra: '天秤', scorpio: '天蝎',
    sagittarius: '射手', capricorn: '摩羯', aquarius: '水瓶', pisces: '双鱼'
  };
  return map[signEn] || signEn;
}

window.ASTRO_KNOWLEDGE = ASTRO_KNOWLEDGE;
