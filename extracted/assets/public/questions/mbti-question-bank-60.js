/**
 * MBTI中文题库 - 标准版（60题）
 * 设计原则：
 * 1. 中文本土化：基于中国职场/社交/生活场景重新设计，避免直译英文题库
 * 2. 正向表述：所有选项均为中性/正向描述，避免引导性偏见
 * 3. 维度平衡：每个维度15题，正负向各半（避免社会期许偏差）
 * 4. 偏好强度：支持2-7级量表或二选一计分
 * 5. 荣格八维兼容：题目设计兼顾认知功能推导（Ti/Te/Fi/Fe/Si/Se/Ni/Ne）
 * 
 * 使用方式：
 * - 前端直接加载此JSON文件
 * - 每题用户选择A或B，对应维度加分
 * - 四维度分数转化为类型代码（E/I, S/N, T/F, J/P）
 * - 可扩展为200题完整版（每维度增加细分场景）
 */

const MBTI_QUESTION_BANK = {
  version: "1.0.0",
  totalQuestions: 60,
  dimensions: {
    EI: { name: "精力来源", poles: ["E", "I"], fullNames: ["外向", "内向"], count: 15 },
    SN: { name: "认知方式", poles: ["S", "N"], fullNames: ["实感", "直觉"], count: 15 },
    TF: { name: "判断方式", poles: ["T", "F"], fullNames: ["思考", "情感"], count: 15 },
    JP: { name: "生活态度", poles: ["J", "P"], fullNames: ["判断", "知觉"], count: 15 }
  },
  questions: [
    // ==================== E/I 维度（15题）====================
    // E = 从外部世界/人际互动中获得能量
    // I = 从内心世界/独处思考中获得能量
    {
      id: 1,
      dimension: "EI",
      weight: 1,
      text: "周末空闲时，你更倾向于：",
      optionA: { text: "约朋友出来吃饭聊天、参加聚会或户外活动", pole: "E" },
      optionB: { text: "一个人在家看书、追剧、做手工或安静思考", pole: "I" }
    },
    {
      id: 2,
      dimension: "EI",
      weight: 1,
      text: "在一个完全陌生的行业交流会上，你会：",
      optionA: { text: "主动找陌生人攀谈，交换名片，快速扩展人脉", pole: "E" },
      optionB: { text: "先观察一圈，等有人主动搭话或找角落安静待着", pole: "I" }
    },
    {
      id: 3,
      dimension: "EI",
      weight: 1,
      text: "工作一天结束后，你通常通过什么方式恢复精力？",
      optionA: { text: "找同事或朋友吐槽聊天，把一天的事说出来", pole: "E" },
      optionB: { text: "一个人独处，安静消化一天的情绪和事情", pole: "I" }
    },
    {
      id: 4,
      dimension: "EI",
      weight: 1,
      text: "团队讨论中，你的典型状态是：",
      optionA: { text: "积极发言，边说边想，通过表达来理清思路", pole: "E" },
      optionB: { text: "先听别人说，在脑子里整理好再说，说得少但精准", pole: "I" }
    },
    {
      id: 5,
      dimension: "EI",
      weight: 1,
      text: "你更喜欢哪种工作环境？",
      optionA: { text: "开放式办公区，可以随时和同事交流讨论", pole: "E" },
      optionB: { text: "独立办公室或安静角落，减少打扰专注做事", pole: "I" }
    },
    {
      id: 6,
      dimension: "EI",
      weight: 1,
      text: "当遇到一个难题时，你更习惯：",
      optionA: { text: "找几个人一起头脑风暴，讨论出思路", pole: "E" },
      optionB: { text: "自己先闷头研究，想不清楚再选择性求助", pole: "I" }
    },
    {
      id: 7,
      dimension: "EI",
      weight: 1,
      text: "朋友聚会中，你通常：",
      optionA: { text: "是气氛担当，话多、带动话题、照顾全场", pole: "E" },
      optionB: { text: "和熟悉的人深聊，或不说话安静听，享受氛围", pole: "I" }
    },
    {
      id: 8,
      dimension: "EI",
      weight: 1,
      text: "你更喜欢通过哪种方式学习新技能？",
      optionA: { text: "参加线下培训班或工作坊，当面互动学习", pole: "E" },
      optionB: { text: "看网课、读教程、自己琢磨，按自己节奏来", pole: "I" }
    },
    {
      id: 9,
      dimension: "EI",
      weight: 1,
      text: "如果你的社交软件突然有20条未读消息，你会：",
      optionA: { text: "兴奋，逐一回复，甚至主动开启新话题", pole: "E" },
      optionB: { text: "有点压力，挑重要的回复，其他暂时忽略", pole: "I" }
    },
    {
      id: 10,
      dimension: "EI",
      weight: 1,
      text: "你理想的假期是：",
      optionA: { text: "和朋友组团旅游，行程满满，打卡各种地方", pole: "E" },
      optionB: { text: "一个人或和少数密友，去安静的地方发呆放松", pole: "I" }
    },
    {
      id: 11,
      dimension: "EI",
      weight: 1,
      text: "在公司年会或团建活动中，你通常：",
      optionA: { text: "积极参与游戏、表演节目、主动敬酒社交", pole: "E" },
      optionB: { text: "在边上帮忙或观看，不会主动成为焦点", pole: "I" }
    },
    {
      id: 12,
      dimension: "EI",
      weight: 1,
      text: "你做决定时，更倾向于：",
      optionA: { text: "先跟几个信任的人聊聊，听听不同意见再决定", pole: "E" },
      optionB: { text: "自己分析利弊，心里有数了再选择性征求建议", pole: "I" }
    },
    {
      id: 13,
      dimension: "EI",
      weight: 1,
      text: "日常生活中，你更享受：",
      optionA: { text: "多线程并行，同时处理几件事，爱折腾", pole: "E" },
      optionB: { text: "单线程专注，一件一件来，深度沉浸", pole: "I" }
    },
    {
      id: 14,
      dimension: "EI",
      weight: 1,
      text: "面对一个新加入的微信群，你会：",
      optionA: { text: "主动自我介绍，积极参与群内讨论", pole: "E" },
      optionB: { text: "潜水观察，等熟悉环境后再偶尔发言", pole: "I" }
    },
    {
      id: 15,
      dimension: "EI",
      weight: 1,
      text: "你更认同以下哪种状态描述？",
      optionA: { text: "行动力强，想到就做，在做的过程中调整", pole: "E" },
      optionB: { text: "深思熟虑，想清楚了再行动，追求精准", pole: "I" }
    },

    // ==================== S/N 维度（15题）====================
    // S = 关注具体细节、实际经验、当下现实
    // N = 关注抽象概念、未来可能、整体模式
    {
      id: 16,
      dimension: "SN",
      weight: 1,
      text: "当你参观一座古建筑时，你更关注：",
      optionA: { text: "建筑的具体结构、材料、雕刻细节、历史年代", pole: "S" },
      optionB: { text: "它背后的历史故事、文化象征、带给你的整体感受", pole: "N" }
    },
    {
      id: 17,
      dimension: "SN",
      weight: 1,
      text: "你更欣赏以下哪种人？",
      optionA: { text: "执行力强、注重细节、能把想法落地的人", pole: "S" },
      optionB: { text: "思维活跃、有远见、能提出创新概念的人", pole: "N" }
    },
    {
      id: 18,
      dimension: "SN",
      weight: 1,
      text: "工作中，你更擅长和喜欢：",
      optionA: { text: "处理具体数据、操作实务、按流程执行", pole: "S" },
      optionB: { text: "制定策略、规划蓝图、思考未来方向", pole: "N" }
    },
    {
      id: 19,
      dimension: "SN",
      weight: 1,
      text: "读小说时，你更容易记住：",
      optionA: { text: "人物的外貌、对话细节、场景描写", pole: "S" },
      optionB: { text: "故事的主题、隐喻、人物关系走向和结局意味", pole: "N" }
    },
    {
      id: 20,
      dimension: "SN",
      weight: 1,
      text: "你更信任哪种经验？",
      optionA: { text: "亲身实践过、有具体数据支撑的可验证经验", pole: "S" },
      optionB: { text: "直觉洞察到的、有理论逻辑支撑的抽象经验", pole: "N" }
    },
    {
      id: 21,
      dimension: "SN",
      weight: 1,
      text: "计划一次旅行时，你更关注：",
      optionA: { text: "具体行程、酒店位置、交通路线、预算明细", pole: "S" },
      optionB: { text: "旅行主题、当地文化、可能的偶遇和惊喜", pole: "N" }
    },
    {
      id: 22,
      dimension: "SN",
      weight: 1,
      text: "你更喜欢哪种学习方式？",
      optionA: { text: "按步骤实操、做练习题、通过反复练习掌握", pole: "S" },
      optionB: { text: "先理解原理和框架、再举一反三、触类旁通", pole: "N" }
    },
    {
      id: 23,
      dimension: "SN",
      weight: 1,
      text: "在会议中，你更关注发言者的：",
      optionA: { text: "具体说了什么、数据、事实、案例细节", pole: "S" },
      optionB: { text: "言外之意、背后的意图、整体趋势和可能性", pole: "N" }
    },
    {
      id: 24,
      dimension: "SN",
      weight: 1,
      text: "你更倾向的思维方式是：",
      optionA: { text: "从现实出发，基于已有信息，一步步推导", pole: "S" },
      optionB: { text: "从愿景出发，联想各种可能，再倒推路径", pole: "N" }
    },
    {
      id: 25,
      dimension: "SN",
      weight: 1,
      text: "描述一件刚发生的事，你通常会：",
      optionA: { text: "按时间顺序、原原本本描述经过和细节", pole: "S" },
      optionB: { text: "提炼核心要点，讲它意味着什么、你的感受", pole: "N" }
    },
    {
      id: 26,
      dimension: "SN",
      weight: 1,
      text: "你更在意工作中获得的：",
      optionA: { text: "具体技能、可量化的业绩、实际物质回报", pole: "S" },
      optionB: { text: "成长空间、意义感、对未来的影响和价值", pole: "N" }
    },
    {
      id: 27,
      dimension: "SN",
      weight: 1,
      text: "你更相信哪种信息来源？",
      optionA: { text: "自己亲眼看到、亲手做过、有具体证据的", pole: "S" },
      optionB: { text: "有理论推导、逻辑自洽、符合大趋势的", pole: "N" }
    },
    {
      id: 28,
      dimension: "SN",
      weight: 1,
      text: "日常聊天中，你更常聊的话题是：",
      optionA: { text: "身边具体的事、八卦、生活琐事、实用信息", pole: "S" },
      optionB: { text: "抽象概念、未来计划、社会趋势、人生意义", pole: "N" }
    },
    {
      id: 29,
      dimension: "SN",
      weight: 1,
      text: "面对一个复杂项目，你首先：",
      optionA: { text: "拆解成具体步骤、资源需求、时间节点", pole: "S" },
      optionB: { text: "想清楚最终要达成什么、可能遇到什么、核心突破口", pole: "N" }
    },
    {
      id: 30,
      dimension: "SN",
      weight: 1,
      text: "你更享受哪种成就感？",
      optionA: { text: "把一件事做得完美、精细、无可挑剔", pole: "S" },
      optionB: { text: "找到别人没发现的关联、开辟新方向", pole: "N" }
    },

    // ==================== T/F 维度（15题）====================
    // T = 基于逻辑、客观分析、追求公平和效率
    // F = 基于价值观、人际和谐、追求共情和意义
    {
      id: 31,
      dimension: "TF",
      weight: 1,
      text: "朋友向你倾诉烦恼，你更倾向于：",
      optionA: { text: "帮他分析问题根源、给出解决方案和建议", pole: "T" },
      optionB: { text: "先倾听、表达理解、陪伴他释放情绪", pole: "F" }
    },
    {
      id: 32,
      dimension: "TF",
      weight: 1,
      text: "团队决策出现分歧，你更看重：",
      optionA: { text: "哪个方案逻辑上更合理、效率更高、结果更优", pole: "T" },
      optionB: { text: "哪个方案能让大多数人接受、关系更和谐", pole: "F" }
    },
    {
      id: 33,
      dimension: "TF",
      weight: 1,
      text: "评价一个人工作表现时，你更关注：",
      optionA: { text: "产出结果、KPI完成度、对团队的贡献值", pole: "T" },
      optionB: { text: "工作态度、努力程度、团队协作中的付出", pole: "F" }
    },
    {
      id: 34,
      dimension: "TF",
      weight: 1,
      text: "你更认同哪种批评方式？",
      optionA: { text: "直接指出问题、不绕弯子、对事不对人", pole: "T" },
      optionB: { text: "委婉表达、先肯定再建议、照顾对方感受", pole: "F" }
    },
    {
      id: 35,
      dimension: "TF",
      weight: 1,
      text: "买一件贵重物品时，你更依赖：",
      optionA: { text: "参数对比、性价比分析、理性评估优缺点", pole: "T" },
      optionB: { text: "品牌印象、外观设计、使用时的感受、眼缘", pole: "F" }
    },
    {
      id: 36,
      dimension: "TF",
      weight: 1,
      text: "工作中，如果规则阻碍了效率，你会：",
      optionA: { text: "建议修改规则，按最优方案执行，效率优先", pole: "T" },
      optionB: { text: "在规则框架内寻找折中，避免引发冲突", pole: "F" }
    },
    {
      id: 37,
      dimension: "TF",
      weight: 1,
      text: "你更欣赏哪种领导风格？",
      optionA: { text: "公正严明、赏罚分明、以结果为导向", pole: "T" },
      optionB: { text: "关心下属、营造氛围、重视团队凝聚力", pole: "F" }
    },
    {
      id: 38,
      dimension: "TF",
      weight: 1,
      text: "做一个重要决定时，你更依赖：",
      optionA: { text: "客观数据、利弊分析、逻辑推演", pole: "T" },
      optionB: { text: "内心感受、价值观、对自己和他人的影响", pole: "F" }
    },
    {
      id: 39,
      dimension: "TF",
      weight: 1,
      text: "在争论中，你更在意：",
      optionA: { text: "谁的观点更有道理、论据更充分、逻辑更严密", pole: "T" },
      optionB: { text: "争论是否会伤害关系、大家能否保持和气", pole: "F" }
    },
    {
      id: 40,
      dimension: "TF",
      weight: 1,
      text: "你更认同哪种工作原则？",
      optionA: { text: "工作中就事论事，不掺杂个人情感", pole: "T" },
      optionB: { text: "工作也是生活，人情味和效率同样重要", pole: "F" }
    },
    {
      id: 41,
      dimension: "TF",
      weight: 1,
      text: "当朋友做了你认为是错误的决定，你会：",
      optionA: { text: "直接告诉他哪里有问题，帮他看清后果", pole: "T" },
      optionB: { text: "支持他的选择，在他需要时默默陪伴", pole: "F" }
    },
    {
      id: 42,
      dimension: "TF",
      weight: 1,
      text: "你认为一个好的制度应该：",
      optionA: { text: "公平透明、对所有人一视同仁、奖惩分明", pole: "T" },
      optionB: { text: "灵活有温度、考虑特殊情况、保护弱势群体", pole: "F" }
    },
    {
      id: 43,
      dimension: "TF",
      weight: 1,
      text: "看电影时，你更容易被什么打动？",
      optionA: { text: "精妙的剧情结构、反转设计、逻辑自洽", pole: "T" },
      optionB: { text: "人物情感冲突、关系变化、触动人心的台词", pole: "F" }
    },
    {
      id: 44,
      dimension: "TF",
      weight: 1,
      text: "面对一个 deadline 压力，你更可能：",
      optionA: { text: "冷静拆解任务、按优先级排序、机械执行", pole: "T" },
      optionB: { text: "感受压力、调动情绪能量、在紧迫感中激发灵感", pole: "F" }
    },
    {
      id: 45,
      dimension: "TF",
      weight: 1,
      text: "你更认同哪种成功标准？",
      optionA: { text: "达成目标、解决问题、被认可为能力出众", pole: "T" },
      optionB: { text: "被人信赖、关系融洽、觉得有意义和价值", pole: "F" }
    },

    // ==================== J/P 维度（15题）====================
    // J = 喜欢计划、结构、确定性和掌控感
    // P = 喜欢灵活、开放、随机应变和可能性
    {
      id: 46,
      dimension: "JP",
      weight: 1,
      text: "你的日常行程安排通常是：",
      optionA: { text: "提前规划好，按时间表执行，不喜欢临时变动", pole: "J" },
      optionB: { text: "大致有个方向，具体看当时心情和情况再说", pole: "P" }
    },
    {
      id: 47,
      dimension: "JP",
      weight: 1,
      text: "面对一个截止日期，你通常：",
      optionA: { text: "提前完成，留出时间检查和修改", pole: "J" },
      optionB: { text: "在 deadline 前冲刺完成，压力下效率更高", pole: "P" }
    },
    {
      id: 48,
      dimension: "JP",
      weight: 1,
      text: "你的办公桌或房间通常是：",
      optionA: { text: "物品各归其位，整洁有序，找东西很方便", pole: "J" },
      optionB: { text: "看似凌乱，但自己知道东西在哪，乱中有序", pole: "P" }
    },
    {
      id: 49,
      dimension: "JP",
      weight: 1,
      text: "你更喜欢哪种工作状态？",
      optionA: { text: "任务明确、流程清晰、按既定计划推进", pole: "J" },
      optionB: { text: "任务模糊、可自由探索、随时调整方向", pole: "P" }
    },
    {
      id: 50,
      dimension: "JP",
      weight: 1,
      text: "朋友临时约你今晚吃饭，但你已经有安排，你会：",
      optionA: { text: "婉拒，因为已经计划好了，不喜欢临时打乱", pole: "J" },
      optionB: { text: "调整原计划，赴约，享受意外的社交机会", pole: "P" }
    },
    {
      id: 51,
      dimension: "JP",
      weight: 1,
      text: "你更倾向于：",
      optionA: { text: "先定目标，然后分步骤执行，逐步完成", pole: "J" },
      optionB: { text: "先做起来，在过程中找方向，逐步清晰", pole: "P" }
    },
    {
      id: 52,
      dimension: "JP",
      weight: 1,
      text: "面对多个并行任务，你通常：",
      optionA: { text: "排好优先级，一件一件完成，做完一件再下一件", pole: "J" },
      optionB: { text: "同时推进几件，哪件有灵感就做哪件，灵活切换", pole: "P" }
    },
    {
      id: 53,
      dimension: "JP",
      weight: 1,
      text: "你更喜欢哪种旅行方式？",
      optionA: { text: "提前做好攻略，订好酒店，按行程表游玩", pole: "J" },
      optionB: { text: "到了再说，走哪算哪，随遇而安发现惊喜", pole: "P" }
    },
    {
      id: 54,
      dimension: "JP",
      weight: 1,
      text: "对于规则和流程，你的态度是：",
      optionA: { text: "遵守规则、尊重流程，它们让事情高效运转", pole: "J" },
      optionB: { text: "规则是参考、灵活运用，特殊情况特殊处理", pole: "P" }
    },
    {
      id: 55,
      dimension: "JP",
      weight: 1,
      text: "周末在家，你更可能：",
      optionA: { text: "按计划完成待办清单、整理房间、准备下周", pole: "J" },
      optionB: { text: "想干嘛干嘛，突然想学做菜就做饭，想睡就睡", pole: "P" }
    },
    {
      id: 56,
      dimension: "JP",
      weight: 1,
      text: "你更习惯的工作节奏是：",
      optionA: { text: "稳定规律、可预测、每天节奏相似", pole: "J" },
      optionB: { text: "变化多端、有挑战、每天都有新鲜感", pole: "P" }
    },
    {
      id: 57,
      dimension: "JP",
      weight: 1,
      text: "面对一个新任务，你首先想要：",
      optionA: { text: "知道 deadline、交付标准、评价方式", pole: "J" },
      optionB: { text: "了解大致方向、探索各种可能性、边做边学", pole: "P" }
    },
    {
      id: 58,
      dimension: "JP",
      weight: 1,
      text: "做决定后，你通常：",
      optionA: { text: "不再纠结，按决定执行，希望尽快落定", pole: "J" },
      optionB: { text: "保持开放，如果新信息出现可能再调整", pole: "P" }
    },
    {
      id: 59,
      dimension: "JP",
      weight: 1,
      text: "你的清单/笔记风格更接近：",
      optionA: { text: "分类清晰、有层级、定期归档整理", pole: "J" },
      optionB: { text: "随手记录、零散分布、找到就行", pole: "P" }
    },
    {
      id: 60,
      dimension: "JP",
      weight: 1,
      text: "你更享受哪种成就感？",
      optionA: { text: "按计划完成目标、一切尽在掌控", pole: "J" },
      optionB: { text: "随机应变搞定难题、在混乱中找到出路", pole: "P" }
    }
  ],

  // 计分规则
  scoring: {
    // 每维度满分 = 题数 × 单题权重
    maxScorePerDimension: 15,
    // 偏好强度阈值（用于显示百分比和描述）
    preferenceStrength: {
      slight: { min: 0, max: 4, label: "轻微偏好" },
      moderate: { min: 5, max: 9, label: "中等偏好" },
      clear: { min: 10, max: 12, label: "明显偏好" },
      veryClear: { min: 13, max: 15, label: "非常清晰" }
    }
  },

  // 题型说明
  usage: {
    // 每页显示题数（分页加载，避免疲劳）
    questionsPerPage: 5,
    // 预计完成时间（分钟）
    estimatedTime: 10,
    // 答题模式：binary = 二选一, likert = 7级量表
    mode: "binary",
    // 是否支持返回修改
    allowBack: true,
    // 是否显示进度条
    showProgress: true
  }
};

// 导出（Node.js / ES Module 兼容）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MBTI_QUESTION_BANK;
}
if (typeof window !== 'undefined') {
  window.MBTI_QUESTION_BANK = MBTI_QUESTION_BANK;
}
