# pixelfx · 代码驱动的像素特效与动作库

pixelfx 由 Patch 基于 Hugo Duprez（Sprite Fusion）的代码像素特效方法构建，把 21 个分类、244 个像素艺术特效与角色动作演出写成零依赖 JavaScript 模块。每个特效不依赖外部位图，向 `color`（像素颜色）与 `light`（叠加发光）双缓冲绘图，支持在浏览器 Canvas/WebGL 中实时播放、换色、镜像、改种子，也可导出为任何游戏引擎可用的 Aseprite 精灵表。本库收录 `0.3.1` 的运行库、在线画廊、CLI 工具与源码。[打开画廊与样例](../../demos/materials/pixelfx/index.html) · [阅读配套 Skill 说明](pixelfx-skill.md)。

## 在网页或游戏中使用

在页面或 Canvas/WebGL 游戏（原生 Canvas、Phaser、PixiJS、Kaplay、Three.js）中直接导入本地运行库：

```js
import { createFrame, clearFrame, createFx, composite } from "./vendor/pixelfx@0.3.1/src/core/index.js";
import * as frostNova from "./vendor/pixelfx@0.3.1/src/fx/ice/frost-nova.js";

const frame = createFrame(320, 180);                   // 游戏或画布的像素分辨率
const img = new ImageData(320, 180);
const fx = createFx(frostNova, { x: 160, y: 140 });   // 可选：flip, angle, seed, palette, light

function tick(dt) {
  fx.update(dt);
  clearFrame(frame);
  fx.draw(frame, "back");                              // 绘制在角色身后的远景层
  // 在此处绘制角色或场景精灵
  fx.draw(frame, "front");                             // 绘制在角色身前的前景层
  composite(frame, img.data, null);                    // 合成颜色与叠加发光（null 为透明底）
  ctx.putImageData(img, 0, 0);                         // Canvas 使用 image-rendering: pixelated 整数倍放大
}
```

### 角色动作演出（Acting）

库中 61 个带角色的特效与 12 个组合招式（`moves/*`）导出了 `act` 数据，定义 24×38 像素 3D 骨骼灰模角色的蓄力前摇（负时间关键帧）、12fps 姿态步进、命中卡肉定格（`stop`）、震屏（`shake`）、草靶受击摇晃与收招恢复。将 `createFx` 换为 `createAct` 即可连同角色与草靶一起播放：

```js
import { createFrame, clearFrame, createAct, composite } from "./vendor/pixelfx@0.3.1/src/core/index.js";
import * as slash from "./vendor/pixelfx@0.3.1/src/fx/melee/sword-slash.js";

const act = createAct(slash, { x: 80, y: 140 });

function tick(dt) {
  act.update(dt);                                      // 命中定格期间自动冻结计时
  clearFrame(frame);
  act.draw(frame);                                     // 可传 { body: false, target: false } 隐藏灰模或草靶
  composite(frame, img.data, backgroundBuf);
  const [sx, sy] = act.shake;                          // 震屏像素偏移
  ctx.putImageData(img, sx, sy);
}
```

若游戏已有自有角色，可直接读取 `slash.act`（或导出精灵表 JSON 中的 `meta.pixelfx.act`）获取 `windup`、`recovery` 与每次命中的 `{ t, freeze }`，在特效开始前 `windup` 秒启动攻击前摇，并在命中时刻让角色与特效同步定格 `freeze` 秒。

### 色板重着色与参数

任何特效均支持传入 `palette`（由暗到亮的十六进制色值数组）或 `src/core/color.js` 内置的 27 套 `PAL` 色板（`fire`、`ember`、`lava`、`smoke`、`dust`、`ice`、`water`、`electric`、`volt`、`poison`、`holy`、`heal`、`arcane`、`shadow`、`blood`、`earth`、`stone`、`gold`、`leaf`、`wood`、`metal`、`bone`、`neon`、`cyber`、`matrix`、`candy`、`night`），无需改动特效代码即可将火焰改为冰蓝或将治疗改为粉光。

| 通用参数 | 说明 |
| --- | --- |
| `x`, `y` | 特效锚点在帧画布中的像素坐标（局部 `(0, 0)` 通常位于脚底、命中点或枪口）。 |
| `flip` | 布尔值；方向性特效默认朝右，设为 `true` 时水平镜像朝左。 |
| `angle` | 旋转弧度，由 `Painter` 在局部空间变换。 |
| `seed` | 整数随机种子；所有随机数由固定种子 `Rng` 产生，相同种子与帧号结果完全一致。 |
| `palette` | 主色板梯度数组（由暗到亮），特效内部通过 `fit(o.palette, n)` 自动重采样。 |
| `light` | 叠加发光缓冲强度倍率（默认 `1`）。 |

## 导出精灵表与命令行工具

在画廊详情面板点击 `sprite sheet` 可直接在浏览器内渲染并保存 PNG 精灵表；或在 [source/](../../demos/materials/pixelfx/source/README.md) 目录使用命令行导出透明 PNG 与 Aseprite JSON（含每帧矩形、时长及 `meta.pixelfx` 的 `fps`、`loop`、`columns`、`pivot`、`act`）：

```powershell
node tools/render.mjs ice/frost-nova --sheet
node tools/act.mjs moves/sword-combo --sheet
node tools/sheets.mjs
```

画廊本地化与线上对照结果见 [fidelity.md](../../demos/materials/pixelfx/fidelity.md)，许可明细见 [LICENSES.md](../../demos/materials/pixelfx/LICENSES.md)。

## 样例索引（21 分类 · 244 个特效）

