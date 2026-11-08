import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildAgent} from './build-agent.mjs';
import {assertRepositoryLineEndings} from './check-line-endings.mjs';
import {documentCatalog} from './build-documents.mjs';
import {serializeAssetSources} from './build-asset-sources.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
assertRepositoryLineEndings(root);
const entries = fs.readdirSync(path.join(root,'entries/cases')).filter(x=>x.endsWith('.json')).map(x=>JSON.parse(fs.readFileSync(path.join(root,'entries/cases',x),'utf8'))).sort((a,b)=>a.order-b.order);
const patternCount = fs.readdirSync(path.join(root,'entries/patterns')).filter(name=>name.endsWith('.json')).length;
const materialCount = fs.readdirSync(path.join(root,'entries/materials')).filter(name=>name.endsWith('.json')).length;
const readmePath = path.join(root,'README.md');
const readme = fs.readFileSync(readmePath,'utf8');
const counts = `<!-- atlas-counts:start -->\n**${entries.length} 个案例**　·　**${patternCount} 个巧思**　·　**${materialCount} 个素材**\n<!-- atlas-counts:end -->`;
if(!readme.includes('<!-- atlas-counts:start -->') || !readme.includes('<!-- atlas-counts:end -->'))throw new Error('README case count markers are missing');
fs.writeFileSync(readmePath,readme.replace(/<!-- atlas-counts:start -->[\s\S]*?<!-- atlas-counts:end -->/,counts),'utf8');
fs.rmSync(path.join(root, 'prompts'), {recursive:true, force:true});
fs.mkdirSync(path.join(root, 'prompts/cases'), {recursive:true});
for (const entry of entries) {
  const prompt = `# ${entry.title} · 复用 Prompt\n\n由 [结构化案例](../../entries/cases/${entry.id}.json) 自动生成。参考观察与具体边界见 [调研](../../${entry.research})。\n\n## 正向 Prompt\n\n${entry.prompt}\n\n## 负向约束\n\n${entry.negativePrompt}\n\n## 制作约束\n\n${entry.constraints.map(item => '- ' + item).join('\n')}\n\n## 检查方法\n\n${entry.exercise}\n\n[查看 Demo](../../${entry.demo}) · [返回案例库](https://web-atlas-library.mibxranime.chatgpt.site/#/cases/${entry.id})\n`;
  fs.writeFileSync(path.join(root, 'prompts/cases', entry.id + '.md'), prompt.replace(/https:\/\/www\.metmuseum\.org\/en(?=[\u3400-\u9fff])/g, '[$&]($&)'), 'utf8');
}
for (const kind of ['patterns', 'materials']) {
  const directory = path.join(root, 'prompts', kind);
  fs.mkdirSync(directory, {recursive:true});
  for (const name of fs.readdirSync(path.join(root, 'entries', kind)).filter(name => name.endsWith('.json'))) {
    const entry = JSON.parse(fs.readFileSync(path.join(root, 'entries', kind, name), 'utf8'));
    if (!entry.prompt) continue;
    const prompt = `# ${entry.title} · 复用 Prompt\n\n[结构化条目](../../entries/${kind}/${entry.id}.json)\n\n${entry.prompt}\n\n## 制作约束\n\n${entry.constraints.map(item => '- ' + item).join('\n')}\n`;
    fs.writeFileSync(path.join(directory, entry.id + '.md'), prompt, 'utf8');
  }
}
fs.mkdirSync(path.join(root, 'docs/cases'), {recursive:true});
const clean = value => String(value).replace(/\|/g, '\\|').replace(/\n/g, ' ');
const rows = entries.map(entry => {
  const sourceLink = `[原始案例](${entry.referenceUrl || entry.sources[0]?.url})`;
  const label = entry.category === '示范作品' ? '示范页面复现' : entry.studyScope === 'visual-adaptation' ? '官方影像网页转译' : entry.implementation === 'reference-study' ? '原站局部复现' : '经典构成练习';
  return `| ${entry.order} | [${clean(entry.title)}](https://web-atlas-library.mibxranime.chatgpt.site/#/cases/${entry.id}) | ${clean(entry.category)} | ${clean(entry.country || '未确认')} | ${label} | ${entry.capturedAt || '—'} | ${sourceLink} · [研究](${path.posix.relative('docs/cases',entry.research)}) · [Prompt数据](../../entries/cases/${entry.id}.json) · [Demo](../../${entry.demo}) |`;
});
fs.writeFileSync(path.join(root,'docs/cases','README.md'), `# 案例与代码索引\n\n由 entries/cases/ 自动生成，共 ${entries.length} 项。真实网站案例按原始网址与采集日期固定归档。国家/地区按具体机构与创作来源收录。详细比较见 [国别案例比较](../country-comparison.md)。\n\n| 顺序 | 案例 | 分类 | 国家/地区 | 类型 | 采集日期 | 可查询资料 |\n| --- | --- | --- | --- | --- | --- | --- |\n${rows.join('\n')}\n`, 'utf8');
fs.mkdirSync(path.join(root, 'data'), {recursive:true});
const sourcesPath = path.join(root, 'data/asset-sources.js');
if (!fs.existsSync(sourcesPath)) fs.writeFileSync(sourcesPath, serializeAssetSources({assets:{}}), 'utf8');
const {catalog} = buildAgent();
const labels = JSON.parse(fs.readFileSync(path.join(root, 'site/labels.json'), 'utf8'));
const exists = relative => fs.existsSync(path.join(root, relative));
for (const kind of ['cases', 'patterns', 'materials']) {
  const directory = path.join(root, 'entries', kind);
  const entries = fs.readdirSync(directory).filter(name => name.endsWith('.json')).map(name => JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'))).sort((a, b) => a.order - b.order);
  for (const entry of entries) {
    const demo = `demos/${kind}/${entry.id}/`;
    entry.$ = {
      preview:entry.preview,
      research:entry.research ?? (exists(`docs/${kind}/${entry.id}.md`) ? `docs/${kind}/${entry.id}.md` : undefined),
      fidelity:entry.fidelity,
      licenses:exists(demo + 'LICENSES.md') ? demo + 'LICENSES.md' : undefined,
      prompt:exists(`prompts/${kind}/${entry.id}.md`) ? `prompts/${kind}/${entry.id}.md` : undefined,
      agent:exists(`agent/${kind}/${entry.id}.json`) ? `agent/${kind}/${entry.id}.json` : undefined,
    };
    if (entry.snapshotPath && entry.snapshotEntry) entry.$.snapshot = entry.snapshotPath + entry.snapshotEntry;
  }
  fs.writeFileSync(path.join(root, 'data', kind + '.json'), JSON.stringify(entries, null, 2) + '\n', 'utf8');
}
const docs = documentCatalog(root, labels);
fs.writeFileSync(path.join(root, 'data/docs.json'), JSON.stringify(docs, null, 2) + '\n', 'utf8');
fs.copyFileSync(path.join(root, 'site/labels.json'), path.join(root, 'data/labels.json'));
console.log(`Built ${catalog.entryCount} cases, ${catalog.patterns.patternCount} patterns, ${catalog.materials.materialCount} materials and ${docs.length} documents with Agent bundles.`);
