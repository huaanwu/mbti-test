/**
 * 占星解读知识库 V1.0 - 配合顾总 astro-engine.js
 * 版本: 1.0
 * 用途: AI prompt 注入 + 前端展示
 * 覆盖: 11 天体含义 + 12 星座太阳过境 + 12 月亮位置 + 6 相位 + 12 宫位(V1.1)
 * 路径: src/knowledge/astro-knowledge.js
 *
 * 数据风格跟 tarot-knowledge-v2.js / zodiac-knowledge.js 对齐
 * sign 取值跟 ZODIAC_KNOWLEDGE.signs[].id 一致（aries/taurus/.../pisces）
 */

const ASTRO_KNOWLEDGE = {
  version: "1.1",
  updateDate: "2026-07-26",
  system: "西方占星(Western Astrology)",
  planetCount: 11,
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
    },
    neptune: {
      name: "海王星", enName: "Neptune", symbol: "♆",
      keywords: ["梦想", "直觉", "慈悲", "灵性", "消融"],
      domain: "梦想灵感、灵性直觉",
      meaning: "海王星代表一个人的梦想、直觉和灵性追求。它掌管想象力、艺术灵感、同理心，也掌管迷雾——逃避、成瘾、自我欺骗。海王星所在星座代表'你在哪些领域最有灵感和慈悲，也最容易看不清'。海王星过境一个星座约 14 年，塑造一代人的集体梦想——海王星过双鱼时(2012-2026)，灵性、影像、虚拟世界全面兴盛。海王星的功课是'分辨直觉与幻想'：真正的灵感让你更清醒，假相让你更沉迷。"
    },
    pluto: {
      name: "冥王星", enName: "Pluto", symbol: "♇",
      keywords: ["转化", "重生", "权力", "执念", "深渊"],
      domain: "深度转化、权力议题",
      meaning: "冥王星代表一个人的深层转化力量和权力议题。它掌管毁灭与重生、执念与放下、隐藏的财富与真相。冥王星所在星座代表'你这一代人要集体经历的深层变革'，也指出你个人'最深的力量与最深的恐惧'所在。冥王星过境一个星座约 12-30 年不等——冥王星过摩羯时(2008-2024)，体制与权威经历瓦解重建；入水瓶后(2024-2044)，科技与集体意识深度变革。冥王星的功课是'凤凰涅槃'：紧抓不放的会被夺走，放手的会以新形式回来。"
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
    const planetCn = { sun: '太阳', moon: '月亮', mercury: '水星', venus: '金星', mars: '火星', jupiter: '木星', saturn: '土星', uranus: '天王星', neptune: '海王星', pluto: '冥王星' };
    const fmt = (cn, p) => {
      const deg = p.degree != null ? `${p.degree.toFixed(1)}°` : '';
      const house = p.house ? `(${p.house}宫)` : '';
      return `${cn}在${p.nameCn}${deg}${house}`;
    };
    // 太阳/月亮直接在 chart 顶层
    ['sun', 'moon'].forEach(key => {
      const p = chart[key];
      if (!p || !p.nameCn) return;
      lines.push(fmt(planetCn[key], p));
    });
    // 行星在 chart.planets（V1.1: 5 古典 + 三王星）
    if (chart.planets) {
      ['mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'].forEach(key => {
        const p = chart.planets[key];
        if (!p || !p.nameCn) return;
        lines.push(fmt(planetCn[key], p));
      });
    }
    // 上升
    if (chart.ascendant && chart.ascendant.nameCn) {
      const deg = chart.ascendant.degree != null ? `${chart.ascendant.degree.toFixed(1)}°` : '';
      lines.push(`上升${chart.ascendant.nameCn}${deg}(1宫)`);
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


// ========== 水星 x 12 ==========
ASTRO_KNOWLEDGE.mercuryInSigns = { aries:{kw:'思维尖锐直率',r:'说话快、反应快、容易先说再想'}, taurus:{kw:'思维稳健缓慢',r:'慢热但深刻、务实有条理'}, gemini:{kw:'思维跳跃流畅',r:'点子多、学习快、多任务'}, cancer:{kw:'思维感性委婉',r:'重情感、轻逻辑、擅听言外之意'}, leo:{kw:'思维戏剧有感染力',r:'讲话有说服力、爱被关注'}, virgo:{kw:'思维精密准确',r:'逻辑严密、细节满分'}, libra:{kw:'思维平衡优雅',r:'擅换位思考、调解分歧'}, scorpio:{kw:'思维深刻有力',r:'能看穿表象、审讯式提问'}, sagittarius:{kw:'思维宏观直白',r:'视野宏大、爱讲大道理'}, capricorn:{kw:'思维严肃务实',r:'逻辑严密、目标导向'}, aquarius:{kw:'思维前卫独特',r:'点子古怪、表达不拘一格'}, pisces:{kw:'思维梦幻诗意',r:'直觉强、想象力丰富'} };

// ========== 金星 x 12 ==========
ASTRO_KNOWLEDGE.venusInSigns = { aries:{kw:'爱得猛烈审美前卫',r:'追求刺激新鲜、冲击力'}, taurus:{kw:'爱得稳定审美精致',r:'持久忠诚、物质安全感'}, gemini:{kw:'爱得轻盈审美多元',r:'喜欢有趣聪明、什么都想试'}, cancer:{kw:'爱得深沉审美怀旧',r:'深情依赖、温馨复古'}, leo:{kw:'爱得浪漫审美华丽',r:'要崇拜、爱奢侈品、女王范'}, virgo:{kw:'爱得理性审美简约',r:'挑剔、干净实用'}, libra:{kw:'爱得浪漫审美高雅',r:'追求美感平衡、时尚设计'}, scorpio:{kw:'爱得炽烈审美神秘',r:'占有欲强、深沉暗黑'}, sagittarius:{kw:'爱得自由审美异域',r:'要自由、独立博学复古'}, capricorn:{kw:'爱得稳重审美经典',r:'务实长期、稳重有档次'}, aquarius:{kw:'爱得独立审美前卫',r:'要空间、独立个性'}, pisces:{kw:'爱得梦幻审美浪漫',r:'为爱痴狂、诗意梦幻'} };

// ========== 火星 x 12 ==========
ASTRO_KNOWLEDGE.marsInSigns = { aries:{kw:'行动果断欲望直接',r:'想到就做、直接冲动'}, taurus:{kw:'行动稳健欲望持久',r:'慢但稳、不轻易放弃'}, gemini:{kw:'行动机敏欲望多变',r:'靠嘴、好奇心强'}, cancer:{kw:'行动防御欲望内敛',r:'被动但被激怒极具攻击性'}, leo:{kw:'行动有戏欲望表现',r:'自带光环、爱出风头'}, virgo:{kw:'行动精细欲望服务',r:'细致按部就班、服务他人'}, libra:{kw:'行动平衡欲望和谐',r:'犹豫、考虑所有人感受'}, scorpio:{kw:'行动深邃欲望强烈',r:'隐秘有力、暗中布局'}, sagittarius:{kw:'行动自由欲望冒险',r:'闲不住、需广阔空间'}, capricorn:{kw:'行动务实欲望成就',r:'有计划有耐心、持久战'}, aquarius:{kw:'行动前卫欲望革命',r:'出人意料、打破规则'}, pisces:{kw:'行动梦幻欲望灵性',r:'靠直觉、灵感爆发'} };

// ========== 木星 x 12 ==========
ASTRO_KNOWLEDGE.jupiterInSigns = { aries:{kw:'开创中扩张',r:'幸运来自第一个做'}, taurus:{kw:'物质中扩张',r:'稳步积累、长期投资'}, gemini:{kw:'学习中扩张',r:'学得广说得多'}, cancer:{kw:'家庭中扩张',r:'家人与根基、房地产'}, leo:{kw:'创造中扩张',r:'被看见、舞台娱乐'}, virgo:{kw:'服务中扩张',r:'小事做到极致、医疗'}, libra:{kw:'关系中扩张',r:'合作与平衡、外交'}, scorpio:{kw:'转化中扩张',r:'直面深渊、心理学'}, sagittarius:{kw:'远方中扩张',r:'远方与博学、教育出版'}, capricorn:{kw:'成就中扩张',r:'长期规划、企业管理'}, aquarius:{kw:'社群中扩张',r:'同频链接、科技'}, pisces:{kw:'灵性中扩张',r:'慈悲与直觉、艺术'} };

// ========== 土星 x 12 ==========
ASTRO_KNOWLEDGE.saturnInSigns = { aries:{kw:'考验自我主张',r:'敢不敢为自己发声'}, taurus:{kw:'考验物质安全感',r:'金钱与价值观'}, gemini:{kw:'考验沟通与思维',r:'学得够不够深'}, cancer:{kw:'考验情感与家庭',r:'独立于原生家庭'}, leo:{kw:'考验创造力',r:'不带骄傲展示自己'}, virgo:{kw:'考验完美与服务',r:'接受不完美'}, libra:{kw:'考验关系与平衡',r:'坚持自我不讨好'}, scorpio:{kw:'考验信任与转化',r:'穿越控制与背叛'}, sagittarius:{kw:'考验信念与远见',r:'信仰活在当下'}, capricorn:{kw:'考验责任与成就',r:'承担大任、长期主义'}, aquarius:{kw:'考验个体与群体',r:'群体中保持自我'}, pisces:{kw:'考验灵性与边界',r:'落地灵性洞见'} };

// ========== 上升 x 12 ==========
ASTRO_KNOWLEDGE.ascInSigns = { aries:{kw:'锐利进取第一印象',r:'冲锋、直、熟悉后温柔'}, taurus:{kw:'稳重优雅第一印象',r:'沉稳可信、熟悉后固执'}, gemini:{kw:'机灵多变第一印象',r:'好奇聪明、熟悉后善变'}, cancer:{kw:'温柔内敛第一印象',r:'温和好相处、熟悉后敏感'}, leo:{kw:'耀眼自信第一印象',r:'有魅力、熟悉后脆弱'}, virgo:{kw:'清爽严谨第一印象',r:'整洁挑剔、熟悉后善良'}, libra:{kw:'优雅和谐第一印象',r:'美感、好人、熟悉后犹豫'}, scorpio:{kw:'神秘深邃第一印象',r:'距离感、有故事、熟悉后忠诚'}, sagittarius:{kw:'自由爽朗第一印象',r:'乐观不靠谱、熟悉后智慧'}, capricorn:{kw:'成熟稳重第一印象',r:'老成冷、熟悉后幽默'}, aquarius:{kw:'特立独行第一印象',r:'古怪难接近、熟悉后热情'}, pisces:{kw:'梦幻温柔第一印象',r:'迷离迷糊、熟悉后智慧'} };

ASTRO_KNOWLEDGE.elementMap = { aries:'fire',leo:'fire',sagittarius:'fire', taurus:'earth',virgo:'earth',capricorn:'earth', gemini:'air',libra:'air',aquarius:'air', cancer:'water',scorpio:'water',pisces:'water' };
ASTRO_KNOWLEDGE.elementNameCn = { fire:'火', earth:'土', air:'风', water:'水' };
ASTRO_KNOWLEDGE.modalityMap = { aries:'cardinal',cancer:'cardinal',libra:'cardinal',capricorn:'cardinal', taurus:'fixed',leo:'fixed',scorpio:'fixed',aquarius:'fixed', gemini:'mutable',virgo:'mutable',sagittarius:'mutable',pisces:'mutable' };
ASTRO_KNOWLEDGE.modalityNameCn = { cardinal:'本位', fixed:'固定', mutable:'变动' };
ASTRO_KNOWLEDGE.signShort = { aries:'♈',taurus:'♉',gemini:'♊',cancer:'♋',leo:'♌',virgo:'♍',libra:'♎',scorpio:'♏',sagittarius:'♐',capricorn:'♑',aquarius:'♒',pisces:'♓' };

if (typeof window !== 'undefined') { window.ASTRO_KNOWLEDGE = ASTRO_KNOWLEDGE; }
// ========== 天王星 x 12(V1.1,世代星,约 7 年一宫) ==========
ASTRO_KNOWLEDGE.uranusInSigns = { aries:{kw:'先锋一代',r:'用全新方式开创,敢做第一个打破规则的人'}, taurus:{kw:'价值革新',r:'重新定义金钱与物质,用新方式改造旧产业'}, gemini:{kw:'信息革命',r:'思维前卫跳跃,天生适应信息与传播的变革'}, cancer:{kw:'家庭解构',r:'打破传统家庭模式,重新定义"家"的边界'}, leo:{kw:'创意爆发',r:'自我表达标新立异,艺术与娱乐的实验者'}, virgo:{kw:'技术务实',r:'用技术改进日常,工作与健康方式的革新者'}, libra:{kw:'关系重构',r:'重新定义婚姻与合作,追求平等自由的关系'}, scorpio:{kw:'深度颠覆',r:'直面禁忌与权力,心理与资源的解放者'}, sagittarius:{kw:'信仰突围',r:'打破教条,用跨界与远行探索真理'}, capricorn:{kw:'体制改造',r:'在体制内搞革新,用新规则替换旧秩序'}, aquarius:{kw:'觉醒本宫',r:'天王星入庙,科技与人道主义的天然先锋'}, pisces:{kw:'灵性重启',r:'消融边界,用艺术与直觉连接更大的存在'} };

// ========== 海王星 x 12(V1.1,世代星,约 14 年一宫) ==========
ASTRO_KNOWLEDGE.neptuneInSigns = { aries:{kw:'梦想行动派',r:'为理想而战,把灵性洞见变成开创行动'}, taurus:{kw:'感官之梦',r:'梦想落地生根,艺术与物质之美的追求者'}, gemini:{kw:'诗意表达',r:'用语言与文字造梦,传播理想与想象'}, cancer:{kw:'怀旧之梦',r:'对家与根源的理想化,情感深邃如潮汐'}, leo:{kw:'舞台幻梦',r:'为艺术与浪漫而生,创造如梦的自我表达'}, virgo:{kw:'疗愈之梦',r:'把理想注入服务与细节,身心疗愈的追求者'}, libra:{kw:'关系理想',r:'梦想完美的爱与和谐,审美的理想主义者'}, scorpio:{kw:'深渊之梦',r:'对神秘与转化的着迷,直觉穿透表象'}, sagittarius:{kw:'信仰之梦',r:'为理想与远方而活,哲学与灵性的追寻者'}, capricorn:{kw:'筑梦现实',r:'把梦想结构化,用长期努力实现理想'}, aquarius:{kw:'大同之梦',r:'梦想更好的世界,人道与科技的理想主义'}, pisces:{kw:'海王入庙',r:'直觉与慈悲的源头,与宇宙合一的梦想家'} };

// ========== 冥王星 x 12(V1.1,世代星,约 12-30 年一宫) ==========
ASTRO_KNOWLEDGE.plutoInSigns = { aries:{kw:'自我重生',r:'在自我认同上经历毁灭与重建,生命力顽强'}, taurus:{kw:'价值蜕变',r:'金钱与占有欲的功课,物质观的彻底重塑'}, gemini:{kw:'思想蜕变',r:'思维经历深度洗礼,言语有改变人心的力量'}, cancer:{kw:'根源蜕变',r:'家庭与情感根源的深层转化,从创伤中重生'}, leo:{kw:'创造蜕变',r:'自我表达经历淬火,权力与舞台的深层课题'}, virgo:{kw:'秩序蜕变',r:'对工作与健康的执念与转化,细节中的权力'}, libra:{kw:'关系蜕变',r:'亲密关系是炼金炉,在深度纠缠中学会平衡'}, scorpio:{kw:'冥王入庙',r:'天生的转化者,直面生死、权力与真相'}, sagittarius:{kw:'信仰蜕变',r:'信念体系的崩塌与重建,真理的追寻者'}, capricorn:{kw:'权力蜕变',r:'见证并参与体制与权威的瓦解与重建'}, aquarius:{kw:'集体蜕变',r:'科技与社群的深度变革者,集体意识的觉醒'}, pisces:{kw:'灵性蜕变',r:'潜意识的深海潜航,消融自我后的重生'} };

// ========== 十二宫位含义(V1.1,等宫制) ==========
ASTRO_KNOWLEDGE.houseMeanings = {
  1:  { name: '命宫',   keyword: '自我与登场', meaning: '你的外在形象、性格底色和人生开场方式。落入此宫的行星会被直接"穿在身上",是别人最先看到的你。' },
  2:  { name: '财帛宫', keyword: '金钱与价值', meaning: '你的赚钱方式、物质安全感和自我价值感。落入此宫的行星影响你与金钱和资源的关系。' },
  3:  { name: '兄弟宫', keyword: '沟通与学习', meaning: '你的表达、学习、兄弟姐妹与日常出行。落入此宫的行星让你在某个领域特别"有话要说"。' },
  4:  { name: '田宅宫', keyword: '家庭与根源', meaning: '你的原生家庭、居住环境和内心归属。落入此宫的行星指向"你从哪里来",以及你如何建立安全感。' },
  5:  { name: '子女宫', keyword: '创造与恋爱', meaning: '你的创造力、恋爱方式、娱乐与子女。落入此宫的行星是你"玩得最投入"的领域。' },
  6:  { name: '奴仆宫', keyword: '工作与健康', meaning: '你的日常工作、健康习惯与服务他人方式。落入此宫的行星要求你在日常秩序里修行。' },
  7:  { name: '夫妻宫', keyword: '伴侣与合作', meaning: '你的婚姻、亲密关系和重要合作。落入此宫的行星描述你会被什么样的"另一半"吸引。' },
  8:  { name: '疾厄宫', keyword: '亲密与转化', meaning: '你的深度亲密、共享资源、危机与重生。落入此宫的行星带你面对"平时不敢看"的深渊与宝藏。' },
  9:  { name: '迁移宫', keyword: '远方与信仰', meaning: '你的远行、高等教育、哲学与信仰。落入此宫的行星是你"世界观"的来源。' },
  10: { name: '官禄宫', keyword: '事业与地位', meaning: '你的事业方向、社会成就与公众形象。落入此宫的行星是你最容易"被世界看见"的领域。' },
  11: { name: '福德宫', keyword: '朋友与愿景', meaning: '你的朋友、社群归属与理想愿景。落入此宫的行星影响你"和什么样的人一起走"。' },
  12: { name: '玄秘宫', keyword: '潜意识与灵性', meaning: '你的潜意识、隐秘功课与灵性疗愈。落入此宫的行星在幕后运作,是需要"向内看"才能解锁的力量。' }
};
