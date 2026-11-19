# 光泛画布中的字标交接 · 复用 Prompt

[结构化条目](../../entries/patterns/light-flood-kinetic-closing.json)

为目标页面实现「光泛画布中的字标交接」：在页脚上方建立 data-scene="light-flood" 的粘性舞台（hold=2.3）。在 .scene-stage 内依次生成 .lf-ground、.lf-sun（含 .lf-halo-tex 与 .lf-core-tex 两张 2D Canvas）、.lf-night（含 destination-out 椭圆柔边遮罩的 .lf-night-tex Canvas）、三层 .lf-soft 柔焦文字 Canvas 及主标题 h2.lf-line（包含 .lf-lead 前半句与 .lf-key 后半句）。对日冕与夜幕 Canvas 的半透明像素应用固定种子 0x2f6b1d3 的 xorshift ±1 抖动以消除渐变色带。随滚动将日冕放大铺满屏幕，让后半句经三级模糊半径 [4, 2, 0.9]px 聚焦显现；在进度 0.54 降下夜幕遮罩，使前半句经 [1.5, 3.4, 6]px 散焦上移淡出，后半句落位至视口高度 48% 并与深色页脚无缝衔接。

## 制作约束

- 固定提交源码与对照结果见 demos/cases/taste-skill-site/fidelity.md。
- 当设备逻辑核心数不超过 4 或处于减少动态模式时，跳过多层 Canvas 模糊绘制，回退为 CSS 滤镜或静态双行排版。
