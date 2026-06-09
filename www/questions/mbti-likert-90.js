/**
 * MBTI 李克特量表题库（1-5分评分制）扩到 90 题
 * 来源：老 40 题（顾总/小民自创）+ 新 50 题（小民手写 2026-06-05）
 * 每维度 22-23 题，randomDrawQuestions 抽 40 题保持维度平衡
 * 用户选择：1=完全不同意，2=不太同意，3=中立，4=比较同意，5=完全同意
 * 计分方式：极端回答（1或5）权重更高
 */

const MBTI_LIKERT_BANK_90 = {
  version: "2.0",
  name: "MBTI-90题-李克特量表版",
  description: "1-5分量表 + 90题，每维度22-23题，randomDraw抽40题维度平衡",
  totalQuestions: 90,
  source: "likert-40(legacy) + likert-50(new)",

  dimensions: {
    "EI": { name: "外向-内向", poles: ["E", "I"], description: "精力来源与注意力方向" },
    "SN": { name: "实感-直觉", poles: ["S", "N"], description: "信息获取与认知方式" },
    "TF": { name: "思考-情感", poles: ["T", "F"], description: "决策方式与判断标准" },
    "JP": { name: "判断-知觉", poles: ["J", "P"], description: "生活方式与行动态度" }
  },

  questions: [
    // ========== EI 维度 23 题（10 老 + 13 新）==========
    { id: "L_EI_01", dimension: "EI", pole: "E", text: "我喜欢在聚会上认识新朋友", reversed: false, weight: 1.0 },
    { id: "L_EI_02", dimension: "EI", pole: "I", text: "长时间的社交活动会让我感到疲惫", reversed: false, weight: 1.0 },
    { id: "L_EI_03", dimension: "EI", pole: "E", text: "我倾向于通过交谈来理清思路", reversed: false, weight: 1.0 },
    { id: "L_EI_04", dimension: "EI", pole: "E", text: "我在团队中经常主动发言", reversed: false, weight: 1.0 },
    { id: "L_EI_05", dimension: "EI", pole: "I", text: "我需要独处时间来恢复精力", reversed: false, weight: 1.0 },
    { id: "L_EI_06", dimension: "EI", pole: "E", text: "我很容易和新认识的人聊起来", reversed: false, weight: 1.0 },
    { id: "L_EI_07", dimension: "EI", pole: "E", text: "大型社交活动让我感到兴奋", reversed: false, weight: 1.0 },
    { id: "L_EI_08", dimension: "EI", pole: "I", text: "我更倾向于在安静的环境中工作", reversed: false, weight: 1.0 },
    { id: "L_EI_09", dimension: "EI", pole: "E", text: "我经常是朋友圈的组织者", reversed: false, weight: 1.0 },
    { id: "L_EI_10", dimension: "EI", pole: "I", text: "我倾向于在表达之前先深思", reversed: false, weight: 1.0 },
    { id: "L2_EI_01", dimension: "EI", pole: "E", text: "我倾向于在讨论中形成自己的判断", reversed: false, weight: 1.0 },
    { id: "L2_EI_02", dimension: "EI", pole: "I", text: "我更喜欢一对一的深入对话", reversed: false, weight: 1.0 },
    { id: "L2_EI_03", dimension: "EI", pole: "E", text: "我经常是朋友圈中主动发起话题的人", reversed: false, weight: 1.0 },
    { id: "L2_EI_04", dimension: "EI", pole: "I", text: "比起电话我更喜欢发消息", reversed: false, weight: 1.0 },
    { id: "L2_EI_05", dimension: "EI", pole: "E", text: "我在会议上经常第一个发言", reversed: false, weight: 1.0 },
    { id: "L2_EI_06", dimension: "EI", pole: "E", text: "我倾向于在行动中思考", reversed: false, weight: 1.0 },
    { id: "L2_EI_07", dimension: "EI", pole: "I", text: "我更愿意做倾听者而不是发言者", reversed: false, weight: 1.0 },
    { id: "L2_EI_08", dimension: "EI", pole: "E", text: "我喜欢参加各种社交活动", reversed: false, weight: 1.0 },
    { id: "L2_EI_09", dimension: "EI", pole: "I", text: "我倾向于在行动前先深思", reversed: false, weight: 1.0 },
    { id: "L2_EI_10", dimension: "EI", pole: "E", text: "我喜欢主动认识不同领域的人", reversed: false, weight: 1.0 },
    { id: "L2_EI_11", dimension: "EI", pole: "I", text: "我经常觉得聚会后需要独处恢复", reversed: false, weight: 1.0 },
    { id: "L2_EI_12", dimension: "EI", pole: "E", text: "我喜欢热闹的氛围胜过安静的环境", reversed: false, weight: 1.0 },
    { id: "L2_EI_13", dimension: "EI", pole: "I", text: "我倾向于在发言前反复思考措辞", reversed: false, weight: 1.0 },

    // ========== SN 维度 23 题（10 老 + 13 新）==========
    { id: "L_SN_01", dimension: "SN", pole: "S", text: "我更关注具体细节而非整体趋势", reversed: false, weight: 1.0 },
    { id: "L_SN_02", dimension: "SN", pole: "N", text: "我喜欢思考未来的可能性", reversed: false, weight: 1.0 },
    { id: "L_SN_03", dimension: "SN", pole: "S", text: "我倾向于相信经过验证的方法", reversed: false, weight: 1.0 },
    { id: "L_SN_04", dimension: "SN", pole: "N", text: "我经常思考'如果'和'可能'", reversed: false, weight: 1.0 },
    { id: "L_SN_05", dimension: "SN", pole: "S", text: "我喜欢按部就班的步骤完成工作", reversed: false, weight: 1.0 },
    { id: "L_SN_06", dimension: "SN", pole: "N", text: "我对新概念和新理论感到兴奋", reversed: false, weight: 1.0 },
    { id: "L_SN_07", dimension: "SN", pole: "S", text: "我更注重具体事实而非抽象理论", reversed: false, weight: 1.0 },
    { id: "L_SN_08", dimension: "SN", pole: "N", text: "我喜欢探索新的可能性", reversed: false, weight: 1.0 },
    { id: "L_SN_09", dimension: "SN", pole: "N", text: "我相信有比表面更深的意义", reversed: false, weight: 1.0 },
    { id: "L_SN_10", dimension: "SN", pole: "S", text: "我依赖过往经验做判断", reversed: false, weight: 1.0 },
    { id: "L2_SN_01", dimension: "SN", pole: "S", text: "我倾向于用事实而非直觉做决定", reversed: false, weight: 1.0 },
    { id: "L2_SN_02", dimension: "SN", pole: "N", text: "我经常想象未来 5-10 年的可能性", reversed: false, weight: 1.0 },
    { id: "L2_SN_03", dimension: "SN", pole: "S", text: "我更注重当下可操作的事情", reversed: false, weight: 1.0 },
    { id: "L2_SN_04", dimension: "SN", pole: "N", text: "我喜欢探索抽象概念和理论", reversed: false, weight: 1.0 },
    { id: "L2_SN_05", dimension: "SN", pole: "S", text: "我倾向于按字面意思理解话语", reversed: false, weight: 1.0 },
    { id: "L2_SN_06", dimension: "SN", pole: "N", text: "我喜欢讨论可能性而非具体事实", reversed: false, weight: 1.0 },
    { id: "L2_SN_07", dimension: "SN", pole: "S", text: "我更关注现实而非理论", reversed: false, weight: 1.0 },
    { id: "L2_SN_08", dimension: "SN", pole: "N", text: "我喜欢问'为什么'和'怎么会这样'", reversed: false, weight: 1.0 },
    { id: "L2_SN_09", dimension: "SN", pole: "S", text: "我更喜欢用历史类比来理解当下", reversed: false, weight: 1.0 },
    { id: "L2_SN_10", dimension: "SN", pole: "N", text: "我喜欢用隐喻和象征表达想法", reversed: false, weight: 1.0 },
    { id: "L2_SN_11", dimension: "SN", pole: "S", text: "我倾向于列举具体步骤", reversed: false, weight: 1.0 },
    { id: "L2_SN_12", dimension: "SN", pole: "N", text: "我喜欢思考'这事背后的更大图景'", reversed: false, weight: 1.0 },
    { id: "L2_SN_13", dimension: "SN", pole: "S", text: "我更关注'是什么'而非'可以是什么'", reversed: false, weight: 1.0 },

    // ========== TF 维度 22 题（10 老 + 12 新）==========
    { id: "L_TF_01", dimension: "TF", pole: "T", text: "我做决定时更看重逻辑和原则", reversed: false, weight: 1.0 },
    { id: "L_TF_02", dimension: "TF", pole: "F", text: "我做决定时会考虑他人感受", reversed: false, weight: 1.0 },
    { id: "L_TF_03", dimension: "TF", pole: "T", text: "我倾向于客观分析问题", reversed: false, weight: 1.0 },
    { id: "L_TF_04", dimension: "TF", pole: "F", text: "我重视和谐的人际关系", reversed: false, weight: 1.0 },
    { id: "L_TF_05", dimension: "TF", pole: "T", text: "我会为了真理而争论", reversed: false, weight: 1.0 },
    { id: "L_TF_06", dimension: "TF", pole: "F", text: "我会避免冲突维持和睦", reversed: false, weight: 1.0 },
    { id: "L_TF_07", dimension: "TF", pole: "T", text: "我更看重公平而非慈悲", reversed: false, weight: 1.0 },
    { id: "L_TF_08", dimension: "TF", pole: "F", text: "我会为朋友的不公遭遇打抱不平", reversed: false, weight: 1.0 },
    { id: "L_TF_09", dimension: "TF", pole: "T", text: "我倾向于用头脑而非心灵做决定", reversed: false, weight: 1.0 },
    { id: "L_TF_10", dimension: "TF", pole: "F", text: "我会因感动而流泪", reversed: false, weight: 1.0 },
    { id: "L2_TF_01", dimension: "TF", pole: "T", text: "我认为诚实比善良更重要", reversed: false, weight: 1.0 },
    { id: "L2_TF_02", dimension: "TF", pole: "F", text: "我相信人应该被理解而非被评判", reversed: false, weight: 1.0 },
    { id: "L2_TF_03", dimension: "TF", pole: "T", text: "我做选择更看重效率和正确性", reversed: false, weight: 1.0 },
    { id: "L2_TF_04", dimension: "TF", pole: "F", text: "我倾向于问'大家感受如何'", reversed: false, weight: 1.0 },
    { id: "L2_TF_05", dimension: "TF", pole: "T", text: "我倾向于给出直接诚实的反馈", reversed: false, weight: 1.0 },
    { id: "L2_TF_06", dimension: "TF", pole: "F", text: "我倾向于先考虑对方感受再说", reversed: false, weight: 1.0 },
    { id: "L2_TF_07", dimension: "TF", pole: "T", text: "我倾向于相信逻辑胜于感情", reversed: false, weight: 1.0 },
    { id: "L2_TF_08", dimension: "TF", pole: "F", text: "我倾向于关注人而非任务本身", reversed: false, weight: 1.0 },
    { id: "L2_TF_09", dimension: "TF", pole: "T", text: "我倾向于用分析而非感觉做判断", reversed: false, weight: 1.0 },
    { id: "L2_TF_10", dimension: "TF", pole: "F", text: "我倾向于主动照顾他人情绪", reversed: false, weight: 1.0 },
    { id: "L2_TF_11", dimension: "TF", pole: "T", text: "我倾向于'对事不对人'", reversed: false, weight: 1.0 },
    { id: "L2_TF_12", dimension: "TF", pole: "F", text: "我倾向于'对人不对事'", reversed: false, weight: 1.0 },

    // ========== JP 维度 22 题（10 老 + 12 新）==========
    { id: "L_JP_01", dimension: "JP", pole: "J", text: "我喜欢提前做好计划", reversed: false, weight: 1.0 },
    { id: "L_JP_02", dimension: "JP", pole: "P", text: "我更喜欢灵活随性的生活方式", reversed: false, weight: 1.0 },
    { id: "L_JP_03", dimension: "JP", pole: "J", text: "我倾向于按时完成任务", reversed: false, weight: 1.0 },
    { id: "L_JP_04", dimension: "JP", pole: "P", text: "我经常在最后一刻才行动", reversed: false, weight: 1.0 },
    { id: "L_JP_05", dimension: "JP", pole: "J", text: "我喜欢做决定而非保持选择开放", reversed: false, weight: 1.0 },
    { id: "L_JP_06", dimension: "JP", pole: "P", text: "我对计划外的变化感到兴奋", reversed: false, weight: 1.0 },
    { id: "L_JP_07", dimension: "JP", pole: "J", text: "我倾向于整理房间和文件", reversed: false, weight: 1.0 },
    { id: "L_JP_08", dimension: "JP", pole: "P", text: "我倾向于随遇而安", reversed: false, weight: 1.0 },
    { id: "L_JP_09", dimension: "JP", pole: "J", text: "我喜欢列清单和待办事项", reversed: false, weight: 1.0 },
    { id: "L_JP_10", dimension: "JP", pole: "P", text: "我倾向于先行动再思考", reversed: false, weight: 1.0 },
    { id: "L2_JP_01", dimension: "JP", pole: "J", text: "我重视结构化的日程", reversed: false, weight: 1.0 },
    { id: "L2_JP_02", dimension: "JP", pole: "P", text: "我喜欢即兴发挥", reversed: false, weight: 1.0 },
    { id: "L2_JP_03", dimension: "JP", pole: "J", text: "我倾向于提前规划假期行程", reversed: false, weight: 1.0 },
    { id: "L2_JP_04", dimension: "JP", pole: "P", text: "我倾向于临时决定旅游目的地", reversed: false, weight: 1.0 },
    { id: "L2_JP_05", dimension: "JP", pole: "J", text: "我倾向于先做困难的事", reversed: false, weight: 1.0 },
    { id: "L2_JP_06", dimension: "JP", pole: "P", text: "我倾向于按兴趣/精力顺序做事", reversed: false, weight: 1.0 },
    { id: "L2_JP_07", dimension: "JP", pole: "J", text: "我倾向于遵守截止日期", reversed: false, weight: 1.0 },
    { id: "L2_JP_08", dimension: "JP", pole: "P", text: "我倾向于相信'船到桥头自然直'", reversed: false, weight: 1.0 },
    { id: "L2_JP_09", dimension: "JP", pole: "J", text: "我倾向于做详细的购物清单", reversed: false, weight: 1.0 },
    { id: "L2_JP_10", dimension: "JP", pole: "P", text: "我倾向于根据当时心情买", reversed: false, weight: 1.0 },
    { id: "L2_JP_11", dimension: "JP", pole: "J", text: "我倾向于每天整理当天的工作", reversed: false, weight: 1.0 },
    { id: "L2_JP_12", dimension: "JP", pole: "P", text: "我倾向于周末一次大扫除", reversed: false, weight: 1.0 },
  ]
};

// 浏览器端挂到 window（app.js VERSION_CONFIG.bankVar 读 window[MBTI_LIKERT_BANK_90]）
if (typeof window !== 'undefined') {
  window.MBTI_LIKERT_BANK_90 = MBTI_LIKERT_BANK_90;
}
