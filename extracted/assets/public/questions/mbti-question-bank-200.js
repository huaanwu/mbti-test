/**
 * MBTI 200 题完整版（来源：権威完整版200道MBTI人格测试题.md）
 * 4 部分各 50 题：A/B 二选一，A 选 = 对应维度正向倾向（E/S/T/J），B 选 = 反向
 * 用于支持 60 题版本（抽 60 题）和 28 题版本（抽 28 题）的随机出题
 * 完整度：200 题
 */
const MBTI_QUESTION_BANK_200 = {
  type: 'binary',
  version: '2.0',
  source: '16personalities-200',
  dimensions: ['EI', 'SN', 'TF', 'JP'],
  questions: [
  {
    "id": 1,
    "dimension": "EI",
    "pole": "E",
    "text": "聚会中，我更倾向于主动和陌生人交流",
    "choices": [
      {
        "text": "聚会中，我更倾向于主动和陌生人交流",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "等待别人主动和我说话",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 2,
    "dimension": "EI",
    "pole": "E",
    "text": "周末空闲时，我喜欢约朋友出门活动",
    "choices": [
      {
        "text": "周末空闲时，我喜欢约朋友出门活动",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "独自在家休息或做自己的事",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 3,
    "dimension": "EI",
    "pole": "E",
    "text": "遇到烦心事，我会找他人倾诉缓解情绪",
    "choices": [
      {
        "text": "遇到烦心事，我会找他人倾诉缓解情绪",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "自己默默消化，不轻易表露",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 4,
    "dimension": "EI",
    "pole": "E",
    "text": "我擅长在众人面前发言，不怯场",
    "choices": [
      {
        "text": "我擅长在众人面前发言，不怯场",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "面对多人发言会紧张，尽量回避",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 5,
    "dimension": "EI",
    "pole": "E",
    "text": "我需要通过社交活动获取能量，独处过久会觉得无聊",
    "choices": [
      {
        "text": "我需要通过社交活动获取能量，独处过久会觉得无聊",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "独处能让我恢复精力，社交过久会疲惫",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 6,
    "dimension": "EI",
    "pole": "E",
    "text": "我习惯边说边思考，通过表达梳理思路",
    "choices": [
      {
        "text": "我习惯边说边思考，通过表达梳理思路",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "先思考清楚，再有条理地表达",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 7,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢参与集体项目，享受团队协作的氛围",
    "choices": [
      {
        "text": "我喜欢参与集体项目，享受团队协作的氛围",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "更愿意独立完成任务，避免他人干扰",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 8,
    "dimension": "EI",
    "pole": "E",
    "text": "我对身边人的动态很敏感，乐于参与他们的生活",
    "choices": [
      {
        "text": "我对身边人的动态很敏感，乐于参与他们的生活",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "不太关注他人动态，专注于自己的节奏",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 9,
    "dimension": "EI",
    "pole": "E",
    "text": "接到临时社交邀请，我通常会欣然接受",
    "choices": [
      {
        "text": "接到临时社交邀请，我通常会欣然接受",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "会犹豫，更想维持原有的计划",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 10,
    "dimension": "EI",
    "pole": "E",
    "text": "我说话直接，不喜欢拐弯抹角",
    "choices": [
      {
        "text": "我说话直接，不喜欢拐弯抹角",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "说话会斟酌措辞，避免冒犯他人",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 11,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢成为人群中的焦点，被他人关注",
    "choices": [
      {
        "text": "我喜欢成为人群中的焦点，被他人关注",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "倾向于低调行事，不希望被过多关注",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 12,
    "dimension": "EI",
    "pole": "E",
    "text": "我会主动拓展人脉，认识不同领域的人",
    "choices": [
      {
        "text": "我会主动拓展人脉，认识不同领域的人",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "人脉圈较固定，只和熟悉的人深交",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 13,
    "dimension": "EI",
    "pole": "E",
    "text": "讨论问题时，我喜欢当场发表观点，参与辩论",
    "choices": [
      {
        "text": "讨论问题时，我喜欢当场发表观点，参与辩论",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "更愿意倾听他人意见，事后再总结自己的想法",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 14,
    "dimension": "EI",
    "pole": "E",
    "text": "我习惯和他人分享自己的喜怒哀乐",
    "choices": [
      {
        "text": "我习惯和他人分享自己的喜怒哀乐",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "情绪藏在心里，很少主动分享",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 15,
    "dimension": "EI",
    "pole": "E",
    "text": "陌生环境中，我能快速适应并融入",
    "choices": [
      {
        "text": "陌生环境中，我能快速适应并融入",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "陌生环境会让我不安，需要时间适应",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 16,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢组织聚会、旅行等集体活动",
    "choices": [
      {
        "text": "我喜欢组织聚会、旅行等集体活动",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "更愿意作为参与者，听从他人安排",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 17,
    "dimension": "EI",
    "pole": "E",
    "text": "工作/学习中，我喜欢和同事/同学随时沟通进度",
    "choices": [
      {
        "text": "工作/学习中，我喜欢和同事/同学随时沟通进度",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "倾向于独立推进，完成后再汇报",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 18,
    "dimension": "EI",
    "pole": "E",
    "text": "我对新鲜社交场合充满好奇，愿意尝试",
    "choices": [
      {
        "text": "我对新鲜社交场合充满好奇，愿意尝试",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "更偏爱熟悉的社交场景，避免陌生感",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 19,
    "dimension": "EI",
    "pole": "E",
    "text": "我容易和他人拉近距离，建立信任",
    "choices": [
      {
        "text": "我容易和他人拉近距离，建立信任",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "很难快速信任他人，需要长期相处了解",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 20,
    "dimension": "EI",
    "pole": "E",
    "text": "我会主动向他人寻求帮助，不觉得尴尬",
    "choices": [
      {
        "text": "我会主动向他人寻求帮助，不觉得尴尬",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "不到万不得已，不会麻烦他人",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 21,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢热闹的氛围，受不了长时间的安静",
    "choices": [
      {
        "text": "我喜欢热闹的氛围，受不了长时间的安静",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "偏爱安静的环境，热闹会让我分心",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 22,
    "dimension": "EI",
    "pole": "E",
    "text": "我习惯在交流中快速回应他人，不拖延",
    "choices": [
      {
        "text": "我习惯在交流中快速回应他人，不拖延",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "会思考后再回应，避免说错话",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 23,
    "dimension": "EI",
    "pole": "E",
    "text": "我愿意为了社交活动调整自己的计划",
    "choices": [
      {
        "text": "我愿意为了社交活动调整自己的计划",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "社交活动需服从于我的原有计划",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 24,
    "dimension": "EI",
    "pole": "E",
    "text": "我对他人的情绪变化很敏感，会主动关心",
    "choices": [
      {
        "text": "我对他人的情绪变化很敏感，会主动关心",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "不太擅长察觉他人情绪，需要对方明确表达",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 25,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢在社交中交换信息，拓宽眼界",
    "choices": [
      {
        "text": "我喜欢在社交中交换信息，拓宽眼界",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "更愿意在独处中学习，获取信息",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 26,
    "dimension": "EI",
    "pole": "E",
    "text": "我说话时表情丰富、肢体语言较多",
    "choices": [
      {
        "text": "我说话时表情丰富、肢体语言较多",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "说话时表情和肢体语言较少，比较克制",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 27,
    "dimension": "EI",
    "pole": "E",
    "text": "我能快速和不同性格的人相处融洽",
    "choices": [
      {
        "text": "我能快速和不同性格的人相处融洽",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "只和性格合拍的人相处，对不合拍的人保持距离",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 28,
    "dimension": "EI",
    "pole": "E",
    "text": "我习惯把想法说出来和他人探讨",
    "choices": [
      {
        "text": "我习惯把想法说出来和他人探讨",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "想法成熟后才会分享，避免被质疑",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 29,
    "dimension": "EI",
    "pole": "E",
    "text": "周末若没人约，我会主动联系朋友",
    "choices": [
      {
        "text": "周末若没人约，我会主动联系朋友",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "没人约就独处，享受独处时光",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 30,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢参与团队讨论，发表自己的建议",
    "choices": [
      {
        "text": "我喜欢参与团队讨论，发表自己的建议",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "团队讨论中，我更倾向于倾听，较少发言",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 31,
    "dimension": "EI",
    "pole": "E",
    "text": "我容易被他人的情绪带动，跟着开心或难过",
    "choices": [
      {
        "text": "我容易被他人的情绪带动，跟着开心或难过",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "情绪较稳定，不易受他人影响",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 32,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢尝试新的社交方式，比如线上社群、线下沙龙",
    "choices": [
      {
        "text": "我喜欢尝试新的社交方式，比如线上社群、线下沙龙",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "对新社交方式不感兴趣，保持原有社交习惯",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 33,
    "dimension": "EI",
    "pole": "E",
    "text": "我习惯在他人面前展现真实的自己，不掩饰",
    "choices": [
      {
        "text": "我习惯在他人面前展现真实的自己，不掩饰",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "会在他人面前保持分寸，不轻易暴露缺点",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 34,
    "dimension": "EI",
    "pole": "E",
    "text": "我需要他人的认可和鼓励，才能更有动力",
    "choices": [
      {
        "text": "我需要他人的认可和鼓励，才能更有动力",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "动力来自于自身，不需要他人的认可",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 35,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢和朋友一起做事，比如吃饭、看电影",
    "choices": [
      {
        "text": "我喜欢和朋友一起做事，比如吃饭、看电影",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "更愿意独自完成这些事，自由且随意",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 36,
    "dimension": "EI",
    "pole": "E",
    "text": "遇到问题时，我会先和他人商量，再做决定",
    "choices": [
      {
        "text": "遇到问题时，我会先和他人商量，再做决定",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "会自己先分析，再做决定，必要时才咨询他人",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 37,
    "dimension": "EI",
    "pole": "E",
    "text": "我对社交场合的规则很熟悉，能灵活应对",
    "choices": [
      {
        "text": "我对社交场合的规则很熟悉，能灵活应对",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "不太懂社交规则，容易显得拘谨",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 38,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢主动发起话题，避免聊天冷场",
    "choices": [
      {
        "text": "我喜欢主动发起话题，避免聊天冷场",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "不擅长发起话题，更愿意配合他人的话题",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 39,
    "dimension": "EI",
    "pole": "E",
    "text": "我独处时间过长，会觉得孤独和焦虑",
    "choices": [
      {
        "text": "我独处时间过长，会觉得孤独和焦虑",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "独处时间越长，越觉得放松和舒适",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 40,
    "dimension": "EI",
    "pole": "E",
    "text": "我习惯和他人保持密切联系，每天都有互动",
    "choices": [
      {
        "text": "我习惯和他人保持密切联系，每天都有互动",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "和他人联系频率较低，按需沟通",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 41,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢在社交中展现自己的特长和能力",
    "choices": [
      {
        "text": "我喜欢在社交中展现自己的特长和能力",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "不喜欢刻意展现自己，低调做人",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 42,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢和他人分享自己的计划和目标",
    "choices": [
      {
        "text": "我喜欢和他人分享自己的计划和目标",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "计划和目标只放在心里，不轻易告诉他人",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 43,
    "dimension": "EI",
    "pole": "E",
    "text": "我在社交中不害怕冲突，会主动解决问题",
    "choices": [
      {
        "text": "我在社交中不害怕冲突，会主动解决问题",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "害怕社交冲突，会尽量回避",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 44,
    "dimension": "EI",
    "pole": "E",
    "text": "我需要通过和他人交流，确认自己的想法是否正确",
    "choices": [
      {
        "text": "我需要通过和他人交流，确认自己的想法是否正确",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "自己能判断想法的正确性，不需要他人验证",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 45,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢热闹的工作环境，和同事互动频繁",
    "choices": [
      {
        "text": "我喜欢热闹的工作环境，和同事互动频繁",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "喜欢安静的工作环境，专注于自己的工作",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 46,
    "dimension": "EI",
    "pole": "E",
    "text": "我会主动记住他人的喜好，维系关系",
    "choices": [
      {
        "text": "我会主动记住他人的喜好，维系关系",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "不太会刻意记住他人喜好，顺其自然",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 47,
    "dimension": "EI",
    "pole": "E",
    "text": "我喜欢参与公益活动、集体志愿活动",
    "choices": [
      {
        "text": "我喜欢参与公益活动、集体志愿活动",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "更愿意独自做公益，比如捐款、线上助力",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 48,
    "dimension": "EI",
    "pole": "E",
    "text": "我习惯在他人面前表达自己的不满和诉求",
    "choices": [
      {
        "text": "我习惯在他人面前表达自己的不满和诉求",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "会压抑自己的不满，不轻易表达诉求",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 49,
    "dimension": "EI",
    "pole": "E",
    "text": "我对身边的社交机会很敏锐，会主动抓住",
    "choices": [
      {
        "text": "我对身边的社交机会很敏锐，会主动抓住",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "对社交机会不敏感，容易错过",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 50,
    "dimension": "EI",
    "pole": "E",
    "text": "我独处时会觉得无聊，总想找事做",
    "choices": [
      {
        "text": "我独处时会觉得无聊，总想找事做",
        "pole": "E",
        "weight": 1
      },
      {
        "text": "独处时能找到自己的节奏，不觉得无聊",
        "pole": "I",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 51,
    "dimension": "SN",
    "pole": "S",
    "text": "我更关注事物的具体细节，而非整体趋势",
    "choices": [
      {
        "text": "我更关注事物的具体细节，而非整体趋势",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "更关注事物的整体趋势，而非具体细节",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 52,
    "dimension": "SN",
    "pole": "S",
    "text": "我习惯从过往经验中寻找解决问题的方法",
    "choices": [
      {
        "text": "我习惯从过往经验中寻找解决问题的方法",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "习惯从新的角度思考，尝试创新方法",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 53,
    "dimension": "SN",
    "pole": "S",
    "text": "我对实际存在的、可触摸的事物更感兴趣",
    "choices": [
      {
        "text": "我对实际存在的、可触摸的事物更感兴趣",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "对抽象的、未来的事物更感兴趣",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 54,
    "dimension": "SN",
    "pole": "S",
    "text": "我说话时喜欢列举具体事例，让表达更清晰",
    "choices": [
      {
        "text": "我说话时喜欢列举具体事例，让表达更清晰",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "说话时喜欢提炼核心观点，不纠结于事例",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 55,
    "dimension": "SN",
    "pole": "S",
    "text": "我更相信亲眼所见、亲身经历的事",
    "choices": [
      {
        "text": "我更相信亲眼所见、亲身经历的事",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "更相信直觉和预感，有时会忽略眼前的事实",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 56,
    "dimension": "SN",
    "pole": "S",
    "text": "我做事时会一步一步按流程来，不跳过环节",
    "choices": [
      {
        "text": "我做事时会一步一步按流程来，不跳过环节",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "做事时喜欢找捷径，灵活调整流程",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 57,
    "dimension": "SN",
    "pole": "S",
    "text": "我对事物的描述更注重事实和数据",
    "choices": [
      {
        "text": "我对事物的描述更注重事实和数据",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "对事物的描述更注重感受和联想",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 58,
    "dimension": "SN",
    "pole": "S",
    "text": "我喜欢学习具体的技能，比如烹饪、手工",
    "choices": [
      {
        "text": "我喜欢学习具体的技能，比如烹饪、手工",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "喜欢学习抽象的知识，比如哲学、心理学",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 59,
    "dimension": "SN",
    "pole": "S",
    "text": "我看待问题时，更关注“是什么”",
    "choices": [
      {
        "text": "我看待问题时，更关注“是什么”",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "看待问题时，更关注“为什么”和“会怎样”",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 60,
    "dimension": "SN",
    "pole": "S",
    "text": "我习惯按部就班完成计划，不轻易改变",
    "choices": [
      {
        "text": "我习惯按部就班完成计划，不轻易改变",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "计划只是参考，会根据实际情况灵活调整",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 61,
    "dimension": "SN",
    "pole": "S",
    "text": "我对生活中的细节很敏感，比如环境的整洁度",
    "choices": [
      {
        "text": "我对生活中的细节很敏感，比如环境的整洁度",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "对生活中的细节不太在意，更关注整体氛围",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 62,
    "dimension": "SN",
    "pole": "S",
    "text": "我喜欢听真实发生的故事，而非虚构的童话",
    "choices": [
      {
        "text": "我喜欢听真实发生的故事，而非虚构的童话",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "喜欢听虚构的故事，享受想象力带来的乐趣",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 63,
    "dimension": "SN",
    "pole": "S",
    "text": "我解决问题时，会优先考虑可行性和实用性",
    "choices": [
      {
        "text": "我解决问题时，会优先考虑可行性和实用性",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "解决问题时，会优先考虑创新性和可能性",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 64,
    "dimension": "SN",
    "pole": "S",
    "text": "我习惯记住具体的信息，比如人名、日期",
    "choices": [
      {
        "text": "我习惯记住具体的信息，比如人名、日期",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "习惯记住抽象的信息，比如观点、理念",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 65,
    "dimension": "SN",
    "pole": "S",
    "text": "我对当下的状态很满足，很少幻想未来",
    "choices": [
      {
        "text": "我对当下的状态很满足，很少幻想未来",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "经常幻想未来的样子，对当下不够关注",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 66,
    "dimension": "SN",
    "pole": "S",
    "text": "我喜欢从事具体的工作，比如行政、技术",
    "choices": [
      {
        "text": "我喜欢从事具体的工作，比如行政、技术",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "喜欢从事抽象的工作，比如策划、设计",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 67,
    "dimension": "SN",
    "pole": "S",
    "text": "我说话时不会脱离实际，不夸大其词",
    "choices": [
      {
        "text": "我说话时不会脱离实际，不夸大其词",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "说话时喜欢拓展联想，偶尔会脱离实际",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 68,
    "dimension": "SN",
    "pole": "S",
    "text": "我更擅长处理具体的事务，而非复杂的人际关系",
    "choices": [
      {
        "text": "我更擅长处理具体的事务，而非复杂的人际关系",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "更擅长处理复杂的人际关系，而非具体事务",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 69,
    "dimension": "SN",
    "pole": "S",
    "text": "我对数字、数据很敏感，能快速捕捉关键信息",
    "choices": [
      {
        "text": "我对数字、数据很敏感，能快速捕捉关键信息",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "对数字、数据不敏感，更关注文字和感受",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 70,
    "dimension": "SN",
    "pole": "S",
    "text": "我习惯按既定规则做事，不轻易打破规则",
    "choices": [
      {
        "text": "我习惯按既定规则做事，不轻易打破规则",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "觉得规则是可以变通的，只要能达成目标",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 71,
    "dimension": "SN",
    "pole": "S",
    "text": "我喜欢收藏具体的物品，比如邮票、照片",
    "choices": [
      {
        "text": "我喜欢收藏具体的物品，比如邮票、照片",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "喜欢收藏有特殊意义的物品，不纠结于形式",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 72,
    "dimension": "SN",
    "pole": "S",
    "text": "我学习新知识时，需要结合实例才能理解",
    "choices": [
      {
        "text": "我学习新知识时，需要结合实例才能理解",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "学习新知识时，能快速理解抽象概念",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 73,
    "dimension": "SN",
    "pole": "S",
    "text": "我看待他人时，更关注其实际行为，而非潜在想法",
    "choices": [
      {
        "text": "我看待他人时，更关注其实际行为，而非潜在想法",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "看待他人时，更关注其潜在想法，而非表面行为",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 74,
    "dimension": "SN",
    "pole": "S",
    "text": "我做事时更注重过程的完整性，而非结果的创新性",
    "choices": [
      {
        "text": "我做事时更注重过程的完整性，而非结果的创新性",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "做事时更注重结果的创新性，而非过程的完整性",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 75,
    "dimension": "SN",
    "pole": "S",
    "text": "我对传统的事物更有好感，愿意传承",
    "choices": [
      {
        "text": "我对传统的事物更有好感，愿意传承",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "对新鲜事物更有好感，愿意尝试",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 76,
    "dimension": "SN",
    "pole": "S",
    "text": "我说话时逻辑清晰，基于事实推导",
    "choices": [
      {
        "text": "我说话时逻辑清晰，基于事实推导",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "说话时富有想象力，基于联想延伸",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 77,
    "dimension": "SN",
    "pole": "S",
    "text": "我更擅长记忆具体的知识点，而非知识框架",
    "choices": [
      {
        "text": "我更擅长记忆具体的知识点，而非知识框架",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "更擅长搭建知识框架，而非记忆具体知识点",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 78,
    "dimension": "SN",
    "pole": "S",
    "text": "我习惯在现有基础上改进，而非推倒重来",
    "choices": [
      {
        "text": "我习惯在现有基础上改进，而非推倒重来",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "习惯推倒重来，追求全新的解决方案",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 79,
    "dimension": "SN",
    "pole": "S",
    "text": "我对生活的规划更注重当下的安排",
    "choices": [
      {
        "text": "我对生活的规划更注重当下的安排",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "对生活的规划更注重未来的发展",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 80,
    "dimension": "SN",
    "pole": "S",
    "text": "我喜欢参与实际的活动，比如运动、园艺",
    "choices": [
      {
        "text": "我喜欢参与实际的活动，比如运动、园艺",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "喜欢参与思考类的活动，比如辩论、冥想",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 81,
    "dimension": "SN",
    "pole": "S",
    "text": "我看待问题时，不会轻易联想其他无关事物",
    "choices": [
      {
        "text": "我看待问题时，不会轻易联想其他无关事物",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "看待问题时，会不自觉联想很多相关事物",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 82,
    "dimension": "SN",
    "pole": "S",
    "text": "我做事时会提前考虑好所有细节，避免出错",
    "choices": [
      {
        "text": "我做事时会提前考虑好所有细节，避免出错",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "做事时不会纠结细节，遇到问题再解决",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 83,
    "dimension": "SN",
    "pole": "S",
    "text": "我对食物、衣物的要求更注重实用性",
    "choices": [
      {
        "text": "我对食物、衣物的要求更注重实用性",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "对食物、衣物的要求更注重个性化和美感",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 84,
    "dimension": "SN",
    "pole": "S",
    "text": "我学习技能时，会反复练习，直到熟练掌握",
    "choices": [
      {
        "text": "我学习技能时，会反复练习，直到熟练掌握",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "学习技能时，掌握核心方法后就不会反复练习",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 85,
    "dimension": "SN",
    "pole": "S",
    "text": "我更相信科学依据，而非直觉判断",
    "choices": [
      {
        "text": "我更相信科学依据，而非直觉判断",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "更相信直觉判断，有时会忽略科学依据",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 86,
    "dimension": "SN",
    "pole": "S",
    "text": "我习惯把事物分类整理，让环境更有序",
    "choices": [
      {
        "text": "我习惯把事物分类整理，让环境更有序",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "不喜欢刻意分类整理，觉得顺其自然就好",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 87,
    "dimension": "SN",
    "pole": "S",
    "text": "我对他人的承诺更看重是否能实际兑现",
    "choices": [
      {
        "text": "我对他人的承诺更看重是否能实际兑现",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "对他人的承诺更看重是否有诚意，而非形式",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 88,
    "dimension": "SN",
    "pole": "S",
    "text": "我喜欢阅读纪实类书籍、新闻",
    "choices": [
      {
        "text": "我喜欢阅读纪实类书籍、新闻",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "喜欢阅读科幻类、小说类书籍",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 89,
    "dimension": "SN",
    "pole": "S",
    "text": "我解决问题时，会优先参考过往的成功案例",
    "choices": [
      {
        "text": "我解决问题时，会优先参考过往的成功案例",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "解决问题时，会优先探索新的可能性",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 90,
    "dimension": "SN",
    "pole": "S",
    "text": "我对时间的感知很精准，习惯按时完成任务",
    "choices": [
      {
        "text": "我对时间的感知很精准，习惯按时完成任务",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "对时间的感知不精准，偶尔会拖延任务",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 91,
    "dimension": "SN",
    "pole": "S",
    "text": "我喜欢动手操作，比如修理、组装",
    "choices": [
      {
        "text": "我喜欢动手操作，比如修理、组装",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "喜欢动脑思考，比如规划、设计",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 92,
    "dimension": "SN",
    "pole": "S",
    "text": "我看待事物时，更关注其本质属性",
    "choices": [
      {
        "text": "我看待事物时，更关注其本质属性",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "看待事物时，更关注其潜在价值",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 93,
    "dimension": "SN",
    "pole": "S",
    "text": "我做事时会遵循“先易后难”的原则",
    "choices": [
      {
        "text": "我做事时会遵循“先易后难”的原则",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "做事时会遵循“先难后易”的原则，挑战难点",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 94,
    "dimension": "SN",
    "pole": "S",
    "text": "我对身边的环境变化很敏感，能快速察觉",
    "choices": [
      {
        "text": "我对身边的环境变化很敏感，能快速察觉",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "对身边的环境变化不敏感，需要他人提醒",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 95,
    "dimension": "SN",
    "pole": "S",
    "text": "我喜欢按传统习俗过节，保留仪式感",
    "choices": [
      {
        "text": "我喜欢按传统习俗过节，保留仪式感",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "不喜欢被传统习俗束缚，愿意尝试新的过节方式",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 96,
    "dimension": "SN",
    "pole": "S",
    "text": "我说话时会避免使用模糊的词汇，力求准确",
    "choices": [
      {
        "text": "我说话时会避免使用模糊的词汇，力求准确",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "说话时会使用模糊的词汇，留有余地",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 97,
    "dimension": "SN",
    "pole": "S",
    "text": "我更擅长处理当下的问题，而非预测未来的风险",
    "choices": [
      {
        "text": "我更擅长处理当下的问题，而非预测未来的风险",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "更擅长预测未来的风险，而非处理当下的问题",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 98,
    "dimension": "SN",
    "pole": "S",
    "text": "我喜欢收藏有实用价值的物品",
    "choices": [
      {
        "text": "我喜欢收藏有实用价值的物品",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "喜欢收藏有纪念意义或创意的物品",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 99,
    "dimension": "SN",
    "pole": "S",
    "text": "我更在意事物的实际用途，而非象征意义",
    "choices": [
      {
        "text": "我更在意事物的实际用途，而非象征意义",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "更在意事物的象征意义，而非实际用途",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 100,
    "dimension": "SN",
    "pole": "S",
    "text": "我习惯按说明书操作物品，不随意尝试",
    "choices": [
      {
        "text": "我习惯按说明书操作物品，不随意尝试",
        "pole": "S",
        "weight": 1
      },
      {
        "text": "喜欢探索物品的隐藏功能，不局限于说明书",
        "pole": "N",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 101,
    "dimension": "TF",
    "pole": "T",
    "text": "做决定时，我更看重逻辑和道理",
    "choices": [
      {
        "text": "做决定时，我更看重逻辑和道理",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "更看重情感和他人感受",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 102,
    "dimension": "TF",
    "pole": "T",
    "text": "面对他人的错误，我会直接指出，帮助其改进",
    "choices": [
      {
        "text": "面对他人的错误，我会直接指出，帮助其改进",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会委婉提醒，避免伤害他人自尊",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 103,
    "dimension": "TF",
    "pole": "T",
    "text": "我评价事物时，更注重客观事实，而非主观感受",
    "choices": [
      {
        "text": "我评价事物时，更注重客观事实，而非主观感受",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "更注重主观感受，而非客观事实",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 104,
    "dimension": "TF",
    "pole": "T",
    "text": "遇到冲突时，我会冷静分析问题，寻求解决方案",
    "choices": [
      {
        "text": "遇到冲突时，我会冷静分析问题，寻求解决方案",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会先安抚他人情绪，再解决问题",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 105,
    "dimension": "TF",
    "pole": "T",
    "text": "我认为规则对所有人都应一视同仁，不能例外",
    "choices": [
      {
        "text": "我认为规则对所有人都应一视同仁，不能例外",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "认为规则可以灵活调整，照顾特殊情况",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 106,
    "dimension": "TF",
    "pole": "T",
    "text": "我习惯用理性的方式控制情绪，不轻易表露",
    "choices": [
      {
        "text": "我习惯用理性的方式控制情绪，不轻易表露",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "习惯自然流露情绪，不刻意控制",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 107,
    "dimension": "TF",
    "pole": "T",
    "text": "我做选择时，会优先考虑利弊得失",
    "choices": [
      {
        "text": "我做选择时，会优先考虑利弊得失",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会优先考虑是否符合自己的价值观和感受",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 108,
    "dimension": "TF",
    "pole": "T",
    "text": "面对他人的求助，我会先判断是否合理，再决定是否帮忙",
    "choices": [
      {
        "text": "面对他人的求助，我会先判断是否合理，再决定是否帮忙",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会先共情他人，再尽力帮忙",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 109,
    "dimension": "TF",
    "pole": "T",
    "text": "我认为公平比人情更重要",
    "choices": [
      {
        "text": "我认为公平比人情更重要",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "认为人情比公平更重要",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 110,
    "dimension": "TF",
    "pole": "T",
    "text": "我说话时会客观评价，不掺杂个人情感",
    "choices": [
      {
        "text": "我说话时会客观评价，不掺杂个人情感",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "说话时会掺杂个人情感，表达自己的态度",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 111,
    "dimension": "TF",
    "pole": "T",
    "text": "我能理性看待他人的批评，从中吸取教训",
    "choices": [
      {
        "text": "我能理性看待他人的批评，从中吸取教训",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "他人的批评会让我难过，难以理性接受",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 112,
    "dimension": "TF",
    "pole": "T",
    "text": "我做决定时，不会被他人的情绪影响",
    "choices": [
      {
        "text": "我做决定时，不会被他人的情绪影响",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会被他人的情绪影响，调整自己的决定",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 113,
    "dimension": "TF",
    "pole": "T",
    "text": "我认为做事的核心是达成目标，过程可以灵活调整",
    "choices": [
      {
        "text": "我认为做事的核心是达成目标，过程可以灵活调整",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "认为做事的核心是照顾他人感受，目标可以让步",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 114,
    "dimension": "TF",
    "pole": "T",
    "text": "面对分歧，我喜欢和他人辩论，理清逻辑",
    "choices": [
      {
        "text": "面对分歧，我喜欢和他人辩论，理清逻辑",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "不喜欢辩论，害怕伤害彼此感情",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 115,
    "dimension": "TF",
    "pole": "T",
    "text": "我习惯用数据和事实支撑自己的观点",
    "choices": [
      {
        "text": "我习惯用数据和事实支撑自己的观点",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "习惯用感受和体验支撑自己的观点",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 116,
    "dimension": "TF",
    "pole": "T",
    "text": "我对他人的评价更看重其能力和表现",
    "choices": [
      {
        "text": "我对他人的评价更看重其能力和表现",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "更看重其人品和待人接物的态度",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 117,
    "dimension": "TF",
    "pole": "T",
    "text": "我做决定后，不会轻易因为他人的反对而改变",
    "choices": [
      {
        "text": "我做决定后，不会轻易因为他人的反对而改变",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会考虑他人的反对意见，若影响感情则改变",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 118,
    "dimension": "TF",
    "pole": "T",
    "text": "我认为情绪会影响判断，应尽量避免情绪化",
    "choices": [
      {
        "text": "我认为情绪会影响判断，应尽量避免情绪化",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "认为情绪是正常的，无需刻意回避",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 119,
    "dimension": "TF",
    "pole": "T",
    "text": "我面对问题时，会先分析原因，再找解决办法",
    "choices": [
      {
        "text": "我面对问题时，会先分析原因，再找解决办法",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会先关心他人的情绪，再分析原因",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 120,
    "dimension": "TF",
    "pole": "T",
    "text": "我不喜欢被他人用情感绑架，做自己不愿做的事",
    "choices": [
      {
        "text": "我不喜欢被他人用情感绑架，做自己不愿做的事",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "愿意为了照顾他人情感，做自己不愿做的事",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 121,
    "dimension": "TF",
    "pole": "T",
    "text": "我评价自己时，更看重做事的结果和效率",
    "choices": [
      {
        "text": "我评价自己时，更看重做事的结果和效率",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "更看重做事的过程和感受",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 122,
    "dimension": "TF",
    "pole": "T",
    "text": "遇到他人的误解，我会主动解释清楚，理清事实",
    "choices": [
      {
        "text": "遇到他人的误解，我会主动解释清楚，理清事实",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会觉得委屈，等待他人主动理解",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 123,
    "dimension": "TF",
    "pole": "T",
    "text": "我认为朋友之间也应保持理性，分清是非",
    "choices": [
      {
        "text": "我认为朋友之间也应保持理性，分清是非",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "认为朋友之间应包容，不必过分分清是非",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 124,
    "dimension": "TF",
    "pole": "T",
    "text": "我做选择时，会优先考虑长远利益，而非短期情绪",
    "choices": [
      {
        "text": "我做选择时，会优先考虑长远利益，而非短期情绪",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会优先考虑短期情绪，再考虑长远利益",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 125,
    "dimension": "TF",
    "pole": "T",
    "text": "我习惯对事不对人，不因为个人喜好影响判断",
    "choices": [
      {
        "text": "我习惯对事不对人，不因为个人喜好影响判断",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "习惯对人不对事，会因为个人喜好调整态度",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 126,
    "dimension": "TF",
    "pole": "T",
    "text": "面对他人的赞美，我会理性看待，不骄傲自满",
    "choices": [
      {
        "text": "面对他人的赞美，我会理性看待，不骄傲自满",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会很开心，重视他人的认可",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 127,
    "dimension": "TF",
    "pole": "T",
    "text": "我认为工作中应优先考虑工作效率，而非人际关系",
    "choices": [
      {
        "text": "我认为工作中应优先考虑工作效率，而非人际关系",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "认为工作中应优先维护人际关系，再追求效率",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 128,
    "dimension": "TF",
    "pole": "T",
    "text": "我不擅长说安慰的话，更愿意提供实际帮助",
    "choices": [
      {
        "text": "我不擅长说安慰的话，更愿意提供实际帮助",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "擅长说安慰的话，能共情他人的痛苦",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 129,
    "dimension": "TF",
    "pole": "T",
    "text": "我做决定时，会综合考虑各种因素，权衡利弊",
    "choices": [
      {
        "text": "我做决定时，会综合考虑各种因素，权衡利弊",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会跟着自己的心意走，不纠结利弊",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 130,
    "dimension": "TF",
    "pole": "T",
    "text": "面对他人的过错，我会按规则处理，不偏袒",
    "choices": [
      {
        "text": "面对他人的过错，我会按规则处理，不偏袒",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会根据关系亲疏，调整处理方式",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 131,
    "dimension": "TF",
    "pole": "T",
    "text": "我习惯用理性的思维规划生活，避免混乱",
    "choices": [
      {
        "text": "我习惯用理性的思维规划生活，避免混乱",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "习惯跟着情感走，享受生活的不确定性",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 132,
    "dimension": "TF",
    "pole": "T",
    "text": "遇到挫折时，我会冷静分析问题，重新出发",
    "choices": [
      {
        "text": "遇到挫折时，我会冷静分析问题，重新出发",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会情绪低落，需要他人安慰才能恢复",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 133,
    "dimension": "TF",
    "pole": "T",
    "text": "我认为诚实比委婉更重要，即使会伤害他人",
    "choices": [
      {
        "text": "我认为诚实比委婉更重要，即使会伤害他人",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "认为委婉比诚实更重要，避免伤害他人",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 134,
    "dimension": "TF",
    "pole": "T",
    "text": "我对他人的要求会明确拒绝，不拖泥带水",
    "choices": [
      {
        "text": "我对他人的要求会明确拒绝，不拖泥带水",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "不好意思拒绝他人，容易勉强自己",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 135,
    "dimension": "TF",
    "pole": "T",
    "text": "我认为团队合作中，应优先考虑整体利益，牺牲个人情绪",
    "choices": [
      {
        "text": "我认为团队合作中，应优先考虑整体利益，牺牲个人情绪",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "认为团队合作中，应照顾个人情绪，再追求整体利益",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 136,
    "dimension": "TF",
    "pole": "T",
    "text": "我习惯用逻辑说服他人，而非情感打动",
    "choices": [
      {
        "text": "我习惯用逻辑说服他人，而非情感打动",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "习惯用情感打动他人，而非逻辑说服",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 137,
    "dimension": "TF",
    "pole": "T",
    "text": "面对他人的情绪爆发，我会保持冷静，安抚对方",
    "choices": [
      {
        "text": "面对他人的情绪爆发，我会保持冷静，安抚对方",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会被对方的情绪带动，也跟着激动",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 138,
    "dimension": "TF",
    "pole": "T",
    "text": "我做决定时更依赖理性分析，而非内心感受",
    "choices": [
      {
        "text": "我做决定时更依赖理性分析，而非内心感受",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "做决定时更依赖内心感受，而非理性分析",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 139,
    "dimension": "TF",
    "pole": "T",
    "text": "我认为评价他人应基于客观表现，而非个人好感",
    "choices": [
      {
        "text": "我认为评价他人应基于客观表现，而非个人好感",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "认为评价他人可结合个人好感，不必完全客观",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 140,
    "dimension": "TF",
    "pole": "T",
    "text": "面对不公，我会优先维护规则公平，而非照顾弱者情绪",
    "choices": [
      {
        "text": "面对不公，我会优先维护规则公平，而非照顾弱者情绪",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "面对不公，我会优先照顾弱者情绪，而非死守规则",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 141,
    "dimension": "TF",
    "pole": "T",
    "text": "我不擅长用情感安抚他人，更习惯给出解决方案",
    "choices": [
      {
        "text": "我不擅长用情感安抚他人，更习惯给出解决方案",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "我擅长用情感安抚他人，解决方案可暂缓",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 142,
    "dimension": "TF",
    "pole": "T",
    "text": "职场中同事出错影响进度，我会先追责定责再补救",
    "choices": [
      {
        "text": "职场中同事出错影响进度，我会先追责定责再补救",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "先一起补救减少损失，再温和沟通问题原因",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 143,
    "dimension": "TF",
    "pole": "T",
    "text": "我认为选择伴侣应优先考虑三观契合与现实匹配",
    "choices": [
      {
        "text": "我认为选择伴侣应优先考虑三观契合与现实匹配",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "优先考虑相处时的心动感与情感共鸣",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 144,
    "dimension": "TF",
    "pole": "T",
    "text": "朋友倾诉烦恼，我会帮他分析问题根源并提建议",
    "choices": [
      {
        "text": "朋友倾诉烦恼，我会帮他分析问题根源并提建议",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "主要安静倾听，给予陪伴和情感支持",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 145,
    "dimension": "TF",
    "pole": "T",
    "text": "评价一部电影，我更关注剧情逻辑与叙事手法",
    "choices": [
      {
        "text": "评价一部电影，我更关注剧情逻辑与叙事手法",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "更关注带给我的情感冲击与共鸣程度",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 146,
    "dimension": "TF",
    "pole": "T",
    "text": "分配任务时，我会按能力分工确保效率最大化",
    "choices": [
      {
        "text": "分配任务时，我会按能力分工确保效率最大化",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "会考虑他人意愿，尽量分配其愿意做的事",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 147,
    "dimension": "TF",
    "pole": "T",
    "text": "得知他人犯错，我会先判断错误影响再决定态度",
    "choices": [
      {
        "text": "得知他人犯错，我会先判断错误影响再决定态度",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "先体谅其处境和难处，再看待错误本身",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 148,
    "dimension": "TF",
    "pole": "T",
    "text": "我认为帮助他人应量力而行，有明确边界",
    "choices": [
      {
        "text": "我认为帮助他人应量力而行，有明确边界",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "只要对方有需求，愿意尽力迁就和付出",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 149,
    "dimension": "TF",
    "pole": "T",
    "text": "制定家庭规则，我更看重公平性与可执行性",
    "choices": [
      {
        "text": "制定家庭规则，我更看重公平性与可执行性",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "更看重家人的接受度与情感舒适度",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 150,
    "dimension": "TF",
    "pole": "T",
    "text": "面对他人的情感勒索，我会坚定立场拒绝",
    "choices": [
      {
        "text": "面对他人的情感勒索，我会坚定立场拒绝",
        "pole": "T",
        "weight": 1
      },
      {
        "text": "容易心软妥协，不想让对方难过",
        "pole": "F",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 151,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢提前制定计划，按计划推进事情",
    "choices": [
      {
        "text": "我喜欢提前制定计划，按计划推进事情",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "喜欢顺其自然，不喜欢被计划束缚",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 152,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯把事情提前完成，避免拖延",
    "choices": [
      {
        "text": "我习惯把事情提前完成，避免拖延",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "习惯在截止日期前完成，享受紧迫感",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 153,
    "dimension": "JP",
    "pole": "J",
    "text": "我对生活和工作有明确的目标和规划",
    "choices": [
      {
        "text": "我对生活和工作有明确的目标和规划",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "对生活和工作没有明确目标，随遇而安",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 154,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢把物品整理得井井有条，环境整洁",
    "choices": [
      {
        "text": "我喜欢把物品整理得井井有条，环境整洁",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "物品摆放随意，只要自己能找到就好",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 155,
    "dimension": "JP",
    "pole": "J",
    "text": "遇到不确定的事情，我会尽快做出决定，避免纠结",
    "choices": [
      {
        "text": "遇到不确定的事情，我会尽快做出决定，避免纠结",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "喜欢保持选择的灵活性，不急于做决定",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 156,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯按既定流程做事，不轻易改变",
    "choices": [
      {
        "text": "我习惯按既定流程做事，不轻易改变",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "习惯灵活调整流程，根据实际情况变化",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 157,
    "dimension": "JP",
    "pole": "J",
    "text": "我对未完成的事情会很焦虑，想尽快结束",
    "choices": [
      {
        "text": "我对未完成的事情会很焦虑，想尽快结束",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "对未完成的事情不焦虑，慢慢推进就好",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 158,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢提前预约、安排好出行、聚会等事宜",
    "choices": [
      {
        "text": "我喜欢提前预约、安排好出行、聚会等事宜",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "喜欢临时决定出行、聚会，享受意外感",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 159,
    "dimension": "JP",
    "pole": "J",
    "text": "我做事时喜欢有明确的结果，不喜欢不了了之",
    "choices": [
      {
        "text": "我做事时喜欢有明确的结果，不喜欢不了了之",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "做事时不执着于结果，享受过程就好",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 160,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯在开始做事前，做好充分的准备",
    "choices": [
      {
        "text": "我习惯在开始做事前，做好充分的准备",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "习惯边做边准备，灵活应对突发情况",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 161,
    "dimension": "JP",
    "pole": "J",
    "text": "我对生活的节奏有严格的把控，不轻易打乱",
    "choices": [
      {
        "text": "我对生活的节奏有严格的把控，不轻易打乱",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "生活节奏很随意，能适应各种变化",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 162,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢把任务分解成小步骤，逐一完成",
    "choices": [
      {
        "text": "我喜欢把任务分解成小步骤，逐一完成",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "喜欢整体推进任务，不刻意分解步骤",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 163,
    "dimension": "JP",
    "pole": "J",
    "text": "我不喜欢突发状况，会尽量避免",
    "choices": [
      {
        "text": "我不喜欢突发状况，会尽量避免",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "不排斥突发状况，能快速适应",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 164,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯每天制定待办清单，按清单执行",
    "choices": [
      {
        "text": "我习惯每天制定待办清单，按清单执行",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "不喜欢制定待办清单，想到什么做什么",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 165,
    "dimension": "JP",
    "pole": "J",
    "text": "我对他人的迟到很反感，重视时间观念",
    "choices": [
      {
        "text": "我对他人的迟到很反感，重视时间观念",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "对他人的迟到不反感，能包容",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 166,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢在事情结束后，总结经验教训",
    "choices": [
      {
        "text": "我喜欢在事情结束后，总结经验教训",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "事情结束后，很少总结，继续推进下一件事",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 167,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯提前规划好假期行程，不临时变动",
    "choices": [
      {
        "text": "我习惯提前规划好假期行程，不临时变动",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "假期行程喜欢临时决定，享受自由",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 168,
    "dimension": "JP",
    "pole": "J",
    "text": "我做事时追求效率，不浪费时间",
    "choices": [
      {
        "text": "我做事时追求效率，不浪费时间",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "做事时不追求效率，享受慢节奏",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 169,
    "dimension": "JP",
    "pole": "J",
    "text": "我对未完成的计划会很在意，想尽快落实",
    "choices": [
      {
        "text": "我对未完成的计划会很在意，想尽快落实",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "未完成的计划可以搁置，有机会再落实",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 170,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢把工作和生活分开，不混淆",
    "choices": [
      {
        "text": "我喜欢把工作和生活分开，不混淆",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "工作和生活可以融合，不用严格区分",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 171,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯在做出决定后，不再轻易改变",
    "choices": [
      {
        "text": "我习惯在做出决定后，不再轻易改变",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "做出决定后，若有更好的选择，会及时改变",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 172,
    "dimension": "JP",
    "pole": "J",
    "text": "我对环境的秩序感有要求，喜欢整齐有序",
    "choices": [
      {
        "text": "我对环境的秩序感有要求，喜欢整齐有序",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "对环境的秩序感没有要求，随意就好",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 173,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢提前了解事情的全貌，再开始行动",
    "choices": [
      {
        "text": "我喜欢提前了解事情的全貌，再开始行动",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "喜欢边行动边了解事情全貌，探索未知",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 174,
    "dimension": "JP",
    "pole": "J",
    "text": "我不喜欢拖延，有任务就立即处理",
    "choices": [
      {
        "text": "我不喜欢拖延，有任务就立即处理",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "偶尔会拖延，等有状态再处理任务",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 175,
    "dimension": "JP",
    "pole": "J",
    "text": "我对未来有明确的规划，比如3年、5年目标",
    "choices": [
      {
        "text": "我对未来有明确的规划，比如3年、5年目标",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "对未来没有明确规划，走一步看一步",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 176,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢按规则做事，不轻易打破规则",
    "choices": [
      {
        "text": "我喜欢按规则做事，不轻易打破规则",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "觉得规则可以灵活变通，不必严格遵守",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 177,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯在聚会前确定好时间、地点、流程",
    "choices": [
      {
        "text": "我习惯在聚会前确定好时间、地点、流程",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "聚会前不需要确定细节，到时候再商量",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 178,
    "dimension": "JP",
    "pole": "J",
    "text": "我做事时喜欢有明确的责任分工",
    "choices": [
      {
        "text": "我做事时喜欢有明确的责任分工",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "做事时不喜欢明确分工，大家一起协作就好",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 179,
    "dimension": "JP",
    "pole": "J",
    "text": "我对未解决的问题会一直放在心上，直到解决",
    "choices": [
      {
        "text": "我对未解决的问题会一直放在心上，直到解决",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "未解决的问题可以先放下，等时机成熟再解决",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 180,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢提前准备好第二天要用的物品",
    "choices": [
      {
        "text": "我喜欢提前准备好第二天要用的物品",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "第二天要用的物品，当天再准备就好",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 181,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯按固定的时间起床、睡觉，保持规律作息",
    "choices": [
      {
        "text": "我习惯按固定的时间起床、睡觉，保持规律作息",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "作息不固定，根据状态调整",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 182,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢在项目开始前，制定详细的执行方案",
    "choices": [
      {
        "text": "我喜欢在项目开始前，制定详细的执行方案",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "项目开始后，再根据实际情况制定方案",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 183,
    "dimension": "JP",
    "pole": "J",
    "text": "我不喜欢模糊不清的状态，希望事情有明确答案",
    "choices": [
      {
        "text": "我不喜欢模糊不清的状态，希望事情有明确答案",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "能接受模糊不清的状态，慢慢寻找答案",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 184,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯把重要的事情放在前面做，优先处理",
    "choices": [
      {
        "text": "我习惯把重要的事情放在前面做，优先处理",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "重要的事情可以和次要的事情穿插做",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 185,
    "dimension": "JP",
    "pole": "J",
    "text": "我对他人的计划变动很敏感，希望提前告知",
    "choices": [
      {
        "text": "我对他人的计划变动很敏感，希望提前告知",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "他人的计划变动可以接受，不用提前告知",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 186,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢在事情完成后，立即收尾，不拖延",
    "choices": [
      {
        "text": "我喜欢在事情完成后，立即收尾，不拖延",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "事情完成后，收尾工作可以慢慢做",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 187,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯用日历、备忘录记录重要事项",
    "choices": [
      {
        "text": "我习惯用日历、备忘录记录重要事项",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "不喜欢用日历、备忘录，靠记忆记录",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 188,
    "dimension": "JP",
    "pole": "J",
    "text": "我对生活的稳定性有要求，不喜欢频繁变化",
    "choices": [
      {
        "text": "我对生活的稳定性有要求，不喜欢频繁变化",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "喜欢生活有变化，不喜欢一成不变",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 189,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢在做出选择前，对比所有选项",
    "choices": [
      {
        "text": "我喜欢在做出选择前，对比所有选项",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "做出选择时，不需要对比所有选项，凭感觉就好",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 190,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯按既定的优先级处理任务",
    "choices": [
      {
        "text": "我习惯按既定的优先级处理任务",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "处理任务时，会根据当下状态调整优先级",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 191,
    "dimension": "JP",
    "pole": "J",
    "text": "我对未完成的任务会产生焦虑情绪",
    "choices": [
      {
        "text": "我对未完成的任务会产生焦虑情绪",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "未完成的任务不会让我焦虑，从容应对即可",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 192,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢提前规划好购物清单，按清单购买",
    "choices": [
      {
        "text": "我喜欢提前规划好购物清单，按清单购买",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "购物时不喜欢列清单，看到喜欢的就买",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 193,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯在工作结束后，整理好桌面和文件",
    "choices": [
      {
        "text": "我习惯在工作结束后，整理好桌面和文件",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "工作结束后，桌面和文件可以不用整理",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 194,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢有规律的生活，避免意外发生",
    "choices": [
      {
        "text": "我喜欢有规律的生活，避免意外发生",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "不喜欢规律的生活，期待意外发生",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 195,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯在开始一项新任务前，了解清楚要求和标准",
    "choices": [
      {
        "text": "我习惯在开始一项新任务前，了解清楚要求和标准",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "开始新任务后，再慢慢了解要求和标准",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 196,
    "dimension": "JP",
    "pole": "J",
    "text": "我喜欢把所有事情安排妥当后再休息",
    "choices": [
      {
        "text": "我喜欢把所有事情安排妥当后再休息",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "可以带着未完成的事安心休息，不急于收尾",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 197,
    "dimension": "JP",
    "pole": "J",
    "text": "我对突发的临时任务很抵触，影响原有计划",
    "choices": [
      {
        "text": "我对突发的临时任务很抵触，影响原有计划",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "不抵触临时任务，能灵活调整节奏应对",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 198,
    "dimension": "JP",
    "pole": "J",
    "text": "我习惯提前和他人确认好约定，避免变动",
    "choices": [
      {
        "text": "我习惯提前和他人确认好约定，避免变动",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "对约定不刻意确认，有变动再协商即可",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 199,
    "dimension": "JP",
    "pole": "J",
    "text": "我做事时喜欢追求闭环，不留下尾巴",
    "choices": [
      {
        "text": "我做事时喜欢追求闭环，不留下尾巴",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "做事不追求绝对闭环，留有弹性空间也可",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  },
  {
    "id": 200,
    "dimension": "JP",
    "pole": "J",
    "text": "我对生活中的不确定性会感到不安",
    "choices": [
      {
        "text": "我对生活中的不确定性会感到不安",
        "pole": "J",
        "weight": 1
      },
      {
        "text": "能坦然接受生活中的不确定性，随机应变",
        "pole": "P",
        "weight": 1
      }
    ],
    "weight": 1.0
  }
]
};

// #39 兼容层：app.js 渲染 + scorer 走 optionA/optionB 格式，200 题库是 choices[]
// 同步补一份 optionA/optionB 字段（不删 choices，保留原始数据）
MBTI_QUESTION_BANK_200.questions.forEach(q => {
  if (q.choices && !q.optionA) {
    q.optionA = q.choices[0];
    q.optionB = q.choices[1];
  }
});

// 浏览器端挂到 window（app.js VERSION_CONFIG.bankVar 用 window[MBTI_QUESTION_BANK_200] 读）
if (typeof window !== 'undefined') {
  window.MBTI_QUESTION_BANK_200 = MBTI_QUESTION_BANK_200;
}
