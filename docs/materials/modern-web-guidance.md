# Modern Web Guidance 使用说明

可从 [SKILL.md](../../demos/materials/modern-web-guidance/SKILL.md) 开始，按任务阅读快照中的 209 篇指南。上游的主题索引见 [README](../../demos/materials/modern-web-guidance/README.md)。

## 按任务检索

在 Node.js 22 或更新版本中，通过上游的命令行工具（CLI）搜索单个界面行为，再按搜索结果中的 `id` 读取指南。以导航抽屉为例。

```sh
npx modern-web-guidance@1.0.0 search "navigation drawer"
npx modern-web-guidance@1.0.0 retrieve "navigation-drawer"
```

选定做法后，查看指南列出的浏览器支持与后备方案。比如采用 View Transitions API 时，先检测 `document.startViewTransition`，不支持时仍执行原有的 DOM 更新。

## 官方示例

- 导航抽屉。打开抽屉，再用滑动、点击遮罩或按 Escape 关闭。 [原文指南](../../demos/materials/modern-web-guidance/guides/ui-components/navigation-drawer.md) · [官方 Demo](https://mwg-demos.web.app/GoogleChrome/modern-web-guidance-src/blob/544c250575f7811d87fef8b1c064bc9571cbfb80/guides/ui-components/navigation-drawer/demo.html)
- 容器尺寸与组件布局。拖动虚线框右下角，观察卡片在容器宽度跨过 400px 时由纵排切到横排。 [原文指南](../../demos/materials/modern-web-guidance/guides/css/size-aware-styling.md) · [官方 Demo](https://mwg-demos.web.app/GoogleChrome/modern-web-guidance-src/blob/544c250575f7811d87fef8b1c064bc9571cbfb80/guides/css/size-aware-styling/demo.html)
- 同文档视图过渡。点开商品再返回，观察缩略图和标题在列表与详情之间的过渡。 [原文指南](../../demos/materials/modern-web-guidance/guides/ui-behaviors/same-document-transitions.md) · [官方 Demo](https://mwg-demos.web.app/GoogleChrome/modern-web-guidance-src/blob/544c250575f7811d87fef8b1c064bc9571cbfb80/guides/ui-behaviors/same-document-transitions/demo.html)

引用原文时保留署名与许可，出处见[许可说明](../../demos/materials/modern-web-guidance/LICENSES.md)。
