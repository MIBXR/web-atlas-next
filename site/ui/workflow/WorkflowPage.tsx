import { useEffect, useRef, useState } from 'react';
import { SearchField } from '@/registry/components/search-field/search-field';
import { Skeleton } from '@/registry/components/skeleton/skeleton';
import { EmptyState } from '@/registry/components/empty-state/empty-state';
import { CopyButton } from '@/registry/components/copy-button/copy-button';
import { Dialog, DialogContent } from '@/registry/components/dialog/dialog';
import { CodeBlock } from '@/registry/components/code-block/code-block';
import { agentEntryText, cliExample, findWorkflowEntries, materialExample, skillExample, workflowVersion, type WorkflowCatalog } from '@/core/workflow';
import { href, useRoute } from '@/core/router';
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
    <header className="page-head"><div><h1>Agent 工作流</h1><p className="muted">按真实需求找完整案例，也能单独检索设计巧思，组合适合项目的机制。取得 Prompt、研究、复现边界和源码，据此完成实现。</p>
      {catalog && <p className="muted small wf-stats">{catalog.entryCount} 个案例 · {catalog.patterns?.patternCount ?? 0} 条设计巧思{workflowVersion(catalog) && ` · ${workflowVersion(catalog)}`}</p>}
    </div></header>
    <div className="detail-sections">
      <Section id="start" title="先探索，再围绕需求选方向">
        <Prose text="skill 提供选型工作流与获取脚本，完整案例保存在 Web Atlas。新任务读取最新目录，讨论和取材使用同一版本。可以先问“有哪些案例”。" />
        <p><a className="pill-button" href="https://github.com/MIBXR/mibxr-skills/tree/main/skills/web-atlas" target="_blank" rel="noopener noreferrer">查看 skill 与获取脚本<ExternalLink /></a></p>
        <p className="muted small">安装 skill 后，可以这样开始</p>
        <CodeLine text={skillExample} label="复制调用示例" onCopyError={() => setFallback(skillExample)} />
      </Section>
      <Section id="patterns" title="按机制取材，跨案例组合">
        <p className="prose">按视觉、微动效、页面动效、声音、内容与组织筛选可独立迁移的机制；还可结合功能用途和来源案例继续筛选。每条巧思保留触发、效果、约束和来源。skill 的 <code>pattern-search</code>、<code>pattern-show</code> 与 <code>pattern-export</code> 使用同一会话版本，<code>pattern-search --type page-motion</code> 可筛选页面动效，自动取得来源案例与源码。先分配基础、辅助和强调的职责，再检查动效与输入冲突。</p>
        <div className="wf-actions"><a className="pill-button" href={href('/patterns')}>浏览设计巧思</a><a className="pill-button" href="agent/patterns/index.json">查看巧思索引 JSON</a></div>
      </Section>
      <Section id="cases" title="探索案例，也可以直接取材" aside={<a href="agent/catalog.json">查看结构化索引 JSON</a>}>
        <Prose text="搜索品牌、布局、场景或交互关键词。“案例包”是 JSON 文件，包含完整设计资料、网页右侧说明、文档原文，以及源码和媒体的文件路径。已经选好案例时，可以直接复制入口。" />
        <div className="search-wrap"><SearchField id="agent-query" label="搜索 Agent 案例" placeholder="试试 Linear、网格、产品、手绘…" value={query} onValueChange={setQuery} /></div>
        {!state && <Skeleton lines={5} label="正在读取案例索引…" />}
        {state && 'error' in state && <EmptyState title={state.error} description="" />}
        {catalog && <><p className="muted small" id="agent-status" role="status">{entries.length} / {catalog.entryCount} 个案例 · 关键词筛选</p>
          <div className="card-list wf-results">{entries.map(entry => {
            const text=agentEntryText(catalog,entry,location.href);
            return <article className="card card-list" key={entry.id} data-case={entry.id}>
              <div className="card-body"><p className="card-sub">{entry.category} · {entry.country || '未确认'}</p><h3>{entry.title}</h3><p className="card-summary">{entry.summary}</p><code>{entry.id}</code></div>
              <div className="card-actions"><a className="pill-button" href={href(`/cases/${entry.id}`)}>预览案例</a><a className="pill-button" href={entry.paths.bundle} download={`${entry.id}-context.json`}>下载案例包 JSON</a><CopyButton value={text} label="复制 Agent 入口" onCopyError={() => setFallback(text)} /></div>
            </article>;
          })}</div>
        </>}
      </Section>
      <Section id="local" title="仓库里也能直接运行">
        <Prose text="使用 Node.js 即可运行，无需安装依赖。完整导出保留 Demo、共用模块、字体和媒体的相对路径；大型品牌案例可能包含影片。" />
        <p><a className="pill-button" href={href('/docs',{path:'docs/agent.md'})}>读取完整工作流与数据契约</a></p>
        <CodeLine text={cliExample} label="复制命令" onCopyError={() => setFallback(cliExample)} />
      </Section>
      <Section id="context" title="带着依据适配你的场景"><div className="wf-context">
        <p className="prose"><strong>保留设计机制</strong><br />读取布局、视觉层级、状态和触发关系，选择能说明当前产品的表达方式。</p>
        <p className="prose"><strong>替换真实内容</strong><br />用自己的品牌、文案和有使用权的素材，依据真实功能调整交互。</p>
        <p className="prose"><strong>验证当前成果</strong><br />检查桌面与手机、键盘、减少动态和资源加载，保留来源中近似与未验证的标记。</p>
      </div></Section>
      <Section id="material-workflow" title="取得组件与内容素材">
        <p className="prose">在<a href={href('/materials')}>素材库</a>操作代表性样例，再让 Skill 读取使用说明、版本、许可证与完整 Demo。案例、巧思和素材共用同一取材会话。</p>
        <pre className="wf-material-code">{materialExample}</pre>
        <p className="prose">直接读取 <a href="agent/materials/index.json">素材目录</a>，或<a href="agent/materials/shaders.json">下载 Shaders 资料包</a>。更多组件与作者预设请到来源查看；浏览器不支持 WebGPU 时，Demo 显示明确标注的静态参考。</p>
      </Section>
    </div>
    <Dialog open={fallback!==undefined} onOpenChange={open => { if(!open)setFallback(undefined); }}><DialogContent title="手动复制的 Agent 入口" description="已显示并选中文字，请按 Ctrl+C 复制；按 Escape 收起。" onOpenAutoFocus={event => {
      event.preventDefault(); requestAnimationFrame(() => { const pre=code.current?.querySelector('pre'), text=pre?.querySelector('code'); pre?.focus(); if(text)document.getSelection()?.selectAllChildren(text); });
    }}><div ref={code}><CodeBlock code={fallback ?? ''} /></div></DialogContent></Dialog>
  </div>;
}
