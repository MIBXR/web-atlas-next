# ascii.rest · 动画 ASCII 组件库

ascii.rest 由 bas3line 用 TypeScript 编写，把 241 个动画字符画做成组件，可用 `<ascii-art>` 标签、React、Astro、动画 SVG 或终端播放；Kit 用来组合新作品。本库收录 0.4.0 的发行库、源码与样例。[打开样例](../../demos/materials/ascii-rest/index.html)。

## 在页面中使用

在素材目录通过 HTTP 打开页面，引入本地发行库：

```html
<script type="importmap">
{"imports":{"ascii.rest/element":"./vendor/ascii.rest@0.4.0/dist/ascii.js"}}
</script>
<script type="module">import "ascii.rest/element";</script>
<ascii-art piece="donut"></ascii-art>
```

文字类组件绘入 `<pre>`，彩色组件绘入 `<canvas>`。样例页采用官网组件页的展示框、字体与画布缩放规则，元信息使用本地 Paper Mono，主题跟随系统；具体值与对照结论见 [fidelity.md](../../demos/materials/ascii-rest/fidelity.md)。

| 属性 | 说明 |
| --- | --- |
| `piece` | 组件文件名，如 `donut`、`night-coast`。 |
| `src` | 符合作品约定的模块 URL，也可指向以默认导出提供作品的 Kit 模块。 |
| `fps` | 覆盖组件的帧率。 |
| `options` | 用 JSON 覆盖组件默认参数，如 `{"text":"hello"}`。 |
| `label` | 向屏幕阅读器说明画面内容，默认使用组件名称。 |
| `mono` | 将彩色组件改绘为单色文字。 |

React 与 Next.js 项目安装 `ascii.rest` 后，使用 `ascii.rest/react` 的 `Ascii`、`Banner`；它们带有 `"use client"`，可用于 Next.js app router：

```tsx
import { Ascii, Banner } from "ascii.rest/react";
import { donut } from "ascii.rest/pieces";

<Ascii piece={donut} />
<Ascii piece="night-coast" />
<Ascii piece={donut} options={{ fps: 12 }} className="art" />
<Ascii piece="rust" mono />
<Banner text="hello" color={["#f97316", "#f778ba"]} shadow="rounded" />
```

Astro 使用 `ascii.rest/astro`，服务端先渲染首帧，页面加载后播放：

```astro
---
import Ascii from "ascii.rest/astro";
---

<Ascii piece="donut" />
<Ascii piece="big-text" options={{ text: "hello" }} class="banner" />
```

## Kit

Kit 的 looks 提供海浪、等离子、极光等画面，motions 让作品旋转、弹跳或漂浮，widgets 提供时钟、进度条、仪表与图表；底层还有场、绘图、数学、三维场景、粒子、效果、布局、图像、材质与 SVG 模块，组合结果仍是普通作品，可交给标签、React、SVG 或终端播放。

```ts
import { clockFace, plasma, sea, spinning, torus } from "ascii.rest/kit";

export const ocean = sea({ palette: "ocean" });
export const donut = spinning(torus(), { speed: "slow" });
export const hot = plasma({ palette: "fire" }).mask("HOT");
export default clockFace();
```

99 个原始示例见 [source/examples/kit/](../../demos/materials/ascii-rest/source/examples/kit/)，编译命令见 [source/README.md](../../demos/materials/ascii-rest/source/README.md)。

## 样例索引

