# 复刻对照

画廊按上游 `gallery/` 的 `index.html`、`app.js`、`style.css` 复刻，效果与交互逻辑沿用原文件，改动只在接入层：

| 项目 | 上游 | 本库 |
| --- | --- | --- |
| 运行代码 | `../src/fx/index.js`、`../src/core/index.js` | `../vendor/pixelfx@0.3.1/src/` 下同一份字节 |
| 字体 | Google Fonts 的 Funnel Sans 与 Red Hat Mono；`gallery/fonts` 的 Patch Pixel | 五份字体本地化到 `fonts/`，`@font-face` 的 `unicode-range` 与上游一致 |
| 界面文案 | 英文 | 中文，文案逐条列在本次任务书；效果名、描述、标签与分类名保留英文原文 |
| 页头 | 无 favicon | `data:` 空图标，避免控制台 404 |
| 滚动条 | 浏览器默认 | 加载站点 `site/runtime/demo-scrollbars.css` |

`demo/app.js` 与上游 `gallery/app.js` 逐行比较，差异只有两行 import 路径、chip `all` 改成「全部」、facts 与控件文案、雪碧图说明、复制反馈、`actFacts` 的中文表述。`demo/style.css` 与上游 `gallery/style.css` 的差异只有字体声明与路径。

## 对照结果

在 1440×900 与 390×844、`deviceScaleFactor` 1、深色、`--hide-scrollbars` 下，本地与上游画廊并排截图对照，逐项比较页头、分类栏、搜索框、分类标题、网格列宽与间距、瓦片画布、图注和手机布局：

- 手机布局的容器尺寸、列数、间距与上游一致。
- 桌面页头高度相同；标题容器因中文副标题换行变短，`.head`、`.links` 的位置不变。
- 接入差异只有中文文案、本地字体与路径三项。

## 上游行为

上游画廊按 `hidden` 属性筛选瓦片，但 `.tile { display: flex }` 覆盖了浏览器对 `[hidden]` 的默认样式，因此在 `patch-gg.github.io/pixelfx` 的线上页面上，搜索后 233 张不匹配的瓦片仍留在网格里，只有分类标题所在的 `section` 会按 `hidden` 隐藏（`section` 没有 `display` 覆盖）。本地复刻与上游逐项一致，保留原行为，不做修正。
