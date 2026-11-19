# Taste Skill · 反 AI 套路的网页设计 skill 与资产套件 · 复用 Prompt

[结构化条目](../../entries/materials/taste-skill.json)

先阅读 demos/materials/taste-skill/SKILL.md 及对应的 references/（copy.md、copy-voice.md、system.md、layout-v4.md、sections.md）。根据业务简报将项目归入 software、gaming、tech、product、service 或 place 六类之一，拷贝 demos/materials/taste-skill/assets/ 到项目并运行 gate.mjs --start 建立终审门禁。先撰写全部真实文案并用 copy-lint.mjs 检查；随后通过 assets/layout/deal.mjs、scripts/start.mjs、scripts/moments.mjs 发牌确定 Hero 版式、行业色板、字体配对与 1–2 个页面 Moment（仅在 software/tech/gaming 页面使用 1 个 WebGL 着色器、3D/印刷对象或大型滚动场景，并在 HTML UI 片段与脉冲流程图中填入真实业务数据；在 place/service/product 页面严禁 WebGL，使用开放授权照片并在页脚单行署名）。构建完成后在无头浏览器中依次运行 consistency.mjs（1440/1024/820/768/390）、assets/layout/check.mjs、perf.mjs 与 gate.mjs，修掉所有 FAIL 直至 GATE: PASS。

## 制作约束

- 本条目固定归档 Leonxlnx/taste-skill v2.5.1 提交 f6b76575f949707b4e3c37cd86cb44b0b98643e8 的完整技能原文（SKILL.md）、22 篇参考文档（references/）、12 个 CLI 脚本（scripts/）、配色字体库（library/）与可运行资产套件（assets/）。
- 运行 scripts/start.mjs、consistency.mjs、gate.mjs、photos.mjs、icons.mjs 需要 Node.js 22+ 及本地已安装的 Chrome、Edge 或 Chromium；可选依赖 ffmpeg 用于 WebP 转码与手机端首屏裁切。
- WebGL 着色器背景（assets/effects/）、3D/印刷对象（assets/objects/）与大型滚动场景（assets/scenes/）仅限 software、tech、gaming 三类页面使用，且单页并发 WebGL 上下文不超过 4 个。
- 原文快照按第三方资源规则保持原始字节与英文文本；套件样例页引用 Google Fonts 在线字体。
