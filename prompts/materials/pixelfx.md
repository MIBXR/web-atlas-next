# pixelfx · 纯代码像素特效库 · 复用 Prompt

[结构化条目](../../entries/materials/pixelfx.json)

在网页游戏或交互页面里使用固定版本的 pixelfx：先 createFrame 建一块像素分辨率的画布，再用 createFx 载入某个效果并给出坐标、镜像、角度、seed 与 palette；每帧 update(dt)、clearFrame、draw 后 composite 到 ImageData，最后按整数倍放大并设 image-rendering: pixelated。带角色的效果换用 createAct，读取 act.poses 与 act.hits，按冻结时长暂停场景更新，shake 用于镜头抖动。挑效果先查 docs/CATALOG.md 与 tools/list.mjs，再渲染帧联系表看图；配色用由暗到亮的色阶，同一效果换色阶就能从火焰变成冰焰。需要交给其他引擎时用 tools/render.mjs --sheet 导出透明雪碧图与帧矩形、时长、fps、循环与轴心元数据。

## 制作约束

- 固定 pixelfx 0.3.1 与完整提交，运行代码原样保存在 vendor。
- 效果名、描述、标签与分类名沿用上游英文原文。
- 画廊为单主题深色页面，播放区固定黑底，不跟随站点浅深切换。
- 字体与远程地址的本地化改动见 fidelity.md。
