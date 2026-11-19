# Taste Skill：反 AI 套路的网页设计技能与资产套件

[结构化条目](../../entries/materials/taste-skill.json) 提供固定版本（`v2.5.1` · `f6b76575f949707b4e3c37cd86cb44b0b98643e8`）、安装方式、七步工作流、可运行套件样例与关联官网案例 [Taste Skill 官网研究](../cases/taste-skill-site.md)。

## 它解决什么问题

Taste Skill（安装名 `design-taste-frontend`）以 `figma.com` 与 `x.ai` 的专业公司网站为标尺，通过**九条铁律（House rules）**、**按业态发牌的脚本**、**自带的网页设计资产套件（`assets/`）**以及**在真实无头浏览器中运行的一致性与终审门禁（`consistency.mjs` + `gate.mjs`）**，消除 AI 生成网页常见的紫色渐变、Emoji 标题、三张玻璃卡片、空洞套话与失衡边距。

### 九条铁律（House rules）

1. **图下不加图注或说明文字**：所有开放授权照片的署名统一收束在页脚单行可展开的 `credits` 中。
2. **所有视觉区域在四档宽度下必须真实绘出**：在 `1440`、`1024`、`768` 与 `390` 宽度下严禁出现空白底板，WebGL 受限时自动回退到静态画面。
3. **一屏一节（One section per screen）**：桌面 `1440×900` 下首屏仅放 Hero，其余每节严格为 1 屏或 2 屏高（唯一的 `photo-chapters` 例外为 3–4 屏），相邻章节标题绝不探入当前视口。
4. **左右内容边缘严格对称**。
5. **克制的微动效与发牌高光时刻（Moments）**：链接卡片悬停上浮 `2px`、框内照片微放大 `1.02–1.03`、按钮悬停步进与按下反馈、卡片动效 `2.5–4s` 循环并在悬停时重播；禁用卡片倾斜、轮播与定时标签页。每页包含一次首屏入场（`data-enter`）及 1–2 个按业态发牌的页面高光时刻（Moment）。
6. **优先使用真实摄影、得体的底色、版式与字体配对**。
7. **使用真实全彩品牌与文件图标**（`scripts/icons.mjs` 本地解析为 SVG），卡片内搭配带脉冲连线的流程图（`assets/diagrams/`）。
8. **着色器与大型滚动场景仅限技术类页面**：WebGL 着色器背景（`assets/effects/`）、滚动场景（`assets/scenes/`）与程序化 3D/印刷对象（`assets/objects/`）只发给 `software`、`tech`、`gaming` 页面（整页最多 4 个并发 WebGL 上下文）；咖啡馆、餐厅、旅馆、工作室、律所与日常实体商品页面（`place`、`service`、`product`）严禁 WebGL，完全依靠真实摄影、字体排版、纯色底面与图文类 Moment。
9. **地址与联系方式脱敏规范**：只写街道与片区，不编造门牌号、邮编、坐标、工商/税号或真实格式电话号码，联系邮箱统一使用 `.example` 域名。

---

## 按业态分类与七步运行流程

技能首先将需求归入六种业态之一，并在 `<html>` 与 `<meta>` 中显式声明：

| 业务简报类型 | `page type` | `site-kind` | `kind`（发牌参数） | 核心视觉策略 |
| --- | --- | --- | --- | --- |
| 应用、SaaS、AI、开发者工具、金融科技 | `software` | `software` | `software` | 在 `app-frame` 中用真实 HTML 展示软件界面，搭配发光面板 UI 片段、脉冲流程图、1 个着色器/对象/场景与 1–2 个 Moment |
| 游戏或游戏工作室发布页 | `software` | `gaming` | `gaming` | 主标题展示游戏名，全幅主视觉或世界观摄影打底，搭配 1 个着色器/场景与 1–2 个 Moment |
| 硬件或技术设备（无人机、机械臂、键盘） | `product` | `tech` | `tech` | 产品大图主导，每节换不同视角，色板切换联动产品图，允许 1 个技术着色器或大场景 |
| 日常实体商品与消费品牌（椅子、自行车、咖啡豆） | `product` | `other` | `product` | 真实产品或同类开放授权替身摄影主导，无着色器、无噪点、无渐变底；仅在明确要求 3D 时使用 `product-render` |
| 专业服务（诊所、律所、设计工作室、代理商） | `service` | `other` | `service` | 人物、空间与作品摄影主导，真实工具图标，最多 1 张静态流程图，纯色底面与图文类 Moment |
| 到店场所（咖啡馆、烘焙店、餐厅、民宿、花店、书店） | `place` | `other` | `place` | 12–20 张真实摄影（紧凑页 8–12 张），第二屏固定到访信息，无任何 WebGL、UI 片段、流程图或标签页 |

### 命令行发牌与浏览器检验（Node.js 22+ & Chrome/Edge）

