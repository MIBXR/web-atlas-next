# Modern Web Guidance · Web 平台指南 · 复用 Prompt

[结构化条目](../../entries/materials/modern-web-guidance.json)

先阅读 Modern Web Guidance 的 SKILL.md。把当前网页任务拆成单个界面行为或浏览器能力，检索并读取对应指南。结合项目的目标浏览器选择 HTML、CSS 或浏览器 API，按需做功能检测，为关键操作保留后备方案。完成后说明采用了哪些指南及对应实现。

## 制作约束

- 固定快照可直接阅读，命令行检索使用上游的 npm 包，要求 Node.js 22 或更新版本。
- 结合目标浏览器判断特性支持，按指南为关键操作保留后备行为。
