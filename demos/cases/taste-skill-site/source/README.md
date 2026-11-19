# Taste Skill 官网来源与实现

原站：https://www.tasteskill.dev/ （由 https://tasteskill.dev 解析）。取证日期：2026-11-19，线上部署标识为 `dpl_p6tE71r3jRSWDdmahXrJaf8t29eg`，对应技能仓库 `Leonxlnx/taste-skill@f6b76575f949707b4e3c37cd86cb44b0b98643e8`。

`upstream/` 保存原站首页（`index.html`）与四个导航子页（`docs.html`、`guide.html`、`changelog.html`、`blog.html`）的原始 HTML、两个 CSS 分块（`17z1goe0jn.3s.css`、`10u87vdi~-9gf.css`）以及全部应用与场景 JavaScript 分块。模块编号与本库运行文件的映射记录在 [trace.json](trace.json)。

| 原站模块 | 本库运行文件 |
| --- | --- |
| `window.Stage` 场景调度与平滑滚动（`094kob2vf~3v7.js`） | `../js/stage.js` |
| `window.Scenes["scroll-turned-drum"]` 二十方向三维滚筒（`0rpc~sepnsxzd.js`） | `../js/scroll-turned-drum.js` |
| `window.Scenes["before-after"]` Noteflow 五步改版舞台（`16mys-yd2ia4t.js`） | `../js/before-after.js` |
| `window.Scenes["light-flood"]` 终章 Canvas 光泛字标交接（`15wwnu-a09z~h.js`） | `../js/light-flood.js` |
| 顶栏、Hero 四标签、滚筒发牌、三层能力卡、五步按钮、安装三标签、TasteCode 回放、页脚日出、TOC 与复制（`0svgcii8kjham.js`、`03w5.odwsvd~o.js`、`09nnc8g2gq8yi.js`） | `../js/app.js` |
| 页面结构与样式 | `../index.html`、`../{docs,guide,changelog,blog}/index.html`、`../styles.css`、`../fonts.css` |

运行库固定为 `../vendor/gsap@3.15.0/`（`gsap.js`、`ScrollTrigger.js`、`SplitText.js`）与 `../vendor/lenis@1.3.26/lenis.js`，直接解包自原站分块。所有媒体地址通过 `AtlasAssets` 解析；逐文件素材清单见 [assets-manifest.json](../assets-manifest.json)。
