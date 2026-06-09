/**
 * MBTI计分引擎 - 核心算法
 * 输入：用户答案数组（每题选了A或B）
 * 输出：MBTI类型代码、维度分数、偏好强度、认知功能推导
 * 特点：
 * 1. 纯前端可运行，不依赖后端
 * 2. 支持60题标准版和28题快速版
 * 3. 输出荣格八维认知功能排序（增强功能）
 * 4. 支持偏好强度百分比（0-100%）
 */

class MBTIScorer {
  constructor(questionBank) {
    this.questions = questionBank.questions;
    this.dimensions = questionBank.dimensions;
    this.scoring = questionBank.scoring;
    
    // 认知功能映射表（荣格八维）
    this.cognitiveFunctions = {
      "INTJ": { stack: ["Ni", "Te", "Fi", "Se"], name: "Ni主导 - 内倾直觉" },
      "INTP": { stack: ["Ti", "Ne", "Si", "Fe"], name: "Ti主导 - 内倾思考" },
      "ENTJ": { stack: ["Te", "Ni", "Se", "Fi"], name: "Te主导 - 外倾思考" },
      "ENTP": { stack: ["Ne", "Ti", "Fe", "Si"], name: "Ne主导 - 外倾直觉" },
      "INFJ": { stack: ["Ni", "Fe", "Ti", "Se"], name: "Ni主导 - 内倾直觉" },
      "INFP": { stack: ["Fi", "Ne", "Si", "Te"], name: "Fi主导 - 内倾情感" },
      "ENFJ": { stack: ["Fe", "Ni", "Se", "Ti"], name: "Fe主导 - 外倾情感" },
      "ENFP": { stack: ["Ne", "Fi", "Te", "Si"], name: "Ne主导 - 外倾直觉" },
      "ISTJ": { stack: ["Si", "Te", "Fi", "Ne"], name: "Si主导 - 内倾实感" },
      "ISFJ": { stack: ["Si", "Fe", "Ti", "Ne"], name: "Si主导 - 内倾实感" },
      "ESTJ": { stack: ["Te", "Si", "Ne", "Fi"], name: "Te主导 - 外倾思考" },
      "ESFJ": { stack: ["Fe", "Si", "Ne", "Ti"], name: "Fe主导 - 外倾情感" },
      "ISTP": { stack: ["Ti", "Se", "Ni", "Fe"], name: "Ti主导 - 内倾思考" },
      "ISFP": { stack: ["Fi", "Se", "Ni", "Te"], name: "Fi主导 - 内倾情感" },
      "ESTP": { stack: ["Se", "Ti", "Fe", "Ni"], name: "Se主导 - 外倾实感" },
      "ESFP": { stack: ["Se", "Fi", "Te", "Ni"], name: "Se主导 - 外倾实感" }
    };
    
    // 认知功能描述
    this.functionDescriptions = {
      "Ni": "内倾直觉 - 洞察本质、预见未来、寻找深层意义",
      "Ne": "外倾直觉 - 探索可能、联想创新、发现新机会",
      "Si": "内倾实感 - 注重细节、经验积累、维护传统",
      "Se": "外倾实感 - 活在当下、感官敏锐、行动力强",
      "Ti": "内倾思考 - 逻辑分析、追求真理、构建内在体系",
      "Te": "外倾思考 - 效率导向、组织资源、达成目标",
      "Fi": "内倾情感 - 忠于自我、价值观驱动、深度共情",
      "Fe": "外倾情感 - 维护和谐、关注他人、社会适应性"
    };
  }

  /**
   * 核心计分方法
   * @param {Array} answers - 用户答案数组，每项为 { questionId, choice: 'A'|'B' }
   * @returns {Object} 完整计分结果
   */
  calculate(answers) {
    // 初始化维度分数
    const scores = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };
    
    // 统计每题得分
    answers.forEach(answer => {
      const question = this.questions.find(q => q.id === answer.questionId);
      if (!question) return;
      
      const selectedOption = answer.choice === 'A' ? question.optionA : question.optionB;
      if (selectedOption && selectedOption.pole) {
        scores[selectedOption.pole] += question.weight;
      }
    });
    
    // 计算四维度结果
    const result = this._computeDimensions(scores);
    
    // 生成类型代码
    const typeCode = result.code;
    
    // 获取认知功能
    const cognitiveFunctions = this._getCognitiveFunctions(typeCode);
    
    // 计算子维度（可选，用于更精细报告）
    const subDimensions = this._computeSubDimensions(scores);
    
