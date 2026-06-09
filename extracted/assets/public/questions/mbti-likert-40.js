/**
 * MBTI 李克特量表题库（1-5分评分制）
 * 40题，每维度10题，支持更精确的人格测量
 * 用户选择：1=完全不同意，2=不太同意，3=中立，4=比较同意，5=完全同意
 * 计分方式：极端回答（1或5）权重更高
 */

const MBTI_LIKERT_BANK = {
  version: "1.0",
  name: "MBTI-40题-李克特量表版",
  description: "基于1-5分量表，更精确地测量人格偏好，减少迫选的强迫感",
  totalQuestions: 40,
  
  // 计分规则：每个维度独立计分
  dimensions: {
    "EI": { name: "外向-内向", poles: ["E", "I"], description: "精力来源与注意力方向" },
    "SN": { name: "实感-直觉", poles: ["S", "N"], description: "信息获取与认知方式" },
    "TF": { name: "思考-情感", poles: ["T", "F"], description: "决策方式与判断标准" },
    "JP": { name: "判断-知觉", poles: ["J", "P"], description: "生活方式与行动态度" }
  },
  
  questions: [
    // ========== EI 维度（外向 vs 内向）==========
    {
      id: "L_EI_01",
      dimension: "EI",
      pole: "E",
      text: "我喜欢在聚会上认识新朋友",
      reversed: false, // 正向题：越高分越E
      weight: 1.0
    },
    {
      id: "L_EI_02",
      dimension: "EI",
      pole: "I",
      text: "长时间的社交活动会让我感到疲惫",
      reversed: false, // 正向题：越高分越I
      weight: 1.0
    },
    {
      id: "L_EI_03",
      dimension: "EI",
      pole: "E",
      text: "我倾向于通过交谈来理清思路",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_EI_04",
      dimension: "EI",
      pole: "I",
      text: "我享受独自一人的安静时光",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_EI_05",
      dimension: "EI",
      pole: "E",
      text: "在团队中，我会主动发言和提出想法",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_EI_06",
      dimension: "EI",
      pole: "I",
      text: "我更倾向于先思考，再开口说话",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_EI_07",
      dimension: "EI",
      pole: "E",
      text: "周围有很多人时，我感到更有活力",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_EI_08",
      dimension: "EI",
      pole: "I",
      text: "我更喜欢深度的一对一交流，而不是大型社交",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_EI_09",
      dimension: "EI",
      pole: "E",
      text: "我是那种喜欢成为焦点的人",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_EI_10",
      dimension: "EI",
      pole: "I",
      text: "在行动之前，我需要时间独自思考",
      reversed: false,
      weight: 1.0
    },
    
    // ========== SN 维度（实感 vs 直觉）==========
    {
      id: "L_SN_01",
      dimension: "SN",
      pole: "S",
      text: "我关注具体的事实和细节，而非抽象概念",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_SN_02",
      dimension: "SN",
      pole: "N",
      text: "我更喜欢思考未来的可能性，而不是关注当下",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_SN_03",
      dimension: "SN",
      pole: "S",
      text: "我相信“眼见为实”，重视实际经验",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_SN_04",
      dimension: "SN",
      pole: "N",
      text: "我常常能发现事物背后的深层含义和关联",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_SN_05",
      dimension: "SN",
      pole: "S",
      text: "我喜欢按部就班、有明确步骤的工作",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_SN_06",
      dimension: "SN",
      pole: "N",
      text: "我对新概念和理论充满好奇",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_SN_07",
      dimension: "SN",
      pole: "S",
      text: "我更信任已知的方法和传统的做法",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_SN_08",
      dimension: "SN",
      pole: "N",
      text: "我倾向于通过直觉来理解复杂问题",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_SN_09",
      dimension: "SN",
      pole: "S",
      text: "我对具体的数字、日期和细节记忆深刻",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_SN_10",
      dimension: "SN",
      pole: "N",
      text: "我更喜欢讨论“如果...会怎样”的假设性问题",
      reversed: false,
      weight: 1.0
    },
    
    // ========== TF 维度（思考 vs 情感）==========
    {
      id: "L_TF_01",
      dimension: "TF",
      pole: "T",
      text: "做决定时，我更看重逻辑和客观分析",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_TF_02",
      dimension: "TF",
      pole: "F",
      text: "我倾向于考虑决定对他人的情感影响",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_TF_03",
      dimension: "TF",
      pole: "T",
      text: "我认为批评应该直截了当，无需委婉",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_TF_04",
      dimension: "TF",
      pole: "F",
      text: "和谐的人际关系对我来说非常重要",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_TF_05",
      dimension: "TF",
      pole: "T",
      text: "我倾向于用事实和数据来支持我的观点",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_TF_06",
      dimension: "TF",
      pole: "F",
      text: "我能敏锐地感知到他人的情绪变化",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_TF_07",
      dimension: "TF",
      pole: "T",
      text: "我认为公正比同情更重要",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_TF_08",
      dimension: "TF",
      pole: "F",
      text: "做决定时，我会优先考虑团队的感受",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_TF_09",
      dimension: "TF",
      pole: "T",
      text: "我倾向于从效率和结果的角度评估事情",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_TF_10",
      dimension: "TF",
      pole: "F",
      text: "我重视真诚的情感表达，而不是理性分析",
      reversed: false,
      weight: 1.0
    },
    
    // ========== JP 维度（判断 vs 知觉）==========
    {
      id: "L_JP_01",
      dimension: "JP",
      pole: "J",
      text: "我喜欢提前计划，按日程表行事",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_JP_02",
      dimension: "JP",
      pole: "P",
      text: "我更喜欢随机应变，而不是严格遵守计划",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_JP_03",
      dimension: "JP",
      pole: "J",
      text: "未完成的任务会让我感到焦虑",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_JP_04",
      dimension: "JP",
      pole: "P",
      text: "我喜欢保持开放的选择，随时可以调整",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_JP_05",
      dimension: "JP",
      pole: "J",
      text: "我倾向于在做决定时迅速果断",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_JP_06",
      dimension: "JP",
      pole: "P",
      text: "我享受探索新选择的过程，不急于做决定",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_JP_07",
      dimension: "JP",
      pole: "J",
      text: "我喜欢把事情做完、整理好再放松",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_JP_08",
      dimension: "JP",
      pole: "P",
      text: " deadline 的压力能激发我的创造力",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_JP_09",
      dimension: "JP",
      pole: "J",
      text: "我认为规则和结构有助于提高效率",
      reversed: false,
      weight: 1.0
    },
    {
      id: "L_JP_10",
      dimension: "JP",
      pole: "P",
      text: "我倾向于在开始新项目前，先探索多种可能性",
      reversed: false,
      weight: 1.0
    }
  ]
};

// 浏览器端全局暴露（const 不会自动挂到 window）
if (typeof window !== 'undefined') {
  window.MBTI_LIKERT_BANK = MBTI_LIKERT_BANK;
}