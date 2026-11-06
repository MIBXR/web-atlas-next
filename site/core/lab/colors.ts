import type { LabState } from "./data";

export const hex = (value: string) => String(value).toLowerCase();
export const rgb = (value: string) => [1,3,5].map(start => parseInt(value.slice(start,start+2),16));
export const toHex = (array: number[]) => '#'+array.map(n=>Math.round(n).toString(16).padStart(2,'0')).join('');
export const blend = (a: string,b: string,t: number) => toHex(rgb(a).map((v,i)=>v*(1-t)+rgb(b)[i]*t));
export const luminance = (color: string) => rgb(color).map(v=>{const s=v/255;return s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4)}).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
export const contrast = (a: string,b: string) => {const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
export const bestText = (background: string) => contrast(background,'#ffffff')>contrast(background,'#171717')?'#ffffff':'#171717';

export function resolvedPalette(state: LabState, systemDark: boolean){
    const base=state.palette;
    const choice=state.themeChoice||'reference';
    const dark=choice==='system'?systemDark:choice==='dark';
    const baseDark=luminance(base.bg)<.25;
    if(choice==='reference'||dark===baseDark)return base;
    return dark?{bg:blend(base.bg,'#111713',.93),ink:blend(base.ink,'#ffffff',.9),accent:blend(base.accent,'#ffffff',.42)}:{bg:blend(base.bg,'#ffffff',.96),ink:blend(base.ink,'#101b14',.94),accent:blend(base.accent,'#101b14',.57)};
  }