| 分组 | 样例 | 说明 |
| --- | --- | --- |
| 场景 | [alpine dawn](../../demos/materials/ascii-rest/index.html?demo=alpine-dawn) | 雪峰在静谧、雾气笼罩的山湖上迎来第一缕晨光。 |
| 场景 | [amer fort](../../demos/materials/ascii-rest/index.html?demo=amer-fort) | 夜色中，山上的琥珀堡被金光照亮，倒映在毛塔湖中。 |
| 场景 | [aurora fjord](../../demos/materials/ascii-rest/index.html?demo=aurora-fjord) | 极光帷幕在平静的峡湾上起伏，岸边小屋亮着灯。 |
| 场景 | [black prism](../../demos/materials/ascii-rest/index.html?demo=black-prism) | Vercel 三角形化作玻璃棱镜，将白光分成彩虹。 |
| 场景 | [cloud sea](../../demos/materials/ascii-rest/index.html?demo=cloud-sea) | 黄昏时，太阳沉入缓缓漂移的橙色云海。 |
| 场景 | [command city](../../demos/materials/ascii-rest/index.html?demo=command-city) | 夜城的林荫大道以路灯勾勒出 Command 键符号。 |
| 场景 | [deep reef](../../demos/materials/ascii-rest/index.html?demo=deep-reef) | 光束穿过海水，海带摇曳，鱼群在珊瑚礁上方转向。 |
| 场景 | [desert night](../../demos/materials/ascii-rest/index.html?demo=desert-night) | 无月的沙丘上，一棵孤独的金合欢树立在银河下，流星划过天空。 |
| 场景 | [earthrise](../../demos/materials/ascii-rest/index.html?demo=earthrise) | 地球从布满陨石坑的月面地平线上升起，低角度阳光拉出长影。 |
| 场景 | [edge orbit](../../demos/materials/ascii-rest/index.html?demo=edge-orbit) | 从轨道俯瞰夜晚的地球，Cloudflare 请求沿弧线穿梭于城市之间。 |
| 场景 | [gangaur ghat](../../demos/materials/ascii-rest/index.html?demo=gangaur-ghat) | 乌代布尔的夜晚，皮丘拉湖畔的门楼亮着灯，水上漂着油灯。 |
| 场景 | [green storm](../../demos/materials/ascii-rest/index.html?demo=green-storm) | 海上雷暴中，闪电劈出 Supabase 闪电标志的形状。 |
| 场景 | [jal mahal](../../demos/materials/ascii-rest/index.html?demo=jal-mahal) | 日出时，斋浦尔的水宫仿佛漂浮在雾气笼罩的湖面上。 |
| 场景 | [jungle falls](../../demos/materials/ascii-rest/index.html?demo=jungle-falls) | 雨林峡谷中，层叠瀑布扬起水雾和彩虹，金刚鹦鹉飞过。 |
| 场景 | [kite festival](../../demos/materials/ascii-rest/index.html?demo=kite-festival) | 桑克兰蒂节的风筝挤满金色天空，下方是斋浦尔的粉色屋顶。 |
| 场景 | [kyoto dusk](../../demos/materials/ascii-rest/index.html?demo=kyoto-dusk) | 黄昏的宝塔立在樱树后，石灯笼照亮树枝。 |
| 场景 | [lake pichola](../../demos/materials/ascii-rest/index.html?demo=lake-pichola) | 夕阳下，乌代布尔的宫殿在皮丘拉湖上泛着光。 |
| 场景 | [lantern lake](../../demos/materials/ascii-rest/index.html?demo=lantern-lake) | 天灯从平静的山湖上升起，其中一盏刚从船上放飞。 |
| 场景 | [lava wall](../../demos/materials/ascii-rest/index.html?demo=lava-wall) | 发光的橙色云朵下是一整面熔岩灯墙，摄像头注视着它。 |
| 场景 | [marine drive](../../demos/materials/ascii-rest/index.html?demo=marine-drive) | 孟买的“皇后项链”在夜色中亮起，路灯沿海湾弯曲排列。 |
| 场景 | [misty forest](../../demos/materials/ascii-rest/index.html?demo=misty-forest) | 层层松林山脊隐入晨雾，斜射的阳光穿过林间。 |
| 场景 | [night coast](../../demos/materials/ascii-rest/index.html?demo=night-coast) | 月光照着云层和暗海，灯塔的光束不停转动。 |
| 场景 | [night highway](../../demos/materials/ascii-rest/index.html?demo=night-highway) | 黄昏的沙漠公路向山脉与最后一抹天光疾驰而去。 |
| 场景 | [ocean sunset](../../demos/materials/ascii-rest/index.html?demo=ocean-sunset) | 太阳沉落在松林岬角后，云层透亮，起伏的海面闪着光。 |
| 场景 | [planet scale](../../demos/materials/ascii-rest/index.html?demo=planet-scale) | 背光的暗色行星被切出 PlanetScale 标志，一颗卫星绕行。 |
| 场景 | [prism city](../../demos/materials/ascii-rest/index.html?demo=prism-city) | 蓝调时刻的城市与河流上方，矗立着黑色尖塔，漂着橙色云朵。 |
| 场景 | [salt flat](../../demos/materials/ascii-rest/index.html?demo=salt-flat) | Vercel 三角形立在镜面般的盐滩上，太阳从尖端后升起。 |
| 场景 | [saturn rise](../../demos/materials/ascii-rest/index.html?demo=saturn-rise) | 土星与光环悬在卫星的龟裂冰面和间歇泉上空。 |
| 场景 | [snow train](../../demos/materials/ascii-rest/index.html?demo=snow-train) | 雪夜里，亮着灯的列车驶过覆雪的石拱高架桥。 |
| 场景 | [storm plains](../../demos/materials/ascii-rest/index.html?demo=storm-plains) | 黄昏的麦田上方，砧状雷云中闪电忽明忽暗。 |
| 场景 | [taj dawn](../../demos/materials/ascii-rest/index.html?demo=taj-dawn) | 日出时，泰姬陵穿过晨雾倒映在水池中。 |
| 场景 | [tokyo rain](../../demos/materials/ascii-rest/index.html?demo=tokyo-rain) | 东京小巷下着雨，霓虹招牌映亮湿漉漉的路面。 |
| 场景 | [varanasi ghats](../../demos/materials/ascii-rest/index.html?demo=varanasi-ghats) | 恒河畔的黄昏祭礼中，台阶上亮着灯，水上漂着油灯。 |
| 场景 | [volcano night](../../demos/materials/ascii-rest/index.html?demo=volcano-night) | 火山在夜里喷发，熔岩流淌，火山灰柱中布满闪电。 |
| 自然 | [aurora](../../demos/materials/ascii-rest/index.html?demo=aurora) | 繁星下，极光帷幕在树梢上方起伏。 |
| 自然 | [bonsai](../../demos/materials/ascii-rest/index.html?demo=bonsai) | 盆栽树木落下叶子，再重新长出新叶。 |
| 自然 | [campfire](../../demos/materials/ascii-rest/index.html?demo=campfire) | 木柴篝火闪动，火星升起，字符越密的地方越热。 |
| 自然 | [cherry blossom](../../demos/materials/ascii-rest/index.html?demo=cherry-blossom) | 盛开的樱花枝随风飘落花瓣。 |
| 自然 | [contour map](../../demos/materials/ascii-rest/index.html?demo=contour-map) | 等高线勾勒出岛屿，山丘的形状缓慢变化。 |
| 自然 | [fern](../../demos/materials/ascii-rest/index.html?demo=fern) | 巴恩斯利蕨逐点长成，随后轻轻摇摆。 |
| 自然 | [fireflies](../../demos/materials/ascii-rest/index.html?demo=fireflies) | 萤火虫飞在夜草上，闪光在虫群中传开。 |
| 自然 | [fractal tree](../../demos/materials/ascii-rest/index.html?demo=fractal-tree) | 递归分枝的树木在风中摇摆。 |
| 自然 | [landscape](../../demos/materials/ascii-rest/index.html?demo=landscape) | 山脉与湖泊上方的太阳或月亮随当地时间变化。 |
| 自然 | [lightning](../../demos/materials/ascii-rest/index.html?demo=lightning) | 雨中，一道分叉闪电从雷云中劈下。 |
| 自然 | [rain](../../demos/materials/ascii-rest/index.html?demo=rain) | 三层远近不同的斜雨落下，溅起水冠与水洼涟漪。 |
| 自然 | [ruled mountains](../../demos/materials/ascii-rest/index.html?demo=ruled-mountains) | 山脉从平行线中隆起，随线条缓缓向前漂移。 |
| 自然 | [sea swell](../../demos/materials/ascii-rest/index.html?demo=sea-swell) | 长浪从小帆船下滚过，将船身托起。 |
| 自然 | [snowfall](../../demos/materials/ascii-rest/index.html?demo=snowfall) | 雪花摇摆着落下，在地面和围栏上堆成积雪。 |
| 自然 | [sunrise](../../demos/materials/ascii-rest/index.html?demo=sunrise) | 太阳从海平面升起，在水面拖出闪光的路径。 |
| 自然 | [wind](../../demos/materials/ascii-rest/index.html?demo=wind) | 阵风沿弯曲的线条流动，前端卷起。 |
| 太空 | [black hole](../../demos/materials/ascii-rest/index.html?demo=black-hole) | 黑洞经引力透镜扭曲的吸积盘不断旋转，一侧更亮。 |
| 太空 | [earth](../../demos/materials/ascii-rest/index.html?demo=earth) | 受光的地球转动，大陆轮廓来自五度网格地图。 |
| 太空 | [eclipse](../../demos/materials/ascii-rest/index.html?demo=eclipse) | 月亮滑过太阳，先出现钻石环，再露出日冕。 |
| 太空 | [galaxy](../../demos/materials/ascii-rest/index.html?demo=galaxy) | 倾斜的旋涡星系旋转，内侧恒星转得最快。 |
| 太空 | [moon phases](../../demos/materials/ascii-rest/index.html?demo=moon-phases) | 月亮盈亏变化，受光部分的月海颜色更暗。 |
| 太空 | [planet](../../demos/materials/ascii-rest/index.html?demo=planet) | 带条纹和光环的行星转动，星体与光环互相投下阴影。 |
| 太空 | [rocket](../../demos/materials/ascii-rest/index.html?demo=rocket) | 火箭在夜里从发射台升空，再降落回来。 |
| 太空 | [saptarishi](../../demos/materials/ascii-rest/index.html?demo=saptarishi) | 闪烁的夜空中，北斗七星按真实位置排列。 |
| 太空 | [solar system](../../demos/materials/ascii-rest/index.html?demo=solar-system) | 四颗行星沿虚线轨道运行，周期遵循开普勒第三定律。 |
| 太空 | [starfield](../../demos/materials/ascii-rest/index.html?demo=starfield) | 星星从中心向外疾驰，在边缘拉成长线。 |
| 太空 | [three-body](../../demos/materials/ascii-rest/index.html?demo=three-body) | 三个等质量天体共享一条八字形轨道。 |
| 生物 | [aquarium](../../demos/materials/ascii-rest/index.html?demo=aquarium) | 鱼在水箱中游动、转向，周围有气泡和水草。 |
| 生物 | [butterfly](../../demos/materials/ascii-rest/index.html?demo=butterfly) | 蝴蝶沿蜿蜒路径振翅、滑翔。 |
| 生物 | [cat](../../demos/materials/ascii-rest/index.html?demo=cat) | 虎斑猫趴在爪子上熟睡，缓慢呼吸。 |
| 生物 | [fox](../../demos/materials/ascii-rest/index.html?demo=fox) | 狐狸枕着尾巴熟睡，轻轻呼吸，偶尔睁眼偷看。 |
| 生物 | [jellyfish](../../demos/materials/ascii-rest/index.html?demo=jellyfish) | 水母收缩身体向上游动，触须稍后跟上。 |
| 生物 | [owl](../../demos/materials/ascii-rest/index.html?demo=owl) | 树枝上的猫头鹰缓慢眨眼、转头。 |
| 生物 | [snake](../../demos/materials/ascii-rest/index.html?demo=snake) | 蛇沿 S 形曲线爬行，不时吐出舌头。 |
| 生物 | [spider](../../demos/materials/ascii-rest/index.html?demo=spider) | 蜘蛛沿丝线降下，再爬回上方。 |
| 生物 | [starlings](../../demos/materials/ascii-rest/index.html?demo=starlings) | 椋鸟群盘旋翻转，被飞过的猎隼分开。 |
| 生物 | [whale](../../demos/materials/ascii-rest/index.html?demo=whale) | 鲸鱼喷水、弓起背部潜入水中，尾鳍最后消失。 |
| 物件 | [analog clock](../../demos/materials/ascii-rest/index.html?demo=analog-clock) | 圆形表盘显示当地时间，秒针逐格跳动。 |
| 物件 | [candle](../../demos/materials/ascii-rest/index.html?demo=candle) | 烛台里的蜡烛闪烁着燃尽，随后重新开始。 |
| 物件 | [coffee](../../demos/materials/ascii-rest/index.html?demo=coffee) | 碟上的咖啡杯升起卷曲的蒸汽。 |
| 物件 | [ferris wheel](../../demos/materials/ascii-rest/index.html?demo=ferris-wheel) | 摩天轮在 A 形支架上转动，座舱始终保持竖直。 |
| 物件 | [hawa mahal](../../demos/materials/ascii-rest/index.html?demo=hawa-mahal) | 夜晚的斋浦尔风宫，镂空窗格后透出灯光。 |
| 物件 | [hourglass](../../demos/materials/ascii-rest/index.html?demo=hourglass) | 细沙从沙漏颈部流下，随后沙漏翻转。 |
| 物件 | [kite](../../demos/materials/ascii-rest/index.html?demo=kite) | 菱形风筝乘风飞行，风弱时风筝线松垂。 |
| 物件 | [lava lamp](../../demos/materials/ascii-rest/index.html?demo=lava-lamp) | 发光玻璃中的蜡团上升、融合，再沉下。 |
| 物件 | [lighthouse](../../demos/materials/ascii-rest/index.html?demo=lighthouse) | 礁石上的灯塔向夜海扫出光束。 |
| 物件 | [skyline](../../demos/materials/ascii-rest/index.html?demo=skyline) | 夜城的窗户明灭，塔顶信号灯闪烁。 |
| 物件 | [sundial](../../demos/materials/ascii-rest/index.html?demo=sundial) | 斋浦尔的萨姆拉特日晷，阴影随当地时间移动。 |
| 物件 | [train](../../demos/materials/ascii-rest/index.html?demo=train) | 蒸汽火车沿铁轨驶过，后方冒出阵阵烟雾。 |
| 物件 | [vinyl](../../demos/materials/ascii-rest/index.html?demo=vinyl) | 从上方俯瞰，唱片在唱臂下转动。 |
| 物件 | [windmill](../../demos/materials/ascii-rest/index.html?demo=windmill) | 荷兰风车的四片格栅翼转动，云朵从旁飘过。 |
| 形体 | [cube](../../demos/materials/ascii-rest/index.html?demo=cube) | 点描立方体每次转动四分之一圈，并隐藏不可见的边。 |
| 形体 | [dna helix](../../demos/materials/ascii-rest/index.html?demo=dna-helix) | 带碱基对的双螺旋绕自身轴线转动。 |
| 形体 | [donut](../../demos/materials/ascii-rest/index.html?demo=donut) | 受光的圆环绕两条轴转动，参考 donut.c。 |
| 形体 | [glxgears](../../demos/materials/ascii-rest/index.html?demo=glxgears) | 三个互相啮合的齿轮转动，参考 glxgears。 |
| 形体 | [gyroscope](../../demos/materials/ascii-rest/index.html?demo=gyroscope) | 框架围绕旋转的转子摆动，转子轴线保持不变。 |
| 形体 | [heart](../../demos/materials/ascii-rest/index.html?demo=heart) | 有光泽的三维心形摇摆，并以双拍节奏跳动。 |
| 形体 | [icosahedron](../../demos/materials/ascii-rest/index.html?demo=icosahedron) | 线框二十面体转动，隐藏的边以虚点表示。 |
| 形体 | [mobius strip](../../demos/materials/ascii-rest/index.html?demo=mobius-strip) | 莫比乌斯带在上方光照下旋转、俯仰。 |
| 形体 | [spring](../../demos/materials/ascii-rest/index.html?demo=spring) | 重物挂在线圈弹簧上弹跳，线圈随之挤紧。 |
| 形体 | [tesseract](../../demos/materials/ascii-rest/index.html?demo=tesseract) | 四维超立方体旋转，各立方体互相穿过。 |
| 形体 | [torus knot](../../demos/materials/ascii-rest/index.html?demo=torus-knot) | 以受光管道绘成的三叶结缓慢转动。 |
| 形体 | [twisted ring](../../demos/materials/ascii-rest/index.html?demo=twisted-ring) | 方形环扭转四分之三圈，形成只有一个表面的形体。 |
| 生成图案 | [epicycles](../../demos/materials/ascii-rest/index.html?demo=epicycles) | 一串旋转圆周的末端描出星形。 |
| 生成图案 | [flow field](../../demos/materials/ascii-rest/index.html?demo=flow-field) | 粒子轨迹汇聚成蜿蜒、交汇的流线。 |
| 生成图案 | [glider gun](../../demos/materials/ascii-rest/index.html?demo=glider-gun) | Gosper 滑翔机枪每 30 代发射一架滑翔机。 |
| 生成图案 | [hilbert curve](../../demos/materials/ascii-rest/index.html?demo=hilbert-curve) | 两条希尔伯特曲线组成闭环，两个亮点沿线奔跑。 |
| 生成图案 | [julia set](../../demos/materials/ascii-rest/index.html?demo=julia-set) | 常数 c 绕圈变化，朱利亚集随之改变形状。 |
| 生成图案 | [langton's ant](../../demos/materials/ascii-rest/index.html?demo=langtons-ant) | 兰顿蚂蚁先呈现秩序，再陷入混沌，最后修出高速公路。 |
| 生成图案 | [mandelbrot](../../demos/materials/ascii-rest/index.html?demo=mandelbrot) | 缓慢放大到海马谷，再缩回原处。 |
| 生成图案 | [maze](../../demos/materials/ascii-rest/index.html?demo=maze) | 以回溯法挖出迷宫、求解，再重新生成。 |
| 生成图案 | [plasma](../../demos/materials/ascii-rest/index.html?demo=plasma) | 柔和的干涉色斑漂移、脉动。 |
| 生成图案 | [reaction diffusion](../../demos/materials/ascii-rest/index.html?demo=reaction-diffusion) | Gray–Scott 反应扩散的斑点和条纹消退后重新生长。 |
| 生成图案 | [rule 30](../../demos/materials/ascii-rest/index.html?demo=rule-30) | 单个细胞按规则 30、90、110 逐行生长。 |
| 生成图案 | [sierpinski](../../demos/materials/ascii-rest/index.html?demo=sierpinski) | 混沌游戏逐点填出谢尔宾斯基三角形。 |
| 生成图案 | [voronoi](../../demos/materials/ascii-rest/index.html?demo=voronoi) | 平面按距各漂移种子最近的区域划分成单元。 |
| 物理 | [bouncing balls](../../demos/materials/ascii-rest/index.html?demo=bouncing-balls) | 橡皮球越弹越低，落地时被压扁。 |
| 物理 | [chladni plate](../../demos/materials/ascii-rest/index.html?demo=chladni) | 振动板上的沙粒移向振动的节线。 |
| 物理 | [double pendulum](../../demos/materials/ascii-rest/index.html?demo=double-pendulum) | 混沌双摆的末端留下逐渐消失的轨迹。 |
| 物理 | [falling sand](../../demos/materials/ascii-rest/index.html?demo=falling-sand) | 沙粒落下堆积，再从搁板中漏走。 |
| 物理 | [flag](../../demos/materials/ascii-rest/index.html?demo=flag) | 条纹旗帜在旗杆上起伏，褶皱映出光线。 |
| 物理 | [fountain](../../demos/materials/ascii-rest/index.html?demo=fountain) | 喷嘴射出的弧形水流化作水滴落入池中。 |
| 物理 | [harmonograph](../../demos/materials/ascii-rest/index.html?demo=harmonograph) | 画笔受两个逐渐衰减的摆控制，向内绕出图案。 |
| 物理 | [lorenz attractor](../../demos/materials/ascii-rest/index.html?demo=lorenz) | 一条洛伦兹轨迹绕过双翼，较早的环线逐渐淡去。 |
| 物理 | [newton's cradle](../../demos/materials/ascii-rest/index.html?demo=newtons-cradle) | 五颗悬挂的钢球来回传递一次撞击。 |
| 物理 | [pendulum wave](../../demos/materials/ascii-rest/index.html?demo=pendulum-wave) | 从上方俯看，一排摆锤时而同步、时而错开。 |
| 物理 | [plucked string](../../demos/materials/ascii-rest/index.html?demo=plucked-string) | 拨动的琴弦以慢动作振动，谐波逐渐衰减。 |
| 物理 | [pond ripples](../../demos/materials/ascii-rest/index.html?demo=pond-ripples) | 雨滴在池塘上激起交叠、消退的圆形波纹。 |
| 物理 | [smoke](../../demos/materials/ascii-rest/index.html?demo=smoke) | 线香的烟雾先笔直上升，再卷曲、变淡。 |
| 物理 | [wave interference](../../demos/materials/ascii-rest/index.html?demo=wave-interference) | 波纹槽中的两个波源形成向外展开的静止节线。 |
| 效果 | [doom fire](../../demos/materials/ascii-rest/index.html?demo=doom-fire) | PSX 风格的火焰从白热火床上向上蔓延。 |
| 效果 | [fireworks](../../demos/materials/ascii-rest/index.html?demo=fireworks) | 烟花弹升空，炸成牡丹、圆环、垂柳和棕榈形状。 |
| 效果 | [matrix rain](../../demos/materials/ascii-rest/index.html?demo=matrix-rain) | 字符流不断落下，前端浓密、后方渐淡。 |
| 效果 | [rotozoomer](../../demos/materials/ascii-rest/index.html?demo=rotozoomer) | 砖墙纹理围绕中心旋转、缩放。 |
| 效果 | [sparks](../../demos/materials/ascii-rest/index.html?demo=sparks) | 角磨机抛出火星，划弧弹跳后逐渐冷却。 |
| 效果 | [synthwave](../../demos/materials/ascii-rest/index.html?demo=synthwave) | 网格向山脊后的条纹太阳滚动。 |
| 效果 | [tunnel](../../demos/materials/ascii-rest/index.html?demo=tunnel) | 视线飞入弯曲、扭转的瓷砖隧道。 |
| 效果 | [tv static](../../demos/materials/ascii-rest/index.html?demo=tv-static) | 老电视的雪花调出测试卡，随后又失去信号。 |
| 文字 | [big text](../../demos/materials/ascii-rest/index.html?demo=big-text) | 块状字母横幅带着线框阴影，偶有亮光掠过。 |
| 文字 | [dissolve](../../demos/materials/ascii-rest/index.html?demo=dissolve) | 文字碎成尘埃，再凝聚成下一组词。 |
| 文字 | [glitch](../../demos/materials/ascii-rest/index.html?demo=glitch) | 像素文字短暂撕裂成滑动的切片。 |
| 文字 | [marquee](../../demos/materials/ascii-rest/index.html?demo=marquee) | 滚动 LED 字牌被追逐闪烁的灯泡包围。 |
| 文字 | [morse](../../demos/materials/ascii-rest/index.html?demo=morse) | 灯光发送摩斯电码，纸带记录长短信号并解码字母。 |
| 文字 | [scramble](../../demos/materials/ascii-rest/index.html?demo=scramble) | 闪动的乱码从左到右逐渐解出短句。 |
| 文字 | [split-flap](../../demos/materials/ascii-rest/index.html?demo=split-flap) | 出发信息牌的翻片快速翻动，切换到下一行内容。 |
| 文字 | [typewriter](../../demos/materials/ascii-rest/index.html?demo=typewriter) | 闪烁光标后，短句轮流被输入、删除。 |
| 文字 | [wave text](../../demos/materials/ascii-rest/index.html?demo=wave-text) | 波浪从左向右穿过一行文字。 |
| 界面 | [boot log](../../demos/materials/ascii-rest/index.html?demo=boot-log) | 自检先统计内存，随后启动日志滚动而过。 |
| 界面 | [box frames](../../demos/materials/ascii-rest/index.html?demo=box-frames) | 十二种可取用的边框样式分别标出名称。 |
| 界面 | [calendar](../../demos/materials/ascii-rest/index.html?demo=calendar) | 以 cal 风格显示当月日历，今天用括号标出，下方时钟跳动。 |
| 界面 | [chat](../../demos/materials/ascii-rest/index.html?demo=chat) | 聊天气泡依次呈现输入、发送、三点等待和逐字回复。 |
| 界面 | [digital clock](../../demos/materials/ascii-rest/index.html?demo=digital-clock) | 七段数码管显示当地时间，冒号闪烁。 |
| 界面 | [dividers](../../demos/materials/ascii-rest/index.html?demo=dividers) | 展示从朴素到繁复的章节分隔线与装饰。 |
| 界面 | [file tree](../../demos/materials/ascii-rest/index.html?demo=file-tree) | 目录树逐层展开文件夹，再依次收起。 |
| 界面 | [form controls](../../demos/materials/ascii-rest/index.html?demo=form-controls) | 终端风格表单逐个字段填写。 |
| 界面 | [git graph](../../demos/materials/ascii-rest/index.html?demo=git-graph) | git log --graph 滚动显示分支从 main 分出、再合并回来。 |
| 界面 | [not found](../../demos/materials/ascii-rest/index.html?demo=not-found) | 块状字母 404 下方，一只小幽灵缓缓飘动。 |
| 界面 | [pipeline](../../demos/materials/ascii-rest/index.html?demo=pipeline) | 持续集成逐阶段运行，一次测试失败后恢复全绿。 |
| 界面 | [progress bar](../../demos/materials/ascii-rest/index.html?demo=progress-bar) | 五种进度条以不同速度填充，右侧显示百分比。 |
| 界面 | [skeleton](../../demos/materials/ascii-rest/index.html?demo=skeleton) | 由阴影字符块组成的加载卡片上掠过微光。 |
| 界面 | [spinners](../../demos/materials/ascii-rest/index.html?demo=spinners) | 十二种加载动画并排显示，各自标出名称。 |
| 界面 | [terminal](../../demos/materials/ascii-rest/index.html?demo=terminal) | Shell 会话依次演示命令输入、输出、滚动与清屏。 |
| 数据 | [bar chart](../../demos/materials/ascii-rest/index.html?demo=bar-chart) | 柱形在三组数据间平滑变化，数值随柱顶移动。 |
| 数据 | [candlesticks](../../demos/materials/ascii-rest/index.html?demo=candlesticks) | 上涨为空心蜡烛、下跌为实心蜡烛，最后一根实时形成。 |
| 数据 | [cpu meters](../../demos/materials/ascii-rest/index.html?demo=cpu-meters) | 进程列表上方显示 htop 风格的核心、内存和交换空间仪表。 |
| 数据 | [equalizer](../../demos/materials/ascii-rest/index.html?demo=equalizer) | 频谱柱随节拍弹跳，峰值标记缓慢落下。 |
| 数据 | [gauge](../../demos/materials/ascii-rest/index.html?demo=gauge) | 半圆表盘的指针每次到达新读数时略微越过目标。 |
| 数据 | [heartbeat](../../demos/materials/ascii-rest/index.html?demo=heartbeat) | 心电图轨迹扫过上一轮曲线，同时显示每分钟心跳数。 |
| 数据 | [heatmap](../../demos/materials/ascii-rest/index.html?demo=heatmap) | 贡献日历逐日填充，各周向左滚动。 |
| 数据 | [radar](../../demos/materials/ascii-rest/index.html?demo=radar) | 雷达光束带着余辉旋转，目标在两次扫描之间渐淡。 |
| 数据 | [sparkline](../../demos/materials/ascii-rest/index.html?demo=sparkline) | 三条实时块状迷你图向左滚动，右侧显示数值。 |
| 数据 | [uptime bar](../../demos/materials/ascii-rest/index.html?demo=uptime-bar) | 三项服务的 60 天在线状态条随新一天到来向前滑动。 |
| 语言与工具标志 | [c](../../demos/materials/ascii-rest/index.html?demo=c) | 蓝色六边形上的 C 不时掠过亮光。 |
| 语言与工具标志 | [clojure](../../demos/materials/ascii-rest/index.html?demo=clojure) | 绿蓝圆形中的 lambda 符号不时掠过亮光。 |
| 语言与工具标志 | [c++](../../demos/materials/ascii-rest/index.html?demo=cpp) | 蓝色六边形上的 C++ 不时掠过亮光。 |
| 语言与工具标志 | [c#](../../demos/materials/ascii-rest/index.html?demo=csharp) | 紫色六边形上的 C# 不时掠过亮光。 |
| 语言与工具标志 | [css](../../demos/materials/ascii-rest/index.html?demo=css) | 带数字 3 的蓝色盾牌不时掠过亮光。 |
| 语言与工具标志 | [dart](../../demos/materials/ascii-rest/index.html?demo=dart) | 蓝色与青绿色的飞镖不时掠过亮光。 |
| 语言与工具标志 | [elixir](../../demos/materials/ascii-rest/index.html?demo=elixir) | 紫色水滴不时掠过亮光。 |
| 语言与工具标志 | [elm](../../demos/materials/ascii-rest/index.html?demo=elm) | 七块七巧板拼成正方形，不时掠过亮光。 |
| 语言与工具标志 | [erlang](../../demos/materials/ascii-rest/index.html?demo=erlang) | 括号中的红色 E 不时掠过亮光。 |
| 语言与工具标志 | [go](../../demos/materials/ascii-rest/index.html?demo=go) | 带速度线的 Go 字样不时掠过亮光。 |
| 语言与工具标志 | [haskell](../../demos/materials/ascii-rest/index.html?demo=haskell) | 尖括号、lambda 与等号组成的标志不时掠过亮光。 |
| 语言与工具标志 | [html](../../demos/materials/ascii-rest/index.html?demo=html) | 带数字 5 的橙色盾牌不时掠过亮光。 |
| 语言与工具标志 | [java](../../demos/materials/ascii-rest/index.html?demo=java) | 冒着蒸汽的咖啡杯不时掠过亮光。 |
| 语言与工具标志 | [javascript](../../demos/materials/ascii-rest/index.html?demo=javascript) | 黄色方块上的 JS 不时掠过亮光。 |
| 语言与工具标志 | [julia](../../demos/materials/ascii-rest/index.html?demo=julia) | 绿色、红色和紫色的三个圆点不时掠过亮光。 |
| 语言与工具标志 | [kotlin](../../demos/materials/ascii-rest/index.html?demo=kotlin) | 紫色与粉色的 K 不时掠过亮光。 |
| 语言与工具标志 | [lua](../../demos/materials/ascii-rest/index.html?demo=lua) | 行星与卫星组成的标志不时掠过亮光。 |
| 语言与工具标志 | [ocaml](../../demos/materials/ascii-rest/index.html?demo=ocaml) | 橙色方块上的骆驼不时掠过亮光。 |
| 语言与工具标志 | [perl](../../demos/materials/ascii-rest/index.html?demo=perl) | 洋葱标志不时掠过亮光。 |
| 语言与工具标志 | [php](../../demos/materials/ascii-rest/index.html?demo=php) | 紫色椭圆中的 PHP 不时掠过亮光。 |
| 语言与工具标志 | [python](../../demos/materials/ascii-rest/index.html?demo=python) | 蓝黄双色的两条蛇不时掠过亮光。 |
| 语言与工具标志 | [r](../../demos/materials/ascii-rest/index.html?demo=r) | 灰色圆环上的蓝色 R 不时掠过亮光。 |
| 语言与工具标志 | [ruby](../../demos/materials/ascii-rest/index.html?demo=ruby) | 切割出的红色宝石不时掠过亮光。 |
| 语言与工具标志 | [rust](../../demos/materials/ascii-rest/index.html?demo=rust) | Ferris 橙色的齿轮与 R 不时掠过亮光。 |
| 语言与工具标志 | [scala](../../demos/materials/ascii-rest/index.html?demo=scala) | 红色螺旋阶梯不时掠过亮光。 |
| 语言与工具标志 | [svelte](../../demos/materials/ascii-rest/index.html?demo=svelte) | 绕成 S 的橙色丝带不时掠过亮光。 |
| 语言与工具标志 | [swift](../../demos/materials/ascii-rest/index.html?demo=swift) | 橙色方块上的雨燕不时掠过亮光。 |
| 语言与工具标志 | [typescript](../../demos/materials/ascii-rest/index.html?demo=typescript) | 蓝色方块上的 TS 不时掠过亮光。 |
| 语言与工具标志 | [zig](../../demos/materials/ascii-rest/index.html?demo=zig) | 括号内倾斜的 Z 不时掠过亮光。 |
| 公司标志 | [a0](../../demos/materials/ascii-rest/index.html?demo=a0) | 带圆孔的圆润字母 A 不时掠过亮光。 |
| 公司标志 | [agentmail](../../demos/materials/ascii-rest/index.html?demo=agentmail) | 戴着有檐帽的特工标志不时掠过亮光。 |
| 公司标志 | [apple](../../demos/materials/ascii-rest/index.html?demo=apple) | 缺了一口的苹果不时掠过亮光。 |
| 公司标志 | [autumn](../../demos/materials/ascii-rest/index.html?demo=autumn) | 以斜线作叶脉的叶片不时掠过亮光。 |
| 公司标志 | [cloudflare](../../demos/materials/ascii-rest/index.html?demo=cloudflare) | 橙色云朵不时掠过亮光。 |
| 公司标志 | [coderabbit](../../demos/materials/ascii-rest/index.html?demo=coderabbit) | 橙色圆盘中的坐姿兔子不时掠过亮光。 |
| 公司标志 | [collabute](../../demos/materials/ascii-rest/index.html?demo=collabute) | 黑环内由白渐黑的圆盘不时掠过亮光。 |
| 公司标志 | [command code](../../demos/materials/ascii-rest/index.html?demo=command-code) | 圆角方框中的 Command 键符号不时掠过亮光。 |
| 公司标志 | [databuddy](../../demos/materials/ascii-rest/index.html?demo=databuddy) | Databuddy 兔子不时掠过亮光。 |
| 公司标志 | [greptile](../../demos/materials/ascii-rest/index.html?demo=greptile) | 折成立方体的绿色 G 不时掠过亮光。 |
| 公司标志 | [gta vi](../../demos/materials/ascii-rest/index.html?demo=gta-vi) | 夕阳配色的 Grand Theft Auto VI 字母 VI 不时掠过亮光。 |
| 公司标志 | [helium](../../demos/materials/ascii-rest/index.html?demo=helium) | 蓝色六角星号不时掠过亮光。 |
| 公司标志 | [helixdb](../../demos/materials/ascii-rest/index.html?demo=helixdb) | 两根立柱间呈螺旋排列的阶梯横档不时掠过亮光。 |
| 公司标志 | [helmcode](../../demos/materials/ascii-rest/index.html?demo=helmcode) | 紫色 Helmcode 六边形不时掠过亮光。 |
| 公司标志 | [keiki](../../demos/materials/ascii-rest/index.html?demo=keiki) | 摇马标志不时掠过亮光。 |
| 公司标志 | [mintlify](../../demos/materials/ascii-rest/index.html?demo=mintlify) | 薄荷绿色的叶中叶不时掠过亮光。 |
| 公司标志 | [orchid](../../demos/materials/ascii-rest/index.html?demo=orchid) | 五瓣花不时掠过亮光。 |
| 公司标志 | [planetscale](../../demos/materials/ascii-rest/index.html?demo=planetscale) | 被两道笔画切开的圆盘不时掠过亮光。 |
| 公司标志 | [playstation](../../demos/materials/ascii-rest/index.html?demo=playstation) | 蓝色 P 立在平放的 S 上，不时掠过亮光。 |
| 公司标志 | [polar](../../demos/materials/ascii-rest/index.html?demo=polar) | 半颗星、横条与圆弧组成的标志不时掠过亮光。 |
| 公司标志 | [supabase](../../demos/materials/ascii-rest/index.html?demo=supabase) | 绿色闪电不时掠过亮光。 |
| 公司标志 | [supermemory](../../demos/materials/ascii-rest/index.html?demo=supermemory) | 两道镜像笔画不时掠过亮光。 |
| 公司标志 | [vercel](../../demos/materials/ascii-rest/index.html?demo=vercel) | Vercel 三角形不时掠过亮光。 |
| Linux 发行版 | [almalinux](../../demos/materials/ascii-rest/index.html?demo=almalinux) | 五个彩色人形围成圆环，不时被扫描线扫过。 |
| Linux 发行版 | [alpine linux](../../demos/materials/ascii-rest/index.html?demo=alpine-linux) | 六边形内的山峰不时被扫描线扫过。 |
| Linux 发行版 | [arch linux](../../demos/materials/ascii-rest/index.html?demo=arch-linux) | 蓝色拱形标志不时被扫描线扫过。 |
| Linux 发行版 | [centos](../../demos/materials/ascii-rest/index.html?demo=centos) | 四个彩色方块组成星形，不时被扫描线扫过。 |
| Linux 发行版 | [debian](../../demos/materials/ascii-rest/index.html?demo=debian) | 红色旋涡不时被扫描线扫过。 |
| Linux 发行版 | [deepin](../../demos/materials/ascii-rest/index.html?demo=deepin) | 蓝色圆环中的旋涡不时被扫描线扫过。 |
| Linux 发行版 | [elementary os](../../demos/materials/ascii-rest/index.html?demo=elementary-os) | 圆环中的 E 不时被扫描线扫过。 |
| Linux 发行版 | [endeavouros](../../demos/materials/ascii-rest/index.html?demo=endeavouros) | 紫色船帆不时被扫描线扫过。 |
| Linux 发行版 | [fedora](../../demos/materials/ascii-rest/index.html?demo=fedora) | 蓝色气泡中的 F 不时被扫描线扫过。 |
| Linux 发行版 | [gentoo](../../demos/materials/ascii-rest/index.html?demo=gentoo) | 淡紫色 G 不时被扫描线扫过。 |
| Linux 发行版 | [kali linux](../../demos/materials/ascii-rest/index.html?demo=kali-linux) | 蓝色龙形标志不时被扫描线扫过。 |
| Linux 发行版 | [linux mint](../../demos/materials/ascii-rest/index.html?demo=linux-mint) | 绿色圆形中的 LM 不时被扫描线扫过。 |
| Linux 发行版 | [manjaro](../../demos/materials/ascii-rest/index.html?demo=manjaro) | 三个绿色色块不时被扫描线扫过。 |
| Linux 发行版 | [nixos](../../demos/materials/ascii-rest/index.html?demo=nixos) | 由 lambda 符号组成的雪花不时被扫描线扫过。 |
| Linux 发行版 | [omarchy](../../demos/materials/ascii-rest/index.html?demo=omarchy) | 绿色括号组成方形 O，不时被扫描线扫过。 |
| Linux 发行版 | [opensuse](../../demos/materials/ascii-rest/index.html?demo=opensuse) | 绿色变色龙不时被扫描线扫过。 |
| Linux 发行版 | [pop!_os](../../demos/materials/ascii-rest/index.html?demo=pop-os) | 青绿色圆形中的 P! 不时被扫描线扫过。 |
| Linux 发行版 | [red hat](../../demos/materials/ascii-rest/index.html?demo=red-hat) | 戴红帽的人物不时被扫描线扫过。 |
| Linux 发行版 | [rocky linux](../../demos/materials/ascii-rest/index.html?demo=rocky-linux) | 绿色圆形中的山峰不时被扫描线扫过。 |
| Linux 发行版 | [tux](../../demos/materials/ascii-rest/index.html?demo=tux) | 企鹅 Tux 不时被扫描线扫过。 |
| Linux 发行版 | [ubuntu](../../demos/materials/ascii-rest/index.html?demo=ubuntu) | 橙色的朋友之圈不时被扫描线扫过。 |
| Linux 发行版 | [void linux](../../demos/materials/ascii-rest/index.html?demo=void-linux) | 被切开的绿色圆环不时被扫描线扫过。 |
| Linux 发行版 | [zorin os](../../demos/materials/ascii-rest/index.html?demo=zorin-os) | 蓝色条纹组成的 Z 不时被扫描线扫过。 |
| Kit · compose | [compose-banner-scene](../../demos/materials/ascii-rest/index.html?demo=kit-compose-banner-scene) | 用 over() 把横幅放在海上落日场景顶部下方十二行，横幅行高加倍以适配方格，合并调色板并让天空透过空白字符。 |
| Kit · compose | [compose-dashboard](../../demos/materials/ascii-rest/index.html?demo=kit-compose-dashboard) | 将四个图表排成两列网格，各自保留播放器和参数，用带名称的圆角边框与随主题变化的单色保持排列整齐。 |
| Kit · compose | [compose-logos](../../demos/materials/ascii-rest/index.html?demo=kit-compose-logos) | 三个标志各显示三秒，以斑块溶解相互过渡并循环，各自的亮光从首次出现时计时，颜色共用调色板。 |
| Kit · compose | [compose-starfield](../../demos/materials/ascii-rest/index.html?demo=kit-compose-starfield) | 灰色星空上居中放置横幅，金色小船沿底部穿出右侧再从左侧进入，航程与三次横幅亮光合成 9.6 秒循环，星星穿过文字空白。 |
| Kit · core | [core-orbit](../../demos/materials/ascii-rest/index.html?demo=kit-core-orbit) | 只用 piece() 的字符写入与单格设置绘出卫星绕行行星，每四秒一圈，也可用 orbiting() 直接完成。 |
| Kit · draw | [draw-clock](../../demos/materials/ascii-rest/index.html?demo=kit-draw-clock) | 用绘图形状与文字定位手绘带圆角边框的时钟，ring() 排列时标、ray() 绘制指针，时刻固定在十点十分，秒针每分钟转一圈。 |
| Kit · draw | [draw-gauge](../../demos/materials/ascii-rest/index.html?demo=kit-draw-gauge) | 用圆角边框、分隔线和双弧表盘组成终端仪表，旁边的盲文曲线显示同一读数最近八秒的变化，两个正弦信号合成八秒循环。 |
| Kit · draw | [draw-sine](../../demos/materials/ascii-rest/index.html?demo=kit-draw-sine) | 在每格 2×4 点的盲文画布上绘制平滑的正弦与余弦曲线，由 plot() 自动缩放至边框内，每秒移动四分之一周期、四秒循环。 |
| Kit · draw | [draw-sprite](../../demos/materials/ascii-rest/index.html?demo=kit-draw-sprite) | 半块字符画布上，小像素人物在阳光草地中以每秒四次换腿行走，四秒穿过画面并从左侧重入，调色板随浅深主题变化。 |
| Kit · field | [field-moonlit](../../demos/materials/ascii-rest/index.html?demo=kit-field-moonlit) | 用一个场函数绘出月亮、闪星与海浪，空天空返回透明，近处波浪更大，月光以月亮自身的颜色碎落在水面。 |
| Kit · field | [field-plasma](../../demos/materials/ascii-rest/index.html?demo=kit-field-plasma) | 四个正弦波经叠加与再次折叠形成从靛蓝到琥珀色的八级等离子图案，每八秒完整循环，也可直接用 plasma()。 |
| Kit · field | [field-pulse](../../demos/materials/ascii-rest/index.html?demo=kit-field-pulse) | 根据距中心的距离和当前相位，每两秒绘出膨胀回落的光心、向外扩散消退的光环与回声，减少动态时停在三分之一处。 |
| Kit · field | [field-sea](../../demos/materials/ascii-rest/index.html?demo=kit-field-sea) | 场函数用斜线和波浪线描绘侧视涌浪，水下字符随深度变暗、上方保持透明，浅色页上的浪花以深色墨迹呈现，也可直接用 sea() 或 waves()。 |
| Kit · field | [field-storm](../../demos/materials/ascii-rest/index.html?demo=kit-field-storm) | 按气旋每格的风向选择横、竖或斜笔画，以密度和颜色表达风力，平静处透明，阵风随风暴每八秒转一圈。 |
| Kit · field | [field-window](../../demos/materials/ascii-rest/index.html?demo=kit-field-window) | 用 drawField() 把受光球体绘入 piece() 的边框区域，文字标题位于下方，球外不绘制且无空格的字符梯度保留暗面。 |
| Kit · fx | [fx-chain-banner](../../demos/materials/ascii-rest/index.html?demo=kit-fx-chain-banner) | 静止横幅依次叠加彩虹色带与波浪摆动，每个效果接收上一个作品，自动合成六秒循环。 |
| Kit · fx | [fx-chain-card](../../demos/materials/ascii-rest/index.html?demo=kit-fx-chain-card) | 用 chain() 让命令逐字输入、圆角轮廓随文字长出，再加投影，停留两秒后重新输入。 |
| Kit · fx | [fx-custom-reflection](../../demos/materials/ascii-rest/index.html?demo=kit-fx-custom-reflection) | 用 effect() 绘制横幅下方浅色、逐行起伏的倒影，Kit 负责播放、尺寸、浅深配色与循环。 |
| Kit · fx | [fx-dissolve-donut](../../demos/materials/ascii-rest/index.html?demo=kit-fx-dissolve-donut) | 库中的 donut 每六秒在噪声中溶解、重现，效果直接处理原作品的帧。 |
| Kit · fx | [fx-glint-banner](../../demos/materials/ascii-rest/index.html?demo=kit-fx-glint-banner) | 橙粉渐变的静止横幅每四秒掠过一次同色系亮光，83 列的扫光约用 2.4 秒。 |
| Kit · fx | [fx-glitch-logo](../../demos/materials/ascii-rest/index.html?demo=kit-fx-glitch-logo) | Rust 标志每 2.5 秒短暂错位成滑动条带和杂乱字符，同时保留自身亮光，合成五秒循环。 |
| Kit · fx | [fx-scan-logo](../../demos/materials/ascii-rest/index.html?demo=kit-fx-scan-logo) | 扫描线从上向下显露 Go 标志，完整停留后再次扫描，每三秒循环。 |
| Kit · fx | [fx-type-terminal](../../demos/materials/ascii-rest/index.html?demo=kit-fx-type-terminal) | 光标后三条命令依次输入，停留两秒后重来，未命名的文字源使用首行作为名称。 |
| Kit · image | [image-badge](../../demos/materials/ascii-rest/index.html?demo=kit-image-badge) | drawImage() 把闪光的 Python 标志放在输入并回答一行命令的 REPL 旁，五秒循环，用 imagePalette() 保留两种主题下的蓝黄配色。 |
| Kit · image | [image-logo](../../demos/materials/ascii-rest/index.html?demo=kit-image-logo) | fromImage() 按图像边缘选择字符，将本地 devicon Python 图标绘成保留原色、每五秒闪光的字符画，浏览器也能读取页面可加载的图片或 SVG。 |
| Kit · image | [image-photo](../../demos/materials/ascii-rest/index.html?demo=kit-image-photo) | 将 NASA Goddard 基于月球勘测轨道飞行器影像制作的公有领域满月图自动识别为照片，以灰度字符着色并移除黑色背景，浅色页反转字符密度以表现明暗。 |
| Kit · materials | [materials-aquarium](../../demos/materials/ascii-rest/index.html?demo=kit-materials-aquarium) | 玻璃水箱中铺着沙子、水草摇摆、金鱼往返游动、气泡升起，各部分定位在水内以适应任意水箱尺寸。 |
| Kit · materials | [materials-candle](../../demos/materials/ascii-rest/index.html?demo=kit-materials-candle) | 蜡烛、烛芯与火焰逐层放置，柔光中火苗闪动、细烟卷起，用 on 和 from 连接各部分而无需手动定位。 |
| Kit · materials | [materials-coffee](../../demos/materials/ascii-rest/index.html?demo=kit-materials-coffee) | 咖啡先绘制、不透明杯身后覆盖，使液体只从杯口露出，inside() 填充杯体并避开把手，蒸汽从杯口升起。 |
| Kit · materials | [materials-cola](../../demos/materials/ascii-rest/index.html?demo=kit-materials-cola) | 可乐杯中气泡上升、两块冰漂在液面、条纹吸管伸入杯中，先绘制的吸管在液体下发生折射。 |
| Kit · materials | [materials-glass](../../demos/materials/ascii-rest/index.html?demo=kit-materials-glass) | 用杯形、材质与内部填充组合出半杯轻轻起伏的水和上升气泡，无需坐标或数学计算。 |
| Kit · materials | [materials-house](../../demos/materials/ascii-rest/index.html?demo=kit-materials-house) | 星空下的草坪上，小屋窗中亮灯、烟囱冒烟，月亮和漂云在上方，房屋的窗、门与烟囱可分别填充材质或作为发射源。 |
| Kit · materials | [materials-lava-lamp](../../demos/materials/ascii-rest/index.html?demo=kit-materials-lava-lamp) | 玻璃球内的熔岩团上升、变圆、下沉，金属顶盖与底座偶尔泛光，灯形各部分分别使用自己的材质。 |
| Kit · materials | [materials-rocket](../../demos/materials/ascii-rest/index.html?demo=kit-materials-rocket) | 用 area.fit() 的点构造火箭外形、material() 着色、emission() 从喷嘴喷射尾焰，并用自定义运动表现推力震动，背景星空取自 Kit。 |
| Kit · materials | [materials-tv](../../demos/materials/ascii-rest/index.html?demo=kit-materials-tv) | 木地板上的老电视在圆角玻璃屏幕后播放 donut，texture() 将现成作品作为屏幕、窗口或招牌的材质。 |
| Kit · math | [math-easing](../../demos/materials/ascii-rest/index.html?demo=kit-math-easing) | 八种缓动各控制一个点在相同轨道上用两秒移动、每三秒重来，并排呈现回退、弹性超调与弹跳等差异。 |
| Kit · math | [math-galaxy](../../demos/materials/ascii-rest/index.html?demo=kit-math-galaxy) | 随机种子生成两千颗双旋臂恒星，相机每十六秒旋转一圈并以倾斜透视适配网格，字符按落入单元的星光着色。 |
| Kit · math | [math-landscape](../../demos/materials/ascii-rest/index.html?demo=kit-math-landscape) | 三层山脉在固定种子的天空下滚动，noise() 描述山脊范围、速度与十六秒循环，近山更大、更低、更快并遮住远山。 |
| Kit · math | [math-pool](../../demos/materials/ascii-rest/index.html?demo=kit-math-pool) | 用四秒循环的噪声单元与平滑扰动模拟泳池底部的折射光，反转、增强明暗后以字符梯度和蓝色渐变绘出弯曲光线。 |
| Kit · math | [math-starfield](../../demos/materials/ascii-rest/index.html?demo=kit-math-starfield) | 固定种子的星空用 scatter() 均匀分布、twinkle() 错开闪烁，每四秒随机选择一条流星路径并缩短减速尾迹，整体八秒循环。 |
| Kit · particles | [particles-banner](../../demos/materials/ascii-rest/index.html?demo=kit-particles-banner) | 同一渐变横幅既作背景又作粒子发射源，火星从字母升起并由白热冷却到红色。 |
| Kit · particles | [particles-comet](../../demos/materials/ascii-rest/index.html?demo=kit-particles-comet) | 彗星每八秒绕带环行星一圈，移动发射源留下粒子尾迹，drawParticles() 合并系统，particlesPalette() 合并配色，行星绘在闪星上方。 |
| Kit · particles | [particles-confetti](../../demos/materials/ascii-rest/index.html?demo=kit-particles-confetti) | 底角两个礼花筒向内上方喷出彩纸，空气阻力使纸片减速、飘落、轻弹后落定，每五秒重播，首帧已是满天彩纸。 |
| Kit · particles | [particles-embers](../../demos/materials/ascii-rest/index.html?demo=kit-particles-embers) | 不用预设手写粒子系统，让火星从线形火源向上散出、受空气减速、摇摆并由黄变红，底部三行字符组成火焰。 |
| Kit · particles | [particles-fireworks](../../demos/materials/ascii-rest/index.html?demo=kit-particles-fireworks) | 烟花预设从文字天际线后升空，依次以五种颜色绽放并落到楼后，窗户涂金色，八秒无缝循环。 |
| Kit · particles | [particles-matrix](../../demos/materials/ascii-rest/index.html?demo=kit-particles-matrix) | 一行 matrix 预设生成落下的字符流，头部闪动、尾迹渐淡，由单个粒子系统为每段尾迹选择字符。 |
| Kit · particles | [particles-sand](../../demos/materials/ascii-rest/index.html?demo=kit-particles-sand) | 横幅的每个字符先各自停留，再碎成沙粒落下、触地停稳，每六秒循环。 |
| Kit · particles | [particles-snow](../../demos/materials/ascii-rest/index.html?demo=kit-particles-snow) | 雪花预设在文字小屋和松林后分三层飘落，远雪细慢、近雪大快，风力起伏，松树为绿、窗户为金色，八秒循环。 |
| Kit · recipe-looks | [recipe-looks-aurora](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-aurora) | 将极光与稀疏星空两种 looks 相加，极光的调色板同时为两者着色。 |
| Kit · recipe-looks | [recipe-looks-contributions](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-contributions) | 以 GitHub 的绿色阶梯色绘制块状噪声单元，呈现贡献图的分级色块。 |
| Kit · recipe-looks | [recipe-looks-galaxy](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-galaxy) | 明亮核心周围的双旋臂星系转动，前方散布闪烁的星星。 |
| Kit · recipe-looks | [recipe-looks-heart](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-heart) | 用放大的心形遮罩裁出糖果色等离子图案，无空格的字符梯度保留整个心形，其他材料形状也能用作遮罩。 |
| Kit · recipe-looks | [recipe-looks-hot](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-hot) | 用火焰配色的等离子填满自适应大小的 HOT 块状字母，无空格的字符梯度让暗部也保持完整。 |
| Kit · recipe-looks | [recipe-looks-lava](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-lava) | 熔岩团在缓慢热浪扭曲中上升、融合、下沉，以霓虹配色替代熔岩的红色。 |
| Kit · recipe-looks | [recipe-looks-matrix](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-matrix) | 用 behind() 将数字雨置于居中的横幅后，作为文字背景。 |
| Kit · recipe-looks | [recipe-looks-plasma](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-plasma) | 霓虹配色的等离子以半速播放，浅色页自动反转字符梯度与颜色，使亮部仍显明亮。 |
| Kit · recipe-looks | [recipe-looks-sea](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-sea) | 以一次调用和 ocean 配色绘出从地平线涌向岸边的海浪，远处细、近处浪脊长。 |
| Kit · recipe-looks | [recipe-looks-snow](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-snow) | 三层雪花落在横幅后，横幅自身的最大宽度使文字保持在 64 列画面内。 |
| Kit · recipe-looks | [recipe-looks-storm](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-storm) | 夜色配色下，暗云漂移、雨向左斜落，add() 叠加两种 looks 的光线并保留雨丝。 |
| Kit · recipe-looks | [recipe-looks-sunset](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-sunset) | above() 把太阳裁在地平线上方，below() 将海浪限制在底部，按画面比例合成夕阳配色的海上落日。 |
| Kit · recipe-looks | [recipe-looks-tunnel](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-looks-tunnel) | 环形肋条沿隧道迎面冲来，整体以慢速每十六秒旋转一圈。 |
| Kit · recipe | [recipe-motion-boom](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-boom) | 红色横幅不时猛然抖动，shaking() 用文字选项表达 shake() 的数值设置。 |
| Kit · recipe | [recipe-motion-bounce](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-bounce) | 横幅在地面弹跳，落下时快、顶点时慢，升起时阴影变窄。 |
| Kit · recipe | [recipe-motion-candle](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-candle) | 自带闪动火焰材质的 flame() 从底部随气流摇摆，swaying() 控制倾斜。 |
| Kit · recipe | [recipe-motion-cloud](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-cloud) | 云朵沿闪星夜空向右漂移，穿出一侧后从另一侧进入，天空与云朵分别以形状和材质组成。 |
| Kit · recipe | [recipe-motion-coin](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-coin) | 平面横幅像桌上的硬币一样旋转，逐渐缩成细边后露出镜像背面。 |
| Kit · recipe | [recipe-motion-donut](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-donut) | 一行 spinning(torus()) 将三维圆环放入旋转组，每六秒翻滚一圈并作为场景播放。 |
| Kit · recipe | [recipe-motion-earth](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-earth) | 蓝色大陆星球绕倾斜轴转动，卫星在前后绕行，planet() 将两个球体组合成场景。 |
| Kit · recipe | [recipe-motion-heartbeat](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-heartbeat) | 心形以两次快拍加一次停顿的节奏跳动，pulsing() 保留其材质并使形体膨胀。 |
| Kit · recipe | [recipe-motion-hello](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-hello) | 横幅从左滑入、弹跳落定，停留两秒后再次滑入。 |
| Kit · recipe | [recipe-motion-hover](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-hover) | 立方体在转台上旋转，同时上下浮动，展示运动可以互相嵌套。 |
| Kit · recipe | [recipe-motion-orbit](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-orbit) | 星星沿压扁的圆形轨道绕横幅运行，下方经过前景、上方绕到背后。 |
| Kit · recipe | [recipe-motion-rec](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-rec) | 录制指示灯像相机上的红灯一样缓慢闪烁。 |
| Kit · recipe | [recipe-motion-saturn](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-saturn) | 带条纹与光环的巨行星向观看者倾斜并自转，由一个球体与一个圆环构成场景。 |
| Kit · recipe | [recipe-motion-star](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-motion-star) | 金色星星从无到有弹出、摇晃落定，停留后再次弹出。 |
| Kit · recipe | [recipe-widget-bars](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-widget-bars) | 根据名称与数值生成各自着色的柱状图，柱形依次长出、略微超调后停留。 |
| Kit · recipe | [recipe-widget-card](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-widget-card) | 带标题、分隔线、自动换行正文与轻淡页脚的卡片缓缓浮动，展示部件可直接交给运动函数。 |
| Kit · recipe | [recipe-widget-clock](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-widget-clock) | 一次调用生成带数字时标的圆形时钟，显示十点十分，红色秒针每分钟转一圈。 |
| Kit · recipe | [recipe-widget-compass](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-widget-compass) | 用 ring() 排列八方位、at() 找中心、phase() 计算相位，指针每八秒绕表盘转一圈。 |
| Kit · recipe | [recipe-widget-countdown](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-widget-countdown) | 大字每秒依次显示五到一，再显示 liftoff 并循环。 |
| Kit · recipe | [recipe-widget-dashboard](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-widget-dashboard) | 将一个实时和一个静态仪表并排放在迷你实时曲线与加载动画上方，展示 widgets 作为作品参与组合。 |
| Kit · recipe | [recipe-widget-marquee](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-widget-marquee) | 块状字母沿字牌向左滚动，穿出一端后从另一端进入。 |
| Kit · recipe | [recipe-widget-progress](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-widget-progress) | 进度条以八分之一字符格平滑填充，填满时变绿，再重新开始。 |
| Kit · recipe | [recipe-widget-typewriter](../../demos/materials/ascii-rest/index.html?demo=kit-recipe-widget-typewriter) | 光标后以打字节奏输入文字，按 40 列换行，停留三秒后重新输入。 |
| Kit · shapes3d | [shapes3d-boing](../../demos/materials/ascii-rest/index.html?demo=kit-shapes3d-boing) | Amiga 棋盘球绕倾斜轴旋转，每 1.5 秒弹跳并左右漂移，地面网格按透视斜率选择线条字符，三秒循环。 |
| Kit · shapes3d | [shapes3d-crystal](../../demos/materials/ascii-rest/index.html?demo=kit-shapes3d-crystal) | 六个顶点、八个面的长八面体在转台上旋转，各面整体受光、边缘以字符线条相连，亮面延伸到浅色高光。 |
| Kit · shapes3d | [shapes3d-cube](../../demos/materials/ascii-rest/index.html?demo=kit-shapes3d-cube) | 立方体绕两轴翻转，各面用不同字符与橙色明暗填充，十二条边与角点保持单色下的立体感，首帧已露出三个面。 |
| Kit · shapes3d | [shapes3d-donut](../../demos/materials/ascii-rest/index.html?demo=kit-shapes3d-donut) | Kit 一行生成从左上受光且不会被裁切的双轴圆环，在八秒内分别转两圈和一圈，以保持 donut.c 的比例并无缝循环。 |
| Kit · shapes3d | [shapes3d-galaxy](../../demos/materials/ascii-rest/index.html?demo=kit-shapes3d-galaxy) | 预制的固定种子星云沿双旋臂围绕隆起核心旋转，单元星光相加，使密集核心与旋臂从紫色亮到浅粉色。 |
| Kit · shapes3d | [shapes3d-loader](../../demos/materials/ascii-rest/index.html?demo=kit-shapes3d-loader) | render3d() 在 piece() 网格中绘出三秒旋转一圈的立方体，下方保留一行标签并每 1.5 秒更新圆点，scenePalette() 合并立方体色阶与文字色。 |
| Kit · shapes3d | [shapes3d-orrery](../../demos/materials/ascii-rest/index.html?demo=kit-shapes3d-orrery) | 行星沿绘出的轨道绕太阳运行，卫星绕行星运行，group() 让卫星轨道随行星一起移动。 |
| Kit · shapes3d | [shapes3d-planet](../../demos/materials/ascii-rest/index.html?demo=kit-shapes3d-planet) | 条纹气态巨行星绕倾斜轴转动，浅色卫星沿倾斜轨道绕行，深度缓冲处理前后遮挡，由两个球体与命名纹理组成。 |
| Kit · vector | [vector-ball](../../demos/materials/ascii-rest/index.html?demo=kit-vector-ball) | 自定义时间函数让 SVG 球跳高八行、落地时以底部为原点压扁，升起时阴影缩小，并以 period 定义无缝循环。 |
| Kit · vector | [vector-coffee](../../demos/materials/ascii-rest/index.html?demo=kit-vector-coffee) | trace 从各线起点描出咖啡线条图标，完整停留后擦除，轮廓样式将线条转为字符，color 可指定 currentColor 图标的颜色。 |
| Kit · vector | [vector-glass](../../demos/materials/ascii-rest/index.html?demo=kit-vector-glass) | 用映射让 SVG 杯内水面起伏、三个气泡上升、玻璃掠过亮光，以指定字符描绘水和气泡，也可用 Kit 水与玻璃材质填充同一部分。 |
| Kit · vector | [vector-heart](../../demos/materials/ascii-rest/index.html?demo=kit-vector-heart) | fromSvg() 无需文档对象模型即可读取内联 SVG，以贴合边缘的字符和原始红色绘出心形，通过路径 id 与 pulse 使其跳动。 |
| Kit · vector | [vector-logo](../../demos/materials/ascii-rest/index.html?demo=kit-vector-logo) | 圆角方块中镂空的闪电标志像硬币旋转，通过组 id 让方块与闪电同步，单色时省略白色闪电以保持镂空效果。 |
| Kit · vector | [vector-star](../../demos/materials/ascii-rest/index.html?demo=kit-vector-star) | SVG 五角星每四秒被亮带扫过，经过的实心格变为斜线，颜色也随之变亮。 |
| Kit · vector | [vector-tv](../../demos/materials/ascii-rest/index.html?demo=kit-vector-tv) | SVG 老电视的屏幕中播放库里的 matrix rain，以屏幕 id 指定填充区域，作品居中并裁切到屏幕形状内。 |

## 本地化

| 文件 | 原值 | 本地值 |
| --- | --- | --- |
| `vendor/ascii.rest@0.4.0/dist/ascii.js` 的 `STYLE` 字体地址 | `https://ascii.rest/fonts/ascii-rest-mono.woff2` | `new URL("../../../fonts/ascii-rest-mono.woff2", import.meta.url).href`，拼入 `url(...)` |

按名加载使用 `dist/library.js` 的相对模块路径；Kit 图片通过 `new URL("./assets/…", import.meta.url)` 读取本地文件。CLI 的 `https://ascii.rest/r` 保持原样。

完整对照结论见 [fidelity.md](../../demos/materials/ascii-rest/fidelity.md)，许可见 [LICENSES.md](../../demos/materials/ascii-rest/LICENSES.md)。
