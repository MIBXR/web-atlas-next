# pixelfx Skill · 代码像素特效与动作制作工作流 · 复用 Prompt

[结构化条目](../../entries/materials/pixelfx-skill.json)

先阅读 demos/materials/pixelfx-skill/SKILL.md 与 demos/materials/pixelfx-skill/docs/AUTHORING.md，在 demos/materials/pixelfx/source/ 工作区中处理像素特效任务。若是复用或改装现有效果，先用 node tools/list.mjs <关键词> 检索 244 个现成特效，通过 palette、seed、flip、angle、light 调整并渲染 contact.png 核对，再接入 Canvas/WebGL 或用 --sheet 导出 Aseprite 精灵表。若是制作新特效，先用一句话写清形态、运动、色板与节奏，阅读 2–3 个最接近的现成特效源码；用 node tools/new.mjs 创建草稿，执行 node tools/render.mjs 生成接触表并直接查看图片，对照 SKILL.md 的缺陷修正表（剪影、孤立噪点、缓动冲击力、发光强度、单侧受光、循环接缝、收尾清空）至少迭代三轮；涉及角色时编写 export const act 并用 node tools/act.mjs 检查连续 12fps 步进帧，最后用 node tools/check.mjs 全部检查通过后交付。

## 制作约束

- 本条目保存 patch-gg/pixelfx 固定提交 5294518ce7c72e48b6100a744596e0acf57f2826 的技能原文、编写规范（docs/AUTHORING.md）、目录（docs/CATALOG.md）与 CLI 工具（tools/）。
- 运行 tools/render.mjs、tools/act.mjs、tools/check.mjs 需要 Node.js 18+ 及同级 src/ 目录（完整运行源码位于关联素材 demos/materials/pixelfx/source/）；导出 GIF 与 MP4 预览时可选依赖 ffmpeg。
- 新建特效须先阅读 docs/AUTHORING.md 的契约：角色基准尺寸为 24×38 px（actor: 2），局部原点 (0, 0) 位于脚底或命中点，单次特效在 t = duration 时必须完全清空画布，循环特效必须无缝闭合。
- 每次起草或修改后必须执行 node tools/render.mjs <id> 查看 contact.png 接触表，至少经历三轮“看图找最差问题 → 修复 → 重渲染”，并用 node tools/check.mjs <id> 通过越界、残留、接缝、随机数与帧耗时检查。