    return {
      typeCode: typeCode,
      fullType: this._getFullTypeName(typeCode),
      dimensions: result.dimensions,
      rawScores: scores,
      preferenceStrength: result.preferenceStrength,
      cognitiveFunctions: cognitiveFunctions,
      subDimensions: subDimensions,
      // 用于报告生成的结构化数据
      reportData: {
        typeCode: typeCode,
        eiPercent: result.dimensions.EI.percent,
        snPercent: result.dimensions.SN.percent,
        tfPercent: result.dimensions.TF.percent,
        jpPercent: result.dimensions.JP.percent,
        dominantFunction: cognitiveFunctions.stack[0],
        auxiliaryFunction: cognitiveFunctions.stack[1],
        tertiaryFunction: cognitiveFunctions.stack[2],
        inferiorFunction: cognitiveFunctions.stack[3]
      }
    };
  }

  /**
   * 计算四维度分数和倾向
   */
  _computeDimensions(scores) {
    const maxScore = this.scoring.maxScorePerDimension;
    
    // 计算每个维度的倾向和百分比
    const computeDim = (pos, neg, name) => {
      const total = scores[pos] + scores[neg];
      const posPercent = total > 0 ? Math.round((scores[pos] / total) * 100) : 50;
      const negPercent = 100 - posPercent;
      const winner = scores[pos] >= scores[neg] ? pos : neg;
      const diff = Math.abs(scores[pos] - scores[neg]);
      const strength = this._getStrengthLabel(diff, maxScore);
      
      return {
        name: name,
        pole: winner,
        poleName: winner === pos ? this.dimensions[name].fullNames[0] : this.dimensions[name].fullNames[1],
        scores: { [pos]: scores[pos], [neg]: scores[neg] },
        percent: posPercent, // 正向百分比（用于雷达图）
        difference: diff,
        strength: strength
      };
    };
    
    const ei = computeDim('E', 'I', 'EI');
    const sn = computeDim('S', 'N', 'SN');
    const tf = computeDim('T', 'F', 'TF');
    const jp = computeDim('J', 'P', 'JP');
    
    const code = ei.pole + sn.pole + tf.pole + jp.pole;
    
    // 计算整体偏好清晰度（平均差异）
    const avgDiff = (ei.difference + sn.difference + tf.difference + jp.difference) / 4;
    const overallClarity = this._getStrengthLabel(avgDiff, maxScore);
    
    return {
      code: code,
      dimensions: { EI: ei, SN: sn, TF: tf, JP: jp },
      preferenceStrength: {
        EI: ei.strength,
        SN: sn.strength,
        TF: tf.strength,
        JP: jp.strength,
        overall: overallClarity
      }
    };
  }

  /**
   * 获取偏好强度标签
   */
  _getStrengthLabel(difference, maxScore) {
    const levels = this.scoring.preferenceStrength;
    if (difference <= levels.slight.max) return levels.slight;
    if (difference <= levels.moderate.max) return levels.moderate;
    if (difference <= levels.clear.max) return levels.clear;
    return levels.veryClear;
  }

  /**
   * 获取类型全称
   */
  _getFullTypeName(code) {
    const names = {
      "INTJ": "建筑师", "INTP": "逻辑学家", "ENTJ": "指挥官", "ENTP": "辩论家",
      "INFJ": "提倡者", "INFP": "调停者", "ENFJ": "主人公", "ENFP": "竞选者",
      "ISTJ": "检查员", "ISFJ": "守卫者", "ESTJ": "总经理", "ESFJ": "执政官",
      "ISTP": "鉴赏家", "ISFP": "探险家", "ESTP": "企业家", "ESFP": "表演者"
    };
    return names[code] || "未知类型";
  }

  /**
   * 获取荣格八维认知功能栈
   */
  _getCognitiveFunctions(typeCode) {
    const cf = this.cognitiveFunctions[typeCode];
    if (!cf) return null;
    
    return {
      stack: cf.stack,
      name: cf.name,
      descriptions: cf.stack.map(fn => ({
        function: fn,
        name: this.functionDescriptions[fn],
        role: fn === cf.stack[0] ? "主导（第一）" : 
              fn === cf.stack[1] ? "辅助（第二）" : 
              fn === cf.stack[2] ? "第三功能" : "劣势（第四）"
      }))
    };
  }

  /**
   * 计算子维度（更精细分析，可选）
   * 用于AI报告生成时提供更丰富的数据
   */
  _computeSubDimensions(scores) {
    // 基于分数计算一些衍生指标
    const total = scores.E + scores.I + scores.S + scores.N + scores.T + scores.F + scores.J + scores.P;
    const answeredQuestions = total / 2; // 每题贡献1分给某一方
    
    return {
      answeredQuestions: answeredQuestions,
      completionRate: Math.round((answeredQuestions / this.questions.length) * 100),
      // 能量倾向：E-I差值，正数偏E，负数偏I
      energyTendency: scores.E - scores.I,
      // 信息处理：S-N差值
      informationTendency: scores.S - scores.N,
      // 决策方式：T-F差值
      decisionTendency: scores.T - scores.F,
      // 生活态度：J-P差值
      lifestyleTendency: scores.J - scores.P
    };
  }

  /**
   * 计算类型稳定性（用于重测一致性分析）
   * 输入两次测试结果，输出相似度
   */
  static compareResults(result1, result2) {
    const sameType = result1.typeCode === result2.typeCode;
    
    // 计算维度差异
    const dimDiff = Math.abs(result1.dimensions.EI.percent - result2.dimensions.EI.percent) +
                    Math.abs(result1.dimensions.SN.percent - result2.dimensions.SN.percent) +
                    Math.abs(result1.dimensions.TF.percent - result2.dimensions.TF.percent) +
                    Math.abs(result1.dimensions.JP.percent - result2.dimensions.JP.percent);
    
    const similarity = Math.max(0, 100 - dimDiff / 4);
    
    return {
      sameType: sameType,
      similarity: Math.round(similarity),
      stabilityLevel: sameType && similarity > 80 ? "高度稳定" :
                      sameType && similarity > 60 ? "中度稳定" :
                      similarity > 60 ? "类型变化但倾向相似" : "显著变化"
    };
  }
}

// 使用示例
/*
const { MBTI_QUESTION_BANK } = require('./mbti-question-bank-60.js');
const scorer = new MBTIScorer(MBTI_QUESTION_BANK);

const answers = [
  { questionId: 1, choice: 'A' },  // 选A = E
  { questionId: 2, choice: 'B' },  // 选B = I
  // ... 60题
];

const result = scorer.calculate(answers);
console.log(result.typeCode); // "INTJ"
console.log(result.fullType); // "建筑师"
console.log(result.dimensions.EI); // { pole: 'I', percent: 73, ... }
console.log(result.cognitiveFunctions.stack); // ["Ni", "Te", "Fi", "Se"]
*/

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MBTIScorer;
}
