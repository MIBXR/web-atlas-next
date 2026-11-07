import { Button } from "@/registry/components/button/button";
import { useEffect, useRef, useState } from 'react';
import { Music2 } from 'lucide-react';
import { Switch } from '@/registry/components/switch/switch';
import { createSoundFeedback } from '@/core/lab/playground/sound';

export function SoundPlayground({status}: {status: (text: string) => void}) {
  const [enabled,setEnabled]=useState(false);
  const sound=useRef<ReturnType<typeof createSoundFeedback>>(null);
  useEffect(() => { const controller=createSoundFeedback(status,setEnabled); sound.current=controller; return () => controller.dispose(); },[status]);
  return <>
    <div className="lab-pg-stage lab-pg-sound"><span className="lab-pg-eyebrow">SOUND FOLLOWS INTENT</span><Music2 className="lab-pg-sound-mark" aria-hidden="true" /><h3>听见确认。</h3><p>操作短音补充反馈，文字始终说明结果。</p><Button variant="secondary" size="sm"  type="button" data-note onClick={() => sound.current!.confirm()}>确认一次操作</Button></div>
    <div className="lab-pg-controls"><Switch label={enabled?'关闭示意声音':'启用示意声音'} checked={enabled} onCheckedChange={() => void sound.current!.toggle()} /><span className="muted small">默认静音 · 合成短音 · 无配乐</span></div>
  </>;
}