1. **拷贝套件并布设门禁**：空目录将 `assets/` 拷入项目并以 `assets/starter.html` 为起点；先执行 `node scripts/gate.mjs --start index.html --kind <kind> --category "<卖什么>" --primary "<主行动>"` 激活终审门禁。
2. **先写全部文案并过检**：按 `references/copy.md` 与 `copy-voice.md` 撰写标题与正文（非 UI 区域每屏 60–80 词，假定营业时间/价格标记 `data-assumed`），用 `node scripts/copy-lint.mjs index.html --kind <kind>` 检查。
3. **按脚本发牌，不凭模型惯性挑选**：
   ```sh
   node assets/layout/deal.mjs --type <page type> --has <photo,ui,film,object,setting> --history .taste-skill/layout-history.json
   node scripts/start.mjs deal --page <kind> --trade <trade> --history .taste-skill/history.json
   node scripts/start.mjs css --page <kind> --palette <id> --type <id> --radius soft --history .taste-skill/history.json
   node scripts/moments.mjs pick --page <kind> --count 1|2 --fits section,statement --photo --history .taste-skill/history.json
   ```
4. **检索照片与本地化图标**：用 `node scripts/photos.mjs` 按行业选取或检索开放授权照片并生成页脚单行 `credits`；最后执行 `node scripts/icons.mjs scan index.html --out assets/icons --colour` 将用到的品牌与界面图标落盘为本地 SVG。
5. **五档宽度真机浏览器检验与门禁放行**：
   ```sh
   node scripts/consistency.mjs index.html --widths 1440,1024,820,768,390 --rhythm-widths 1440,820,768,390 --profile .taste-skill/chrome-check --page <kind> --category "<卖什么>" --primary "<主行动>"
   node assets/layout/check.mjs --url index.html --profile .taste-skill/chrome-check --sizes 1440x900,1024x768,820x1180,768x1024,390x844 --shots shots/layout
   node scripts/perf.mjs index.html --profile .taste-skill/chrome-check
   node scripts/gate.mjs index.html
   ```
   修复所有 `FAIL` 直至 `gate.mjs` 输出 `GATE: PASS`（最多三轮）。

---

## 内置可运行设计资产套件（`assets/`）

本条目左侧舞台可直接交互体验套件内置的 12 组画廊与实验室样例：

