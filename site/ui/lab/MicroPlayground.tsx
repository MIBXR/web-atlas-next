import { useState } from 'react';
import SegmentedControl from '@/registry/components/segmented-control/segmented-control';
import { microStatus, selectionStatus } from '@/core/lab/playground/data';

export function MicroPlayground({status}: {status: (text: string) => void}) {
  const [feedback,setFeedback]=useState('lift'), [active,setActive]=useState(false), [selected,setSelected]=useState(false);
  function activate(on: boolean) { setActive(on); status(microStatus(on)); }
  return <>
    <div className="lab-pg-stage lab-pg-micro" data-feedback={feedback}>
      <span className="lab-pg-eyebrow">A RESPONSE TO YOUR ACTION</span>
      <button className="pill-button lab-pg-action" type="button" data-active={active || undefined} aria-pressed={selected} onPointerEnter={() => activate(true)} onPointerLeave={() => activate(false)} onFocus={() => activate(true)} onBlur={() => activate(false)} onClick={() => { setSelected(!selected); status(selectionStatus(!selected)); }}>选择这条灵感</button>
      <p>悬停或聚焦，观察按钮浮起；离开后回落。</p>
    </div>
    <div className="lab-pg-controls">
      <div className="lab-control-group"><p className="lab-control-label">局部反馈</p><SegmentedControl className="lab-segments" label="局部反馈" options={[{value:'lift',label:'浮起'},{value:'shape',label:'形状变化'}]} value={feedback} onValueChange={value => { setFeedback(value); activate(false); }} /></div>
      <div className="lab-pg-actions"><button className="pill-button" type="button" onClick={() => activate(true)}>模拟进入</button><button className="pill-button" type="button" onClick={() => activate(false)}>模拟离开</button></div>
    </div>
  </>;
}
