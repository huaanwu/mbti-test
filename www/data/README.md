# MBTI 项目知识库

> Markdown 格式的内容数据，运行时由 `loader.js` 加载到内存，供 LLM 解读时直接拼入 prompt。

## 目录

- `zodiac/` — 12 星座运势（每个含 love / career / health 三段）
- `tarot/major/` — 22 张大阿尔克那
- `tarot/minor/{wands,cups,swords,pentacles}/` — 56 张小阿尔克那（4 花色 × 14）

## 总量

- 星座：12 个 .md
- 塔罗：78 个 .md
- 共 **90 个** 知识文件

## 格式

每个 .md 文件包含：
- **前置元信息（YAML 风）**：`---` 包围，键值对，运行时解析
- **正文（Markdown）**：含牌面/星座详细含义

## 加载方式

```js
// app.js 启动时调用
await loadAllData();
// 之后可用
const aries = getZodiac('aries');
const fool  = getTarot('major-00');
```
