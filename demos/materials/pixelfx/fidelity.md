# pixelfx 对照

## 对照基准

- 日期：2026-11-16。
- 官网：`https://patch-gg.github.io/pixelfx/` 的在线画廊与单特效详情面板。
- 上游：[patch-gg/pixelfx 0.3.1](https://github.com/patch-gg/pixelfx/tree/5294518ce7c72e48b6100a744596e0acf57f2826)，提交 `5294518ce7c72e48b6100a744596e0acf57f2826`；运行库为该提交 `src/core/` 与 `src/fx/` 的原始 ES 模块。
- 画面条件：无头 Edge，独立临时配置目录，禁用扩展、隐藏滚动条，CDP 设置 `prefers-color-scheme: light`（画廊自身为固定深色主题 `color-scheme: dark`）；桌面 1440×900、手机 390×844，DPR 1。
- Web Atlas 基准：`4e863094d2ea777d4e6d28c4ff910267ceef0f50`；增量范围为 `pixelfx` 与 `pixelfx-skill` 两个素材条目、独立样例与站内详情。

## 画廊与详情规则

| 官网源码 | 取用内容 |
| --- | --- |
| `gallery/index.html` | 保留 `.head`（Patch 像素标志、`h1` 标题、244 特效计数副标题、三处外链）、吸顶筛选栏 `.bar`（22 枚分类芯片 `#chips` 与搜索框 `#q`）、21 个分类区块 `#grid` 及原生 `<dialog class="detail" id="detail">` 详情面板。 |
| `gallery/style.css` | 固定深色变量：`--ground: #000000`、`--panel: #111111`、`--stage: #15131d`、`--ink: #ffffff`、`--quiet: #999999`、`--line: #333333`、`--patch: #f53cd1`。桌面主容器 `max-width: 1240px`，网格 `repeat(auto-fill, minmax(176px, 1fr))`、间距 `12px`；`.tile.big` 跨 2×2 格，常规卡片舞台宽高比 `6 / 5`，全屏卡片与全屏详情舞台为 `16 / 9`，常规详情大舞台为 `16 / 10`；详情面板 `.sheet` 为 `minmax(0, 1fr) 340px` 双栏、间距 `28px`，900px 及以下改为单栏。 |
| `gallery/app.js` | `IntersectionObserver`（`rootMargin: "200px"`）在卡片进入视口时创建 `Player` 实例；点击卡片或通过 URL `?demo=<id>` 调用 `openDetail(fx)` 打开详情，提供暂停/重播、`0.25×`/`0.5×`/`1×` 倍速、6 种背景（`dark`、`ground`、`sky`、`light`、`black`、`none`）、27 套 `PAL` 色板与默认色板切换、随机种子、水平镜像、角色显隐、浏览器内生成 PNG 精灵表及复制调用代码。 |

## 画面与状态对照

以下框尺寸为 CSS px，画布尺寸为 `<canvas>` 内部绘图像素（`width × height`）；DPR 为 1。

| 模块／状态 | 官网（`patch-gg.github.io/pixelfx/`） | 本地（`demos/materials/pixelfx/index.html`） | 判定 |
| --- | --- | --- | --- |
| 画廊首屏 · 桌面 1440×900 | `.head` 1240×145.8，`.bar-in` 1240×81，`#q` 108×31；22 枚芯片、21 个区块、244 张卡片；标题 `54px/66px Patch Pixel`，正文 `15px/22.5px Funnel Sans` | `.head` 1240×145.8，`.bar-in` 1240×81，`#q` 108×31；22 枚芯片、21 个区块、244 张卡片；标题与正文字体、字号、行高完全一致 | 已对照通过：布局、尺寸、字体与色彩 0px 差异。 |
| 三类卡片舞台 · 桌面 1440×900 | `Arrow shot`（`.tile.big`）框 405.33×337.77、画布 330×275；`Brazier`（常规 `.tile`）框 196.66×163.88、画布 300×150；`Aurora`（`.tile.screen`）框 405.33×227.98、画布 300×150 | `Arrow shot` 框 405.33×337.77、画布 330×275；`Brazier` 框 196.66×163.88、画布 300×150；`Aurora` 框 405.33×227.98、画布 300×150 | 已对照通过：三类网格卡片 CSS 框尺寸与内部像素画布尺寸完全一致。 |
| 画廊首屏 · 手机 390×844 | `.head` 358×197.59（`h1` 36px/44px），`.bar-in` 358×93（芯片单行横向滚动、`#q` 358×31）；`Arrow shot` 框 358×298.33，`Brazier` 框 174×145 | `.head` 358×197.59（`h1` 36px/44px），`.bar-in` 358×93（`#q` 358×31）；`Arrow shot` 框 358×298.33，`Brazier` 框 174×145 | 已对照通过：响应式断点（900px、520px）下布局与尺寸 0px 差异。 |
| 角色招式详情 · `moves/sword-combo` 桌面 | `.sheet` 1240×900，`.big` 舞台 840×525，画布 291×182；元信息显示 `0.55 s wind-up, 4 freezes at 0.06 s`；点击 `sprite sheet` 生成 90 帧 264×150（8 列）PNG | [样例](index.html?demo=moves/sword-combo)：`.sheet` 1240×900，`.big` 舞台 840×525，画布 291×182；元信息、控件与 90 帧精灵表导出完全一致 | 已对照通过：角色三连斩、草靶受击、震屏与精灵表生成一致。 |
| 角色法术详情 · `ice/frost-nova` 桌面 | `.sheet` 1240×901.8，`.big` 舞台 840×525，画布 317×199；元信息显示 `3.4 s, 103 frames at 30 fps`、`0.34 s wind-up, 100 ms freeze at 0.42 s` | [样例](index.html?demo=ice/frost-nova)：`.sheet` 1240×901.8，`.big` 舞台 840×525，画布 317×199 | 已对照通过：冰晶绽放、双缓冲发光与地面结霜一致。 |
| 全屏转场详情 · `transitions/slash-wipe` 桌面 | `.sheet` 1240×900，`.big.screen` 舞台 840×472.5（16:9），画布 320×180；无角色按钮隐藏（`#d-actor.hidden = true`） | [样例](index.html?demo=transitions/slash-wipe)：`.sheet` 1240×900，`.big.screen` 舞台 840×472.5，画布 320×180；`#d-actor.hidden = true` | 已对照通过：16:9 全屏舞台比例与控件显隐状态一致。 |
| 详情面板 · `moves/sword-combo` 手机 390×844 | `.sheet` 390×1067.05 单栏排列，`.big` 舞台 358×223.75，画布 291×182 | [样例](index.html?demo=moves/sword-combo)：`.sheet` 390×1067.05，`.big` 舞台 358×223.75，画布 291×182 | 已对照通过：手机端单栏详情尺寸与交互控件一致。 |

## 样例覆盖与工具链校验

21 个分类下的 244 个特效均可在画廊与 `?demo=<category>/<name>` 详情中打开；在 `source/` 中执行上游 `node tools/check.mjs`，244 个特效全部通过越界、首尾残留、循环接缝、确定性随机数、帧耗时与 Act 姿态校验。浏览器控制台 0 错误，CDP 网络记录中无任何对 `fonts.googleapis.com`、`fonts.gstatic.com` 或其他外部域名的请求；本地 `fonts/` 下的 `PatchPixel-Regular.woff2`、`Funnel Sans` 与 `Red Hat Mono` 均返回 HTTP 200（`font/woff2`）。

## 本地化

| 文件 | 原值 | 本地值 |
| --- | --- | --- |
| `index.html` 的 Google Fonts 链接 | `https://fonts.googleapis.com/css2?family=Funnel+Sans:wght@400;500&family=Red+Hat+Mono:wght@400;500&display=swap` | 移除外链，在 `demo/demo.css` 中声明本地 `@font-face`，加载 `../fonts/` 下的 4 个 WOFF2 文件 |
| `demo/demo.css` 的 Patch Pixel 字体路径 | `url(fonts/PatchPixel-Regular.woff2)` | `url(../fonts/PatchPixel-Regular.woff2)` |
| `demo/demo.js` 的模块导入路径 | `../src/fx/index.js`、`../src/core/index.js` | `../vendor/pixelfx@0.3.1/src/fx/index.js`、`../vendor/pixelfx@0.3.1/src/core/index.js` |
| `demo/demo.js` 的 `?demo=` 参数与焦点保护 | 仅监听 `location.hash` | 读取 `?demo=`（或 `?fx=`）自动调用 `openDetail(match)`，并对 `HTMLElement.prototype.focus` 默认设置 `preventScroll: true` 防止嵌入 iframe 打开 `<dialog>` 时带动父页面滚动 |
