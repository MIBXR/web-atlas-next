# 可启停的内嵌桌面工作流回放 · 复用 Prompt

[结构化条目](../../entries/patterns/controllable-inline-agent-replay.json)

为目标页面实现「可启停的内嵌桌面工作流回放」：在深色展示卡内构建三栏桌面窗口（.tcw：左侧会话树、中间 Agent 简报与 6 条 [data-step] 步骤行、右侧 Diff 与 Browser 双面板）。随外层滚动将 .tcw-lift 由 rotationX 28°、scale 0.88 展平。当窗口进入视口 50% 时启动 8.6 秒 GSAP 时间线：依次将 6 个步骤由 data-s="run"（旋转指示器）切换为 data-s="done"（完成对勾）并弹出色板、缩略图与文件行数，同时在右侧 Diff 面板逐行显示新增文件与代码；在 4.55 秒处将右侧面板切换为 Browser，展开并上下滚动生成的真实页面预览、弹出多宽度通过标签。在右下角提供 .tcw-control 按钮，随 running / paused / done 状态切换 Pause、Play、Replay 图标与 aria-label，支持点击暂停/继续/重播以及完成后鼠标移入重播。减少动态模式下直接展示完成态。

## 制作约束

- 固定提交源码与对照结果见 demos/cases/taste-skill-site/fidelity.md。
- 减少动态模式下不运行自动时间线，直接展示 6 步全部完成（data-s="done"）且切至 Browser 预览面板的终态。
