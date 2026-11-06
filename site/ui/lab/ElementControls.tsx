import { Fragment } from "react";
import { Select } from "@/registry/components/select/select";
import { Combobox } from "@/registry/components/combobox/combobox";
import { ColorPicker } from "@/registry/components/color-picker/color-picker";
import { Slider } from "@/registry/components/slider/slider";
import { Switch } from "@/registry/components/switch/switch";
import { controls } from "@/core/lab/controls";
import { bestText, contrast, luminance, resolvedPalette } from "@/core/lab/colors";
import type { Choice, LabModel } from "@/core/lab/state";
import { SourceList } from "../blocks";
import { useAtlas } from "../context";

export function ElementControls({ model, systemDark, embed, onChange, onReference }: {
  model: LabModel; systemDark: boolean; embed: boolean;
  onChange: (key: Choice, value: string | number | boolean) => void;
  onReference: (id: string) => void;
}) {
  const { data } = useAtlas();
  const { state, referenceEntry } = model;
  const palette = resolvedPalette(state, systemDark);
  const textRatio = contrast(palette.bg, palette.ink), buttonRatio = contrast(palette.accent, bestText(palette.accent));
  const origin = referenceEntry?.themeBehavior, sound = referenceEntry?.soundBehavior;
  const dark = luminance(palette.bg) < .25;
  const themeNote = '当前示例：'+(dark?'深色':'浅色')+'；'+((state.themeChoice||'reference')==='system'?'随系统变化。':'可切换比较。')+(origin?'原案例：'+origin.control+'；'+origin.designReason:'背景、表面、正文、强调和边界按各自角色一起切换，不对图片施加反色。');
  const soundNote = sound?'协调实验无声音。原案例声音：'+sound.control+' '+sound.interactionRole:'协调实验无声音；下方声音机制实验可单独启用合成操作音。';
  const spacing = <div className="lab-control-group" data-control="space">
    <Slider label="⑤ 留白与密度" value={state.space} min={12} max={60} step={4} format={value => `${value}px`} onValueChange={value => onChange('space',value)} />
    {!embed && <p className="muted small">同时调整外边距、组间距离与组件内距，观察分组关系。</p>}
  </div>;
  const motion = <div className="lab-control-group" data-control="motion">
    <Switch id="motion-choice" label="⑨ 微动效" checked={state.motion} onCheckedChange={value => onChange('motion',value)} />
    <p className="muted small">用示例下方“体验操作反馈”按钮观察。关闭动效后仍有文字反馈；减少动态偏好优先。</p>
  </div>;
  return (
    <div className="lab-element-controls">
      {!embed && <div className="lab-control-group lab-reference-control">
        <Combobox id="reference-style" label="从案例库带入风格" options={[
          {value:'',label:'先体验三套基础方案'},
          ...data.cases.map(entry => ({value:entry.id,label:String(entry.order).padStart(2,'0')+' / '+entry.title})),
        ]} value={referenceEntry?.id ?? ''} onValueChange={onReference} placeholder="先体验三套基础方案" />
        <p className="muted small" id="style-context">{model.context}</p>
        <SourceList items={(referenceEntry?.sources.slice(0,2) ?? []).map((s: {title: string; url: string}) => ({title:s.title,url:s.url}))} />
      </div>}
      <fieldset className="lab-colors">
        <legend>① 配色 / 三个角色</legend>
        {([['bg','背景'],['ink','文字'],['accent','强调']] as const).map(([key,label]) => <div className="lab-color" key={key} data-color={key}>
          <ColorPicker label={label} value={palette[key]} background={palette.bg} onValueChange={value => onChange(key,value)} />
        </div>)}
        {!embed && <p className="muted small" id="contrast-note" data-warn={textRatio < 4.5 || undefined}>
          {'文字 / 背景 '+textRatio.toFixed(2)+':1；按钮文字 '+buttonRatio.toFixed(2)+':1。'+(textRatio<4.5?'正文读数低于4.5:1，试着调深或调浅文字。':'这两组读数不代表整页无障碍达标。')+'按钮文字自动选择深浅。'}
        </p>}
      </fieldset>
      {controls.filter(control => !embed || control.key === 'type').map(control => <Fragment key={control.key}>
        {control.key === 'graphic' && spacing}
        {control.key === 'themeChoice' && motion}
        <div className="lab-control-group" data-control={control.key}>
        <Select id={control.key === 'themeChoice' ? 'sample-theme' : `${control.key}-choice`} label={control.label} options={control.options} value={String(state[control.key as keyof typeof state] ?? 'reference')} onValueChange={value => onChange(control.key,value)} />
        {!embed && <p className="muted small">{control.description}</p>}
        {control.key === 'themeChoice' && <><p className="muted small" id="theme-note" role="status">{themeNote}</p><p className="muted small">{soundNote}</p></>}
        </div>
      </Fragment>)}
      {embed && spacing}
    </div>
  );
}
