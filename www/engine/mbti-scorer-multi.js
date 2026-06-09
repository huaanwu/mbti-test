/**
 * MBTI 多题型计分引擎
 * 支持：二选一、李克特量表(1-5)、场景选择
 * 统一输出：MBTI类型代码、维度分数、偏好强度、认知功能
 */

class MBTIMultiScorer {
  constructor() {
    // 认知功能映射（保持不变）
    this.cognitiveFunctions = {
      "INTJ": { stack: ["Ni","Te","Fi","Se"], name: "Ni主导" },
      "INTP": { stack: ["Ti","Ne","Si","Fe"], name: "Ti主导" },
      "ENTJ": { stack: ["Te","Ni","Se","Fi"], name: "Te主导" },
      "ENTP": { stack: ["Ne","Ti","Fe","Si"], name: "Ne主导" },
      "INFJ": { stack: ["Ni","Fe","Ti","Se"], name: "Ni主导" },
      "INFP": { stack: ["Fi","Ne","Si","Te"], name: "Fi主导" },
      "ENFJ": { stack: ["Fe","Ni","Se","Ti"], name: "Fe主导" },
      "ENFP": { stack: ["Ne","Fi","Te","Si"], name: "Ne主导" },
      "ISTJ": { stack: ["Si","Te","Fi","Ne"], name: "Si主导" },
      "ISFJ": { stack: ["Si","Fe","Ti","Ne"], name: "Si主导" },
      "ESTJ": { stack: ["Te","Si","Ne","Fi"], name: "Te主导" },
      "ESFJ": { stack: ["Fe","Si","Ne","Ti"], name: "Fe主导" },
      "ISTP": { stack: ["Ti","Se","Ni","Fe"], name: "Ti主导" },
      "ISFP": { stack: ["Fi","Se","Ni","Te"], name: "Fi主导" },
      "ESTP": { stack: ["Se","Ti","Fe","Ni"], name: "Se主导" },
      "ESFP": { stack: ["Se","Fi","Te","Ni"], name: "Se主导" }
    };
    
    this.functionDescriptions = {
      "Ni": "内倾直觉 - 洞察本质、预见未来",
      "Ne": "外倾直觉 - 探索可能、联想创新",
      "Si": "内倾实感 - 注重细节、经验积累",
      "Se": "外倾实感 - 活在当下、感官敏锐",
      "Ti": "内倾思考 - 逻辑分析、追求真理",
      "Te": "外倾思考 - 效率导向、达成目标",
      "Fi": "内倾情感 - 忠于自我、价值观驱动",
      "Fe": "外倾情感 - 维护和谐、关注他人"
    };
  }

  /**
   * 统一计分入口
   * @param {Array} answers - 答案数组，每项格式根据题型不同
   * @param {String} questionType - 题型: 'binary'|'likert'|'scenario'
   * @param {Object} questionBank - 对应题库
   */
  calculate(answers, questionType, questionBank) {
    switch(questionType) {
      case 'binary':
        return this._scoreBinary(answers, questionBank);
      case 'likert':
        return this._scoreLikert(answers, questionBank);
      case 'scenario':
        return this._scoreScenario(answers, questionBank);
      default:
        throw new Error(`未知题型: ${questionType}`);
    }
  }

  /**
   * 二选一计分（原逻辑）
   */
  _scoreBinary(answers, bank) {
    const scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };
    
    answers.forEach(answer => {
      const q = bank.questions.find(q => q.id === answer.questionId);
      if (!q) return;
      
      const option = answer.choice === 'A' ? q.optionA : q.optionB;
      if (option && option.pole) {
        scores[option.pole] += q.weight;
      }
    });
    
