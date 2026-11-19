# 分步演进的同页改版舞台 · 复用 Prompt

[结构化条目](../../entries/patterns/progressive-live-redesign-stage.json)

为目标页面实现「分步演进的同页改版舞台」：创建 data-scene="before-after" 的双栏粘性舞台（桌面 hold=3，手机 hold=2）。左栏放置 5 个步骤项（.ba-step），随滚动进度 [0, 0.05, 0.21, 0.43, 0.69] 展开当前步骤说明、填充竖向进度条 --ba-fill 并标记 aria-current="step"，点击步骤标题按钮滚向对应锚点 [0, 0.18, 0.4, 0.665, 0.93]。右栏画框按 880px 基准宽度等比缩放，先以圆形 clip-path 扫除默认层（.nf-slop），随后在同一 DOM 层（.nf-calm）上按时间线依次替换标志与标题文案、下抛旧卡片并滑入左对齐主栏与右侧真实业务卡片、最后点亮复选状态与背景层次，右上角胶囊同步滚动显示 Before 与 Step 1–4 of 4。

## 制作约束

- 固定提交源码与对照结果见 demos/cases/taste-skill-site/fidelity.md。
- 右侧预览使用真实 DOM 与容器查询缩放（100cqw / 880px，不支持 zoom 时由 ResizeObserver 写入 --s），减少动态模式下直接展示最终完成态。
