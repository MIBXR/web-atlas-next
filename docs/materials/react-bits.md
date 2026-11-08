# React Bits · 网页动效与交互组件

[运行样例](../../demos/materials/react-bits/index.html) · [素材条目](../../entries/materials/react-bits.json) · [对照结果](../../demos/materials/react-bits/fidelity.md)

## 预览与操作

用官方 Fuse Button 归档「校对活动页面」。按钮沿轮廓显示 4 秒引线，期间可以点击撤销或按 Escape。引线结束后保留已归档状态，点击「重试样例」可以再走一遍。样例和索引跟随 Web Atlas 的深浅色设置。

切到「官方样例索引」可按文字动效、动画效果、交互组件、微交互和背景查找 216 个免费组件。官方 Demo 提供参数和安装变体。 [官方样例索引](../../demos/materials/react-bits/demo/catalog.html) · [安装说明](https://reactbits.dev/get-started/installation)

## 源码与重建

任务状态写在本体的 `source/archive.tsx`，由 Fuse Button 的提交、撤销和到期回调驱动。应用运行包包含官方组件和样式，组件取用通过官方 Registry。 [官方组件](https://reactbits.dev/micro/fuse-button) · [许可索引](../../demos/materials/react-bits/LICENSES.md)

在本体的 `source/` 目录运行 `npm ci` 和 `npm run build`。构建用 curl 从固定提交获取 TypeScript + CSS 变体和许可原文，并输出任务归档应用的静态运行文件。