    return this._buildResult(scores, bank);
  }

  /**
   * 李克特量表计分（1-5分）
   * 极端回答（1或5）权重更高，中间回答权重降低
   * 语义：题面陈述一个方向（q.pole），高分同意 q.pole，低分同意反方向
   *   score 5 → 强 q.pole（+2）
   *   score 4 → 中度 q.pole（+1）
   *   score 3 → 中立（不加分）
   *   score 2 → 中度反向（+1 到反方向）
   *   score 1 → 强反向（+2 到反方向）
   * q.reversed === true 时方向翻转
   */
  _scoreLikert(answers, bank) {
    const scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };
    const OPPOSITE = { E:'I', I:'E', S:'N', N:'S', T:'F', F:'T', J:'P', P:'J' };

    answers.forEach(answer => {
      const q = bank.questions.find(q => q.id === answer.questionId);
      if (!q) return;
      if (!(q.pole in OPPOSITE)) return;

      const delta = answer.score - 3;          // -2..+2
      const reversed = q.reversed === true;
      const direction = reversed ? -Math.sign(delta) : Math.sign(delta);
      const magnitude = Math.abs(delta) * (q.weight || 1);

      if (direction > 0) {
        scores[q.pole] += magnitude;
      } else if (direction < 0) {
        scores[OPPOSITE[q.pole]] += magnitude;
      }
      // direction == 0：中立，不加分
    });

    return this._buildResult(scores, bank);
  }

  /**
   * 场景选择计分
   */
  _scoreScenario(answers, bank) {
    const scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };
    
    answers.forEach(answer => {
      const q = bank.questions.find(q => q.id === answer.questionId);
      if (!q) return;
      
      const option = q.options[answer.choiceIndex];
      if (option && option.pole !== 'neutral') {
        scores[option.pole] += option.weight;
      }
    });
    
    return this._buildResult(scores, bank);
  }

  /**
   * 构建统一结果格式
   */
  _buildResult(scores, bank) {
    const maxScore = bank.dimensions ? 
      (bank.questions.length / Object.keys(bank.dimensions).length) * 2 : 30;
    
    const computeDim = (pos, neg, name) => {
      const total = scores[pos] + scores[neg];
      const posPercent = total > 0 ? Math.round((scores[pos] / total) * 100) : 50;
      const negPercent = 100 - posPercent;
      const winner = scores[pos] >= scores[neg] ? pos : neg;
      const diff = Math.abs(scores[pos] - scores[neg]);
      
      return {
        name: name,
        pole: winner,
        scores: { [pos]: Math.round(scores[pos]*10)/10, [neg]: Math.round(scores[neg]*10)/10 },
        percent: posPercent,
        difference: Math.round(diff*10)/10,
        strength: this._getStrength(diff, maxScore)
      };
    };
    
    const ei = computeDim('E', 'I', 'EI');
    const sn = computeDim('S', 'N', 'SN');
    const tf = computeDim('T', 'F', 'TF');
    const jp = computeDim('J', 'P', 'JP');
    
    const code = ei.pole + sn.pole + tf.pole + jp.pole;
    const avgDiff = (ei.difference + sn.difference + tf.difference + jp.difference) / 4;
    
    return {
      typeCode: code,
      fullType: this._getFullTypeName(code),
      dimensions: { EI: ei, SN: sn, TF: tf, JP: jp },
      rawScores: scores,
      preferenceStrength: {
        EI: ei.strength, SN: sn.strength, TF: tf.strength, JP: jp.strength,
        overall: this._getStrength(avgDiff, maxScore)
      },
      cognitiveFunctions: this._getCognitiveFunctions(code),
      subDimensions: {
        energyTendency: scores.E - scores.I,
        informationTendency: scores.S - scores.N,
        decisionTendency: scores.T - scores.F,
        lifestyleTendency: scores.J - scores.P
      }
    };
  }

  _getStrength(diff, max) {
    const ratio = diff / max;
    if (ratio < 0.2) return { label: "轻微", description: "倾向不明显，处于边界" };
    if (ratio < 0.4) return { label: "中等", description: "有明确倾向，但灵活性高" };
    if (ratio < 0.6) return { label: "明显", description: "倾向清晰，行为模式稳定" };
    return { label: "非常清晰", description: "倾向强烈，典型特征突出" };
  }

  _getFullTypeName(code) {
    const names = {
      "INTJ": "建筑师", "INTP": "逻辑学家", "ENTJ": "指挥官", "ENTP": "辩论家",
      "INFJ": "提倡者", "INFP": "调停者", "ENFJ": "主人公", "ENFP": "竞选者",
      "ISTJ": "检查员", "ISFJ": "守卫者", "ESTJ": "总经理", "ESFJ": "执政官",
      "ISTP": "鉴赏家", "ISFP": "探险家", "ESTP": "企业家", "ESFP": "表演者"
    };
    return names[code] || "未知类型";
  }

  _getCognitiveFunctions(code) {
    const cf = this.cognitiveFunctions[code];
    if (!cf) return null;
    return {
      stack: cf.stack,
      name: cf.name,
      descriptions: cf.stack.map((fn, i) => ({
        function: fn,
        name: this.functionDescriptions[fn],
        role: ["主导（第一）", "辅助（第二）", "第三功能", "劣势（第四）"][i]
      }))
    };
  }

  /**
   * 计算类型稳定性（用于重测一致性分析或跨题型一致性分析）
   * 输入两次测试结果，输出相似度与稳定等级
   * @param {Object} result1 - 第一份结果（任一题型）
   * @param {Object} result2 - 第二份结果（任一题型，可与 result1 不同）
   */
  static compareResults(result1, result2) {
    const sameType = result1.typeCode === result2.typeCode;

    // 维度百分比差异（4 维度绝对差之和）
    const dimDiff =
      Math.abs(result1.dimensions.EI.percent - result2.dimensions.EI.percent) +
      Math.abs(result1.dimensions.SN.percent - result2.dimensions.SN.percent) +
      Math.abs(result1.dimensions.TF.percent - result2.dimensions.TF.percent) +
      Math.abs(result1.dimensions.JP.percent - result2.dimensions.JP.percent);

    const similarity = Math.max(0, 100 - dimDiff / 4);

    let stabilityLevel;
    if (sameType && similarity > 80) stabilityLevel = "高度稳定";
    else if (sameType && similarity > 60) stabilityLevel = "中度稳定";
    else if (similarity > 60) stabilityLevel = "类型变化但倾向相似";
    else stabilityLevel = "显著变化";

    return {
      sameType,
      similarity: Math.round(similarity),
      stabilityLevel
    };
  }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MBTIMultiScorer;
}
if (typeof window !== 'undefined') {
  window.MBTIMultiScorer = MBTIMultiScorer;
}
