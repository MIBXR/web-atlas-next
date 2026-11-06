import { useEffect, useRef, useState } from "react";
import { Select } from "@/registry/components/select/select";
import { CodeBlock } from "@/registry/components/code-block/code-block";
import { config } from "@/core/lab/config";
import { fontNames, labels, names, shapeNames, type Group, type SchemeId } from "@/core/lab/data";
import { borrow, type Choice, type LabModel } from "@/core/lab/state";
import { ElementControls } from "./ElementControls";
import { Sample } from "./Sample";

export function CoordinationLab({ model, setModel, systemDark, reducedMotion, embed, onScheme, onReference, onChange }: {
  model: LabModel; setModel: (value: LabModel) => void; systemDark: boolean; reducedMotion: boolean; embed: boolean;
  onScheme: (id: SchemeId) => void; onReference: (id: string) => void; onChange: (key: Choice, value: string | number | boolean) => void;
}) {
  const [group,setGroup] = useState<Group>('palette'), [scheme,setScheme] = useState<SchemeId>('friendly');
  const root = useRef<HTMLDivElement>(null);
  const json = JSON.stringify(config(model.state,model.groupOrigins,model.referenceEntry,systemDark,reducedMotion),null,2);
  useEffect(() => {
    if(!embed || window.parent===window)return;
    let reportedHeight=0, reportedWidth=0;
    const report = () => {
      const height=Math.ceil(root.current!.getBoundingClientRect().height), width=Math.round(window.innerWidth);
      if(!Number.isFinite(height)||height<=0||!Number.isFinite(width)||width<=0||(height===reportedHeight&&width===reportedWidth))return;
      reportedHeight=height; reportedWidth=width;
      window.parent.postMessage({type:'design-atlas:lab-height',height,width},location.origin);
    };
    const observer=new ResizeObserver(report); observer.observe(root.current!); report();
    return () => observer.disconnect();
  },[embed]);
  return (
    <div className="lab-coordination" ref={root} data-embed={embed || undefined}>
      {!embed && <p className="prose">完整方案会同时改变<strong>配色、字体、形状、留白</strong>。再单独借用一项，观察它与其余元素的关系。混合不一定错误，这里不作审美打分。</p>}
      <div className="lab-controls">
        <div className="lab-scheme"><Select id="scheme-choice" label="选择完整协调方案" options={[
          {value:'paper',label:embed?'纸页':'纸页 安静 · 阅读'},
          {value:'friendly',label:embed?'亲和':'亲和 轻松 · 上手'},
          {value:'tool',label:embed?'工具':'工具 直接 · 扫描'},
        ]} value={model.schemeId} onValueChange={value => onScheme(value as SchemeId)} /></div>
        {!embed && <div className="lab-borrow">
          <Select id="override-element" label="只替换一项" options={Object.entries(labels).map(([value,label]) => ({value,label}))} value={group} onValueChange={value => setGroup(value as Group)} />
          <Select id="borrow-scheme" label="借用自" options={(['friendly','tool','paper'] as const).map(value => ({value,label:names[value]+'方案'}))} value={scheme} onValueChange={value => setScheme(value as SchemeId)} />
          <button className="pill-button" id="apply-one" type="button" onClick={() => setModel(borrow(model,group,scheme))}>应用单项</button>
        </div>}
      </div>
      <div className="lab-workspace">
        <ElementControls model={model} embed={embed} systemDark={systemDark} onChange={onChange} onReference={onReference} />
        <div className="lab-experiment">
          <div className="lab-demo-label"><span>虚构产品 / 相同内容</span><span id="current-plan">{model.plan}</span></div>
          <Sample state={model.state} systemDark={systemDark} reducedMotion={reducedMotion} />
        </div>
      </div>
      <div className="lab-observation" aria-live="polite"><p id="change-note"><strong>{model.title}：</strong>{model.copy}</p>{!embed && <p className="muted small" id="observe-note">{model.question}</p>}</div>
      {!embed && <>
        <dl className="lab-token-summary" aria-label="当前元素配置">
          {[
            ['配色',model.groupOrigins.palette],['字体',fontNames[model.state.type]+' · '+model.groupOrigins.type],
            ['形状',shapeNames[model.state.shape]],['留白',model.state.space+'px · '+model.groupOrigins.space],
          ].map(([label,value]) => <div key={label}><dt className="muted">{label}</dt><dd>{value}</dd></div>)}
        </dl>
        <div className="lab-configuration-tools">
          <p className="muted small">配置与 Prompt 对应协调实验的实际选择；下方独立机制示意不纳入导出。</p>
          <CodeBlock code={json} language="json" maxLines={8} />
        </div>
      </>}
    </div>
  );
}
