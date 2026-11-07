import { LinkButton } from "@/ui/LinkButton";
import { useEffect, useRef, useState } from 'react';
import { SearchField } from '@/registry/components/search-field/search-field';
import { Skeleton } from '@/registry/components/skeleton/skeleton';
import { EmptyState } from '@/registry/components/empty-state/empty-state';
import { CopyButton } from '@/ui/CopyButton';
import { Dialog, DialogContent } from '@/registry/components/dialog/dialog';
import { CodeBlock } from '@/registry/components/code-block/code-block';
import { agentEntryText, cliExample, findWorkflowEntries, materialExample, skillExample, workflowVersion, type WorkflowCatalog } from '@/core/workflow';
import { href, useRoute } from '@/core/router';
import { openText } from '@/core/open-text';
import { CodeLine, Prose, Section } from '../blocks';
import { ExternalLink } from '../icons';
import './workflow.css';

export function WorkflowPage() {
  const route=useRoute(), selected=route.params.get('case');
  const [state,setState]=useState<{catalog: WorkflowCatalog} | {error: string} | null>(null);
  const [query,setQuery]=useState(''), [fallback,setFallback]=useState<string>();
  const code=useRef<HTMLDivElement>(null);
  const catalog=state && 'catalog' in state?state.catalog:null;
  const entries=catalog?findWorkflowEntries(catalog,query):[];
  useEffect(() => {
    let live=true;
    fetch('agent/catalog.json').then(response => { if(!response.ok)throw new Error('HTTP '+response.status); return response.json() as Promise<WorkflowCatalog>; })
      .then(catalog => { if(catalog.schemaVersion!==1 || !Array.isArray(catalog.entries))throw new Error('不支持的索引版本'); if(live)setState({catalog}); })
      .catch(error => { if(live)setState({error:`索引加载失败：${error.message}。请刷新重试，或从 GitHub 仓库读取。`}); });
    return () => { live=false; };
  },[]);
  useEffect(() => { if(catalog?.entries.some(entry => entry.id===selected))setQuery(selected!); },[catalog,selected]);
  return <div className="page wf-page">
    <header className="page-head"><div><h1>Agent 工作流</h1><p className="muted">检索完整案例或独立设计巧思，取得 Prompt、研究、复现边界和源码。</p>
      {catalog && <p className="muted small wf-stats">{catalog.entryCount} 个案例 · {catalog.patterns?.patternCount ?? 0} 条设计巧思{workflowVersion(catalog) && ` · ${workflowVersion(catalog)}`}</p>}
    </div></header>
    <div className="detail-sections">
      <Section id="start" title="案例选型与 Skill">
        <Prose text="skill 提供案例选型工作流与获取脚本，新任务读取 Web Atlas 最新目录。讨论和取材使用同一版本。" />
        <p><LinkButton variant="secondary" size="sm"  href="https://github.com/MIBXR/mibxr-skills/tree/main/skills/web-atlas" target="_blank" rel="noopener noreferrer">查看 skill 与获取脚本<ExternalLink /></LinkButton></p>
        <p className="muted small">Skill 调用示例</p>
        <CodeLine text={skillExample} label="复制调用示例" onCopyError={() => setFallback(skillExample)} />
      </Section>
      <Section id="patterns" title="设计巧思检索">
        <p className="prose">按体验类型、功能用途和来源案例筛选独立机制，查看触发、效果、约束与来源。skill 的 <code>pattern-search</code>、<code>pattern-show</code> 与 <code>pattern-export</code> 使用同一会话版本，可用 <code>pattern-search --type page-motion</code> 筛选页面动效并取得来源案例与源码。</p>
        <div className="wf-actions"><LinkButton variant="secondary" size="sm"  href={href('/patterns')}>浏览设计巧思</LinkButton><LinkButton variant="secondary" size="sm"  href="agent/patterns/index.json" onClick={openText}>查看巧思索引 JSON</LinkButton></div>
      </Section>
      <Section id="cases" title="案例检索与取材" aside={<a href="agent/catalog.json" onClick={openText}>查看结构化索引 JSON</a>}>
        <Prose text="按品牌、布局、场景或交互关键词搜索案例，可预览、下载 JSON 案例包或复制 Agent 入口。案例包包含设计资料、页面说明、文档原文，以及源码和媒体路径。" />
        <div className="search-wrap"><SearchField id="agent-query" label="搜索 Agent 案例" placeholder="试试 Linear、网格、产品、手绘…" value={query} onValueChange={setQuery} /></div>
        {!state && <Skeleton lines={5} label="正在读取案例索引…" />}
        {state && 'error' in state && <EmptyState title={state.error} description="" />}
        {catalog && <><p className="muted small" id="agent-status" role="status">{entries.length} / {catalog.entryCount} 个案例 · 关键词筛选</p>
          <div className="card-list wf-results">{entries.map(entry => {
            const text=agentEntryText(catalog,entry,location.href);
            return <article className="card card-list" key={entry.id} data-case={entry.id}>
              <div className="card-body"><p className="card-sub">{entry.category} · {entry.country || '未确认'}</p><h3>{entry.title}</h3><p className="card-summary">{entry.summary}</p><code>{entry.id}</code></div>
              <div className="card-actions"><LinkButton variant="secondary" size="sm"  href={href(`/cases/${entry.id}`)}>预览案例</LinkButton><LinkButton variant="secondary" size="sm"  href={entry.paths.bundle} download={`${entry.id}-context.json`}>下载案例包 JSON</LinkButton><CopyButton value={text} label="复制 Agent 入口" onCopyError={() => setFallback(text)} /></div>
            </article>;
          })}</div>
        </>}
      </Section>
      <Section id="local" title="本地取材命令">
        <Prose text="使用 Node.js 即可运行，无需安装依赖。完整导出保留 Demo、共用模块、字体和媒体的相对路径；大型品牌案例可能包含影片。" />
        <p><LinkButton variant="secondary" size="sm"  href={href('/docs',{path:'docs/agent.md'})}>读取完整工作流与数据契约</LinkButton></p>
        <CodeLine text={cliExample} label="复制命令" onCopyError={() => setFallback(cliExample)} />
      </Section>
      <Section id="context" title="项目适配"><div className="wf-context">
        <p className="prose"><strong>设计机制</strong><br />读取布局、视觉层级、状态和触发关系，选择能说明当前产品的表达方式。</p>
        <p className="prose"><strong>项目内容</strong><br />用自己的品牌、文案和有使用权的素材，依据真实功能调整交互。</p>
        <p className="prose"><strong>实现验收</strong><br />检查桌面与手机、键盘、减少动态和资源加载，保留来源中近似与未验证的标记。</p>
      </div></Section>
      <Section id="material-workflow" title="组件与内容素材">
        <p className="prose">在<a href={href('/materials')}>素材库</a>操作样例，通过 Skill 读取使用说明、版本、许可证与完整 Demo。案例、巧思和素材共用同一取材会话。</p>
        <pre className="wf-material-code">{materialExample}</pre>
        <p className="prose">直接读取 <a href="agent/materials/index.json" onClick={openText}>素材目录</a>，或<a href="agent/materials/shaders.json" onClick={openText}>下载 Shaders 资料包</a>。更多组件与作者预设请到来源查看；浏览器不支持 WebGPU 时，Demo 显示明确标注的静态参考。</p>
      </Section>
    </div>
    <Dialog open={fallback!==undefined} onOpenChange={open => { if(!open)setFallback(undefined); }}><DialogContent title="手动复制的 Agent 入口" description="已显示并选中文字，请按 Ctrl+C 复制；按 Escape 收起。" onOpenAutoFocus={event => {
      event.preventDefault(); requestAnimationFrame(() => { const pre=code.current?.querySelector('pre'), text=pre?.querySelector('code'); pre?.focus(); if(text)document.getSelection()?.selectAllChildren(text); });
    }}><div ref={code}><CodeBlock code={fallback ?? ''} /></div></DialogContent></Dialog>
  </div>;
}