| 分类 | 样例 | ID | 规格 | 说明 |
| --- | --- | --- | --- | --- |
| 招式 | [Arrow shot](../../demos/materials/pixelfx/index.html?demo=moves/arrow-shot) | `moves/arrow-shot` | 单次 1.9s · 300×74 · `act` | 举弓拉至脸侧，屏息松弦：弓弦弹回，箭矢掠过地面，闷响钉入草靶。 |
| 招式 | [Dash strike](../../demos/materials/pixelfx/index.html?demo=moves/dash-strike) | `moves/dash-strike` | 单次 2.3s · 372×156 · `act` | 压低重心化作残影掠过地面，挥剑打出暴击，定格一拍后跃回原位。 |
| 招式 | [Earth stomp](../../demos/materials/pixelfx/index.html?demo=moves/earth-stomp) | `moves/earth-stomp` | 单次 3.46s · 290×142 · `act` | 抬膝猛踏地面，靶下地砖隆起，石刺破土顶穿目标。 |
| 招式 | [Fireball throw](../../demos/materials/pixelfx/index.html?demo=moves/fireball-throw) | `moves/fireball-throw` | 单次 6.81s · 356×244 · `act` | 掌心聚火后仰投出，火球飞越场地炸开，将草靶烧成焦黑。 |
| 招式 | [Ground pound](../../demos/materials/pixelfx/index.html?demo=moves/ground-pound) | `moves/ground-pound` | 单次 3.82s · 304×204 · `act` | 蓄力跃出画面上方，悬停后如巨石砸落，地面崩裂、冲击波掀翻目标。 |
| 招式 | [Holy smite](../../demos/materials/pixelfx/index.html?demo=moves/holy-smite) | `moves/holy-smite` | 单次 2.8s · 252×182 · `act` | 双手高举以闪光标记目标，挥落时圣光如重锤劈下，将靶身灼白。 |
| 招式 | [Ice lance throw](../../demos/materials/pixelfx/index.html?demo=moves/ice-lance-throw) | `moves/ice-lance-throw` | 单次 4.34s · 310×136 · `act` | 寒霜在手中凝成冰枪，如标枪掷出，命中后爆开雪花并将目标冻结。 |
| 招式 | [Lightning call](../../demos/materials/pixelfx/index.html?demo=moves/lightning-call) | `moves/lightning-call` | 单次 3s · 290×266 · `act` | 举臂在靶下点亮法阵，挥落时粗壮雷霆劈中目标，余电令其连续抽搐。 |
| 招式 | [Meteor call](../../demos/materials/pixelfx/index.html?demo=moves/meteor-call) | `moves/meteor-call` | 单次 6.43s · 380×240 · `act` | 长咏唱在脚下绘出并点亮法阵，挥手指向目标，燃烧陨石砸落夷平全场。 |
| 招式 | [Pistol shots](../../demos/materials/pixelfx/index.html?demo=moves/pistol-shots) | `moves/pistol-shots` | 单次 2.6s · 378×76 · `act` | 连续三枪点射：每次枪口上跳再回正，曳光弹掠过地面，目标随命中连连后仰。 |
| 招式 | [Rocket launcher](../../demos/materials/pixelfx/index.html?demo=moves/rocket-launcher) | `moves/rocket-launcher` | 单次 6.56s · 480×244 · `act` | 单膝跪地扛筒发射，后坐力将角色推滑，火箭拖着尾焰飞向目标并引爆。 |
| 招式 | [Sword combo](../../demos/materials/pixelfx/index.html?demo=moves/sword-combo) | `moves/sword-combo` | 单次 2.98s · 264×150 · `act` | 踏步三连斩：斜劈、交叉双斩，再双手重劈砸裂地面，将草靶震飞。 |
| 火焰 | [Brazier](../../demos/materials/pixelfx/index.html?demo=fire/brazier) | `fire/brazier` | 循环 3s · 112×148 | 三脚铁盆盛满红炭与熊熊烈火，火星与余烬持续升腾，映亮铁架与地面。 |
| 火焰 | [Campfire](../../demos/materials/pixelfx/index.html?demo=fire/campfire) | `fire/campfire` | 循环 3s · 128×128 | 交叠木柴与炭床上的篝火：火舌跃动、火星爆裂、余烬与青烟袅袅升起，地面洒满暖光。 |
| 火焰 | [Candle](../../demos/materials/pixelfx/index.html?demo=fire/candle) | `fire/candle` | 循环 4s · 56×76 | 黄铜碟中的蜡烛：蓝根火苗轻晃拉伸，光晕中微尘浮动，蜡泪沿烛身滑落。 |
| 火焰 | [Fire breath](../../demos/materials/pixelfx/index.html?demo=fire/fire-breath) | `fire/fire-breath` | 循环 1.5s · 160×116 | 从口部向右喷涌的烈焰锥：唇边炽白，向外翻涌冷却为红焰与浓烟，前端迸射火星。 |
| 火焰 | [Fire ring](../../demos/materials/pixelfx/index.html?demo=fire/fire-ring) | `fire/fire-ring` | 单次 3.9s · 224×128 · `act` | 脚下白光一闪，火环沿地面向四周疾速扩开，前缘升腾烈焰，身后留下焦痕余烬。 |
| 火焰 | [Fire tornado](../../demos/materials/pixelfx/index.html?demo=fire/fire-tornado) | `fire/fire-tornado` | 循环 2s · 120×152 | 旋转上升的火焰龙卷：螺旋火带缠绕漏斗，两侧甩出火舌，底部火环疾转、余烬环绕。 |
| 火焰 | [Fireball](../../demos/materials/pixelfx/index.html?demo=fire/fireball) | `fire/fireball` | 循环 1.2s · 136×56 | 向右飞行的火球：炽白核心裹着火焰日冕，长尾翻滚冷却为黑烟并撒落余烬。 |
| 火焰 | [Flame pillar](../../demos/materials/pixelfx/index.html?demo=fire/flame-pillar) | `fire/flame-pillar` | 单次 5s · 184×256 | 地面裂开透出红光，炽白火柱轰然冲起、喷洒余烬，随后坍缩成翻滚浓烟。 |
| 火焰 | [Flamethrower](../../demos/materials/pixelfx/index.html?demo=fire/flamethrower) | `fire/flamethrower` | 循环 1.6s · 184×104 | 向右高压喷射的火流：喷口带蓝色引火，火束随脉冲起伏、滴落燃液，尾端卷成浓烟。 |
| 火焰 | [Meteor](../../demos/materials/pixelfx/index.html?demo=fire/meteor) | `fire/meteor` | 单次 5s · 272×232 | 燃烧陨石自左上方拖着火尾砸入地面：白光闪爆、火球腾起、碎石与火炭飞溅，弹坑渐渐冷却。 |
| 火焰 | [Spirit flame](../../demos/materials/pixelfx/index.html?demo=fire/spirit-flame) | `fire/spirit-flame` | 循环 3s · 80×124 | 悬浮空中的冷青幽灵火：亮边包裹暗心，波浪沿细尾上爬、甩出火缕与冷色星点。 |
| 火焰 | [Torch](../../demos/materials/pixelfx/index.html?demo=fire/torch) | `fire/torch` | 循环 2s · 72×120 | 铁托架上的壁挂火把：浸油缠布跃起火舌，尖端撕出火团与轻烟，墙面泛起摇曳火光。 |
| 爆炸 | [Barrel explosion](../../demos/materials/pixelfx/index.html?demo=explosions/barrel-explosion) | `explosions/barrel-explosion` | 单次 5.2s · 300×240 | 炸药桶剧烈颤动、桶盖鼓起喷火后轰然炸裂：火柱冲起，木桶板与桶盖飞旋，燃液泼洒满地。 |
| 爆炸 | [Big explosion](../../demos/materials/pixelfx/index.html?demo=explosions/big-explosion) | `explosions/big-explosion` | 单次 7.2s · 360×300 | 三拍重型地面爆炸：白色光穹闪现，火球翻滚升起化作蘑菇烟云，巨石飞溅、余火延烧。 |
| 爆炸 | [Cartoon POW](../../demos/materials/pixelfx/index.html?demo=explosions/cartoon-pow) | `explosions/cartoon-pow` | 单次 1.05s · 184×144 | 美漫撞击：锯齿双色爆星伴随震屏砸入，POW! 逐字落下，速度线飞射后干脆收束。 |
| 爆炸 | [Dirt explosion](../../demos/materials/pixelfx/index.html?demo=explosions/dirt-explosion) | `explosions/dirt-explosion` | 单次 3.6s · 260×240 | 地下装药起爆：地底闪光，土块与砂砾呈 V 字高抛，褐色尘柱翻涌沉降，留下弹坑。 |
| 爆炸 | [Firework burst](../../demos/materials/pixelfx/index.html?demo=explosions/firework-burst) | `explosions/firework-burst` | 单次 3.6s · 240×248 | 礼花弹升空减速，炸成围绕金心的彩尾星球；星点下垂、噼啪闪白后化作金粉消散。 |
| 爆炸 | [Firework rocket](../../demos/materials/pixelfx/index.html?demo=explosions/firework-rocket) | `explosions/firework-rocket` | 单次 3.8s · 300×300 | 火箭拖着金星尾迹嘶嘶升空，滑行后炸开棕榈状金色长枝，弧线下垂并在末端闪烁。 |
| 爆炸 | [Grenade](../../demos/materials/pixelfx/index.html?demo=explosions/grenade) | `explosions/grenade` | 单次 4.2s · 300×200 | 手雷抛入弹跳滚停、引信冒火颤动后引爆：白光闪现、破片疾射、小火球腾起并留下焦痕。 |
| 爆炸 | [Implosion](../../demos/materials/pixelfx/index.html?demo=explosions/implosion) | `explosions/implosion` | 单次 1.65s · 208×184 | 万物向内坍缩：光线与碎屑疾速吸入、光环收拢，暗球压向炽白奇点，停顿一拍后骤然爆开。 |
| 爆炸 | [Nuke](../../demos/materials/pixelfx/index.html?demo=explosions/nuke) | `explosions/nuke` | 单次 9s · 400×320 | 刺目白帧后，火球沿细茎升起化作内部透光的宽幅蘑菇云，白色气裙闪过，尘浪横扫地面。 |
| 爆炸 | [Plasma explosion](../../demos/materials/pixelfx/index.html?demo=explosions/plasma-explosion) | `explosions/plasma-explosion` | 单次 1.7s · 224×200 | 无烟的蓝紫等离子爆破：白光闪现，等离子球膨胀为薄壳，深度冲击环交错，电弧噼啪跳跃。 |
| 爆炸 | [Explosion](../../demos/materials/pixelfx/index.html?demo=explosions/small-explosion) | `explosions/small-explosion` | 单次 5.4s · 300×240 | 标准地面爆炸：白闪与冲击环过后，火焰冷却为翻滚烟柱，火星、燃块与碎石飞散弹跳。 |
| 爆炸 | [Smoke bomb](../../demos/materials/pixelfx/index.html?demo=explosions/smoke-bomb) | `explosions/smoke-bomb` | 单次 5s · 260×176 | 圆形烟雾罐叮当落地、引信冒火后噗声爆开：灰紫浓烟贴地翻滚，涌成遮蔽全场的烟团再散为轻缕。 |
| 水体 | [Bubbles](../../demos/materials/pixelfx/index.html?demo=water/bubbles) | `water/bubbles` | 循环 4s · 104×112 | 气泡从卵石气孔成串升起，摇晃膨胀，穿过水面光束时闪亮，浮至顶面鼓起破裂。 |
| 水体 | [Drip](../../demos/materials/pixelfx/index.html?demo=water/drip) | `water/drip` | 循环 1.6s · 72×88 | 水珠在湿石尖下汇聚映光，拉长滴落，叮咚砸入水洼激起水冠、涟漪与微小回弹。 |
| 水体 | [Fountain](../../demos/materials/pixelfx/index.html?demo=water/fountain) | `water/fountain` | 循环 2s · 120×104 | 石盆喷泉：水流自喷口升起，绽成透亮水弧并碎成水珠，落回水面激起圈圈波纹。 |
| 水体 | [Geyser](../../demos/materials/pixelfx/index.html?demo=water/geyser) | `water/geyser` | 单次 5s · 184×168 | 水池剧烈翻涌后向天空喷出白色水柱与翻滚泡沫冠，水滴与蒸汽如雨落下，渐次平息。 |
| 水体 | [Rain splash](../../demos/materials/pixelfx/index.html?demo=water/rain-splash) | `water/rain-splash` | 循环 2.4s · 176×80 | 雨中水洼低机位特写：大颗雨滴砸出水冠与回弹水柱，波纹扩散干涉，灯光倒影随水波摇晃。 |
| 水体 | [Ripples](../../demos/materials/pixelfx/index.html?demo=water/ripples) | `water/ripples` | 循环 2s · 136×52 | 水滴落入平静暗水，低角度波纹向四周扩散，波峰迎光闪亮后缓缓融入水面。 |
| 水体 | [Splash](../../demos/materials/pixelfx/index.html?demo=water/splash) | `water/splash` | 单次 2.5s · 176×100 | 石块落入静水：白光撞击，水冠撕裂成水滴弧线飞出、落水起圈，中心水柱回弹并飘散薄雾。 |
| 水体 | [Water jet](../../demos/materials/pixelfx/index.html?demo=water/water-jet) | `water/water-jet` | 循环 1s · 188×80 | 向右高压喷射的水柱：玻璃感水杆随浪涌推进，因重力下弯并碎成水团、飞沫与水雾。 |
| 水体 | [Water orb](../../demos/materials/pixelfx/index.html?demo=water/water-orb) | `water/water-orb` | 循环 3s · 100×108 | 悬浮摇晃的水球：内部暗流环绕、倒映地面，水球泛光并在下方聚出光斑，水珠滴落起圈。 |
| 水体 | [Waterfall](../../demos/materials/pixelfx/index.html?demo=water/waterfall) | `water/waterfall` | 循环 2s · 144×136 | 溪流自岩石豁口倾泻：白浪翻卷、水帘分股，底部泡沫翻涌、飞沫与水雾弥漫在暗潭波纹之上。 |
| 水体 | [Wave crash](../../demos/materials/pixelfx/index.html?demo=water/wave-crash) | `water/wave-crash` | 单次 3.2s · 224×104 | 涌浪滚来并不断变陡，浪唇前抛卷出暗色管浪，随后砸成白沫与水雾向前冲刷消散。 |
| 水体 | [Whirlpool](../../demos/materials/pixelfx/index.html?demo=water/whirlpool) | `water/whirlpool` | 循环 3s · 128×84 | 俯视深水漩涡：泡沫旋臂向内卷入，随深度变暗汇入亮边涡眼，零星白沫紧随其后。 |
| 寒冰 | [Blizzard vortex](../../demos/materials/pixelfx/index.html?demo=ice/blizzard-vortex) | `ice/blizzard-vortex` | 循环 2s · 128×116 | 旋转的暴雪龙卷：风带卷起倾斜漏斗，雪花与冰晶前后环绕，底部积雪翻腾、喉部透出冷光。 |
| 寒冰 | [Freeze](../../demos/materials/pixelfx/index.html?demo=ice/freeze) | `ice/freeze` | 单次 4s · 176×128 · `act` | 寒霜爬满角色全身将其化作冰雕，多面冰块逐片凝结闪光，随即裂开炸碎，角色解冻脱困。 |
| 寒冰 | [Frost breath](../../demos/materials/pixelfx/index.html?demo=ice/frost-breath) | `ice/frost-breath` | 循环 1.2s · 184×104 | 向右吹出的寒风锥：霜雾翻涌沉降，疾风线条穿梭，冰晶自炽白口部翻滚闪亮飞出。 |
| 寒冰 | [Frost nova](../../demos/materials/pixelfx/index.html?demo=ice/frost-nova) | `ice/frost-nova` | 单次 3.4s · 288×192 · `act` | 寒气旋成雪花，冲击波在施法者四周绽开三圈冰晶尖刺；雪花飘落、地面结霜后慢慢融化。 |
| 寒冰 | [Ice crystal](../../demos/materials/pixelfx/index.html?demo=ice/ice-crystal) | `ice/ice-crystal` | 循环 3s · 96×100 | 悬浮缓转的冰晶：切面随转动明暗交替、闪现高光，细碎霜尘环绕飞行。 |
| 寒冰 | [Ice lance](../../demos/materials/pixelfx/index.html?demo=ice/ice-lance) | `ice/ice-lance` | 循环 0.8s · 176×64 | 向右疾飞的多面冰枪：光脉冲穿过枪心，尖端切开冷气环，尾流剥落霜雾与碎冰晶。 |
| 寒冰 | [Ice shatter](../../demos/materials/pixelfx/index.html?demo=ice/ice-shatter) | `ice/ice-shatter` | 单次 2.8s · 224×112 | 冰块受左侧重击震动，裂纹爬满切面，白光一闪炸成翻滚弹跳的冰块并卷起冰尘。 |
| 寒冰 | [Ice spikes](../../demos/materials/pixelfx/index.html?demo=ice/ice-spikes) | `ice/ice-spikes` | 单次 3s · 264×112 | 霜线沿地面疾走，身后簇状锯齿冰刃如波浪刺出，齐齐闪白后崩碎成倾倒的冰片。 |
| 寒冰 | [Icicle fall](../../demos/materials/pixelfx/index.html?demo=ice/icicle-fall) | `ice/icicle-fall` | 单次 2.6s · 152×120 | 冰锥滴水颤动后自霜根折断，垂直刺入地面，炸成滑行的冰片、碎屑与翻滚霜雾。 |
| 寒冰 | [Snowflake burst](../../demos/materials/pixelfx/index.html?demo=ice/snowflake-burst) | `ice/snowflake-burst` | 单次 3.2s · 140×120 | 冷光轻爆：寒霜聚拢闪出白环，清晰的六角雪花旋转飞散、减速闪烁，飘落地面融化。 |
| 雷电 | [Ball lightning](../../demos/materials/pixelfx/index.html?demo=lightning/ball-lightning) | `lightning/ball-lightning` | 循环 4s · 136×104 | 噼啪作响的球状闪电沿环路游走，表面甩出电弧与渐暗光尘，低掠时电击地面。 |
| 雷电 | [Chain lightning](../../demos/materials/pixelfx/index.html?demo=lightning/chain-lightning) | `lightning/chain-lightning` | 单次 1.8s · 248×104 · `act` | 闪电自施法者手中跃向三个目标：每个目标依次闪白冒火并向地面导通，链弧闪烁后绷断。 |
| 雷电 | [Charge up](../../demos/materials/pixelfx/index.html?demo=lightning/charge-up) | `lightning/charge-up` | 单次 2.7s · 272×184 · `act` | 火星与电弧向掌心噼啪核心汇聚，核心加速脉动膨胀后闪白炸开：雷电四射、冲击环扩开。 |
| 雷电 | [Electrified](../../demos/materials/pixelfx/index.html?demo=lightning/electrified) | `lightning/electrified` | 循环 2s · 108×92 · `act` | 电流窜过全身：电弧在体表爬行跳跃、火星四溅，每次电击令身体闪现电光剪影并自脚底导地。 |
| 雷电 | [Lightning strike](../../demos/materials/pixelfx/index.html?demo=lightning/lightning-strike) | `lightning/lightning-strike` | 单次 3s · 240×264 | 定点雷击：地面法阵充能、天色变暗，粗壮雷霆劈落，电弧沿裂地缝隙疾走，焦痕渐渐冷却。 |
| 雷电 | [Plasma ball](../../demos/materials/pixelfx/index.html?demo=lightning/plasma-ball) | `lightning/plasma-ball` | 循环 3s · 112×104 | 暗色底座上的等离子球：游走电触须自核心伸向玻璃球壁并绽出亮足，照亮底座与地面。 |
| 雷电 | [Spark arc](../../demos/materials/pixelfx/index.html?demo=lightning/spark-arc) | `lightning/spark-arc` | 循环 2s · 124×120 | 两根电极间的雅各布天梯：底部窄处白光起弧，随热气上升拉弯，在顶端噼啪崩断后再次起弧。 |
| 雷电 | [Storm cloud](../../demos/materials/pixelfx/index.html?demo=lightning/storm-cloud) | `lightning/storm-cloud` | 循环 3s · 168×176 | 头顶翻滚的雷云：云肚内电光忽明忽暗，斜雨纷飞，每轮循环劈下一道落雷。 |
| 雷电 | [Tesla coil](../../demos/materials/pixelfx/index.html?demo=lightning/tesla-coil) | `lightning/tesla-coil` | 循环 2.4s · 224×136 | 钢环下的铜制特斯拉线圈成波次甩出分叉电弧，不时劈中地面激起一簇火星。 |
| 雷电 | [Thunderclap](../../demos/materials/pixelfx/index.html?demo=lightning/thunderclap) | `lightning/thunderclap` | 单次 1.9s · 288×156 · `act` | 环绕施法者的雷鸣爆破：白光闪现，分叉闪电向四周刺入地面，重型冲击环掀起尘土与火星。 |
| 雷电 | [Zap hit](../../demos/materials/pixelfx/index.html?demo=lightning/zap-hit) | `lightning/zap-hit` | 单次 0.9s · 144×112 | 电击命中：左侧电弧劈入，命中点过载成密集折线电结，树枝状焦痕向外发光，臭氧轻烟散开。 |
| 科幻 | [EMP blast](../../demos/materials/pixelfx/index.html?demo=scifi/emp-blast) | `scifi/emp-blast` | 单次 3.2s · 152×116 | 圆盘装置滴答闪白，滚动扫描线气泡伴随表层电弧膨胀，频闪撕裂后短路为坠落的坏点像素。 |
| 科幻 | [Energy core](../../demos/materials/pixelfx/index.html?demo=scifi/energy-core) | `scifi/energy-core` | 循环 2.4s · 112×100 | 钢笼中搏动的等离子核心：每次搏动膨胀并抛出冲击环，双斜环绕转，电弧跳向钢栏迸出火花。 |
| 科幻 | [Force field](../../demos/materials/pixelfx/index.html?demo=scifi/force-field) | `scifi/force-field` | 循环 2.4s · 184×104 · `act` | 角色周身的六角晶格力场穹顶：右侧曳光弹连续撞击，受击处泛起涟漪与光裂，火星擦过。 |
| 科幻 | [Glitch](../../demos/materials/pixelfx/index.html?demo=scifi/glitch) | `scifi/glitch` | 循环 2.4s · 88×64 · `act` | 角色信号阵发性故障：RGB 色散分离、横向切片错位、像素行拖尾与坏点块闪烁，随后瞬间恢复。 |
| 科幻 | [Hologram](../../demos/materials/pixelfx/index.html?demo=scifi/hologram) | `scifi/hologram` | 循环 4s · 112×104 | 地面投影仪投出光锥，托起旋转的线框模型：扫描线滚过、数据环绕转，间或闪烁撕裂抖动。 |
| 科幻 | [Jetpack](../../demos/materials/pixelfx/index.html?demo=scifi/jetpack) | `scifi/jetpack` | 循环 2s · 96×116 | 双喷口垂直向下喷射：炽白尾焰内含马赫环，下方翻滚的火焰团冷却为被火光照亮的浓烟。 |
| 科幻 | [Laser grid](../../demos/materials/pixelfx/index.html?demo=scifi/laser-grid) | `scifi/laser-grid` | 循环 3s · 128×84 | 两根钢柱间的安防激光网：红光束上下滑动交错，尘雾在光束切过处亮起，扫过地面时擦出火花。 |
| 科幻 | [Scanner](../../demos/materials/pixelfx/index.html?demo=scifi/scanner) | `scifi/scanner` | 循环 3.2s · 112×78 · `act` | 取景框锁定角色，扫描线自头顶扫至脚底留下渐冷轮廓，读数跳至 OK 后解除。 |
| 科幻 | [Teleporter pad](../../demos/materials/pixelfx/index.html?demo=scifi/teleporter-pad) | `scifi/teleporter-pad` | 循环 2.4s · 96×104 | 地面钢制传送台泛起向外涟漪，柔和光柱升起，光环与闪光星点穿行向上。 |
| 科幻 | [Tractor beam](../../demos/materials/pixelfx/index.html?demo=scifi/tractor-beam) | `scifi/tractor-beam` | 循环 3s · 120×132 | 悬浮舱向地面投出牵引光锥，石块在尘噗中脱离地面，伴随上升光环螺旋吸入镜头。 |
| 科幻 | [Warp in](../../demos/materials/pixelfx/index.html?demo=scifi/warp-in) | `scifi/warp-in` | 单次 3s · 192×168 · `act` | 光束轰然落下、光环下行，扫描线自头至脚逐行绘出炽白像素并冷却为角色本色，光束收束消散。 |
| 科幻 | [Warp out](../../demos/materials/pixelfx/index.html?demo=scifi/warp-out) | `scifi/warp-out` | 单次 2.6s · 128×168 · `act` | 角色轮廓闪烁后全白，自头顶向下分解为光流，顺光束升空并收束关闭。 |
| 近战 | [Claw swipe](../../demos/materials/pixelfx/index.html?demo=melee/claw-swipe) | `melee/claw-swipe` | 单次 0.9s · 128×96 · `act` | 三道爪痕先后抓落，由炽白经橙转红，随后自两端收拢留下点状伤痕与滴落火星。 |
| 近战 | [Dagger flurry](../../demos/materials/pixelfx/index.html?demo=melee/dagger-flurry) | `melee/dagger-flurry` | 单次 0.95s · 148×104 · `act` | 身前多角度疾速闪烁的小月牙斩击，每刀带起火星，最后以一道闪亮大斩收尾。 |
| 近战 | [Double slash](../../demos/materials/pixelfx/index.html?demo=melee/double-slash) | `melee/double-slash` | 单次 0.8s · 164×108 · `act` | 斜劈而下再反手斜挑，十字交汇瞬间双刃齐闪白光，交点炸开火花并留下点状 X 残迹。 |
| 近战 | [Hammer smash](../../demos/materials/pixelfx/index.html?demo=melee/hammer-smash) | `melee/hammer-smash` | 单次 2s · 208×112 · `act` | 重锤呈楔形猛砸身前：白光射线闪爆、气浪拱起、地面凹陷开裂，碎石弹跳落定、尘土飞扬。 |
| 近战 | [Heavy cleave](../../demos/materials/pixelfx/index.html?demo=melee/heavy-cleave) | `melee/heavy-cleave` | 单次 1.9s · 208×116 · `act` | 头顶寒光一闪，粗壮余烬刀弧越顶加速劈入地面：白光震击、裂隙透光，尘浪向两侧翻滚。 |
| 近战 | [Scythe reap](../../demos/materials/pixelfx/index.html?demo=melee/scythe-reap) | `melee/scythe-reap` | 单次 2.1s · 184×116 · `act` | 巨大的暗色月牙刀弧带着惨白幽光自前方横扫，短暂停滞后自尾端撕裂为卷曲暗缕与冷雾。 |
| 近战 | [Spear sweep](../../demos/materials/pixelfx/index.html?demo=melee/spear-sweep) | `melee/spear-sweep` | 单次 1.5s · 216×84 · `act` | 贴近小腿高度的宽幅横扫：扁长月牙自腿后绕至身前，刀风在地面掀起一路尘土与砂砾。 |
| 近战 | [Spin slash](../../demos/materials/pixelfx/index.html?demo=melee/spin-slash) | `melee/spin-slash` | 单次 0.8s · 208×104 · `act` | 刀刃沿倾斜平面绕腰疾旋一周，闭合光环闪白后消散为点状轨迹并甩出火花。 |
| 近战 | [Sword slash](../../demos/materials/pixelfx/index.html?demo=melee/sword-slash) | `melee/sword-slash` | 单次 0.75s · 136×104 · `act` | 倾斜月牙刀弧两帧挥出，由炽白渐冷为深蓝，刀尖闪亮并甩出火星。 |
| 近战 | [Thrust](../../demos/materials/pixelfx/index.html?demo=melee/thrust) | `melee/thrust` | 单次 0.75s · 196×76 · `act` | 突刺攻击：成束光线自手中刺向一点，尖端绽开长四角星与穿刺环，伴随火星与速度线。 |
| 近战 | [Uppercut](../../demos/materials/pixelfx/index.html?demo=melee/uppercut) | `melee/uppercut` | 单次 0.85s · 132×128 · `act` | 月牙刀弧自地面掠过面门升起，顶端炸开粗描边漫画撞击星、炽热核心与飞散火星。 |
| 近战 | [Whip crack](../../demos/materials/pixelfx/index.html?demo=melee/whip-crack) | `melee/whip-crack` | 单次 0.85s · 192×80 · `act` | 长鞭向右甩出，鞭环沿鞭身加速滚向末端，鞭梢翻转啪地炸开白闪、气环、火星与轻烟。 |
| 打击 | [Blunt hit](../../demos/materials/pixelfx/index.html?demo=impacts/blunt-hit) | `impacts/blunt-hit` | 单次 0.9s · 128×88 | 沉闷钝击：炽白团块冷却为米黄暖光，墨线楔子刺出又缩回，压扁的尘圈膨胀飘散、土块掉落。 |
| 打击 | [Bullet impact](../../demos/materials/pixelfx/index.html?demo=impacts/bullet-impact) | `impacts/bullet-impact` | 单次 1.4s · 152×100 | 子弹命中右侧墙面：炽热半星闪现，火星呈锥形反向喷溅，碎屑弹跳落下，弹孔冷却为黑烟痕。 |
| 打击 | [Critical hit](../../demos/materials/pixelfx/index.html?demo=impacts/crit-hit) | `impacts/crit-hit` | 单次 0.9s · 216×136 | 暴击命中：锯齿星爆白光砸入并过冲，光环碎成飞弧，火星疾射、碎片在强光下翻滚落地。 |
| 打击 | [Ground slam](../../demos/materials/pixelfx/index.html?demo=impacts/ground-slam) | `impacts/ground-slam` | 单次 3.2s · 288×208 | 重物砸地：地面闪白开裂，两道月牙冲击波贴地疾驰，尘浪与高耸尘柱升起，碎石崩飞落定。 |
| 打击 | [Heavy landing](../../demos/materials/pixelfx/index.html?demo=impacts/heavy-landing) | `impacts/heavy-landing` | 单次 1.6s · 176×80 · `act` | 角色重重落地：脚下地砖凹陷开裂，两圈尘环先后贴地滚开，小石子跳起散落。 |
| 打击 | [Hit flash](../../demos/materials/pixelfx/index.html?demo=impacts/hit-flash) | `impacts/hit-flash` | 单次 0.5s · 80×64 · `act` | 角色受击：首帧全白，随后全身泛红并白光闪烁渐冷，四周漫画受击线向内刺入。 |
| 打击 | [Hit spark](../../demos/materials/pixelfx/index.html?demo=impacts/hit-spark) | `impacts/hit-spark` | 单次 0.5s · 136×80 | 通用命中火花：沿攻击方向拉长的不对称十字闪光包裹白色菱形核心，随后喷出下落的火星与热屑。 |
| 打击 | [Impact frame](../../demos/materials/pixelfx/index.html?demo=impacts/impact-frame) | `impacts/impact-frame` | 单次 0.3s · 320×180 | 日式动画冲击帧：两帧白底黑放射线聚焦命中点，两帧黑白反转，随后放射线向画面外抽离消失。 |
| 打击 | [Parry](../../demos/materials/pixelfx/index.html?demo=impacts/parry) | `impacts/parry` | 单次 1s · 200×112 | 双刃交锋：刀锋呈 X 形闪光，四角白星铮然亮起，光环碎裂，金色火花呈扇形喷起再如雨落下。 |
| 打击 | [Ricochet](../../demos/materials/pixelfx/index.html?demo=impacts/ricochet) | `impacts/ricochet` | 单次 1.1s · 232×84 | 曳光弹斜射地面，擦出炽白星光后折向弹开，地面留下发光擦痕与贴地乱跳的火星。 |
| 打击 | [Shield block](../../demos/materials/pixelfx/index.html?demo=impacts/shield-block) | `impacts/shield-block` | 单次 1.1s · 148×104 · `act` | 身前半球能量盾挡下一击：菱形晶格闪亮、波纹掠过、火星擦飞，随后蜂窝格逐格熄灭。 |
| 投射物 | [Arrow](../../demos/materials/pixelfx/index.html?demo=projectiles/arrow) | `projectiles/arrow` | 循环 0.6s · 112×32 | 飞行中的箭矢：钢制宽箭头迎光发亮，木杆笔直，箭羽随风轻颤，气流自箭尖剥离卷过尾羽。 |
| 投射物 | [Bullet tracer](../../demos/materials/pixelfx/index.html?demo=projectiles/bullet-tracer) | `projectiles/bullet-tracer` | 循环 0.6s · 200×40 | 炽白弹头疾速飞驰，身后曳光轨迹由白经金转红，沿途甩落火星与一缕细烟。 |
| 投射物 | [Cannon shot](../../demos/materials/pixelfx/index.html?demo=projectiles/cannonball) | `projectiles/cannonball` | 单次 3.8s · 208×116 | 火炮自离地 height 像素的炮口激发：白光闪现、火舌喷出，炮弹拖烟弧线飞出，炮口滚出浓重硝烟。 |
| 投射物 | [Energy disc](../../demos/materials/pixelfx/index.html?demo=projectiles/energy-disc) | `projectiles/energy-disc` | 循环 0.5s · 120×52 | 高速旋转飞行的锯齿能量盘：钩齿前缘发亮、中心炽白、旋臂翻涌，齿尖不断甩出火星。 |
| 投射物 | [Signal flare](../../demos/materials/pixelfx/index.html?demo=projectiles/flare) | `projectiles/flare` | 单次 5s · 152×232 | 信号弹拖着火星与白烟升空炸开，化作脉动红星悬停滴落火花，照红下方烟雾后渐渐熄灭。 |
| 投射物 | [Homing missile](../../demos/materials/pixelfx/index.html?demo=projectiles/homing-missile) | `projectiles/homing-missile` | 单次 3.8s · 248×140 | 制导导弹点火升空、翻滚俯冲砸向原点目标，空中留下一道悬停烟迹，命中处炸开烈焰与碎石。 |
| 投射物 | [Laser bolt](../../demos/materials/pixelfx/index.html?demo=projectiles/laser-bolt) | `projectiles/laser-bolt` | 循环 0.5s · 128×32 | 红色激光束：圆头包裹炽白核心，红带向后收细，光脉冲沿束身疾走，尾端散成摇曳虚线。 |
| 投射物 | [Magic missile](../../demos/materials/pixelfx/index.html?demo=projectiles/magic-missile) | `projectiles/magic-missile` | 单次 1.9s · 208×112 | 光尘在离地 height 像素的掌心聚成奥术球，拖着扭转光带蜿蜒飞向目标并炸成光星。 |
| 投射物 | [Pistol shot](../../demos/materials/pixelfx/index.html?demo=projectiles/muzzle-pistol) | `projectiles/muzzle-pistol` | 单次 1.8s · 96×72 | 离地 height 像素的手枪单发枪口焰：尖刺状白心火光、飞散火星、上卷青烟与弹跳落地的黄铜弹壳。 |
| 投射物 | [Shotgun blast](../../demos/materials/pixelfx/index.html?demo=projectiles/muzzle-shotgun) | `projectiles/muzzle-shotgun` | 单次 3.2s · 160×88 | 离地 height 像素的霰弹枪喷射：宽幅锯齿火扇、弹丸轨迹、翻滚浓烟，以及退膛抛出的红色霰弹壳。 |
| 投射物 | [SMG burst](../../demos/materials/pixelfx/index.html?demo=projectiles/muzzle-smg) | `projectiles/muzzle-smg` | 循环 1s · 112×72 | 每秒十二发的冲锋枪连射：每发呈现不同尖刺白心火光，火星四溅、烟缕堆积，黄铜弹壳满地弹跳。 |
| 投射物 | [Plasma shot](../../demos/materials/pixelfx/index.html?demo=projectiles/plasma-shot) | `projectiles/plasma-shot` | 循环 0.8s · 144×60 | 发光等离子团：核心热结翻滚、表层电晕噼啪，尾端拉细断裂成冷却熄灭的液滴。 |
| 投射物 | [Rocket](../../demos/materials/pixelfx/index.html?demo=projectiles/rocket) | `projectiles/rocket` | 循环 1.2s · 288×76 | 钢壳火箭呼啸飞行：尾喷口炽白、尾焰内含马赫环，身后拖着被火映亮的翻滚浓烟与火星。 |
| 生成与消亡 | [Coin drop](../../demos/materials/pixelfx/index.html?demo=spawn/coin-drop) | `spawn/coin-drop` | 单次 3s · 160×88 | 敌人化作轻烟噗声消散，金币旋转飞出，落地叮当弹跳闪光，排定后闪烁并逐枚消失。 |
| 生成与消亡 | [Disintegrate](../../demos/materials/pixelfx/index.html?demo=spawn/disintegrate) | `spawn/disintegrate` | 单次 3.4s · 176×100 · `act` | 角色周身电光噼啪、闪白后自头顶向下剥离：每个像素化作炽白光点随风飘散冷却。 |
| 生成与消亡 | [Dissolve burn](../../demos/materials/pixelfx/index.html?demo=spawn/dissolve-burn) | `spawn/dissolve-burn` | 单次 3.6s · 96×112 · `act` | 余烬火线自脚底点燃并向上攀爬：上方躯体焦黑冒烟，火线处火苗舔舐，下方化作飘落的灰烬。 |
| 生成与消亡 | [Egg hatch](../../demos/materials/pixelfx/index.html?demo=spawn/egg-hatch) | `spawn/egg-hatch` | 单次 3.1s · 120×96 | 斑点蛋左右摇晃三次，裂纹渐扩、暖光透出，随后砰然破壳，光芒涌出、蛋壳翻滚飞开。 |
| 生成与消亡 | [Poof](../../demos/materials/pixelfx/index.html?demo=spawn/poof) | `spawn/poof` | 单次 1.6s · 112×92 | 卡通消亡烟噗：白光轻爆，圆润烟球在速度线间炸开，小星旋转飞出，烟团升起淡去。 |
| 生成与消亡 | [Respawn beam](../../demos/materials/pixelfx/index.html?demo=spawn/respawn-beam) | `spawn/respawn-beam` | 单次 2.5s · 128×150 · `act` | 引导线落下、光柱轰然罩住定点，扫描条自脚底向上逐行写回炽白像素并冷却为角色本色。 |
| 生成与消亡 | [Shatter death](../../demos/materials/pixelfx/index.html?demo=spawn/shatter-death) | `spawn/shatter-death` | 单次 3.3s · 172×96 · `act` | 寒霜爬满全身将其封入多面冰晶，高光掠过、胸口裂纹蔓延，随即炸成翻滚弹跳并融化的冰块。 |
| 生成与消亡 | [Soul rise](../../demos/materials/pixelfx/index.html?demo=spawn/soul-rise) | `spawn/soul-rise` | 单次 3.2s · 96×140 · `act` | 躯体轮廓明灭后，苍白发光的灵魂自天灵升起，双腿拉长化作摇曳幽缕，撒落光尘消散。 |
| 生成与消亡 | [Spawn portal](../../demos/materials/pixelfx/index.html?demo=spawn/spawn-portal) | `spawn/spawn-portal` | 单次 3.8s · 208×150 | 地面撕开旋转裂隙，喷出紫烟与火星，涌出一股幽光喷泉后扭转闭合。 |
| 生成与消亡 | [Summon rise](../../demos/materials/pixelfx/index.html?demo=spawn/summon-rise) | `spawn/summon-rise` | 单次 4.6s · 176×116 | 地面烙出符文法阵并炸裂，长角巨汉伴随底光自尘土与碎石中破土升起，双目骤然亮起。 |
| 奥术 | [Arcane beam](../../demos/materials/pixelfx/index.html?demo=arcane/arcane-beam) | `arcane/arcane-beam` | 循环 1.2s · 264×100 · `act` | 自掌心向右发射的奥术光束：炽白核心外缠绕螺旋光股，脉冲沿束疾走，源头闪耀、末端迸射火花。 |
| 奥术 | [Arcane missiles](../../demos/materials/pixelfx/index.html?demo=arcane/arcane-missiles) | `arcane/arcane-missiles` | 单次 1.75s · 240×116 · `act` | 掌心扇形射出一排紫光飞弹，拖着扭转光带绕弧飞行，接连在目标身上炸开。 |
| 奥术 | [Arcane orb](../../demos/materials/pixelfx/index.html?demo=arcane/arcane-orb) | `arcane/arcane-orb` | 循环 2.4s · 136×112 | 悬浮的烟紫玻璃宝珠，漩涡围绕炽白核心转动，两条倾斜光环在前后环绕运行。 |
| 奥术 | [Blink in](../../demos/materials/pixelfx/index.html?demo=arcane/blink-in) | `arcane/blink-in` | 单次 1.4s · 136×96 · `act` | 闪光碎屑螺旋汇聚成一点亮光，拉开为光线，再展成炽白剪影并冷却为施法者。 |
| 奥术 | [Blink out](../../demos/materials/pixelfx/index.html?demo=arcane/blink-out) | `arcane/blink-out` | 单次 1.6s · 136×96 · `act` | 施法者周身聚光噼啪，闪白后挤压为一条亮线，瞬间坍缩爆出火花消失。 |
| 奥术 | [Magic circle cast](../../demos/materials/pixelfx/index.html?demo=arcane/magic-circle-cast) | `arcane/magic-circle-cast` | 单次 3.9s · 200×220 | 地面自行绘出法阵，符文逐一点亮后全阵闪白，光柱冲天而起并碎成漫天星芒。 |
| 奥术 | [Mana burst](../../demos/materials/pixelfx/index.html?demo=arcane/mana-burst) | `arcane/mana-burst` | 单次 1.8s · 208×150 | 能量向中心急聚后伴随白闪与光环炸开，甩出发光符文，符文依次闪耀并爆成火星。 |
| 奥术 | [Portal](../../demos/materials/pixelfx/index.html?demo=arcane/portal) | `arcane/portal` | 循环 2.4s · 152×116 | 直立传送裂隙：纤维状旋臂向暗处卷入，亮边摇晃，光尘与流线被吸入其中，地面泛光。 |
| 奥术 | [Rune circle](../../demos/materials/pixelfx/index.html?demo=arcane/rune-circle) | `arcane/rune-circle` | 循环 4s · 136×100 | 透视铺在地面旋转的符文法阵：追逐光点依次点亮符文轮，内嵌旋转方框与上升光尘。 |
| 奥术 | [Spell charge](../../demos/materials/pixelfx/index.html?demo=arcane/spell-charge) | `arcane/spell-charge` | 循环 1.6s · 120×86 · `act` | 掌心聚能：光线与光尘螺旋汇入，光环坍缩成噼啪带电的膨胀光球，蓄势待发。 |
| 奥术 | [Star fall](../../demos/materials/pixelfx/index.html?demo=arcane/star-fall) | `arcane/star-fall` | 单次 2.5s · 232×172 | 群星拖着长尾斜掠而下，每颗落地闪出白光、扩散地环并溅起火星。 |
| 奥术 | [Time stop](../../demos/materials/pixelfx/index.html?demo=arcane/time-stop) | `arcane/time-stop` | 单次 3.6s · 196×136 | 钟面弹开，指针越走越慢直至褪色凝固，随后裂纹蔓延、炸成坠落的碎片。 |
| 神圣 | [Blessing](../../demos/materials/pixelfx/index.html?demo=holy/blessing) | `holy/blessing` | 循环 3s · 80×128 · `act` | 柔和光锥自上方笼罩角色，闪光星尘穿过光锥飘落，触及头肩时闪烁消散。 |
| 神圣 | [Divine shield](../../demos/materials/pixelfx/index.html?demo=holy/divine-shield) | `holy/divine-shield` | 循环 2.4s · 88×84 · `act` | 包裹角色的金色圣盾气泡：亮边与薄金膜上经线缓转，高光掠过、星芒闪烁。 |
| 神圣 | [Feather burst](../../demos/materials/pixelfx/index.html?demo=holy/feather-burst) | `holy/feather-burst` | 单次 3s · 160×160 | 白雾轻爆抛飞羽毛，羽毛急停后左右摇摆缓缓下沉淡出，细绒随之后飘。 |
| 神圣 | [Halo](../../demos/materials/pixelfx/index.html?demo=holy/halo) | `holy/halo` | 循环 2s · 56×80 · `act` | 金色光环悬浮头顶，高光沿环游走，细微金尘洒向映亮的头顶。 |
| 神圣 | [Heal](../../demos/materials/pixelfx/index.html?demo=holy/heal) | `holy/heal` | 单次 1.9s · 80×104 · `act` | 光瓣在脚下绽放，光环沿身体上升恢复气色并留下星芒，光尘螺旋升起化作小爱心。 |
| 神圣 | [Healing ring](../../demos/materials/pixelfx/index.html?demo=holy/heal-aoe) | `holy/heal-aoe` | 单次 2.9s · 256×136 | 绿光种子沉入地面，柔和光环向四周滚开，所经之处地面泛光并浮起十字治疗符。 |
| 神圣 | [Holy pillar](../../demos/materials/pixelfx/index.html?demo=holy/holy-pillar) | `holy/holy-pillar` | 单次 3.5s · 192×232 | 圣光自高空破云而下：顶部光日展开扇形光柱汇聚于地面烙印法阵，脉动后合拢收起。 |
| 神圣 | [Resurrection](../../demos/materials/pixelfx/index.html?demo=holy/resurrection) | `holy/resurrection` | 单次 4.8s · 192×160 · `act` | 圣光倾泻于倒地者身上，生机自下而上复苏；光翼展开、头顶凝出光环，振翅一拍后化作飞羽散开。 |
| 神圣 | [Smite](../../demos/materials/pixelfx/index.html?demo=holy/smite) | `holy/smite` | 单次 2.8s · 224×176 | 闪光标记定点，圣光雷霆如重锤砸落：白闪与地面冲击波过后，碎石飞溅、发光裂隙渐冷。 |
| 神圣 | [Sunburst](../../demos/materials/pixelfx/index.html?demo=holy/sunburst) | `holy/sunburst` | 循环 4s · 128×128 | 金色日冕包裹炽白核心，长短光芒缓慢旋转呼吸，高光沿射线向外游走并在尖端闪烁。 |
| 暗影 | [Black hole](../../demos/materials/pixelfx/index.html?demo=shadow/black-hole) | `shadow/black-hole` | 循环 4s · 184×132 | 倾斜环带吸积盘围绕黑洞旋转，远端受引力弯曲翻折于上下边缘，碎屑螺旋拉长后被吞没。 |
| 暗影 | [Curse](../../demos/materials/pixelfx/index.html?demo=shadow/curse) | `shadow/curse` | 单次 3.4s · 112×124 · `act` | 暗缕在头顶汇聚，骷髅印记闪光砸落，双目燃火并将全身浸染为暗紫，随后碎裂消散。 |
| 暗影 | [Dark explosion](../../demos/materials/pixelfx/index.html?demo=shadow/dark-explosion) | `shadow/dark-explosion` | 单次 3.8s · 280×248 | 光尘旋入脉动核心，黑星切过紫白闪光，黑球边缘燃烧并甩出亮边碎片与黑烟后坍缩。 |
| 暗影 | [Eclipse](../../demos/materials/pixelfx/index.html?demo=shadow/eclipse) | `shadow/eclipse` | 循环 4s · 160×144 | 黑月遮蔽烈日：珍珠色日冕伴随长流光缓缓呼吸，白边纤薄，一颗钻石环光珠在边缘闪耀。 |
| 暗影 | [Grasping hands](../../demos/materials/pixelfx/index.html?demo=shadow/grasping-hands) | `shadow/grasping-hands` | 单次 3.1s · 200×116 | 暗影手臂自黑潭中溅起水花破土抓出，五指紧扣成爪挣扎，随后抓挠着空气被拖回潭底。 |
| 暗影 | [Hex sigil](../../demos/materials/pixelfx/index.html?demo=shadow/hex-sigil) | `shadow/hex-sigil` | 单次 4.2s · 168×128 | 燃烧画笔在空中勾勒诅咒法印，符文逐一弹出，随后闪白并崩解为下落的余烬。 |
| 暗影 | [Life steal](../../demos/materials/pixelfx/index.html?demo=shadow/life-steal) | `shadow/life-steal` | 单次 2.2s · 184×100 · `act` | 右侧目标受击渗出红球，短暂停滞后化作彗星流线疾飞回施法者体内，令其泛起猩红光芒。 |
| 暗影 | [Necro skulls](../../demos/materials/pixelfx/index.html?demo=shadow/necro-skulls) | `shadow/necro-skulls` | 循环 3s · 136×116 | 幽灵骷髅沿倾斜轨道环绕冷绿鬼火前后飞行，眼窝发亮并拖着卷曲魂烟。 |
| 暗影 | [Shadow flames](../../demos/materials/pixelfx/index.html?demo=shadow/shadow-flames) | `shadow/shadow-flames` | 循环 2.4s · 104×112 | 地面上的反转暗火：黑心外裹浅边紫焰，不断甩落余烬与黑烟。 |
| 暗影 | [Shadow tendrils](../../demos/materials/pixelfx/index.html?demo=shadow/shadow-tendrils) | `shadow/shadow-tendrils` | 单次 3.2s · 208×130 | 地面张开黑潭，亮边带钩触手溅起水花抽打扭动，随后随黑潭闭合沉入地下。 |
| 暗影 | [Soul drain](../../demos/materials/pixelfx/index.html?demo=shadow/soul-drain) | `shadow/soul-drain` | 循环 3.2s · 208×120 | 右侧苍白魂魄被扯出，顺流线漏斗吸入黑色水晶容器，每吸一魂容器便闪现紫光。 |
| 暗影 | [Void orb](../../demos/materials/pixelfx/index.html?demo=shadow/void-orb) | `shadow/void-orb` | 循环 3.2s · 168×160 | 黑球悬浮空中，苍白亮边游走，暗色漩涡将光尘与流线吸入其中，边缘光线发生弯曲。 |
| 状态 | [Bleeding](../../demos/materials/pixelfx/index.html?demo=status/bleeding) | `status/bleeding` | 循环 2.4s · 60×56 · `act` | 流血状态：三处伤口血珠鼓起滑落，滴入地面水洼激起涟漪；每次心跳喷出细血并令身体闪红。 |
| 状态 | [Burning](../../demos/materials/pixelfx/index.html?demo=status/burning) | `status/burning` | 循环 1.2s · 72×80 · `act` | 灼烧状态：四处火点跃动火苗、拖出火星与细烟；每 0.6 秒火势一旺，身体闪白转橙、焦痕蔓延。 |
| 状态 | [Charmed](../../demos/materials/pixelfx/index.html?demo=status/charmed) | `status/charmed` | 循环 2.4s · 60×76 · `act` | 魅惑状态：头顶大爱心搏动并抛出光环与粉红晕彩，小爱心上浮，双目变粉、脸颊泛红。 |
| 状态 | [Confused](../../demos/materials/pixelfx/index.html?demo=status/confused) | `status/confused` | 循环 2.4s · 60×78 · `act` | 混乱状态：发光螺旋在头顶旋转，问号环绕弹出上下浮动，视线左右游移。 |
| 状态 | [Cursed](../../demos/materials/pixelfx/index.html?demo=status/cursed) | `status/cursed` | 循环 2.4s · 64×84 · `act` | 诅咒状态：紫烟自全身蜿蜒升起，亮边黑斑自脚底向上蔓延，双目燃火、头顶闪烁骷髅故障影。 |
| 状态 | [Frozen](../../demos/materials/pixelfx/index.html?demo=status/frozen) | `status/frozen` | 循环 2s · 72×64 · `act` | 冰冻状态：霜叶爬满全身，下巴与双手垂挂滴水冰锥，呼气成霜、每1秒打颤一次，脚下霜面扩散。 |
| 状态 | [Haste](../../demos/materials/pixelfx/index.html?demo=status/haste) | `status/haste` | 循环 1.2s · 100×56 · `act` | 加速状态：条纹残影向后拖出，速度线疾掠，脚跟踢起尘土、前缘迎风发亮。 |
| 状态 | [Petrified](../../demos/materials/pixelfx/index.html?demo=status/petrified) | `status/petrified` | 单次 3.8s · 120×74 · `act` | 石化状态：灰岩紧随噼啪裂边自脚底爬满全身化作雕像，停顿后裂纹贯穿，炸成翻滚石块与尘土。 |
| 状态 | [Poisoned](../../demos/materials/pixelfx/index.html?demo=status/poisoned) | `status/poisoned` | 循环 1.6s · 72×64 · `act` | 中毒状态：绿波沿身体上涌、暗脉自伤口蔓延、毒汗滴落作响；每 0.8 秒身体晃动、毒泡破裂并扩出光环。 |
| 状态 | [Rage](../../demos/materials/pixelfx/index.html?demo=status/rage) | `status/rage` | 循环 1.2s · 80×80 · `act` | 狂暴状态：身体随心跳剧震，额角青筋搏动、双目燃火、头顶喷出蒸汽，四周压力线闪现、脚下地裂透红。 |
| 状态 | [Sleep](../../demos/materials/pixelfx/index.html?demo=status/sleep) | `status/sleep` | 循环 2.4s · 60×82 · `act` | 睡眠状态：双目紧闭，描边字母 Z 依次自头顶浮起摇摆放大，梦境光尘漂浮、伴随均匀呼吸光晕。 |
| 状态 | [Slowed](../../demos/materials/pixelfx/index.html?demo=status/slowed) | `status/slowed` | 循环 2.4s · 64×76 · `act` | 减速状态：头后玻璃表盘沉重跳格并逐次闪光，水滴慢动作下沉并在地面扩开缓速波纹。 |
| 状态 | [Stunned](../../demos/materials/pixelfx/index.html?demo=status/stunned) | `status/stunned` | 循环 2s · 60×64 · `act` | 眩晕状态：三颗旋转星星与两只小鸟沿倾斜轨道绕头盘旋，前后穿行并拖出闪光碎屑。 |
| 自然 | [Acid splash](../../demos/materials/pixelfx/index.html?demo=nature/acid-splash) | `nature/acid-splash` | 单次 2.8s · 184×116 | 酸液团炸成水冠飞溅，在地面蚀出冒烟发光的凹坑并沸腾翻泡，溅起亮珠与浅色蒸汽。 |
| 自然 | [Boulder](../../demos/materials/pixelfx/index.html?demo=nature/boulder) | `nature/boulder` | 单次 2.3s · 264×120 | 旋转巨石撒落尘土与碎石向右弧线砸落，白光一闪碎成翻滚岩块、砾石与尘浪。 |
| 自然 | [Earth spike](../../demos/materials/pixelfx/index.html?demo=nature/earth-spike) | `nature/earth-spike` | 单次 3.4s · 272×150 | 地面透光裂开隆起，多面石刺携两枚侧刺破土顶出，碎石如雨落下后石刺分裂崩塌。 |
| 自然 | [Healing bloom](../../demos/materials/pixelfx/index.html?demo=nature/healing-bloom) | `nature/healing-bloom` | 单次 3.3s · 124×120 | 嫩芽破土舒展，花苞鼓起围绕金心绽放治愈光芒，随后花瓣逐片化作光尘飘散。 |
| 自然 | [Leaf storm](../../demos/materials/pixelfx/index.html?demo=nature/leaf-storm) | `nature/leaf-storm` | 循环 2.4s · 112×104 · `act` | 落叶伴随亮色风带沿螺旋绕角色上升，前后翻转穿行，脚下残叶打旋。 |
| 自然 | [Poison cloud](../../demos/materials/pixelfx/index.html?demo=nature/poison-cloud) | `nature/poison-cloud` | 循环 4s · 256×100 | 贴地弥漫的毒瘴：内透黄绿、外褪暗紫的气浪伸出卷曲舌尖，毒烟如丝带向上扭转。 |
| 自然 | [Quake](../../demos/materials/pixelfx/index.html?demo=nature/quake) | `nature/quake` | 单次 3.1s · 288×104 | 地面连续三次剧震：地缝向外撕裂透出深处亮光，地砖隆起错位落下，碎石乱跳、尘土喷涌。 |
| 自然 | [Root snare](../../demos/materials/pixelfx/index.html?demo=nature/root-snare) | `nature/root-snare` | 单次 2.7s · 128×96 · `act` | 地面开裂，藤根破土而出螺旋缠紧角色双腿，啪地勒紧定住，随后干裂碎成树皮与尘土。 |
| 自然 | [Spore burst](../../demos/materials/pixelfx/index.html?demo=nature/spore-burst) | `nature/spore-burst` | 单次 3.2s · 212×132 | 毒蕈破土鼓起、菌褶发光颤动，随后压扁喷出一团翻滚上升、闪烁飘落的发光孢子云。 |
| 自然 | [Thorns](../../demos/materials/pixelfx/index.html?demo=nature/thorns) | `nature/thorns` | 单次 2.4s · 232×92 | 裂痕沿地面疾走，带钩荆棘由小到大依次破土刺出、迸发泥土与绿光，停顿后缩回地下。 |
| 自然 | [Tornado](../../demos/materials/pixelfx/index.html?demo=nature/tornado) | `nature/tornado` | 循环 2s · 196×168 | 蜿蜒风带旋成漏斗，顶部翻涌闪烁电光；落叶与碎屑前后环绕飞旋，底部尘土沸腾。 |
| 自然 | [Toxic puddle](../../demos/materials/pixelfx/index.html?demo=nature/toxic-puddle) | `nature/toxic-puddle` | 循环 4s · 176×100 | 内透黄绿脉络与亮边的黑色毒沥青池：油膜漂移，光泽毒泡鼓起拉长破裂，蒸汽成缕升腾。 |
| 自然 | [Vine whip](../../demos/materials/pixelfx/index.html?demo=nature/vine-whip) | `nature/vine-whip` | 单次 1.4s · 216×128 | 带刺藤蔓破土后仰盘绕，随即向右甩出鞭响，喷溅汁液并扯落叶片，最后滑回地面。 |
| 天气 | [Aurora](../../demos/materials/pixelfx/index.html?demo=weather/aurora) | `weather/aurora` | 循环 12s · 320×180 | 星空上的绿紫极光帷幕：折叠下摆明亮燃烧，光柱向上闪烁渐变，整片夜空缓慢呼吸。 |
| 天气 | [Blizzard](../../demos/materials/pixelfx/index.html?demo=weather/blizzard) | `weather/blizzard` | 循环 8s · 320×180 | 狂风吹平的暴风雪：三层景深雪线疾掠，阵风卷起半透明雪幕，雪堆表面吹起贴地飞雪。 |
| 天气 | [Cherry blossoms](../../demos/materials/pixelfx/index.html?demo=weather/cherry-blossoms) | `weather/cherry-blossoms` | 循环 10s · 320×180 | 粉色樱瓣乘春风打旋飘落、迎光闪烁，间或夹杂整朵旋转的樱花。 |
| 天气 | [Clouds](../../demos/materials/pixelfx/index.html?demo=weather/clouds) | `weather/clouds` | 循环 12s · 320×180 | 夜空云层掠过明月：云顶镀银、云腹深暗，擦过月面时边缘闪亮，沿途不断聚散。 |
| 天气 | [Falling leaves](../../demos/materials/pixelfx/index.html?demo=weather/falling-leaves) | `weather/falling-leaves` | 循环 10s · 320×180 | 秋叶在空中摇摆下坠，翻转露出浅色叶背，乘一阵疾风滑翔后平落地面淡去。 |
| 天气 | [Fireflies](../../demos/materials/pixelfx/index.html?demo=weather/fireflies) | `weather/fireflies` | 循环 12s · 320×180 | 夜间草地上的萤火虫各自按呼吸节奏明灭游走，拖出微光并照亮下方草尖。 |
| 天气 | [Fog](../../demos/materials/pixelfx/index.html?demo=weather/fog) | `weather/fog` | 循环 12s · 320×180 | 三层月光浓雾缓慢交错漂移，雾峰迎光发亮，前排薄雾丝缕滑过。 |
| 天气 | [God rays](../../demos/materials/pixelfx/index.html?demo=weather/god-rays) | `weather/god-rays` | 循环 10s · 320×180 | 丁达尔光束自左上方斜射地面，缓缓摇曳呼吸，漂浮尘埃穿过光束时逐一亮起。 |
| 天气 | [Rain](../../demos/materials/pixelfx/index.html?demo=weather/rain) | `weather/rain` | 循环 8s · 320×180 | 四层景深斜雨：远雨隐入暗处，近雨闪亮溅起水花，水洼涟漪交错、贴地飘起薄雾。 |
| 天气 | [Shooting stars](../../demos/materials/pixelfx/index.html?demo=weather/shooting-stars) | `weather/shooting-stars` | 循环 10s · 320×180 | 流星划过星空，白头拖着金粉尾迹；大流星闪亮碎裂，留下扭曲渐淡的发光余迹。 |
| 天气 | [Snow](../../demos/materials/pixelfx/index.html?demo=weather/snow) | `weather/snow` | 循环 12s · 320×180 | 三层景深阵风落雪：远方雪点、中景飘雪与近景旋转发光的大冰晶，落上雪堆闪烁融化。 |
| 天气 | [Storm](../../demos/materials/pixelfx/index.html?demo=weather/storm) | `weather/storm` | 循环 10s · 320×180 | 翻滚云层下的双层疾雨：分叉闪电双闪劈落照亮夜空与雨丝，随后云间亮起片状闪电。 |
| 界面 | [Achievement](../../demos/materials/pixelfx/index.html?demo=ui/achievement) | `ui/achievement` | 单次 2.4s · 220×72 | 成就提示条伴随速度线滑入落定，金牌在星芒中弹出，流光扫过整条提示后滑出。 |
| 界面 | [Coin collect](../../demos/materials/pixelfx/index.html?demo=ui/coin-collect) | `ui/coin-collect` | 单次 2.45s · 176×116 | 金币炸成旋转金币喷泉，悬停后逐枚飞入顶部计数器，数字跳动闪亮后收起。 |
| 界面 | [Combo counter](../../demos/materials/pixelfx/index.html?demo=ui/combo-counter) | `ui/combo-counter` | 单次 1.45s · 208×100 | x5 COMBO 拖着速度线疾冲急停，闪出白光、光环与火星；在倒计时条耗尽前脉动，随后呼啸飞出。 |
| 界面 | [Confetti](../../demos/materials/pixelfx/index.html?demo=ui/confetti) | `ui/confetti` | 单次 3.4s · 200×140 | 两支礼花筒先后炸响：彩纸与卷曲彩带喷出悬停，随后翻转飘落铺满地面。 |
| 界面 | [Countdown](../../demos/materials/pixelfx/index.html?demo=ui/countdown) | `ui/countdown` | 单次 3.1s · 152×136 | 3、2、1 依次砸入如引信般燃烧冒火花的倒计时环，最后 GO! 炸开并将圆环震成放射冲击波。 |
| 界面 | [Crit number](../../demos/materials/pixelfx/index.html?demo=ui/crit-number) | `ui/crit-number` | 单次 1.5s · 152×120 | 巨大的白色 CRIT 128! 伴随震屏与速度线砸在锯齿爆星上，冷却为火焰色、扫过流光后爆成火星。 |
| 界面 | [Damage number](../../demos/materials/pixelfx/index.html?demo=ui/damage-number) | `ui/damage-number` | 单次 1.05s · 76×68 | 红色 -27 自命中火花中弹起，首帧闪白，划弧落下压扁微跳，随后上浮淡出。 |
| 界面 | [Exclamation](../../demos/materials/pixelfx/index.html?demo=ui/exclamation) | `ui/exclamation` | 单次 1.4s · 84×104 · `act` | 粗体感叹号自角色头顶拉伸弹出、落下压扁，四周弹出惊叹短线，晃动后噗声消失。 |
| 界面 | [Health bar hit](../../demos/materials/pixelfx/index.html?demo=ui/health-bar-hit) | `ui/health-bar-hit` | 单次 2s · 160×64 | 分段血条受击震动下沉，扣血段闪白掉屑，短暂停留后沿冒火花的边缘消退。 |
| 界面 | [Heart lost](../../demos/materials/pixelfx/index.html?demo=ui/heart-lost) | `ui/heart-lost` | 单次 1.5s · 96×88 | HUD 爱心受击闪白震动，裂纹自上而下贯通，裂成两半翻滚坠落，留下渐隐的空槽。 |
| 界面 | [Level up](../../demos/materials/pixelfx/index.html?demo=ui/level-up) | `ui/level-up` | 单次 3.2s · 176×138 · `act` | 金光在脚下汇聚并冲起罩住角色的光柱，光环攀升，LEVEL UP! 逐字落下、流光扫过并闪烁星芒。 |
| 界面 | [Quest complete](../../demos/materials/pixelfx/index.html?demo=ui/quest-complete) | `ui/quest-complete` | 单次 2.6s · 204×92 | 缝线绶带自中央向两侧展开，QUEST COMPLETE 逐字打出，金色火漆印盖下并爆出吉星，随后卷起收走。 |
| 拾取物 | [Chest open](../../demos/materials/pixelfx/index.html?demo=pickups/chest-open) | `pickups/chest-open` | 单次 4.6s · 176×112 | 镶边宝箱剧烈晃动、缝隙漏出金光，随后踢开箱盖、光芒呈扇形射出，金币与宝石弧线跃出并被拾取。 |
| 拾取物 | [Coin spin](../../demos/materials/pixelfx/index.html?demo=pickups/coin-spin) | `pickups/coin-spin` | 循环 1.6s · 56×56 | 厚金币立边旋转：正面浮雕星纹、侧转露出齿边，高光扫过币面，在阴影上方轻轻起伏。 |
| 拾取物 | [Collect burst](../../demos/materials/pixelfx/index.html?demo=pickups/collect-burst) | `pickups/collect-burst` | 单次 1.35s · 112×108 | 拾取瞬间：白闪与十字光芒亮起，细环先于柔环扩开，星芒沿弧线飞出急停闪烁后熄灭。 |
| 拾取物 | [Crystal shard](../../demos/materials/pixelfx/index.html?demo=pickups/crystal-shard) | `pickups/crystal-shard` | 循环 3.2s · 64×76 | 残缺琥珀晶簇悬浮轻晃：不规则切面与断口间透出脉动光芒，细小碎晶环绕运行。 |
| 拾取物 | [Gem spin](../../demos/materials/pixelfx/index.html?demo=pickups/gem-spin) | `pickups/gem-spin` | 循环 2.4s · 64×64 | 明亮琢型红宝石绕轴旋转：切面依次迎光闪亮，高光滚过冠部，折射光斑扫过地面、星芒环绕。 |
| 拾取物 | [Heart pickup](../../demos/materials/pixelfx/index.html?demo=pickups/heart-pickup) | `pickups/heart-pickup` | 循环 1.2s · 56×60 | 饱满光泽的爱心在阴影上方按心跳双拍缩放拉伸，每次跳动扩出柔光与细环，小爱心飘起。 |
| 拾取物 | [Key glint](../../demos/materials/pixelfx/index.html?demo=pickups/key-glint) | `pickups/key-glint` | 循环 2s · 72×60 | 华丽银匙悬浮轻摇，高光自匙环沿杆滑向匙齿，在尖端炸成下落的火星。 |
| 拾取物 | [Loot beam](../../demos/materials/pixelfx/index.html?demo=pickups/loot-beam) | `pickups/loot-beam` | 循环 2.4s · 96×176 | 掉落长剑沐浴在高耸稀有度光柱中：白心向高空收细，地环脉动、光尘上涌，剑身掠过流光。 |
| 拾取物 | [Potion](../../demos/materials/pixelfx/index.html?demo=pickups/potion) | `pickups/potion` | 循环 2.4s · 56×72 | 圆肚玻璃药水瓶在空中摇晃：发光药液随晃动滞后荡漾，气泡升起破裂，软木塞飘出轻缕。 |
| 拾取物 | [Power star](../../demos/materials/pixelfx/index.html?demo=pickups/power-star) | `pickups/power-star` | 循环 1.6s · 88×84 | 饱满倒角星左右摇摆并随节拍膨胀，背后光芒缓转，五个星尖不断甩出火花。 |
| 拾取物 | [XP orb](../../demos/materials/pixelfx/index.html?demo=pickups/xp-orb) | `pickups/xp-orb` | 循环 1.8s · 72×56 | 小型经验光球沿 8 字轨迹疾驰，身后拖着渐细彗尾并撒落闪烁光点，照亮下方地面。 |
| 转场 | [Blinds](../../demos/materials/pixelfx/index.html?demo=transitions/blinds) | `transitions/blinds` | 单次 2s · 320×180 | 百叶窗叶片侧刃迎光，自上而下翻转闭合，暖光与微尘自缝隙挤出，随后翻转打开淡去。 |
| 转场 | [Burn away](../../demos/materials/pixelfx/index.html?demo=transitions/burn-away) | `transitions/burn-away` | 单次 3s · 320×180 | 画面自四周向内沿锯齿余烬火线燃烧变黑，随后黑幕闷燃并自中央向外烧开。 |
| 转场 | [CRT off](../../demos/materials/pixelfx/index.html?demo=transitions/crt-off) | `transitions/crt-off` | 单次 2s · 320×180 | 老式显像管关机：画面压成炽白亮线再缩为中心亮斑余晖，随后由点展线重新开机亮起。 |
| 转场 | [Diamond wipe](../../demos/materials/pixelfx/index.html?demo=transitions/diamond-wipe) | `transitions/diamond-wipe` | 单次 2s · 320×180 | 多面菱形波浪横扫全屏，亮边高光冷却锁死为黑幕，随后再次隆起如宝石般缩小闪灭。 |
| 转场 | [Glitch wipe](../../demos/materials/pixelfx/index.html?demo=transitions/glitch-wipe) | `transitions/glitch-wipe` | 单次 1.8s · 320×180 | 撕裂黑带断续横扫画面，卡顿回跳、边缘分离出洋红与青色重影及数据碎条，随后彻底扫过。 |
| 转场 | [Iris](../../demos/materials/pixelfx/index.html?demo=transitions/iris) | `transitions/iris` | 单次 2.2s · 320×180 | 发光圆孔收拢聚焦于微尘漂浮的暖光聚光灯，停顿闪烁后缩成星点闭合，再从闪光中爆出火花弹开。 |
| 转场 | [Pixel dissolve](../../demos/materials/pixelfx/index.html?demo=transitions/pixel-dissolve) | `transitions/pixel-dissolve` | 单次 2.2s · 320×180 | 像素方块成簇闪烁出现，白框填黑冷却关闭画面，随后白框坍缩、化作细碎星光消散。 |
| 转场 | [Shatter wipe](../../demos/materials/pixelfx/index.html?demo=transitions/shatter-wipe) | `transitions/shatter-wipe` | 单次 2.8s · 320×180 | 暗色玻璃板落下弹跳，受击点闪光并蔓延裂纹，随后炸成亮边翻滚的玻璃碎片坠落。 |
| 转场 | [Slash wipe](../../demos/materials/pixelfx/index.html?demo=transitions/slash-wipe) | `transitions/slash-wipe` | 单次 1.7s · 320×180 | 炽白刀锋斜切全屏、前缘泛光并向后喷溅火星，第二刀交叉闪过，黑幕随之裂开滑落。 |
| 转场 | [Star iris](../../demos/materials/pixelfx/index.html?demo=transitions/star-iris) | `transitions/star-iris` | 单次 2.2s · 320×180 | 五角星光圈旋转收拢于画面中央，金边发亮、星尖撒落光尘，闭合闪亮后再次旋转弹开。 |
| 生物 | [Bat](../../demos/materials/pixelfx/index.html?demo=critters/bat) | `critters/bat` | 循环 2.4s · 112×80 | 蝙蝠以四帧利落翼拍沿 8 字轨迹飞行，每次下扑托起躯体，月光映亮翼骨、红眼闪烁。 |
| 生物 | [Bird](../../demos/materials/pixelfx/index.html?demo=critters/bird) | `critters/bird` | 循环 2.4s · 112×80 | 鸣禽原地振翅：数次急促扑翼抬升身体，随后展翼滑翔、尾羽扇动，一片落羽飘然离去。 |
| 生物 | [Butterfly](../../demos/materials/pixelfx/index.html?demo=critters/butterfly) | `critters/butterfly` | 循环 3.2s · 128×88 | 虹彩蝴蝶在急促扑翼与展翅滑翔间绕环游走，斑纹翅面撒落一串闪烁磷粉。 |
| 生物 | [Eyeball](../../demos/materials/pixelfx/index.html?demo=critters/eyeball) | `critters/eyeball` | 循环 3.2s · 96×108 | 布满血丝的眼球在肉质眼睑中悬浮：发光虹膜快速转动扫视、眨眼，尾后视神经随起伏摇摆。 |
| 生物 | [Fish school](../../demos/materials/pixelfx/index.html?demo=critters/fish-school) | `critters/fish-school` | 循环 4.8s · 136×80 | 鱼群分前后两层景深游弋：鱼身摆动带动尾鳍，不时有一尾向前窜出，气泡上升、水波焦散光掠过。 |
| 生物 | [Flying skull](../../demos/materials/pixelfx/index.html?demo=critters/flying-skull) | `critters/flying-skull` | 循环 2.4s · 96×132 | 裂纹骷髅在空中上下浮动，下颌咔哒开合、眼窝燃火，头顶烈焰喷涌火团、余烬与暖光。 |
| 生物 | [Frog](../../demos/materials/pixelfx/index.html?demo=critters/frog) | `critters/frog` | 循环 2.6s · 112×88 | 青蛙鼓起鸣囊、眨眼蓄力，跃起一口咬住空中飞蝇，落地压扁溅起尘噗，吞咽后落定。 |
| 生物 | [Ghost](../../demos/materials/pixelfx/index.html?demo=critters/ghost) | `critters/ghost` | 循环 2.4s · 96×100 | 白布幽灵在地面上方起伏漂浮：扇形下摆随漂移波动，小手轻拍、转头眨眼，下摆滴落光尘。 |
| 生物 | [Jellyfish](../../demos/materials/pixelfx/index.html?demo=critters/jellyfish) | `critters/jellyfish` | 循环 3.2s · 96×120 | 半透明水母脉动游弋：伞盖收缩上推、舒张下沉，褶边口腕与长触手拖曳，体内泛光、气泡掠过。 |
| 生物 | [Slime](../../demos/materials/pixelfx/index.html?demo=critters/slime) | `critters/slime` | 循环 1.8s · 112×88 | 光泽史莱姆原地跳跃：压扁蓄力、拉伸起跳、空中变圆，落地啪地溅出回爬液滴，晃动眨眼。 |
| 生物 | [Snake](../../demos/materials/pixelfx/index.html?demo=critters/snake) | `critters/snake` | 循环 2.4s · 136×56 | 长蛇昂首贴地滑行：隆起波浪沿花纹蛇身滚向尾端，触地处扬起尘噗，分叉信子吞吐。 |
| 生物 | [Wisp](../../demos/materials/pixelfx/index.html?demo=critters/wisp) | `critters/wisp` | 循环 3.2s · 128×104 | 鬼火沿 8 字在地面上方游走：带面孔的小魂火火尾向上舔舐后拖，沿途甩落火团与火星。 |
