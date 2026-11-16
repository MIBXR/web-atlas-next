# pixelfx · 代码驱动的像素特效与动作库 · 复用 Prompt

[结构化条目](../../entries/materials/pixelfx.json)

读取 pixelfx 素材的中文说明与对应特效源码（demos/materials/pixelfx/vendor/pixelfx@0.3.1/src/），在网页 Canvas 或游戏中接入固定版本 pixelfx 0.3.1。按场景分辨率调用 createFrame(w, h) 建立 color 与 light 双缓冲；单特效使用 createFx(mod, { x, y, flip, angle, seed, palette, light })，需要角色前摇、命中定格（hit-stop）、受击草靶与震屏反馈时使用 createAct(mod, { x, y, ... }) 并应用 act.shake 偏移。每帧执行 update(dt)、clearFrame(frame)、draw(frame) 与 composite(frame, imageData.data, bg)，再通过 putImageData 绘入开启 image-rendering: pixelated 的 Canvas。优先通过内置 27 套 PAL 色板或自定义由暗到亮的色板数组重着色；需要跨引擎使用时通过 tools/render.mjs --sheet 或画廊详情导出 Aseprite 精灵表。保留 MIT 许可、Hugo Duprez 与 Hollow Crown 署名，不将画廊专有的 Patch Pixel 字体用于无关分发。

## 制作约束

- 固定 pixelfx 0.3.1 与完整提交 5294518ce7c72e48b6100a744596e0acf57f2826，运行库无第三方运行时依赖。
- 画廊为固定深色主题（#000000 底色、#15131d 舞台底），使叠加发光缓冲（light buffer）在各颜色下保持一致对比度。
- Google Fonts 的 Funnel Sans 与 Red Hat Mono 已本地化至 fonts/，本地化改动与线上画廊对照结果见 fidelity.md。
- 每个特效内部全部使用固定种子的 Rng，禁止使用 Math.random() 或 Date，保证任意帧可确定性重现。
