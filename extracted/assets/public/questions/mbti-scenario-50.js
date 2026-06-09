/**
 * MBTI 场景选择题库扩到 50 题
 * 来源：老 20 题（顾总/小民自创）+ 新 30 题（小民手写 2026-06-05）
 * 每题 3-4 选项，对应 E/I/S/N/T/F/J/P/neutral
 * randomDrawQuestions 抽 20 题保持维度平衡
 */

const MBTI_SCENARIO_BANK_50 = {
  version: "2.0",
  name: "MBTI-50题-场景版",
  description: "通过具体生活场景测量人格偏好，3-4选项 + neutral 兜底",
  totalQuestions: 50,
  source: "scenario-20(legacy) + scenario-30(new)",

  dimensions: {
    "EI": { name: "外向-内向", poles: ["E", "I"], description: "精力来源与注意力方向" },
    "SN": { name: "实感-直觉", poles: ["S", "N"], description: "信息获取与认知方式" },
    "TF": { name: "思考-情感", poles: ["T", "F"], description: "决策方式与判断标准" },
    "JP": { name: "判断-知觉", poles: ["J", "P"], description: "生活方式与行动态度" }
  },

  questions: [
    // ========== EI 场景（老 5 + 新 8 = 13 题）==========
    {
      id: "S_EI_01", dimension: "EI", text: "公司年会，你刚到场，会怎么做？",
      options: [
        { text: "主动找熟人聊天，很快融入人群", pole: "E", weight: 2 },
        { text: "先找个角落观察，再决定是否加入", pole: "I", weight: 2 },
        { text: "和旁边的人简单打个招呼", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_EI_02", dimension: "EI", text: "连续加班一周后，周末终于到来，你想：",
      options: [
        { text: "约朋友聚餐、唱K，放松一下", pole: "E", weight: 2 },
        { text: "宅在家看书、追剧，独处充电", pole: "I", weight: 2 },
        { text: "两者都可以，看心情", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_EI_03", dimension: "EI", text: "开会时你有一个想法，你会：",
      options: [
        { text: "马上举手发言，趁热打铁", pole: "E", weight: 2 },
        { text: "先在纸上整理，会后私下沟通", pole: "I", weight: 2 },
        { text: "等别人说类似的再补充", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_EI_04", dimension: "EI", text: "陌生聚会上别人主动找你聊天，你：",
      options: [
        { text: "聊得很开心，主动延展话题", pole: "E", weight: 2 },
        { text: "礼貌回应，但不会主动延展", pole: "I", weight: 2 },
        { text: "看情况，看对方是否有趣", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_EI_05", dimension: "EI", text: "周末你更愿意：",
      options: [
        { text: "和朋友聚会、KTV、桌游", pole: "E", weight: 2 },
        { text: "独自在家看书、电影、冥想", pole: "I", weight: 2 },
        { text: "看心情，都有可能", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_EI_01", dimension: "EI", text: "项目组要你代表团队去跟其他部门对接，你：",
      options: [
        { text: "主动去，能认识新同事", pole: "E", weight: 2 },
        { text: "找理由推掉，让别人去", pole: "I", weight: 2 },
        { text: "看部门熟不熟再决定", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_EI_02", dimension: "EI", text: "公司要派你参加一周的异地团建，你：",
      options: [
        { text: "很期待，能换换环境", pole: "E", weight: 2 },
        { text: "找理由推掉，假期想独处", pole: "I", weight: 2 },
        { text: "看活动安排再决定", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_EI_03", dimension: "EI", text: "你是销售，要给 20 个陌生客户打电话，你：",
      options: [
        { text: "很期待，能锻炼口才", pole: "E", weight: 2 },
        { text: "很抗拒，陌生电话压力山大", pole: "I", weight: 2 },
        { text: "硬着头皮上", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_EI_04", dimension: "EI", text: "你新到一个公司，你：",
      options: [
        { text: "主动认识同事，午饭也找人拼桌", pole: "E", weight: 2 },
        { text: "等别人来认识你", pole: "I", weight: 2 },
        { text: "看工作需要再决定", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_EI_05", dimension: "EI", text: "你做了个有趣的发现，你想：",
      options: [
        { text: "找人分享，一起讨论", pole: "E", weight: 2 },
        { text: "自己欣赏，记录下来", pole: "I", weight: 2 },
        { text: "看是否值得分享", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_EI_06", dimension: "EI", text: "朋友组织一个 10 人聚会，你：",
      options: [
        { text: "很兴奋，约 8 个朋友一起", pole: "E", weight: 2 },
        { text: "想找理由不去", pole: "I", weight: 2 },
        { text: "看时间和心情", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_EI_07", dimension: "EI", text: "你更喜欢的社交方式：",
      options: [
        { text: "大型派对，热闹", pole: "E", weight: 2 },
        { text: "三两好友小聚", pole: "I", weight: 2 },
        { text: "看情况", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_EI_08", dimension: "EI", text: "通勤路上你更愿意：",
      options: [
        { text: "戴耳机听播客/和朋友语音", pole: "E", weight: 2 },
        { text: "安静看书/冥想/闭眼", pole: "I", weight: 2 },
        { text: "听音乐", pole: "neutral", weight: 0 }
      ]
    },

    // ========== SN 场景（老 5 + 新 8 = 13 题）==========
    {
      id: "S_SN_01", dimension: "SN", text: "你在学习新东西时，倾向于：",
      options: [
        { text: "先了解具体步骤和操作", pole: "S", weight: 2 },
        { text: "先理解整体原理和理论", pole: "N", weight: 2 },
        { text: "边做边学", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_SN_02", dimension: "SN", text: "朋友向你倾诉困境，你更关注：",
      options: [
        { text: "具体发生了什么（事实）", pole: "S", weight: 2 },
        { text: "为什么会这样（深层原因）", pole: "N", weight: 2 },
        { text: "看情况", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_SN_03", dimension: "SN", text: "你更喜欢的书是：",
      options: [
        { text: "历史/传记/纪实", pole: "S", weight: 2 },
        { text: "哲学/科幻/寓言", pole: "N", weight: 2 },
        { text: "看心情", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_SN_04", dimension: "SN", text: "工作中遇到问题，你：",
      options: [
        { text: "查阅文档找已知方案", pole: "S", weight: 2 },
        { text: "思考创新方法", pole: "N", weight: 2 },
        { text: "先查文档，没现成再创新", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_SN_05", dimension: "SN", text: "你更喜欢的电影是：",
      options: [
        { text: "真实故事改编", pole: "S", weight: 2 },
        { text: "抽象艺术片", pole: "N", weight: 2 },
        { text: "看口碑", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_SN_01", dimension: "SN", text: "你买衣服更注重：",
      options: [
        { text: "实穿和性价比", pole: "S", weight: 2 },
        { text: "风格和独特性", pole: "N", weight: 2 },
        { text: "两者平衡", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_SN_02", dimension: "SN", text: "你旅游更倾向：",
      options: [
        { text: "打卡经典景点", pole: "S", weight: 2 },
        { text: "探索小众地方", pole: "N", weight: 2 },
        { text: "两者结合", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_SN_03", dimension: "SN", text: "你做菜时：",
      options: [
        { text: "按食谱一步步来", pole: "S", weight: 2 },
        { text: "凭感觉加调料", pole: "N", weight: 2 },
        { text: "看心情", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_SN_04", dimension: "SN", text: "你听音乐时：",
      options: [
        { text: "听熟悉的歌", pole: "S", weight: 2 },
        { text: "探索新歌/小众音乐", pole: "N", weight: 2 },
        { text: "看心情", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_SN_05", dimension: "SN", text: "你买大件商品（家电/手机）时：",
      options: [
        { text: "选经典款，参考销量榜", pole: "S", weight: 2 },
        { text: "研究新功能/小众品牌", pole: "N", weight: 2 },
        { text: "问身边朋友", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_SN_06", dimension: "SN", text: "你装修房子时：",
      options: [
        { text: "选成熟方案和经典风格", pole: "S", weight: 2 },
        { text: "尝试新材质/独特设计", pole: "N", weight: 2 },
        { text: "混合风格", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_SN_07", dimension: "SN", text: "你学新技能时：",
      options: [
        { text: "看完整教程再动手", pole: "S", weight: 2 },
        { text: "边做边查，边学边试", pole: "N", weight: 2 },
        { text: "找人教", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_SN_08", dimension: "SN", text: "你工作汇报时：",
      options: [
        { text: "列具体数据和事实", pole: "S", weight: 2 },
        { text: "讲故事和愿景", pole: "N", weight: 2 },
        { text: "数据 + 故事结合", pole: "neutral", weight: 0 }
      ]
    },

    // ========== TF 场景（老 5 + 新 7 = 12 题）==========
    {
      id: "S_TF_01", dimension: "TF", text: "朋友倾诉失恋，你更可能：",
      options: [
        { text: "分析问题帮 ta 想办法", pole: "T", weight: 2 },
        { text: "倾听安慰陪伴", pole: "F", weight: 2 },
        { text: "两者结合", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_TF_02", dimension: "TF", text: "团队讨论中有人表现差，你：",
      options: [
        { text: "直接指出问题", pole: "T", weight: 2 },
        { text: "私下沟通给台阶", pole: "F", weight: 2 },
        { text: "看场合", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_TF_03", dimension: "TF", text: "你更在意的评价是：",
      options: [
        { text: "能力强", pole: "T", weight: 2 },
        { text: "人好", pole: "F", weight: 2 },
        { text: "都重要", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_TF_04", dimension: "TF", text: "你在意的礼物价值：",
      options: [
        { text: "实用性", pole: "T", weight: 2 },
        { text: "心意和情感", pole: "F", weight: 2 },
        { text: "两者结合", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_TF_05", dimension: "TF", text: "朋友迟到 30 分钟，你：",
      options: [
        { text: "不太舒服", pole: "T", weight: 2 },
        { text: "理解可能有原因", pole: "F", weight: 2 },
        { text: "看情况", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_TF_01", dimension: "TF", text: "你做选择更看重：",
      options: [
        { text: "效率和正确性", pole: "T", weight: 2 },
        { text: "和谐与感受", pole: "F", weight: 2 },
        { text: "两者平衡", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_TF_02", dimension: "TF", text: "决定去哪家餐厅：",
      options: [
        { text: "搜索评分对比", pole: "T", weight: 2 },
        { text: "问大家感受", pole: "F", weight: 2 },
        { text: "都参考", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_TF_03", dimension: "TF", text: "你送朋友礼物，倾向：",
      options: [
        { text: "实用的，他用得上的", pole: "T", weight: 2 },
        { text: "有纪念意义的", pole: "F", weight: 2 },
        { text: "两者结合", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_TF_04", dimension: "TF", text: "你给同事提建议：",
      options: [
        { text: "就事论事，直接给方案", pole: "T", weight: 2 },
        { text: "先肯定再提改进", pole: "F", weight: 2 },
        { text: "看关系", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_TF_05", dimension: "TF", text: "选工作时你更看重：",
      options: [
        { text: "薪资和发展", pole: "T", weight: 2 },
        { text: "氛围和同事", pole: "F", weight: 2 },
        { text: "都重要", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_TF_06", dimension: "TF", text: "你调解朋友矛盾：",
      options: [
        { text: "分析对错，给方案", pole: "T", weight: 2 },
        { text: "两边各安慰，求和", pole: "F", weight: 2 },
        { text: "看情况", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_TF_07", dimension: "TF", text: "你看悲剧电影：",
      options: [
        { text: "理性分析剧情", pole: "T", weight: 2 },
        { text: "容易被感动流泪", pole: "F", weight: 2 },
        { text: "看电影", pole: "neutral", weight: 0 }
      ]
    },

    // ========== JP 场景（老 5 + 新 7 = 12 题）==========
    {
      id: "S_JP_01", dimension: "JP", text: "周末安排：",
      options: [
        { text: "提前计划做什么", pole: "J", weight: 2 },
        { text: "看心情", pole: "P", weight: 2 },
        { text: "两者结合", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_JP_02", dimension: "JP", text: "工作任务：",
      options: [
        { text: "按时间表执行", pole: "J", weight: 2 },
        { text: "按灵感/精力来", pole: "P", weight: 2 },
        { text: "看 deadline", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_JP_03", dimension: "JP", text: "旅行出发前你：",
      options: [
        { text: "做好详细攻略", pole: "J", weight: 2 },
        { text: "临时决定", pole: "P", weight: 2 },
        { text: "看心情", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_JP_04", dimension: "JP", text: "你购物清单：",
      options: [
        { text: "先写好再买", pole: "J", weight: 2 },
        { text: "看到啥买啥", pole: "P", weight: 2 },
        { text: "看预算", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_JP_05", dimension: "JP", text: "决定午餐：",
      options: [
        { text: "12:00 准时去吃", pole: "J", weight: 2 },
        { text: "等饿了再说", pole: "P", weight: 2 },
        { text: "看情况", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_JP_01", dimension: "JP", text: "项目截止前 1 周：",
      options: [
        { text: "已经按时间表推进", pole: "J", weight: 2 },
        { text: "最后一周才赶工", pole: "P", weight: 2 },
        { text: "看项目难度", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_JP_02", dimension: "JP", text: "你的电脑桌面：",
      options: [
        { text: "文件分类整齐", pole: "J", weight: 2 },
        { text: "图标挤满全屏", pole: "P", weight: 2 },
        { text: "看心情整理", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_JP_03", dimension: "JP", text: "餐厅点菜你：",
      options: [
        { text: "提前看菜单想好", pole: "J", weight: 2 },
        { text: "到现场看推荐", pole: "P", weight: 2 },
        { text: "看同伴点啥", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_JP_04", dimension: "JP", text: "搬家时：",
      options: [
        { text: "提前列装箱清单", pole: "J", weight: 2 },
        { text: "边搬边装", pole: "P", weight: 2 },
        { text: "看心情", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_JP_05", dimension: "JP", text: "看展/博物馆：",
      options: [
        { text: "提前查路线，按顺序看", pole: "J", weight: 2 },
        { text: "随机逛，看到啥看啥", pole: "P", weight: 2 },
        { text: "看时间和体力", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_JP_06", dimension: "JP", text: "做饭时：",
      options: [
        { text: "提前备好所有食材", pole: "J", weight: 2 },
        { text: "看到啥用啥", pole: "P", weight: 2 },
        { text: "看冰箱", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S2_JP_07", dimension: "JP", text: "面对 deadline：",
      options: [
        { text: "提前完成", pole: "J", weight: 2 },
        { text: "压线完成", pole: "P", weight: 2 },
        { text: "看事情", pole: "neutral", weight: 0 }
      ]
    },
  ]
};

// 浏览器端挂到 window
if (typeof window !== 'undefined') {
  window.MBTI_SCENARIO_BANK_50 = MBTI_SCENARIO_BANK_50;
}
