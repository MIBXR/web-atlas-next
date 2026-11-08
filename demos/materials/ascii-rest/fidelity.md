# ascii.rest 对照

## 对照基准

- 日期：2026-11-08。
- 官网：`https://ascii.rest/<id>/` 的组件画面。
- 上游：[bas3line/ascii 0.4.0](https://github.com/bas3line/ascii/tree/88165af8d1713e82a50bd03b15f6cd1ffc925f90)，提交 `88165af8d1713e82a50bd03b15f6cd1ffc925f90`；发行库由该提交的 `tsc -p tsconfig.build.json` 构建。
- 画面条件：无头 Edge，独立临时配置目录，禁用扩展、隐藏滚动条，CDP 设置浅色；桌面 1440×900、手机 390×844，DPR 1。
- Web Atlas 基准：`3f0bf557e21e04dacb2ffa62d524f695d070a6e8`；增量范围为本素材、独立样例与站内详情。

## 展示框规则

| 官网源码 | 取用内容 |
| --- | --- |
| `site/src/pages/[slug].astro` | 组件页使用 `.well.big`；`meta.ground` 存在时增加 `.scene`；框上方间隔为 `2rem`，元信息按分类、网格尺寸、帧率排列。 |
| `site/src/styles/site.css` | `.frame` 宽度为 `min(100% - 2.5rem, 150ch)`，两列为 `22ch minmax(0, 1fr)`、间距 `5ch`；`.well.big` 为自动高度、最小高度 `16rem`、内边距 `2rem 1rem`、网格居中；场景框无内边距，画布铺满宽度。 |
| `site/src/components/Art.astro` | 网格尺寸与单元比例通过 `--cols`、`--rows`、`--cell` 传入。 |
| `site/src/layouts/Layout.astro` 的 `play()` | 有调色板且无 `ground` 的作品使用 `width: var(--fit)`；组件页的 `--fit` 为 `min(calc(var(--cols) * 10.2px), 96cqi)`。 |
| `site/src/lib/library.ts` | 组件的名称、分类、尺寸、帧率、调色板与底色来自发行库的 `meta`。 |

本地将官网内容列水平居中；桌面宽度为 `calc(min(100% - 2.5rem, 150ch) - 27ch)`，860px 及以下恢复完整内容宽度 `min(100% - 2.5rem, 150ch)`。元信息顶部保留官网标题、简介两行及 `0.75rem` 间隔所占的留白，桌面展示框顶为 `177.28125px`。页面呈现一行元信息与一个展示框，分类使用中文。

| 主题变量 | 浅色 | 深色 |
| --- | --- | --- |
| 页面底色 `--bg` | `#f5f6f7` | `#131518` |
| 作品墨色 `--ink` | `#1e2125` | `#e8ebef` |
| 正文色 `--text` | `#3b4149` | `#c3c9d1` |
| 元信息辅助色 `--muted` | `#5f6873` | `#8c95a1` |
| 展示框底色 `--well` | `#eceef0` | `#1a1d21` |

主题跟随系统。元信息使用 Paper Mono，桌面为 `14px / 1.65`；480px 及以下为 `13px / 1.6`，分类取墨色，其余字段取辅助色，字段间距为 `3ch`。文字作品使用官网的系统等宽字体栈，字号为 `min(17px, calc(96cqi / var(--cols) / 0.6))`、行高为 `1.2`；`cqi` 随展示框内容宽度变化。彩色画布按官网的字符列数上限与容器宽度缩放，源码没有额外的视口高度缩放算法。

## 组件对照

以下框尺寸为 CSS px，画布尺寸为实际绘图像素；DPR 为 1。官网与本地对照字符构成、配色、宽高比、运动方式及连续帧变化，截图帧时刻不同。

| 组件 | 官网 | 本地 | 判定 |
| --- | --- | --- | --- |
| donut · 桌面 | [组件页](https://ascii.rest/donut/)，框 1043.55×512.59，文字 17px、`#1e2125` | [样例](index.html?demo=donut)，框 1043.53×512.59，文字 17px、`#1e2125` | 已对照通过：字符、比例与双轴转动一致。 |
| night-coast · 桌面 | [组件页](https://ascii.rest/night-coast/)，框 1043.55×521.77，画布 1044×522 | [样例](index.html?demo=night-coast)，框 1043.53×521.77，画布 1044×522 | 已对照通过：灯塔、暗海、月亮、云层与扫光一致。 |
| rust · 桌面 | [组件页](https://ascii.rest/rust/)，框 1043.55×716.80，画布 653×653 | [样例](index.html?demo=rust)，框 1043.53×716.80，画布 653×653 | 已对照通过：字符、Ferris 橙色、比例与亮光一致，完整作品位于 900px 高视口内。 |
| arch-linux · 桌面 | [组件页](https://ascii.rest/arch-linux/)，框 1043.55×635.19，画布 602×571 | [样例](index.html?demo=arch-linux)，框 1043.53×635.19，画布 602×571 | 已对照通过：拱形字符、蓝色、比例与扫描方式一致。 |
| progress-bar · 桌面 | [组件页](https://ascii.rest/progress-bar/)，框 1043.55×288.30，文字 17px、`#1e2125` | [样例](index.html?demo=progress-bar)，框 1043.53×288.30，文字 17px、`#1e2125` | 已对照通过：五种进度条、百分比与不等速填充一致。 |
| bar-chart · 桌面 | [组件页](https://ascii.rest/bar-chart/)，框 1043.55×451.42，文字 17px、`#1e2125` | [样例](index.html?demo=bar-chart)，框 1043.53×451.42，文字 17px、`#1e2125` | 已对照通过：柱形字符、三组数据与数值移动一致。 |
| double-pendulum · 桌面 | [组件页](https://ascii.rest/double-pendulum/)，框 1043.55×573.77，文字 17px、`#1e2125` | [样例](index.html?demo=double-pendulum)，框 1043.53×573.77，文字 17px、`#1e2125` | 已对照通过：摆杆、端点字符、摆动与淡出轨迹一致。 |
| rust · 手机 | [组件页](https://ascii.rest/rust/)，框 350×369.27，画布 305×305 | [样例](index.html?demo=rust)，框 350×369.27，画布 305×305 | 已对照通过：展示框与画布尺寸、字符、配色与亮光一致。 |
| progress-bar · 手机 | [组件页](https://ascii.rest/progress-bar/)，框 350×256，文字 10.6px、`#1e2125` | [样例](index.html?demo=progress-bar)，框 350×256，文字 10.6px、`#1e2125` | 已对照通过：展示框尺寸、字号、墨色与填充方式一致。 |

桌面展示框宽度官网为 `1043.546875px`、本地为 `1043.53125px`，差 `0.015625px`（1/64px），来自官网 Grid 分列与本地等价宽度 `calc()` 的子像素取整；画布绘图尺寸均一致。Rust 的 CSS 画布尺寸两边均为 `652.796875×652.796875px`，手机两边均为 `305.265625×305.265625px`。

手机对照中官网的滚动位置为 `374px`，本地为 `0`；展示框顶分别为 `146.515625px` 与 `146.390625px`，差 `0.125px`，来自浏览器整像素滚动取整。元信息的字段范围为中文分类、网格尺寸与帧率。

## 样例覆盖

241 个组件与 99 个 Kit 示例均可打开，共 340 个样例；控制台无错误，CDP 网络记录中没有对 ascii.rest 或其他外部域名的请求。`fonts/paper-mono.woff2` 与 `fonts/ascii-rest-mono.woff2` 均从本地成功加载，响应类型为 `font/woff2`。

## 未收录的 Kit 示例

无。固定提交的 `examples/kit/` 共 99 个 TypeScript 示例，均可在浏览器中运行；图片示例使用随附的本地 PNG。全部原始示例保存在 `source/examples/kit/`。

## 本地化

| 文件 | 原值 | 本地值 |
| --- | --- | --- |
| `vendor/ascii.rest@0.4.0/dist/ascii.js` 的 `STYLE` 字体地址 | `https://ascii.rest/fonts/ascii-rest-mono.woff2` | `new URL("../../../fonts/ascii-rest-mono.woff2", import.meta.url).href`，拼入 `url(...)` |
| `demo/demo.css` 的 Paper Mono 字体地址 | 上游 `site.css` 的 `/fonts/paper-mono.woff2` | `../fonts/paper-mono.woff2` |

按名加载使用 `dist/library.js` 的相对模块路径；Kit 图片通过 `new URL("./assets/…", import.meta.url)` 读取本地文件。CLI 的 `https://ascii.rest/r` 保持原样。

Kit 示例由同一份 TypeScript 编译，编译器将相对导入的 `.ts` 扩展名改为 `.js`；页面 import map 的 `./src/` 前缀将它们解析到本地 `dist/`，包名导入保持原样。重建与编译命令见 [source/README.md](source/README.md)。
