# ascii.rest · 动画 ASCII 组件库 · 复用 Prompt

[结构化条目](../../entries/materials/ascii-rest.json)

用 ascii.rest 在网页上放字符动画：页面引入 <script type="module"> 加载 ascii.rest/element，再写 <ascii-art piece="组件名">。文字类组件渲染成 <pre>，颜色与字号随 CSS；场景、标志与发行版渲染成随容器宽度的 <canvas>，加 mono 改为单色文字。用 options 传组件参数，用 fps 调帧率；需要新作品时用 ascii.rest/kit 的 looks、motions 与 widgets 组合，再以 src 指向导出作品的模块。保持等宽字体、行高 1.2 与留白，动画只做点缀。

## 制作约束

- 固定 ascii.rest 0.4.0 与完整提交，dist 由上游 tsc 构建产出。
- 字体与远程地址的本地化改动见 fidelity.md。
- 只能在 Node 里运行的 Kit 示例不在样例中，源码保留在 source/examples/。
