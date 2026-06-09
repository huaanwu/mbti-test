/**
 * 星座完整知识库 - 大劳专用
 * 版本: 1.0
 * 用途: AI解读星座运势、星座配对、星座性格分析的数据源
 * 路径: G:\mbti-personality-test\knowledge\zodiac-knowledge.js
 */

const ZODIAC_KNOWLEDGE = {
  version: "1.0",
  updateDate: "2026-06-05",
  
  // ========== 12星座详细数据 ==========
  signs: [
    {
      id: "aries", name: "白羊座", dateRange: "3.21-4.19",
      element: "火", quality: "基本宫", ruler: "火星", rulerMeaning: "行动力、欲望、勇气",
      yinYang: "阳", season: "春季",
      keywords: ["热情", "冲动", "勇敢", "直接", "竞争", "开创"],
      symbol: "♈", symbolAnimal: "公羊",
      
      // 性格深度分析
      personality: {
        core: "天生的开创者和行动派，拥有无穷的精力和勇气",
        strengths: ["行动力强", "充满活力", "敢于冒险", "领导气质", "直率真诚", "竞争意识强"],
        weaknesses: ["缺乏耐心", "容易冲动", "自我中心", "三分钟热度", "易怒", "缺乏持久力"],
        hiddenTraits: "表面强势，内心渴望被认可；看似不在乎，其实很在意别人评价",
        communicationStyle: "直接了当，不喜欢绕弯子，说话可能伤人但不记仇",
        stressResponse: "通过运动或竞争性活动释放压力",
        growthAdvice: "学会等待和倾听，培养耐心和同理心"
      },
      
      // 爱情
      love: {
        style: "主动追求，热情直接，喜欢征服感",
        bestMatch: ["狮子座", "射手座", "双子座", "水瓶座"],
        challengingMatch: ["巨蟹座", "摩羯座", "天秤座"],
        turnOns: ["独立自信", "有挑战性", "活力四射"],
        turnOffs: ["拖泥带水", "过于依赖", "优柔寡断"],
        datingTips: "保持新鲜感，给TA征服的空间，不要倒追太猛"
      },
      
      // 事业
      career: {
        suitable: ["创业者", "运动员", "销售", "军人", "急诊医生", "消防员", "项目经理"],
        workStyle: "喜欢快节奏、有挑战性的工作，讨厌重复和等待",
        leadership: "冲锋型领导，身先士卒，但不擅长长期规划",
        moneyAttitude: "赚得快花得快，冲动消费，需要学会理财",
        successPath: "找到能持续激发热情的方向，培养持久力"
      },
      
      // 健康
      health: {
        bodyPart: "头部、面部、大脑",
        vulnerabilities: ["头痛", "偏头痛", "面部受伤", "发烧", "炎症"],
        healthTips: "注意头部保护，避免剧烈运动受伤，学会放松大脑",
        bestExercises: ["拳击", "跑步", "攀岩", "竞争性运动"]
      },
      
      // 社交
      social: {
        friendType: "喜欢能一起疯玩、有活力的朋友",
        partyRole: "气氛组担当，第一个站出来组织活动",
        conflictStyle: "直接对刚，当场解决，不记仇",
        loyalty: "对认定的朋友非常讲义气，但不喜欢被束缚"
      },
      
      // 与MBTI关联
      mbtiCorrelation: {
        commonTypes: ["ESTP", "ENTJ", "ENFP", "ISTP"],
        cognitiveMatch: "Se（外倾实感）和Te（外倾思考）主导的MBTI类型",
        advice: "白羊座+INTJ会是罕见的战略型领导者组合"
      }
    },
    
    {
      id: "taurus", name: "金牛座", dateRange: "4.20-5.20",
      element: "土", quality: "固定宫", ruler: "金星", rulerMeaning: "美感、享受、价值观",
      yinYang: "阴", season: "春季",
      keywords: ["稳重", "务实", "享受", "固执", "耐心", "忠诚"],
      symbol: "♉", symbolAnimal: "公牛",
      
      personality: {
        core: "追求稳定和舒适的现实主义者，拥有超强的耐心和执行力",
        strengths: ["踏实可靠", "审美品味", "理财能力", "坚持不懈", "感官敏锐", "忠诚专一"],
        weaknesses: ["固执己见", "抗拒变化", "占有欲强", "贪图安逸", "过于保守", "报复心强（记仇）"],
        hiddenTraits: "看似固执，其实是对安全感的渴望；表面随和，底线不可触碰",
        communicationStyle: "说话慢但深思熟虑，不喜欢被催促做决定",
        stressResponse: "通过美食、购物或接触大自然来缓解",
        growthAdvice: "学会灵活变通，接受变化也是生活的一部分"
      },
      
      love: {
        style: "慢热但深情，一旦认定就非常专一",
        bestMatch: ["处女座", "摩羯座", "巨蟹座", "双鱼座"],
        challengingMatch: ["狮子座", "水瓶座", "天蝎座"],
        turnOns: ["温柔体贴", "有品位", "稳定可靠", "会做饭"],
        turnOffs: ["朝令夕改", "挥霍无度", "不尊重"],
        datingTips: "用美食和舒适环境打动TA，不要催TA做决定"
      },
      
      career: {
        suitable: ["金融", "美食", "艺术", "建筑师", "园艺", "珠宝设计", "房地产"],
        workStyle: "喜欢稳定的工作节奏，擅长需要耐心和精细度的工作",
        leadership: "稳健型领导，重视团队稳定，但决策较慢",
        moneyAttitude: "天生的理财高手，喜欢存钱和投资，对物质安全感需求高",
        successPath: "在熟悉的领域深耕，用时间积累成为专家"
      },
      
      health: {
        bodyPart: "喉咙、颈部、甲状腺",
        vulnerabilities: ["喉咙痛", "甲状腺问题", "颈部僵硬", "体重问题"],
        healthTips: "注意饮食均衡，避免暴饮暴食，保护喉咙",
        bestExercises: ["瑜伽", "徒步", "园艺", "力量训练"]
      },
      
      social: {
        friendType: "喜欢长期稳定的朋友关系，不喜欢泛泛之交",
        partyRole: "享受美食和美酒的安静参与者",
        conflictStyle: "能忍则忍，但触及底线会爆发且难以挽回",
        loyalty: "极其忠诚，但背叛TA的后果很严重"
      },
      
      mbtiCorrelation: {
        commonTypes: ["ISTJ", "ISFJ", "ESTJ", "INTJ"],
        cognitiveMatch: "Si（内倾实感）和Te（外倾思考）主导的MBTI类型",
        advice: "金牛座+INTP会是深度思考者的稳定底座"
      }
    },
    
    {
      id: "gemini", name: "双子座", dateRange: "5.21-6.21",
      element: "风", quality: "变动宫", ruler: "水星", rulerMeaning: "沟通、思维、信息",
      yinYang: "阳", season: "春季",
      keywords: ["多变", "好奇", "机智", "善谈", "灵活", "信息控"],
      symbol: "♊", symbolAnimal: "双胞胎",
      
      personality: {
        core: "信息的收集者和传播者，拥有敏捷的思维和多重人格",
        strengths: ["思维敏捷", "沟通高手", "适应力强", "多才多艺", "幽默风趣", "学习能力快"],
        weaknesses: ["善变不定", "表面浮躁", "缺乏专注", "信息焦虑", "说话不算话", "双重人格"],
        hiddenTraits: "表面轻松，内心其实很焦虑；看似朋友多，真正交心的很少",
        communicationStyle: "话痨，喜欢辩论，能从任何角度讨论问题",
        stressResponse: "通过社交、学习新东西或转移注意力来逃避",
        growthAdvice: "培养专注力，学会深入而不是广泛涉猎"
      },
      
      love: {
        style: "需要智力刺激，喜欢新鲜感，害怕无聊",
        bestMatch: ["天秤座", "水瓶座", "白羊座", "狮子座"],
        challengingMatch: ["处女座", "双鱼座", "天蝎座"],
        turnOns: ["聪明幽默", "能聊得来", "保持神秘", "给自由"],
        turnOffs: ["无聊沉闷", "管太多", "情绪化", "占有欲强"],
        datingTips: "保持话题新鲜，不要粘太紧，展现你的知识面"
      },
      
      career: {
        suitable: ["媒体", "写作", "翻译", "公关", "销售", "教师", "程序员", "记者"],
        workStyle: "擅长多任务处理，但容易分心，需要变化和挑战",
        leadership: "创意型领导，点子多但执行可能虎头蛇尾",
        moneyAttitude: "赚得多花得多，对钱没有长期规划",
        successPath: "找到能同时发挥多种能力的领域，如自媒体、咨询"
      },
      
      health: {
        bodyPart: "手臂、肩膀、肺部、神经系统",
        vulnerabilities: ["支气管炎", "肩膀酸痛", "神经衰弱", "失眠"],
        healthTips: "注意呼吸系统，避免过度用脑，保证睡眠",
        bestExercises: ["乒乓球", "羽毛球", "游泳", "舞蹈"]
      },
      
      social: {
        friendType: "朋友遍天下，但深交的没几个",
        partyRole: "话题中心，能跟任何人都聊得来",
        conflictStyle: "用口才绕晕对方，或转移话题回避",
        loyalty: "对朋友很好，但可能同时有多个圈子"
      },
      
      mbtiCorrelation: {
        commonTypes: ["ENTP", "ENFP", "ESTP", "INTP"],
        cognitiveMatch: "Ne（外倾直觉）和Ti（内倾思考）主导的MBTI类型",
        advice: "双子座+ENTP是辩论界王炸组合，但执行需要找J型搭子"
      }
    },
    
    {
      id: "cancer", name: "巨蟹座", dateRange: "6.22-7.22",
      element: "水", quality: "基本宫", ruler: "月亮", rulerMeaning: "情感、直觉、母性",
      yinYang: "阴", season: "夏季",
      keywords: ["敏感", "顾家", "怀旧", "保护", "情绪化", "直觉"],
      symbol: "♋", symbolAnimal: "螃蟹",
      
      personality: {
        core: "情感的守护者和记忆的收藏家，拥有超强的同理心和保护欲",
        strengths: ["情感细腻", "照顾他人", "直觉敏锐", "记忆力强", "想象力丰富", "忠诚"],
        weaknesses: ["情绪化", "过度敏感", "怀旧沉溺", "防御过强", "被动攻击", "逃避现实"],
        hiddenTraits: "硬壳下是柔软的心；表面坚强，内心渴望被呵护",
        communicationStyle: "间接含蓄，喜欢暗示而非直接表达",
        stressResponse: "躲进壳里，通过回忆或家庭活动寻求安全感",
        growthAdvice: "学会表达真实需求，不要把情绪都藏在心里"
      },
      
      love: {
        style: "慢热专一，需要安全感，一旦投入就是全身心的",
        bestMatch: ["天蝎座", "双鱼座", "金牛座", "处女座"],
        challengingMatch: ["白羊座", "天秤座", "射手座"],
        turnOns: ["温柔体贴", "有家庭观念", "给安全感", "理解情绪"],
        turnOffs: ["冷漠无情", "轻浮", "不顾家", "批评"],
        datingTips: "用家庭氛围打动TA，展现你的责任感和温柔"
      },
      
      career: {
        suitable: ["护理", "教育", "餐饮", "心理咨询", "房地产", "家政", "历史研究"],
        workStyle: "喜欢有归属感的团队环境，对同事像家人",
        leadership: "保姆型领导，关心下属但可能情感用事",
        moneyAttitude: "为家庭存钱，对投资理财保守",
        successPath: "在能发挥照顾能力的领域建立情感连接"
      },
      
      health: {
        bodyPart: "胃、胸部、乳房、消化系统",
        vulnerabilities: ["胃病", "消化不良", "情绪性进食", "胸部问题"],
        healthTips: "注意情绪对消化的影响，避免情绪性饮食",
        bestExercises: ["游泳", "瑜伽", "散步", "水中运动"]
      },
      
      social: {
        friendType: "朋友不多但很深，像家人一样",
        partyRole: "照顾者，确保每个人都舒服",
        conflictStyle: "逃避或用 passive-aggressive 方式表达不满",
        loyalty: "极其忠诚，但受伤后会永远记住"
      },
      
      mbtiCorrelation: {
        commonTypes: ["ISFJ", "INFJ", "INFP", "ENFJ"],
        cognitiveMatch: "Fi（内倾情感）和Fe（外倾情感）主导的MBTI类型",
        advice: "巨蟹座+INFJ是心理咨询师的最佳组合"
      }
    },
    
    {
      id: "leo", name: "狮子座", dateRange: "7.23-8.22",
      element: "火", quality: "固定宫", ruler: "太阳", rulerMeaning: "自我、光芒、创造力",
      yinYang: "阳", season: "夏季",
      keywords: ["自信", "慷慨", "领导", "爱面子", "戏剧化", "创造力"],
      symbol: "♌", symbolAnimal: "狮子",
      
      personality: {
        core: "天生的舞台中心和领导者，需要被看见和认可",
        strengths: ["自信魅力", "创造力强", "慷慨大方", "组织能力", "热情洋溢", "保护弱者"],
        weaknesses: ["骄傲自负", "爱面子", "控制欲强", "需要被关注", "戏剧化", "自以为是"],
        hiddenTraits: "表面王者风范，内心其实需要很多赞美和鼓励",
        communicationStyle: "戏剧化表达，善于演讲，但可能夸大其词",
        stressResponse: "通过成为焦点或创造性活动来恢复能量",
        growthAdvice: "学会倾听，不要总把自己放在中心"
      },
      
      love: {
        style: "热情浪漫，喜欢被崇拜，付出很多但需要认可",
        bestMatch: ["白羊座", "射手座", "天秤座", "双子座"],
        challengingMatch: ["天蝎座", "金牛座", "水瓶座"],
        turnOns: ["崇拜TA", "外表光鲜", "浪漫惊喜", "给面子"],
        turnOffs: ["当众批评", "忽视TA", "平庸", "控制TA"],
        datingTips: "当众给足面子，私下温柔对待，保持自己的光芒"
      },
      
      career: {
        suitable: ["演员", "管理者", "设计师", "政治家", "教师", "主持人", "品牌经理"],
        workStyle: "喜欢舞台和聚光灯，擅长激励团队",
        leadership: "魅力型领导，能鼓舞人心但可能独断",
        moneyAttitude: "赚钱为了享受生活，喜欢奢侈品和排场",
        successPath: "找到能发挥创造力的舞台，建立个人品牌"
      },
      
      health: {
        bodyPart: "心脏、脊椎、背部、眼睛",
        vulnerabilities: ["心脏病", "背痛", "高血压", "眼部问题"],
        healthTips: "注意心脏健康，避免过度劳累，保持自信也有助于健康",
        bestExercises: ["舞蹈", "健身", "有氧运动", "表演类运动"]
      },
      
      social: {
        friendType: "喜欢围绕在自己身边、欣赏自己的朋友",
        partyRole: "派对灵魂，主持人，气氛担当",
        conflictStyle: "正面刚，不会在背后说坏话",
        loyalty: "对朋友极其慷慨，但也期望被崇拜"
      },
      
      mbtiCorrelation: {
        commonTypes: ["ENFJ", "ENTJ", "ESFP", "ENFP"],
        cognitiveMatch: "Fe（外倾情感）和Te（外倾思考）主导的MBTI类型",
        advice: "狮子座+ENTJ是天生的CEO组合"
      }
    },
    
    {
      id: "virgo", name: "处女座", dateRange: "8.23-9.22",
      element: "土", quality: "变动宫", ruler: "水星", rulerMeaning: "分析、服务、细节",
      yinYang: "阴", season: "夏季",
      keywords: ["完美", "分析", "服务", "挑剔", "务实", "健康"],
      symbol: "♍", symbolAnimal: "少女",
      
      personality: {
        core: "细节的掌控者和服务的提供者，追求完美和实用性",
        strengths: ["分析能力强", "注重细节", "勤奋踏实", "服务精神", "健康意识", "逻辑思维"],
        weaknesses: ["过于挑剔", "焦虑担忧", "完美主义", "自我批评", "洁癖", "难以放松"],
        hiddenTraits: "表面挑剔，其实是想帮助对方变得更好；内心很脆弱但不愿承认",
        communicationStyle: "精准直接，喜欢用事实说话，可能显得刻薄",
        stressResponse: "通过整理、清洁或工作来转移焦虑",
        growthAdvice: "接受不完美，学会对自己宽容"
      },
      
      love: {
        style: "慢热谨慎，用行动表达关心，喜欢服务型恋爱",
        bestMatch: ["金牛座", "摩羯座", "巨蟹座", "天蝎座"],
        challengingMatch: ["射手座", "双子座", "双鱼座"],
        turnOns: ["干净整洁", "有教养", "努力工作", "注重健康"],
        turnOffs: ["邋遢", "不靠谱", "粗心大意", "虚伪"],
        datingTips: "展现你的上进心和条理，用实际行动而非甜言蜜语"
      },
      
      career: {
        suitable: ["编辑", "会计", "医生", "质检", "研究员", "营养师", "图书管理员"],
        workStyle: "追求完美，注重细节和标准，擅长分析和改进流程",
        leadership: "服务型领导，以身作则，但可能 micromanage",
        moneyAttitude: "精打细算，理财谨慎，不会乱花钱",
        successPath: "在专业领域成为不可替代的专家"
      },
      
      health: {
        bodyPart: "腹部、肠道、神经系统、脾脏",
        vulnerabilities: ["肠胃问题", "神经衰弱", "过敏", "消化问题"],
        healthTips: "注意饮食卫生，避免焦虑导致的肠胃问题",
        bestExercises: ["瑜伽", "普拉提", "徒步", "冥想"]
      },
      
      social: {
        friendType: "喜欢有品质、有教养的朋友",
        partyRole: "幕后组织者，确保一切有条不紊",
        conflictStyle: "分析型，会列出一二三条理由",
        loyalty: "一旦认定就全心全意付出，但要求对方也上进"
      },
      
      mbtiCorrelation: {
        commonTypes: ["ISTJ", "INTJ", "ISTP", "ESTJ"],
        cognitiveMatch: "Ti（内倾思考）和Si（内倾实感）主导的MBTI类型",
        advice: "处女座+ISTJ是质量管理体系的活教材"
      }
    },
    
    {
      id: "libra", name: "天秤座", dateRange: "9.23-10.23",
      element: "风", quality: "基本宫", ruler: "金星", rulerMeaning: "和谐、美感、关系",
      yinYang: "阳", season: "秋季",
      keywords: ["平衡", "优雅", "犹豫", "社交", "审美", "外交"],
      symbol: "♎", symbolAnimal: "天秤",
      
      personality: {
        core: "和谐的创造者和关系的维护者，追求美感和公平",
        strengths: ["外交手腕", "审美眼光", "公平理性", "合作精神", "优雅得体", "善于调解"],
        weaknesses: ["优柔寡断", "回避冲突", "表面和谐", "依赖他人", "虚荣", "缺乏主见"],
        hiddenTraits: "追求和谐是因为害怕冲突和孤独；优雅外表下其实很焦虑",
        communicationStyle: "温和得体，善于倾听，但可能说违心话",
        stressResponse: "通过购物、社交或艺术活动来恢复平衡",
        growthAdvice: "学会做决定，不要为了和谐而委屈自己"
      },
      
      love: {
        style: "重视平等和浪漫，需要伴侣也是最好的朋友",
        bestMatch: ["双子座", "水瓶座", "狮子座", "射手座"],
        challengingMatch: ["巨蟹座", "摩羯座", "处女座"],
        turnOns: ["有品位", "浪漫", "公平对待", "好看的外表"],
        turnOffs: ["粗鲁", "不公平", "邋遢", "强迫决定"],
        datingTips: "展现你的审美和教养，保持浪漫氛围"
      },
      
      career: {
        suitable: ["律师", "外交官", "设计师", "调解员", "公关", "艺术家", "人力资源"],
        workStyle: "擅长协调和谈判，需要和谐的工作环境",
        leadership: "民主型领导，重视团队意见但决策慢",
        moneyAttitude: "喜欢花钱提升生活品质，对投资比较犹豫",
        successPath: "在需要协调和审美的领域发挥天赋"
      },
      
      health: {
        bodyPart: "腰部、肾脏、皮肤、内分泌系统",
        vulnerabilities: ["腰痛", "肾脏问题", "皮肤问题", "内分泌失调"],
        healthTips: "注意腰部保护，保持皮肤护理，避免久坐",
        bestExercises: ["瑜伽", "普拉提", "舞蹈", "太极"]
      },
      
      social: {
        friendType: "广泛社交，喜欢有品位的圈子",
        partyRole: "优雅的社交达人，确保每个人都舒服",
        conflictStyle: "回避冲突，或做和事佬",
        loyalty: "对朋友很好，但可能同时维持多个关系"
      },
      
      mbtiCorrelation: {
        commonTypes: ["ENFJ", "ESFJ", "ENTP", "INFJ"],
        cognitiveMatch: "Fe（外倾情感）和Ne（外倾直觉）主导的MBTI类型",
        advice: "天秤座+ENFJ是社交场合的王者组合"
      }
    },
    
    {
      id: "scorpio", name: "天蝎座", dateRange: "10.24-11.22",
      element: "水", quality: "固定宫", ruler: "冥王星", rulerMeaning: "转化、深层、权力",
      yinYang: "阴", season: "秋季",
      keywords: ["神秘", "专注", "极端", "洞察", "激情", "控制"],
      symbol: "♏", symbolAnimal: "蝎子",
      
      personality: {
        core: "深层的探索者和真相的追寻者，拥有极强的洞察力和意志力",
        strengths: ["洞察力强", "意志坚定", "忠诚专一", "直觉敏锐", "激情澎湃", "善于转化"],
        weaknesses: ["控制欲强", "报复心重", "疑心过重", "极端情绪", "嫉妒", "不信任"],
        hiddenTraits: "表面冷酷，内心极度渴望深度连接；不轻易信任但一旦信任就是全部",
        communicationStyle: "直接尖锐，喜欢一针见血，沉默时最危险",
        stressResponse: "通过独处、深度思考或激烈运动来释放",
        growthAdvice: "学会信任和放手，不要把所有事情都看作权力斗争"
      },
      
      love: {
        style: "爱憎分明，要么深情要么绝情，需要深度连接",
        bestMatch: ["巨蟹座", "双鱼座", "处女座", "摩羯座"],
        challengingMatch: ["狮子座", "水瓶座", "白羊座"],
        turnOns: ["真诚", "有深度", "神秘感", "忠诚"],
        turnOffs: ["背叛", "肤浅", "不诚实", "控制（反感被控制）"],
        datingTips: "绝对不要背叛TA，保持神秘感和真诚"
      },
      
      career: {
        suitable: ["侦探", "心理师", "金融", "研究", "外科医生", "心理咨询师", "调查记者"],
        workStyle: "专注深入，善于调查研究，讨厌表面功夫",
        leadership: "掌控型领导，有洞察力但可能过于专制",
        moneyAttitude: "对钱有强烈的控制欲，善于投资理财",
        successPath: "在需要深度和转化的领域成为权威"
      },
      
      health: {
        bodyPart: "生殖系统、泌尿系统、肛门、鼻子",
        vulnerabilities: ["生殖系统问题", "泌尿感染", "鼻敏感", "情绪积压"],
        healthTips: "注意情绪释放，避免压抑，定期检查",
        bestExercises: ["力量训练", "拳击", "潜水", "冥想"]
      },
      
      social: {
        friendType: "朋友很少但很深，不信任泛泛之交",
        partyRole: "角落观察者，默默观察所有人",
        conflictStyle: "记仇，要么当场报复，要么冷处理",
        loyalty: "极度忠诚，但背叛的代价极其严重"
      },
      
      mbtiCorrelation: {
        commonTypes: ["INTJ", "INFJ", "ISTP", "ENTJ"],
        cognitiveMatch: "Ni（内倾直觉）和Ti（内倾思考）主导的MBTI类型",
        advice: "天蝎座+INTJ是战略家组合，但情感需要F型补充"
      }
    },
    
    {
      id: "sagittarius", name: "射手座", dateRange: "11.23-12.21",
      element: "火", quality: "变动宫", ruler: "木星", rulerMeaning: "扩张、幸运、智慧",
      yinYang: "阳", season: "冬季",
      keywords: ["自由", "乐观", "冒险", "直率", "哲学", "探索"],
      symbol: "♐", symbolAnimal: "弓箭手",
      
      personality: {
        core: "自由的追寻者和真理的探索者，永远在追求更广阔的世界",
        strengths: ["乐观开朗", "诚实直率", "热爱自由", "哲学思维", "幽默风趣", "心胸宽广"],
        weaknesses: ["不负责任", "粗心大意", "缺乏耐心", "容易厌倦", "说话太直", "逃避承诺"],
        hiddenTraits: "表面乐观，内心其实很害怕被束缚；看似自由，其实也在寻找归属",
        communicationStyle: "直率坦诚，可能过于直接而伤人",
        stressResponse: "通过旅行、学习或冒险来逃避",
        growthAdvice: "学会承担责任，自由不等于没有约束"
      },
      
      love: {
        style: "需要自由空间，害怕束缚，喜欢精神上的共鸣",
        bestMatch: ["白羊座", "狮子座", "水瓶座", "天秤座"],
        challengingMatch: ["处女座", "双鱼座", "巨蟹座"],
        turnOns: ["有趣", "能一起冒险", "给自由", "有见识"],
        turnOffs: ["粘人", "限制自由", "无聊", "悲观"],
        datingTips: "不要试图绑住TA，一起做有趣的事比甜言蜜语管用"
      },
      
      career: {
        suitable: ["旅行家", "哲学家", "运动员", "翻译", "导游", "出版", "高等教育"],
        workStyle: "喜欢自由和变化，讨厌重复和约束",
        leadership: "愿景型领导，有远见但可能缺乏细节管理",
        moneyAttitude: "对钱不太在意，花钱随性，好运时常降临",
        successPath: "将探索和分享结合，如旅行博主、作家"
      },
      
      health: {
        bodyPart: "臀部、大腿、肝脏、坐骨神经",
        vulnerabilities: ["坐骨神经痛", "大腿受伤", "肝脏问题", "运动伤害"],
        healthTips: "注意运动安全，保护腿部，避免过度饮酒",
        bestExercises: ["骑马", "射箭", "长跑", "登山"]
      },
      
      social: {
        friendType: "朋友遍天下，喜欢有趣的人",
        partyRole: "讲故事的人，分享各种冒险经历",
        conflictStyle: "不记仇，吵完就忘",
        loyalty: "对朋友很讲义气，但可能长期失联"
      },
      
      mbtiCorrelation: {
        commonTypes: ["ENTP", "ENFP", "ESTP", "INTP"],
        cognitiveMatch: "Ne（外倾直觉）和Se（外倾实感）主导的MBTI类型",
        advice: "射手座+ENTP是探索家的终极组合"
      }
    },
    
    {
      id: "capricorn", name: "摩羯座", dateRange: "12.22-1.19",
      element: "土", quality: "基本宫", ruler: "土星", rulerMeaning: "责任、纪律、成就",
      yinYang: "阴", season: "冬季",
      keywords: ["责任", "野心", "克制", "现实", "自律", "权威"],
      symbol: "♑", symbolAnimal: "山羊",
      
      personality: {
        core: "目标的追求者和责任的承担者，用纪律和耐心攀登高峰",
        strengths: ["自律严谨", "目标明确", "组织能力", "责任感强", "耐心持久", "务实"],
        weaknesses: ["过于严肃", "工作狂", "压抑情感", "功利主义", "悲观", "冷漠"],
        hiddenTraits: "表面冷酷，内心其实渴望认可；年轻时压抑，年长后反而更放得开",
        communicationStyle: "简洁务实，不喜欢废话，可能显得冷漠",
        stressResponse: "通过工作来逃避，或独自承担压力",
        growthAdvice: "学会放松和享受，成功不只是爬到山顶"
      },
      
      love: {
        style: "慢热务实，用行动证明，不擅长甜言蜜语",
        bestMatch: ["金牛座", "处女座", "天蝎座", "双鱼座"],
        challengingMatch: ["白羊座", "天秤座", "双子座"],
        turnOns: ["上进", "可靠", "有规划", "成熟"],
        turnOffs: ["不成熟", "不负责任", "浮夸", "浪费时间"],
        datingTips: "展现你的上进心和稳定性，给TA看到未来"
      },
      
      career: {
        suitable: ["企业家", "管理者", "工程师", "政治家", "金融", "建筑师", "政府"],
        workStyle: "踏实肯干，擅长长期规划，一步一步往上爬",
        leadership: "权威型领导，以身作则，重视结果",
        moneyAttitude: "努力工作赚钱，存钱养老，投资稳健",
        successPath: "用时间和努力换取地位和财富"
      },
      
      health: {
        bodyPart: "膝盖、骨骼、牙齿、皮肤",
        vulnerabilities: ["关节炎", "牙齿问题", "骨骼问题", "皮肤病"],
        healthTips: "注意膝盖保护，补充钙质，不要过度劳累",
        bestExercises: ["登山", "慢跑", "力量训练", "瑜伽"]
      },
      
      social: {
        friendType: "喜欢有价值、有帮助的人脉",
        partyRole: "边缘观察者，有目的才社交",
        conflictStyle: "冷处理，用实力说话",
        loyalty: "对认定的朋友极其可靠，但交朋友很谨慎"
      },
      
      mbtiCorrelation: {
        commonTypes: ["ISTJ", "INTJ", "ESTJ", "ENTJ"],
        cognitiveMatch: "Te（外倾思考）和Si/Ni主导的MBTI类型",
        advice: "摩羯座+ENTJ是天生的企业家组合"
      }
    },
    
    {
      id: "aquarius", name: "水瓶座", dateRange: "1.20-2.18",
      element: "风", quality: "固定宫", ruler: "天王星", rulerMeaning: "创新、变革、独立",
      yinYang: "阳", season: "冬季",
      keywords: ["独立", "创新", "理性", "疏离", "人道", "独特"],
      symbol: "♒", symbolAnimal: "水瓶",
      
      personality: {
        core: "理想的革新者和独立的思考者，关注人类而非个人",
        strengths: ["独立思考", "创新意识", "人道主义", "理性客观", "包容开放", "前瞻性"],
        weaknesses: ["情感疏离", "过于叛逆", "不切实际", "固执己见", "冷漠", "难以亲近"],
        hiddenTraits: "表面理性，其实很关心人类命运；看似冷漠，对认定的朋友很好",
        communicationStyle: "理性客观，喜欢讨论理念和未来",
        stressResponse: "通过独处、科技或社会活动来恢复",
        growthAdvice: "学会关注身边的人，理想也要落地"
      },
      
      love: {
        style: "需要精神共鸣，朋友式恋爱，害怕束缚",
        bestMatch: ["双子座", "天秤座", "射手座", "白羊座"],
        challengingMatch: ["金牛座", "天蝎座", "巨蟹座"],
        turnOns: ["聪明", "独立", "有理想", "尊重空间"],
        turnOffs: ["粘人", "传统", "限制", "情绪化"],
        datingTips: "先做好朋友，展现你的独特思想和独立性"
      },
      
      career: {
        suitable: ["科学家", "IT", "社会活动家", "发明家", "设计师", "作家", "未来学家"],
        workStyle: "喜欢创新和自由，讨厌传统和束缚",
        leadership: "愿景型领导，重视团队创新但可能疏离",
        moneyAttitude: "对钱不太在意，更关注理念和影响",
        successPath: "在创新和社会变革领域发挥影响力"
      },
      
      health: {
        bodyPart: "脚踝、小腿、循环系统、神经系统",
        vulnerabilities: ["脚踝扭伤", "静脉曲张", "神经衰弱", "循环系统问题"],
        healthTips: "注意脚踝保护，避免久坐，保持社交",
        bestExercises: ["游泳", "骑行", "团队运动", "户外"]
      },
      
      social: {
        friendType: "朋友类型广泛，喜欢有思想的人",
        partyRole: "独特观点的提供者，可能突然消失",
        conflictStyle: "理性辩论，但可能突然疏离",
        loyalty: "对朋友很忠诚，但有自己的原则和空间"
      },
      
      mbtiCorrelation: {
        commonTypes: ["INTP", "ENTP", "INTJ", "ENTJ"],
        cognitiveMatch: "Ti（内倾思考）和Ni（内倾直觉）主导的MBTI类型",
        advice: "水瓶座+INTP是思想家的实验室组合"
      }
    },
    
    {
      id: "pisces", name: "双鱼座", dateRange: "2.19-3.20",
      element: "水", quality: "变动宫", ruler: "海王星", rulerMeaning: "幻想、灵性、无条件的爱",
      yinYang: "阴", season: "冬季",
      keywords: ["浪漫", "幻想", "同情", "逃避", "灵性", "艺术"],
      symbol: "♓", symbolAnimal: "双鱼",
      
      personality: {
        core: "梦想的编织者和情感的容器，拥有极强的同理心和想象力",
        strengths: ["富有同情心", "想象力丰富", "艺术天赋", "直觉敏锐", "包容", "灵性"],
        weaknesses: ["容易逃避", "边界模糊", "过度牺牲", "缺乏现实感", "优柔寡断", "容易被骗"],
        hiddenTraits: "表面柔弱，其实有极强的适应力；看似迷糊，直觉极其准确",
        communicationStyle: "感性诗意，喜欢隐喻和暗示",
        stressResponse: "通过艺术、梦境或逃避现实来缓解",
        growthAdvice: "建立边界，学会说\"不\"，不要把所有人都放在自己前面"
      },
      
      love: {
        style: "浪漫理想化，容易为爱牺牲，需要灵魂伴侣",
        bestMatch: ["巨蟹座", "天蝎座", "金牛座", "摩羯座"],
        challengingMatch: ["双子座", "射手座", "水瓶座"],
        turnOns: ["浪漫", "有艺术气质", "温柔", "懂TA的想象"],
        turnOffs: ["粗暴", "现实", "不尊重梦想", "功利"],
        datingTips: "营造浪漫氛围，理解TA的梦想，不要轻易打破幻想"
      },
      
      career: {
        suitable: ["艺术家", "音乐家", "护士", "慈善", "心理咨询师", "演员", "摄影师"],
        workStyle: "需要灵感，喜欢有弹性、有意义的工作",
        leadership: "服务型领导，但可能缺乏决断力",
        moneyAttitude: "对钱没有概念，容易被骗或被骗自己",
        successPath: "将艺术和同情心结合，在创意或慈善领域发光"
      },
      
      health: {
        bodyPart: "脚部、淋巴系统、免疫系统",
        vulnerabilities: ["脚部问题", "免疫力低", "药物敏感", "情绪影响健康"],
        healthTips: "注意脚部护理，增强免疫力，避免药物滥用",
        bestExercises: ["游泳", "瑜伽", "舞蹈", "水中运动"]
      },
      
      social: {
        friendType: "容易吸引各种类型的人，但容易受伤",
        partyRole: "角落里的观察者，或氛围感的提供者",
        conflictStyle: "逃避，或用眼泪化解",
        loyalty: "极其善良，但可能因为善良而被利用"
      },
      
      mbtiCorrelation: {
        commonTypes: ["INFP", "INFJ", "ENFP", "ISFP"],
        cognitiveMatch: "Fi（内倾情感）和Ne（外倾直觉）主导的MBTI类型",
        advice: "双鱼座+INFP是艺术家的梦幻组合"
      }
    }
  ],
  
  // ========== 星座配对系统 ==========
  compatibility: {
    // 元素配对规则
    elements: {
      "火-火": { score: 85, desc: "激情四射，但需要学会轮流主导" },
      "火-土": { score: 70, desc: "互补但摩擦多，需要磨合" },
      "火-风": { score: 90, desc: "最佳拍档，互相激发" },
      "火-水": { score: 60, desc: "水火不容，但也可以蒸汽升腾" },
      "土-土": { score: 85, desc: "稳定可靠，但可能缺乏激情" },
      "土-风": { score: 65, desc: "务实vs理想，需要找到共同点" },
      "土-水": { score: 90, desc: "滋养关系，互相支持" },
      "风-风": { score: 85, desc: "智力共鸣，但可能缺乏深度" },
      "风-水": { score: 70, desc: "思维vs情感，需要互相理解" },
      "水-水": { score: 85, desc: "深度连接，但可能情绪过载" }
    },
    
    // 具体配对评分（1-100）
    pairings: {
      "白羊座-狮子座": 95, "白羊座-射手座": 95, "白羊座-双子座": 90, "白羊座-水瓶座": 85,
      "金牛座-处女座": 95, "金牛座-摩羯座": 95, "金牛座-巨蟹座": 90, "金牛座-双鱼座": 85,
      "双子座-天秤座": 95, "双子座-水瓶座": 95, "双子座-白羊座": 90, "双子座-狮子座": 85,
      "巨蟹座-天蝎座": 95, "巨蟹座-双鱼座": 95, "巨蟹座-金牛座": 90, "巨蟹座-处女座": 85,
      "狮子座-白羊座": 95, "狮子座-射手座": 95, "狮子座-双子座": 90, "狮子座-天秤座": 85,
      "处女座-金牛座": 95, "处女座-摩羯座": 95, "处女座-巨蟹座": 90, "处女座-天蝎座": 85,
      "天秤座-双子座": 95, "天秤座-水瓶座": 95, "天秤座-狮子座": 90, "天秤座-射手座": 85,
      "天蝎座-巨蟹座": 95, "天蝎座-双鱼座": 95, "天蝎座-处女座": 90, "天蝎座-摩羯座": 85,
      "射手座-白羊座": 95, "射手座-狮子座": 95, "射手座-水瓶座": 90, "射手座-双子座": 85,
      "摩羯座-金牛座": 95, "摩羯座-处女座": 95, "摩羯座-天蝎座": 90, "摩羯座-双鱼座": 85,
      "水瓶座-双子座": 95, "水瓶座-天秤座": 95, "水瓶座-射手座": 90, "水瓶座-白羊座": 85,
      "双鱼座-巨蟹座": 95, "双鱼座-天蝎座": 95, "双鱼座-金牛座": 90, "双鱼座-摩羯座": 85
    }
  },
  
  // ========== 运势模板 ==========
  fortuneTemplates: {
    love: {
      high: ["桃花运旺盛，单身者有望遇到心仪对象", "感情甜蜜，适合表白或推进关系", "伴侣关系和谐，可以考虑更进一步"],
      medium: ["感情平稳，需要主动创造浪漫", "有机会认识新朋友，但需要时间发展", "旧人可能重新联系，慎重考虑"],
      low: ["感情波动较大，避免冲动决定", "沟通不畅，需要耐心倾听", "专注于自我成长，爱情会自然到来"]
    },
    career: {
      high: ["事业运佳，有机会获得晋升或重要项目", "创意得到认可，适合展示才华", "贵人相助，合作机会增多"],
      medium: ["工作稳定，适合巩固现有成果", "有小挑战但可控，保持专注", "学习新技能的好时机"],
      low: ["工作压力较大，注意劳逸结合", "避免与同事冲突，保持低调", "适合反思和调整方向"]
    },
    money: {
      high: ["财运亨通，可能有意外收入", "投资眼光准确，适合理财规划", "偏财运佳，但不可贪心"],
      medium: ["收支平衡，适合储蓄计划", "有小额进账，积少成多", "避免冲动消费"],
      low: ["注意控制开支，避免不必要消费", "投资需谨慎，保守为上", "可能需要处理旧账问题"]
    },
    health: {
      high: ["精力充沛，适合开始新的运动计划", "身心状态良好，保持规律作息", "注意部位状态稳定"],
      medium: ["注意劳逸结合，不要过度消耗", "适合进行体检或调理", "保持适度运动"],
      low: ["注意身体信号，及时休息", "可能需要调整作息或饮食", "避免熬夜和过度劳累"]
    }
  },
  
  // ========== 星座运势计算辅助 ==========
  // 基于日期生成伪随机运势（保证同一天同一星座运势一致）
  getDailyFortuneSeed(signId, date) {
    const dateStr = date.toISOString().split('T')[0];
    let hash = 0;
    for (let i = 0; i < (signId + dateStr).length; i++) {
      const char = (signId + dateStr).charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  },
  
  // 获取每日运势
  getDailyFortune(signId, date = new Date()) {
    const seed = this.getDailyFortuneSeed(signId, date);
    const categories = ['love', 'career', 'money', 'health'];
    const levels = ['low', 'medium', 'high'];
    
    const fortune = {};
    categories.forEach((cat, i) => {
      const levelIndex = (seed + i * 100) % 3;
      const level = levels[levelIndex];
      const templates = this.fortuneTemplates[cat][level];
      const templateIndex = (seed + i * 50) % templates.length;
      fortune[cat] = {
        level: level,
        levelText: level === 'high' ? '★★★★★' : level === 'medium' ? '★★★☆☆' : '★★☆☆☆',
        text: templates[templateIndex],
        advice: this._getAdvice(cat, level)
      };
    });
    
    return fortune;
  },
  
  _getAdvice(category, level) {
    const advice = {
      love: { high: "把握机会", medium: "主动出击", low: "静待花开" },
      career: { high: "大展拳脚", medium: "稳扎稳打", low: "韬光养晦" },
      money: { high: "理性投资", medium: "量入为出", low: "守财为主" },
      health: { high: "保持状态", medium: "注意休息", low: "调养身体" }
    };
    return advice[category][level];
  },
  
  // 获取星座
  getSignByDate(month, day) {
    const dateRanges = [
      { sign: "aries", start: [3, 21], end: [4, 19] },
      { sign: "taurus", start: [4, 20], end: [5, 20] },
      { sign: "gemini", start: [5, 21], end: [6, 21] },
      { sign: "cancer", start: [6, 22], end: [7, 22] },
      { sign: "leo", start: [7, 23], end: [8, 22] },
      { sign: "virgo", start: [8, 23], end: [9, 22] },
      { sign: "libra", start: [9, 23], end: [10, 23] },
      { sign: "scorpio", start: [10, 24], end: [11, 22] },
      { sign: "sagittarius", start: [11, 23], end: [12, 21] },
      { sign: "capricorn", start: [12, 22], end: [1, 19] },
      { sign: "aquarius", start: [1, 20], end: [2, 18] },
      { sign: "pisces", start: [2, 19], end: [3, 20] }
    ];
    
    for (const range of dateRanges) {
      const [sm, sd] = range.start;
      const [em, ed] = range.end;
      
      if (sm <= em) {
        if ((month > sm || (month === sm && day >= sd)) &&
            (month < em || (month === em && day <= ed))) {
          return this.signs.find(s => s.id === range.sign);
        }
      } else {
        if ((month > sm || (month === sm && day >= sd)) ||
            (month < em || (month === em && day <= ed))) {
          return this.signs.find(s => s.id === range.sign);
        }
      }
    }
    return null;
  }
};

// 导出（Node.js CommonJS + 浏览器 window 挂载，跟题库 const 同款兼容）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ZODIAC_KNOWLEDGE;
}
if (typeof window !== 'undefined') {
  window.ZODIAC_KNOWLEDGE = ZODIAC_KNOWLEDGE;
}
