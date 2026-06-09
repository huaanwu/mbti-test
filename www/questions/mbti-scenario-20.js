/**
 * MBTI 场景选择题库
 * 20题，基于具体情境选择，减少抽象理解难度
 * 每题3-4个选项，对应不同维度偏好
 */

const MBTI_SCENARIO_BANK = {
  version: "1.0",
  name: "MBTI-20题-场景版",
  description: "通过具体生活场景测量人格偏好，更直观易懂",
  totalQuestions: 20,

  dimensions: {
    "EI": { name: "外向-内向", poles: ["E", "I"], description: "精力来源与注意力方向" },
    "SN": { name: "实感-直觉", poles: ["S", "N"], description: "信息获取与认知方式" },
    "TF": { name: "思考-情感", poles: ["T", "F"], description: "决策方式与判断标准" },
    "JP": { name: "判断-知觉", poles: ["J", "P"], description: "生活方式与行动态度" }
  },

  questions: [
    // ========== EI 场景 ==========
    {
      id: "S_EI_01",
      dimension: "EI",
      text: "公司年会，你刚到场，会怎么做？",
      options: [
        { text: "主动找熟人聊天，很快融入人群", pole: "E", weight: 2 },
        { text: "先找个角落观察，再决定是否加入", pole: "I", weight: 2 },
        { text: "和旁边的人简单打个招呼", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_EI_02",
      dimension: "EI",
      text: "连续加班一周后，周末终于到来，你想：",
      options: [
        { text: "约朋友聚餐、唱K，放松一下", pole: "E", weight: 2 },
        { text: "宅在家看书、追剧，独处充电", pole: "I", weight: 2 },
        { text: "两者都可以，看心情", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_EI_03",
      dimension: "EI",
      text: "开会时你有一个想法，你会：",
      options: [
        { text: "马上举手发言，趁热打铁", pole: "E", weight: 2 },
        { text: "先在纸上整理，会后私下沟通", pole: "I", weight: 2 },
        { text: "等别人说类似的再补充", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_EI_04",
      dimension: "EI",
      text: "你在一个陌生的派对上，发现只认识一个人，你会：",
      options: [
        { text: "主动和陌生人攀谈，认识新朋友", pole: "E", weight: 2 },
        { text: "只和认识的那个人待在一起", pole: "I", weight: 2 },
        { text: "玩手机等别人来找你", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_EI_05",
      dimension: "EI",
      text: "结束了一天的工作，你更倾向于：",
      options: [
        { text: "和同事去喝两杯，聊聊今天的事", pole: "E", weight: 2 },
        { text: "直接回家，享受一个人的晚餐", pole: "I", weight: 2 },
        { text: "看时间，有时社交有时独处", pole: "neutral", weight: 0 }
      ]
    },

    // ========== SN 场景 ==========
    {
      id: "S_SN_01",
      dimension: "SN",
      text: "朋友约你去一家新餐厅，你最关心：",
      options: [
        { text: "菜单有什么菜、价格、环境实拍图", pole: "S", weight: 2 },
        { text: "餐厅的设计理念、老板的创业故事", pole: "N", weight: 2 },
        { text: "网上的评分和口碑", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_SN_02",
      dimension: "SN",
      text: "看到一个复杂的数据报表，你首先：",
      options: [
        { text: "仔细看每个数字，找异常和规律", pole: "S", weight: 2 },
        { text: "思考这些数据背后的趋势和含义", pole: "N", weight: 2 },
        { text: "大致浏览，有需要再深入", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_SN_03",
      dimension: "SN",
      text: "朋友送你一本小说，你更喜欢：",
      options: [
        { text: "细节丰富、描写真实的现实主义作品", pole: "S", weight: 2 },
        { text: "想象力丰富、有隐喻的科幻或奇幻作品", pole: "N", weight: 2 },
        { text: "情节好看就行，不限类型", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_SN_04",
      dimension: "SN",
      text: "你在学习新技能时，更倾向于：",
      options: [
        { text: "按教程一步步实操，先做再理解", pole: "S", weight: 2 },
        { text: "先理解原理和框架，再动手实践", pole: "N", weight: 2 },
        { text: "边做边学，没有固定顺序", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_SN_05",
      dimension: "SN",
      text: "旅行时，你更喜欢：",
      options: [
        { text: "提前做好攻略，打卡每个计划好的景点", pole: "S", weight: 2 },
        { text: "随性而走，探索未知的街道和角落", pole: "N", weight: 2 },
        { text: "大致有方向，但允许临时改变", pole: "neutral", weight: 0 }
      ]
    },

    // ========== TF 场景 ==========
    {
      id: "S_TF_01",
      dimension: "TF",
      text: "朋友问你“我穿这件衣服好看吗”，其实不太合适，你会：",
      options: [
        { text: "直接说“不太适合，颜色有点显老”", pole: "T", weight: 2 },
        { text: "委婉地说“另一件可能更衬你”", pole: "F", weight: 2 },
        { text: "看关系，关系好就直说", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_TF_02",
      dimension: "TF",
      text: "团队中有人拖延影响了进度，作为负责人你会：",
      options: [
        { text: "按制度处理，该批评就批评", pole: "T", weight: 2 },
        { text: "先了解他是否遇到困难，再决定", pole: "F", weight: 2 },
        { text: "看情况，有时严厉有时理解", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_TF_03",
      dimension: "TF",
      text: "看电影时，你更容易被什么打动？",
      options: [
        { text: "精妙的剧情设计和逻辑反转", pole: "T", weight: 2 },
        { text: "角色的情感变化和人际互动", pole: "F", weight: 2 },
        { text: "画面和配乐", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_TF_04",
      dimension: "TF",
      text: "朋友失恋找你倾诉，你倾向于：",
      options: [
        { text: "帮他分析问题，给出解决方案", pole: "T", weight: 2 },
        { text: "先共情，陪他一起难过", pole: "F", weight: 2 },
        { text: "先倾听，再决定给建议还是安慰", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_TF_05",
      dimension: "TF",
      text: "工作中，你更重视：",
      options: [
        { text: "任务完成得漂不漂亮、效率高不高", pole: "T", weight: 2 },
        { text: "团队成员是否开心、合作是否顺畅", pole: "F", weight: 2 },
        { text: "两者都重要，平衡发展", pole: "neutral", weight: 0 }
      ]
    },

    // ========== JP 场景 ==========
    {
      id: "S_JP_01",
      dimension: "JP",
      text: "周末到了，你更喜欢：",
      options: [
        { text: "提前安排好每个时段做什么", pole: "J", weight: 2 },
        { text: "睡到自然醒，看心情决定", pole: "P", weight: 2 },
        { text: "有几件想做的事，但不严格安排时间", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_JP_02",
      dimension: "JP",
      text: "出差前一天晚上，你通常：",
      options: [
        { text: "行李已收拾好，反复检查清单", pole: "J", weight: 2 },
        { text: "大概收拾一下，临走前再抓几样", pole: "P", weight: 2 },
        { text: "提前一晚准备好，但偶尔漏东西", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_JP_03",
      dimension: "JP",
      text: "项目快截止了，你倾向于：",
      options: [
        { text: "提前完成，留时间检查和优化", pole: "J", weight: 2 },
        { text: "在截止前冲刺，压力下效率更高", pole: "P", weight: 2 },
        { text: "看项目类型，有时提前有时赶工", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_JP_04",
      dimension: "JP",
      text: "衣柜里的衣服，你通常：",
      options: [
        { text: "按季节、颜色分类，整齐摆放", pole: "J", weight: 2 },
        { text: "随手放，找得到就行", pole: "P", weight: 2 },
        { text: "大致分类，偶尔乱", pole: "neutral", weight: 0 }
      ]
    },
    {
      id: "S_JP_05",
      dimension: "JP",
      text: "朋友临时约你今晚出去玩，你：",
      options: [
        { text: "有点犹豫，因为打破了原计划", pole: "J", weight: 2 },
        { text: "好呀！说走就走更有意思", pole: "P", weight: 2 },
        { text: "看是什么活动，好玩就去", pole: "neutral", weight: 0 }
      ]
    }
  ]
};

// 浏览器端全局暴露
if (typeof window !== 'undefined') {
  window.MBTI_SCENARIO_BANK = MBTI_SCENARIO_BANK;
}