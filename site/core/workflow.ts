export interface WorkflowEntry {
  id: string;
  title: string;
  category: string;
  country?: string;
  summary: string;
  paths: {bundle: string};
}
export interface WorkflowCatalog {
  schemaVersion: number;
  entryCount: number;
  entries: WorkflowEntry[];
  patterns?: {patternCount: number};
  source?: {baseUrl: string; commit: string};
}

export function findWorkflowEntries(catalog: WorkflowCatalog, query: string) {
  const terms=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return catalog.entries.filter(entry => terms.every(term => JSON.stringify(entry).toLowerCase().includes(term)));
}

export function agentEntryText(catalog: WorkflowCatalog, entry: WorkflowEntry, currentUrl: string) {
  const source=catalog.source;
  const bundleURL=source?new URL(entry.paths.bundle,source.baseUrl).href:new URL(entry.paths.bundle,currentUrl).href;
  const sourceHint=source?`原始文件基址：${source.baseUrl}\n对 files 中每个 path 使用这个基址获取原始文件；网页播放文件经过部署转换。此入口对应当前网页发布版本：${source.commit}。若要探索上游最新案例，请调用 web-atlas skill 开始新会话。`:'通过 web-atlas skill 开始会话，解析上游最新完整提交 SHA，并用本次会话的同一提交读取原始文件。';
  return `请读取 Web Atlas 案例 ${entry.id} 的完整上下文：\n${bundleURL}\n先结合我的真实需求阅读 entry、webNotes（网页右侧说明）和 documents，再按 files 取用源码。保留原始约束、来源和复现边界。\n${sourceHint}`;
}

export function workflowVersion(catalog: WorkflowCatalog) {
  return catalog.source?.commit ? `版本 ${catalog.source.commit.slice(0, 12)}` : '';
}

export const skillExample = "$web-atlas 我还没决定网站的设计方向，先介绍有哪些案例。\n接下来根据我的产品、用户和页面任务，和我一起筛选几个候选。\n确定方向后，自动读取完整说明、文档和源码，再完成实现。\n也可以单独探索设计巧思：给我一个清晰的页面基础，\n再选择来自不同案例的悬停反馈和滚动叙事，说明各自职责与组合约束。";

export const cliExample = "node scripts/atlas.mjs search \"深色 产品\" --limit 3\nnode scripts/atlas.mjs show linear-workflow\nnode scripts/atlas.mjs show linear-workflow --source\nnode scripts/atlas.mjs export linear-workflow --out ../linear-reference";

export const materialExample = "python ATLAS_SCRIPT --session SESSION_FILE material-search \"渐变\"\npython ATLAS_SCRIPT --session SESSION_FILE material-show shaders --source\npython ATLAS_SCRIPT --session SESSION_FILE material-export shaders --out NEW_DIRECTORY";
