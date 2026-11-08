import 'ascii.rest/element';
import { load } from '../vendor/ascii.rest@0.4.0/dist/library.js';

const kit = new Set([
  "kit-compose-banner-scene",
  "kit-compose-dashboard",
  "kit-compose-logos",
  "kit-compose-starfield",
  "kit-core-orbit",
  "kit-draw-clock",
  "kit-draw-gauge",
  "kit-draw-sine",
  "kit-draw-sprite",
  "kit-field-moonlit",
  "kit-field-plasma",
  "kit-field-pulse",
  "kit-field-sea",
  "kit-field-storm",
  "kit-field-window",
  "kit-fx-chain-banner",
  "kit-fx-chain-card",
  "kit-fx-custom-reflection",
  "kit-fx-dissolve-donut",
  "kit-fx-glint-banner",
  "kit-fx-glitch-logo",
  "kit-fx-scan-logo",
  "kit-fx-type-terminal",
  "kit-image-badge",
  "kit-image-logo",
  "kit-image-photo",
  "kit-materials-aquarium",
  "kit-materials-candle",
  "kit-materials-coffee",
  "kit-materials-cola",
  "kit-materials-glass",
  "kit-materials-house",
  "kit-materials-lava-lamp",
  "kit-materials-rocket",
  "kit-materials-tv",
  "kit-math-easing",
  "kit-math-galaxy",
  "kit-math-landscape",
  "kit-math-pool",
  "kit-math-starfield",
  "kit-particles-banner",
  "kit-particles-comet",
  "kit-particles-confetti",
  "kit-particles-embers",
  "kit-particles-fireworks",
  "kit-particles-matrix",
  "kit-particles-sand",
  "kit-particles-snow",
  "kit-recipe-looks-aurora",
  "kit-recipe-looks-contributions",
  "kit-recipe-looks-galaxy",
  "kit-recipe-looks-heart",
  "kit-recipe-looks-hot",
  "kit-recipe-looks-lava",
  "kit-recipe-looks-matrix",
  "kit-recipe-looks-plasma",
  "kit-recipe-looks-sea",
  "kit-recipe-looks-snow",
  "kit-recipe-looks-storm",
  "kit-recipe-looks-sunset",
  "kit-recipe-looks-tunnel",
  "kit-recipe-motion-boom",
  "kit-recipe-motion-bounce",
  "kit-recipe-motion-candle",
  "kit-recipe-motion-cloud",
  "kit-recipe-motion-coin",
  "kit-recipe-motion-donut",
  "kit-recipe-motion-earth",
  "kit-recipe-motion-heartbeat",
  "kit-recipe-motion-hello",
  "kit-recipe-motion-hover",
  "kit-recipe-motion-orbit",
  "kit-recipe-motion-rec",
  "kit-recipe-motion-saturn",
  "kit-recipe-motion-star",
  "kit-recipe-widget-bars",
  "kit-recipe-widget-card",
  "kit-recipe-widget-clock",
  "kit-recipe-widget-compass",
  "kit-recipe-widget-countdown",
  "kit-recipe-widget-dashboard",
  "kit-recipe-widget-marquee",
  "kit-recipe-widget-progress",
  "kit-recipe-widget-typewriter",
  "kit-shapes3d-boing",
  "kit-shapes3d-crystal",
  "kit-shapes3d-cube",
  "kit-shapes3d-donut",
  "kit-shapes3d-galaxy",
  "kit-shapes3d-loader",
  "kit-shapes3d-orrery",
  "kit-shapes3d-planet",
  "kit-vector-ball",
  "kit-vector-coffee",
  "kit-vector-glass",
  "kit-vector-heart",
  "kit-vector-logo",
  "kit-vector-star",
  "kit-vector-tv"
]);
const groups = {
  "scenes": "场景",
  "nature": "自然",
  "space": "太空",
  "creatures": "生物",
  "objects": "物件",
  "shapes": "形体",
  "generative": "生成图案",
  "physics": "物理",
  "effects": "效果",
  "type": "文字",
  "ui": "界面",
  "data": "数据",
  "logos": "语言与工具标志",
  "companies": "公司标志",
  "distros": "Linux 发行版"
};
const requested = new URLSearchParams(location.search).get('demo');
const id = Object.hasOwn(load, requested) || kit.has(requested) ? requested : 'donut';
const art = document.createElement('ascii-art');
const caption = document.querySelector('figcaption');
const well = document.querySelector('.work');
let meta;
let group;

if (kit.has(id)) {
  const name = id.slice(4);
  const { default: piece } = await import('./kit/' + name + '.js');
  meta = piece.meta;
  art.setAttribute('src', 'demo/kit/' + name + '.js');
  group = 'Kit · ' + (name.startsWith('recipe-looks-') ? 'recipe-looks' : name.split('-')[0]);
} else {
  ({ meta } = await load[id]());
  art.setAttribute('piece', id);
  group = groups[meta.category];
}

well.classList.add('well', 'big');
well.style.setProperty('--cols', meta.cols);
well.style.setProperty('--rows', meta.rows);
well.style.setProperty('--cell', meta.cell ?? 2);
if (meta.ground) {
  well.classList.add('scene');
  well.style.setProperty('--ground', meta.ground);
}
for (const [index, value] of [group, meta.cols + '×' + meta.rows, meta.fps ? meta.fps + ' fps' : '静态'].entries()) {
  const span = document.createElement('span');
  if (index === 0) span.className = 'category';
  span.textContent = value;
  caption.append(span);
}
document.querySelector('figure').prepend(caption);
well.append(art);
