export type SchemeId = 'paper' | 'friendly' | 'tool';
export type Group = 'palette' | 'type' | 'shape' | 'space';
export type Palette = { bg: string; ink: string; accent: string };
export interface LabState {
  name: string;
  palette: Palette;
  type: 'serif' | 'sans' | 'mono';
  layout: 'split' | 'center' | 'editorial';
  shape: 'sharp' | 'soft' | 'round';
  space: number;
  graphic: 'line' | 'geometry' | 'product';
  hierarchy: 'clear' | 'flat';
  texture: 'flat' | 'grain' | 'lift';
  motion: boolean;
  themeChoice?: 'reference' | 'system' | 'light' | 'dark';
  description?: string;
}
export const graphicNames={line:'线描',geometry:'几何',product:'产品'};
export const graphics={
    line:'<svg viewBox="0 0 240 100" role="img" aria-label="线描：一本笔记与一片叶子"><path d="M23 20h118v68H23zM33 20v68M48 38h58M48 49h72M48 60h48M48 71h61"/><path d="M168 82c-9-16-18-41 13-59 30 6 31 45-2 52M164 87l26-52M175 66l-13-17M184 47l18 2"/><path d="m117 34 25-21 6 7-25 21-11 3z"/></svg>',
    geometry:'<svg viewBox="0 0 240 100" role="img" aria-label="几何：圆、矩形和三角构成"><rect class="graphic-soft" x="25" y="18" width="71" height="65"/><circle class="graphic-accent" cx="139" cy="42" r="28"/><path class="graphic-outline" d="m152 84 36-64 36 64Z"/><path d="M22 90h202M46 29v43M61 29v31M76 29v39"/></svg>',
    product:'<svg viewBox="0 0 240 100" role="img" aria-label="产品：笔记本与便携记录工具"><rect class="graphic-soft" x="24" y="11" width="119" height="76" rx="4"/><path d="M39 11v76M55 31h62M55 44h46M55 57h54M55 70h34"/><rect x="164" y="8" width="49" height="82" rx="5"/><rect class="graphic-accent" x="174" y="25" width="29" height="25"/><path d="M180 17h16M174 63h26M174 72h19"/><circle cx="188" cy="82" r="2"/></svg>'
  };
export const names = { paper:'纸页', friendly:'亲和', tool:'工具' };
export const labels = { palette:'配色', type:'字体', shape:'形状', space:'留白' };
export const fontNames = { serif:'衬线', sans:'无衬线', mono:'等宽' };
export const layoutNames = { split:'左文右图', center:'居中纵向', editorial:'左图右文' };
export const shapeNames = { sharp:'直角 / 0px', soft:'小圆角 / 8px', round:'大圆角 / 24px' };
export const schemes: Record<SchemeId, LabState> = {
    paper:{ name:'纸页', palette:{bg:'#f7f7f5',ink:'#101010',accent:'#373737'},type:'sans',layout:'split',shape:'soft',space:32,graphic:'line',hierarchy:'clear',texture:'flat',motion:true, description:'中性纸面、墨色信息与少量深灰强调，配合清楚的无衬线层级、细框和留白，表达安静阅读。' },
    friendly:{ name:'亲和',palette:{bg:'#fefbff',ink:'#1c1b1d',accent:'#6442d6'},type:'sans',layout:'split',shape:'round',space:28,graphic:'geometry',hierarchy:'clear',texture:'flat',motion:true,description:'柔白表面、深色正文与紫色行动，配合柔和图形和适中留白，让信息清楚、操作亲和。' },
    tool:{name:'工具',palette:{bg:'#f2efe6',ink:'#171717',accent:'#e3402e'},type:'sans',layout:'editorial',shape:'sharp',space:24,graphic:'product',hierarchy:'clear',texture:'flat',motion:false,description:'纸白、炭黑与信号红，配合严格对齐、直线边界与紧凑间距，突出可扫描的工具信息。'}
  };
export const fontRules = {
    serif:{title:'Georgia,"SimSun",serif',body:'Arial,"Microsoft YaHei",sans-serif',weight:'500',track:'-1px'},
    sans:{title:'"Microsoft YaHei","微软雅黑","Segoe UI",Arial,sans-serif',body:'"Microsoft YaHei","微软雅黑","Segoe UI",Arial,sans-serif',weight:'650',track:'-.5px'},
    mono:{title:'"Courier New","Microsoft YaHei",monospace',body:'"Courier New","Microsoft YaHei",monospace',weight:'700',track:'-.8px'}
  };
export const shapeRules = {sharp:{radius:0,stroke:1,cap:'butt',shadow:'none'},soft:{radius:8,stroke:1,cap:'round',shadow:'none'},round:{radius:24,stroke:1,cap:'round',shadow:'none'}};
