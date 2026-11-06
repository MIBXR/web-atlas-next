import { useState } from 'react';
import SegmentedControl from '@/registry/components/segmented-control/segmented-control';
import { Slider } from '@/registry/components/slider/slider';
import { highlightStatus, radiusStatus } from '@/core/lab/playground/data';

export function VisualPlayground({status}: {status: (text: string) => void}) {
  const [highlight,setHighlight]=useState('color'), [radius,setRadius]=useState(16);
  return <>
    <div className="lab-pg-stage lab-pg-visual" data-highlight={highlight}>
      <span className="lab-pg-eyebrow">A SMALL OBSERVATION</span><h3>让重点，<br /><span className="lab-pg-highlight">一眼可见。</span></h3>
      <div className="lab-pg-visual-card" style={{borderRadius:radius}}><span className="lab-pg-geometry" aria-hidden="true" /><strong>今天的发现</strong><p>颜色标记重点，形状组织信息。</p></div>
    </div>
    <div className="lab-pg-controls">
      <div className="lab-control-group"><p className="lab-control-label">强调方式</p><SegmentedControl className="lab-segments" label="强调方式" options={[{value:'color',label:'强调色'},{value:'underline',label:'下划线'},{value:'none',label:'无强调'}]} value={highlight} onValueChange={value => { setHighlight(value); status(highlightStatus); }} /></div>
      <Slider label="容器圆角" min={0} max={32} value={radius} format={value => `${value}px`} onValueChange={value => { setRadius(value); status(radiusStatus(value)); }} />
    </div>
  </>;
}
