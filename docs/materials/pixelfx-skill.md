# pixelfx Skill：阅读与使用资料

[结构化条目](../../entries/materials/pixelfx-skill.json) 提供来源、固定版本、六步工作流、适用范围与关联素材；可运行特效库与在线画廊见 [pixelfx 组件库说明](pixelfx.md)。

## 核心方法：代码如泥塑，用接触表迭代

pixelfx Skill 源自 Hugo Duprez 的《[How to make (good) pixel art effects with Claude](https://www.spritefusion.com/blog/how-to-make-good-pixel-art-effects-with-claude)》：一次性提示词写出的像素特效往往粗糙平庸；把代码当作黏土，起草后用 `node tools/render.mjs <id>` 渲染出 16 帧采样接触表（`contact.png`），用视觉读图工具打开审视，挑出最差的一项问题修整并重新渲染，经过至少三轮迭代才能做出有手绘生命力的像素特效。

## 六步工作流

1. **环境检查与接触表冒烟**：在包含 `tools/` 与 `src/` 的工作区（本库已完整保存在 [demos/materials/pixelfx/source/](../../demos/materials/pixelfx/source/README.md)）执行 `node tools/render.mjs fire/torch`，查看生成的 `records/fire/torch/contact.png`。
2. **检索并复用现有特效**：先运行 `node tools/list.mjs <关键词>` 或查阅 [CATALOG.md](../../demos/materials/pixelfx-skill/docs/CATALOG.md)。多数需求可通过现有特效配合 `palette`（27 套内置 `PAL` 色板或自定义色值）、`seed`、`flip`、`angle`、`light` 及特效专属 `meta.options` 直接完成：
   ```powershell
   node tools/render.mjs fire/torch --opts '{"palette":["#102","#215","#43a","#8cf","#cff","#fff"]}'
   ```
3. **接入游戏或导出精灵表**：Web/Canvas 游戏直接调用 `createFrame`、`createFx`/`createAct` 与 `composite`；Godot、Unity、Phaser 等引擎执行 `node tools/render.mjs <id> --sheet`（或含角色演出的 `node tools/act.mjs <id> --sheet`）导出透明 PNG 网格与 Aseprite JSON。
4. **确立美术方向并研读参考**：新建特效前先读 [AUTHORING.md](../../demos/materials/pixelfx-skill/docs/AUTHORING.md)，用一句话明确形态、运动、色板与节奏，再阅读库中最接近的 2–3 个特效源码及三个质量标杆（`melee/sword-slash`、`ice/frost-nova`、`explosions/small-explosion`）。
5. **多稿起草与接触表修整循环**：用 `node tools/new.mjs <category>/<name>` 创建模板（方向开放时可并行起草 `-a` 至 `-e` 多稿并渲染对比），打开 `contact.png` 逐轮修正最明显的问题。
6. **编排角色 Act 与自动校验**：涉及角色的特效补充 `export const act`（负时间蓄力前摇、释放帧剪影突变、命中定格 `stop`、震屏 `shake`、草靶受击与收招恢复），用 `node tools/act.mjs <id>` 检查连续 12fps 姿态步进，最后用 `node tools/check.mjs <id>` 确保无画布越界、无尾帧残留、无循环接缝、无 `Math.random()` 且姿态合法。

## 常见视觉缺陷与修整对照

| 接触表或预览中看到的问题 | 修整方法 |
| --- | --- |
| 1× 尺寸下糊成一团 | 减少颜色数量，强化外轮廓剪影，只保留一个视觉焦点，放大主形状。 |
| 形状内部出现孤立噪点像素 | 降低噪声阈值，用 `at()` 量化采样，不在小尺寸形状上叠加噪声。 |
| 动作发飘、缺乏打击感 | 采用快进慢出缓动（`ease.outQuart` / `outExpo`），加入 1–2 帧纯白爆发主帧，缩短总时长。 |
| 运动僵硬机械 | 为每个粒子随机化尺寸、速度、延迟与寿命，补充火花、烟雾、碎屑等次级运动。 |
| 画面过曝泛白 | 降低发光系数（`k` 取 0.2–0.5），压暗边缘色阶，仅在最热核心使用纯白。 |
| 体积扁平无立体感 | 统一单侧受光（左上亮、右下暗），在底部贴地处压暗一档色阶。 |
| 出现矢量式平滑渐变 | `color` 缓冲保持硬色阶过渡，仅在 `light` 发光缓冲与半透明烟雾中使用柔和衰减。 |
| 烟雾呈现棋盘格抖动感 | 改用真正半透明并带顶部受光的 `SMOKE`、`VAPOUR`、`DUST` 粒子或 `p.disc`。 |
| 循环首尾出现跳帧接缝 | 使用 `cycle`、`loopNoise(phase)`、整格 `tileNoise` 滚动或 `sin(phase * TAU * n)`。 |
| 单次特效结束时突然消失 | 在 `t = duration` 前让形状缩小、Bayer 抖动淡出或落入地面以下。 |
| 特效华丽但角色呆若木鸡 | 补充 `act`：与发力反方向的蓄力前摇、释放帧大幅姿态变化、0.03–0.2s 命中定格、受击靶反馈与收招。 |

## 原文入口

- [SKILL.md](../../demos/materials/pixelfx-skill/SKILL.md)：技能主文档，包含检索、接入、导出、新建循环与缺陷对照表。
- [AUTHORING.md](../../demos/materials/pixelfx-skill/docs/AUTHORING.md)：Simulated 与 Pure 特效契约、双缓冲 Painter API、粒子工具箱与 3D 骨骼 Act 规范。
- [CATALOG.md](../../demos/materials/pixelfx-skill/docs/CATALOG.md)：21 个分类下 244 个特效的完整目录。
- [README.md](../../demos/materials/pixelfx-skill/README.md)：上游项目说明。
- [tools/render.mjs](../../demos/materials/pixelfx-skill/tools/render.mjs)、[tools/act.mjs](../../demos/materials/pixelfx-skill/tools/act.mjs)、[tools/check.mjs](../../demos/materials/pixelfx-skill/tools/check.mjs)：接触表渲染、动作步进渲染与质量校验脚本。
- [LICENSES.md](../../demos/materials/pixelfx-skill/LICENSES.md)：MIT 许可与上游署名索引。