| 模块 | 样例入口 | 规模与内容 |
| --- | --- | --- |
| **Shader 着色器背景画廊** | [assets/effects/gallery.html](../../demos/materials/taste-skill/assets/effects/gallery.html) | 25 个实时 WebGL 着色器背景（`ascii-shade`、`aurora-curtains`、`bayer-dither`、`caustics`、`contour-lines`、`dot-terrain`、`dotted-globe`、`duotone-grade`、`edge-glow`、`film-light-leak`、`fluted-glass`、`god-rays`、`gradient-mesh`、`grain-gradient`、`grid-pulse`、`halftone-screen`、`line-engraving`、`orb-sphere`、`painterly-landscape`、`prism-dispersion`、`ridgeline`、`ruled-grounds`、`silk-folds`、`soft-light-bars`、`spotlight-cone`），支持浅/深主题、行业色板与分类筛选 |
| **Shader 参数实验室** | [assets/effects/lab.html](../../demos/materials/taste-skill/assets/effects/lab.html) | 逐个调节 25 个着色器的速度、密度、比例、柔和度与色板，实时预览 Hero 与卡片叠放效果并复制 HTML |
| **3D 与印刷着色器对象** | [assets/objects/index.html](../../demos/materials/taste-skill/assets/objects/index.html) | 15 个程序化三维与印刷网点对象（`dither-sequence`、`dot-object`、`exploded-layers`、`photo-dither`、`photo-engraving`、`photo-halftone`、`print-cards`、`print-cup`、`print-globe`、`print-lamp`、`print-wheel`、`product-render`、`product-turntable`、`split-reveal`），支持 4 套色板实时切换 |
| **`fx-*` 创意组件画廊** | [assets/components/index.html](../../demos/materials/taste-skill/assets/components/index.html) | 21 个可复用创意组件（`fx-avatar`、`fx-band`、`fx-bars`、`fx-button`、`fx-chart`、`fx-dither-object`、`fx-feature-card`、`fx-globe`、`fx-headline`、`fx-icon-tiles`、`fx-logos`、`fx-map`、`fx-photo`、`fx-pricing`、`fx-progress`、`fx-prompt`、`fx-search`、`fx-spotlight`、`fx-stat`、`fx-tabs`） |
| **高光时刻（Moments）总览与实页** | [assets/moments/gallery.html](../../demos/materials/taste-skill/assets/moments/gallery.html) · [in-page.html](../../demos/materials/taste-skill/assets/moments/_demo/in-page.html) · [in-page-service.html](../../demos/materials/taste-skill/assets/moments/_demo/in-page-service.html) | 18 个页面动效时刻（含滚轮计数 `counter-rolls`、光圈展开 `iris-opens`、水波图片 `liquid-hover`、水波字标 `liquid-type`、底片显影 `picture-develops`、章节图片擦除 `photo-chapters`、钉住三步章节 `pinned-chapters`、逐词点亮 `word-highlight` 等） |
| **大型滚动场景（Big Scenes）** | [letter-physics](../../demos/materials/taste-skill/assets/scenes/letter-physics/demo.html) · [powers-of-ten-pullback](../../demos/materials/taste-skill/assets/scenes/powers-of-ten-pullback/demo.html) · [parts-lock-into-the-whole](../../demos/materials/taste-skill/assets/scenes/parts-lock-into-the-whole/demo.html) 等 11 项 | 11 个全屏滚动叙事舞台（穿越云层、句点生长、固定三维主物体、飞入品牌图形、字母竖笔画铺满背景、字母三维飞散、物体穿过巨字、界面面板拼合、十的幂次拉远、界面组装为行动按钮、双窗推开世界） |
| **11 套 Hero 版式与字体配对** | [hero-split](../../demos/materials/taste-skill/assets/layout/hero-split.html) · [hero-collage](../../demos/materials/taste-skill/assets/layout/hero-collage.html) · [fonts.html](../../demos/materials/taste-skill/assets/layout/fonts.html) | 11 套经过长标题压力测试的 Hero 版式（`split`、`centred`、`product`、`photo`、`place`、`collage`、`editorial`、`word`、`film`、`statement`、`triptych`）及 Google Fonts 配对样本 |
| **真实 HTML UI 片段与发光卡片** | [assets/ui/index.html](../../demos/materials/taste-skill/assets/ui/index.html) · [assets/ui/cards.html](../../demos/materials/taste-skill/assets/ui/cards.html) | 19 个纯 HTML/CSS 产品界面片段（代码差异审查 `diff-review`、流水线看板 `pipeline-board`、终端运行 `terminal-run`、命令搜索、语音波形、集成矩阵等）与发光特性卡片 |
| **脉冲流程图与实验室** | [assets/diagrams/demo.html](../../demos/materials/taste-skill/assets/diagrams/demo.html) · [assets/diagrams/lab.html](../../demos/materials/taste-skill/assets/diagrams/lab.html) | 沿连线运行的脉冲节点流程图（中枢分支、多通道并行管线等） |
| **CSS 底纹、微动效层与图标库** | [backgrounds/demo.html](../../demos/materials/taste-skill/assets/backgrounds/demo.html) · [motion/demo.html](../../demos/materials/taste-skill/assets/motion/demo.html) · [icons/demo.html](../../demos/materials/taste-skill/assets/icons/demo.html) | 14 种 CSS 网格/点阵/光线底纹、全局悬停与卡片循环微动效层、932 个本地全彩品牌与界面 SVG 图标检索画廊 |

---

## 原文入口

- [SKILL.md](../../demos/materials/taste-skill/SKILL.md)：九条铁律、六类业态表、资产对照矩阵、七步执行流程与 14 项检查清单。
- [README.md](../../demos/materials/taste-skill/README.md) · [CHANGELOG.md](../../demos/materials/taste-skill/CHANGELOG.md)：上游安装说明、工具总表、迁移技能说明与版本演进记录。
- [references/](../../demos/materials/taste-skill/references/sections.md)：22 篇分类规范（[sections.md](../../demos/materials/taste-skill/references/sections.md)、[sections-library.md](../../demos/materials/taste-skill/references/sections-library.md)、[layout-v4.md](../../demos/materials/taste-skill/references/layout-v4.md)、[system.md](../../demos/materials/taste-skill/references/system.md)、[copy.md](../../demos/materials/taste-skill/references/copy.md)、[copy-voice.md](../../demos/materials/taste-skill/references/copy-voice.md)、[photos.md](../../demos/materials/taste-skill/references/photos.md)、[effects-usage.md](../../demos/materials/taste-skill/references/effects-usage.md)、[moments.md](../../demos/materials/taste-skill/references/moments.md)、[scenes.md](../../demos/materials/taste-skill/references/scenes.md)、[gate.md](../../demos/materials/taste-skill/references/gate.md) 等）。
- [scripts/](../../demos/materials/taste-skill/scripts/start.mjs)：`start.mjs`、`consistency.mjs`、`gate.mjs`、`copy-lint.mjs`、`photos.mjs`、`icons.mjs`、`effects.mjs`、`moments.mjs`、`perf.mjs`、`shoot.mjs`。
- [LICENSES.md](../../demos/materials/taste-skill/LICENSES.md)：MIT 许可及内置图库、图标、示范作品照片署名索引。
