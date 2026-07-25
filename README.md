# MBTI性格测试 v2.1

## 项目恢复说明

### 来源
从 APK 反编译恢复的 Capacitor + Web 技术构建的 Android 应用。

### 项目结构
```
mbti-test/
├── MBTI-性格测试-v2.1-debug.apk   # 原始APK
├── extracted/                        # APK解压内容
├── www/                             # Web资源（恢复的源码）
│   ├── index.html
│   ├── css/mbti-styles.css
│   ├── js/app.js                   # 主应用逻辑
│   ├── js/bazi.js                  # 八字模块
│   ├── js/loader.js                # 加载器
│   ├── questions/                   # 题库
│   ├── data/                       # 数据文件
│   └── knowledge/                   # 知识库
├── package.json
├── vite.config.js
└── capacitor.config.json
```

### 功能模块
- **MBTI测试** - 完整版60题、快速版28题、量表版40题、场景版20/50题
- **星座分析** - 星座人格分析
- **生肖分析** - 生肖性格分析  
- **塔罗牌** - 塔罗牌阵解读
 - **占星本命盘** - 8 行星落座 + 元素/模式分布 + 主要相位(深度解读)
 - **生命灵数** - Pythagorean 数字命理:生命/生日/态度/成熟数字 + 个人年/月

### 技术栈
- 前端: HTML5 + CSS + JavaScript (Web)
- 移动框架: Capacitor
- AI对接: DeepSeek API

### 运行
```bash
npm install
npm run dev      # 开发模式
npm run build     # 构建
npx cap sync android   # 同步到Android
npx cap open android   # 打开Android项目
```

### 配置
编辑 `www/js/config.js` 中的 DeepSeek API Key

---
*项目恢复日期: 2026-06-09*
