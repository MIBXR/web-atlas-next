# 样例对照

归档按钮使用 React Bits 固定提交的 TypeScript + CSS 变体。按钮沿用官方的环形引线、4 秒窗口和深浅色配色。 [Fuse Button 官网样例](https://reactbits.dev/micro/fuse-button)

| 操作 | 样例结果 |
| --- | --- |
| 归档 | 任务进入归档状态，按钮切换为撤销，环形引线开始消退。 |
| 撤销 | 点击按钮或按 Escape 恢复待办状态。 |
| 到期 | 任务保留在归档状态，按钮显示「已归档」。重试可回到待办。 |

到期后使用组件的 `stay` 模式保留结果，页面主题由 Web Atlas 的深浅色设置决定。
