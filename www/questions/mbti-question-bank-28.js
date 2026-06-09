/**
 * MBTI中文题库 - 快速版（28题）
 * 用于：社交裂变、快速引流、短视频链接转化
 * 特点：7分钟完成，精准度约为标准版的85%，适合首次接触用户
 * 设计原则：每维度7题，覆盖核心场景，避免重复语境
 */

const MBTI_QUESTION_BANK_QUICK = {
  version: "1.0.0-quick",
  totalQuestions: 28,
  dimensions: {
    EI: { name: "精力来源", poles: ["E", "I"], fullNames: ["外向", "内向"], count: 7 },
    SN: { name: "认知方式", poles: ["S", "N"], fullNames: ["实感", "直觉"], count: 7 },
    TF: { name: "判断方式", poles: ["T", "F"], fullNames: ["思考", "情感"], count: 7 },
    JP: { name: "生活态度", poles: ["J", "P"], fullNames: ["判断", "知觉"], count: 7 }
  },
  questions: [
    // E/I 维度（7题）- 核心场景：社交、能量恢复、表达方式
    {
      id: 1, dimension: "EI", weight: 1,
      text: "连续社交一周后，你更渴望：",
      optionA: { text: "继续约朋友出去玩，热闹能充电", pole: "E" },
      optionB: { text: "一个人宅家彻底安静，独处能回血", pole: "I" }
    },
    {
      id: 2, dimension: "EI", weight: 1,
      text: "在陌生聚会上，你通常：",
      optionA: { text: "主动认识新朋友，和多人聊天", pole: "E" },
      optionB: { text: "只和熟人深聊，或安静观察", pole: "I" }
    },
    {
      id: 3, dimension: "EI", weight: 1,
      text: "你更习惯通过什么方式思考：",
      optionA: { text: "边聊边想，说出来才理清", pole: "E" },
      optionB: { text: "先想清楚，再说重点", pole: "I" }
    },
    {
      id: 4, dimension: "EI", weight: 1,
      text: "你的微信未读消息通常是：",
      optionA: { text: "秒回，消息多说明被需要", pole: "E" },
      optionB: { text: "攒着，集中处理，太多会焦虑", pole: "I" }
    },
    {
      id: 5, dimension: "EI", weight: 1,
      text: "理想的工作环境是：",
      optionA: { text: "开放式，随时可以讨论", pole: "E" },
      optionB: { text: "独立空间，减少干扰", pole: "I" }
    },
    {
      id: 6, dimension: "EI", weight: 1,
      text: "遇到难题时，你更倾向：",
      optionA: { text: "找人讨论，碰撞出思路", pole: "E" },
      optionB: { text: "自己先琢磨，想不清再求助", pole: "I" }
    },
    {
      id: 7, dimension: "EI", weight: 1,
      text: "你更享受：",
      optionA: { text: "多任务并行，生活充实忙碌", pole: "E" },
      optionB: { text: "单线程深度，专注一件事", pole: "I" }
    },

    // S/N 维度（7题）- 核心场景：信息获取、决策依据、关注焦点
    {
      id: 8, dimension: "SN", weight: 1,
      text: "你更信任：",
      optionA: { text: "亲眼所见、亲手验证的事实", pole: "S" },
      optionB: { text: "逻辑推导、符合大趋势的洞察", pole: "N" }
    },
    {
      id: 9, dimension: "SN", weight: 1,
      text: "学习新技能时，你更擅长：",
      optionA: { text: "按步骤实操，熟能生巧", pole: "S" },
      optionB: { text: "先理解原理，举一反三", pole: "N" }
    },
    {
      id: 10, dimension: "SN", weight: 1,
      text: "你更关注：",
      optionA: { text: "当下具体的事和细节", pole: "S" },
      optionB: { text: "未来可能性和整体趋势", pole: "N" }
    },
    {
      id: 11, dimension: "SN", weight: 1,
      text: "描述一件事，你通常会：",
      optionA: { text: "讲经过、细节、原原本本", pole: "S" },
      optionB: { text: "提炼核心、讲意义和感受", pole: "N" }
    },
    {
      id: 12, dimension: "SN", weight: 1,
      text: "你更欣赏：",
      optionA: { text: "执行力强、注重细节的人", pole: "S" },
      optionB: { text: "思维活跃、有远见的人", pole: "N" }
    },
    {
      id: 13, dimension: "SN", weight: 1,
      text: "工作中你更擅长：",
      optionA: { text: "处理具体数据、按流程执行", pole: "S" },
      optionB: { text: "制定策略、思考方向", pole: "N" }
    },
    {
      id: 14, dimension: "SN", weight: 1,
      text: "你更享受：",
      optionA: { text: "把一件事做到精细完美", pole: "S" },
      optionB: { text: "发现别人没看到的关联和新方向", pole: "N" }
    },

    // T/F 维度（7题）- 核心场景：人际互动、决策依据、价值观
    {
      id: 15, dimension: "TF", weight: 1,
      text: "朋友倾诉烦恼，你更倾向：",
      optionA: { text: "帮他分析问题、给解决方案", pole: "T" },
      optionB: { text: "先倾听陪伴、理解他的情绪", pole: "F" }
    },
    {
      id: 16, dimension: "TF", weight: 1,
      text: "团队分歧时，你更看重：",
      optionA: { text: "哪个方案更合理高效", pole: "T" },
      optionB: { text: "哪个方案大家更能接受", pole: "F" }
    },
    {
      id: 17, dimension: "TF", weight: 1,
      text: "你更认同：",
      optionA: { text: "对事不对人，工作中不谈感情", pole: "T" },
      optionB: { text: "工作也是生活，人情味重要", pole: "F" }
    },
    {
      id: 18, dimension: "TF", weight: 1,
      text: "评价工作表现，你更关注：",
      optionA: { text: "产出结果和KPI", pole: "T" },
      optionB: { text: "态度努力和团队付出", pole: "F" }
    },
    {
      id: 19, dimension: "TF", weight: 1,
      text: "你更习惯：",
      optionA: { text: "直接指出问题，不绕弯子", pole: "T" },
      optionB: { text: "委婉表达，照顾对方感受", pole: "F" }
    },
    {
      id: 20, dimension: "TF", weight: 1,
      text: "重大决定时，你更依赖：",
      optionA: { text: "数据分析和逻辑推演", pole: "T" },
      optionB: { text: "内心感受和价值观", pole: "F" }
    },
    {
      id: 21, dimension: "TF", weight: 1,
      text: "你更追求：",
      optionA: { text: "目标达成、能力被认可", pole: "T" },
      optionB: { text: "被人信赖、关系融洽", pole: "F" }
    },

    // J/P 维度（7题）- 核心场景：时间管理、计划性、应对变化
    {
      id: 22, dimension: "JP", weight: 1,
      text: "你的日常安排：",
      optionA: { text: "提前规划，按计划执行", pole: "J" },
      optionB: { text: "大致方向，具体看情况", pole: "P" }
    },
    {
      id: 23, dimension: "JP", weight: 1,
      text: "面对 deadline：",
      optionA: { text: "提前完成，留时间检查", pole: "J" },
      optionB: { text: " deadline前冲刺，压力下高效", pole: "P" }
    },
    {
      id: 24, dimension: "JP", weight: 1,
      text: "你的桌面/房间：",
      optionA: { text: "整洁有序，各归其位", pole: "J" },
      optionB: { text: "看似凌乱，但自己知道在哪", pole: "P" }
    },
    {
      id: 25, dimension: "JP", weight: 1,
      text: "朋友临时约你，但你已有安排：",
      optionA: { text: "婉拒，不喜欢打乱计划", pole: "J" },
      optionB: { text: "调整计划，赴约享受意外", pole: "P" }
    },
    {
      id: 26, dimension: "JP", weight: 1,
      text: "新任务来临时，你首先想：",
      optionA: { text: "知道 deadline 和交付标准", pole: "J" },
      optionB: { text: "了解方向，探索各种可能", pole: "P" }
    },
    {
      id: 27, dimension: "JP", weight: 1,
      text: "你更倾向：",
      optionA: { text: "先定目标再分步执行", pole: "J" },
      optionB: { text: "先做起来，过程中找方向", pole: "P" }
    },
    {
      id: 28, dimension: "JP", weight: 1,
      text: "你更享受：",
      optionA: { text: "按计划完成，一切尽在掌控", pole: "J" },
      optionB: { text: "随机应变，在混乱中找路", pole: "P" }
    }
  ],

  scoring: {
    maxScorePerDimension: 7,
    preferenceStrength: {
      slight: { min: 0, max: 2, label: "轻微偏好" },
      moderate: { min: 3, max: 4, label: "中等偏好" },
      clear: { min: 5, max: 6, label: "明显偏好" },
      veryClear: { min: 7, max: 7, label: "非常清晰" }
    }
  },

  usage: {
    questionsPerPage: 7,
    estimatedTime: 5,
    mode: "binary",
    allowBack: true,
    showProgress: true,
    // 快速版特性：支持未答完提示保存进度，下次继续
    saveProgress: true
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MBTI_QUESTION_BANK_QUICK;
}
if (typeof window !== 'undefined') {
  window.MBTI_QUESTION_BANK_QUICK = MBTI_QUESTION_BANK_QUICK;
}
