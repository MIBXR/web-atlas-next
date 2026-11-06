import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function walkMd(sourceRoot, relative, files) {
  const absolute = path.join(sourceRoot, relative);
  if (!fs.existsSync(absolute)) return;
  for (const item of fs.readdirSync(absolute, {withFileTypes:true})) {
    if (item.name === 'node_modules' || item.name === '.git') continue;
    const child = relative + '/' + item.name;
    if (item.isDirectory() || item.isSymbolicLink() && fs.statSync(path.join(sourceRoot, child)).isDirectory()) walkMd(sourceRoot, child, files);
    else if (item.name.toLowerCase().endsWith('.md')) files.push(child);
  }
}

function docTitle(text, file) {
  let body = text.replace(/^[﻿​-‍⁠]+/, '').replace(/\r\n?/g, '\n');
  const front = {};
  const fm = /^---\n([\s\S]*?)\n---\n?/.exec(body);
  if (fm) {
    body = body.slice(fm[0].length);
    for (const line of fm[1].split('\n')) {
      const match = /^(title|name):\s*(.+)$/.exec(line);
      if (match) front[match[1]] = match[2].replace(/^["']|["']$/g, '').trim();
    }
  }
  const h1 = /^#\s+(.+?)\s*#*\s*$/m.exec(body)?.[1];
  let title = h1 ?? front.title ?? front.name ?? path.basename(file).replace(/\.md$/i, '');
  title = title.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/<[^>]+>/g, '').replace(/[*`]/g, '').trim();
  return title || path.basename(file);
}

function groupOf(relative, labels) {
  const rules = labels.groups.path;
  if (rules[relative]) return rules[relative];
  if (relative.startsWith('demos/cases/')) return '案例复刻与许可';
  if (relative.startsWith('demos/materials/')) return '素材原文';
  let best = '';
  for (const key of Object.keys(rules)) if (key.endsWith('/') && relative.startsWith(key) && key.length > best.length) best = key;
  return best ? rules[best] : '其他';
}

export function documentCatalog(sourceRoot = root, labels = JSON.parse(fs.readFileSync(path.join(sourceRoot, 'site/labels.json'), 'utf8'))) {
  const files = [];
  for (const top of ['docs', 'prompts', 'demos']) walkMd(sourceRoot, top, files);
  const docs = files.map(relative => {
    const file = relative.replace(/^\//, '');
    return {path:file, title:docTitle(fs.readFileSync(path.join(sourceRoot, file), 'utf8'), file), group:groupOf(file, labels), hidden:file.startsWith('demos/') || undefined};
  });
  const collator = new Intl.Collator('zh-CN');
  const pinned = ['docs/guide.md', 'docs/agent.md'];
  const rank = file => { const index = pinned.indexOf(file); return index < 0 ? pinned.length : index; };
  return docs.sort((a, b) => rank(a.path) - rank(b.path) || collator.compare(a.title, b.title) || a.path.localeCompare(b.path));
}

export function buildDocuments() {
  const documents = documentCatalog();
  fs.writeFileSync(path.join(root, 'data/docs.json'), JSON.stringify(documents, null, 2) + '\n');
  return documents;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) console.log(`Built ${buildDocuments().length} public Markdown documents.`);
