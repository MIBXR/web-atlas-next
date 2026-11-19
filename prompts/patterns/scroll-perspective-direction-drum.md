# 滚动驱动的三维方向滚筒 · 复用 Prompt

[结构化条目](../../entries/patterns/scroll-perspective-direction-drum.json)

为目标页面实现「滚动驱动的三维方向滚筒」：在 data-scene="scroll-turned-drum" 的粘性章节内，将条目排在半径 --drum-r、透视 3 倍半径的竖向三维滚筒上。随滚动进度 0.06 至 0.94 更新旋转角 --drum-turn，按夹角余弦写入每项的 --drum-o 与 --drum-lit。在视口中央放置上下两条水平细线（.drum-rule）与左右三角准星（.drum-pointer--left/right），让准星位移（0–10px）和背景光晕（.drum-glow）随整步对齐度呼吸，同时在右侧滚入当前序号与说明。当滚动进度达到 0.912 时派发 drum:close 事件，以 [-5°, 2°, 6°] 初始倾角交错弹出三张抽选汇总卡片。减少动态模式下回退为静态列表。

## 制作约束

- 固定提交源码与双宽对照结果见 demos/cases/taste-skill-site/fidelity.md。
- 减少动态模式（prefers-reduced-motion: reduce）下停用粘性滚筒旋转，回退为静态可读列表（is-rest）。
