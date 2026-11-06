import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadMaterials} from './build-materials.mjs';
import {buildAssetSources, contentPaths, serializeAssetSources} from './build-asset-sources.mjs';
import {assertRepositoryLineEndings} from './check-line-endings.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.resolve(root, 'dist');
const localOrigin = 'https://design-atlas.invalid';

function localReference(value, documentPath) {
  const trimmed = value.trim().replace(/&amp;/g, '&');
  if (!trimmed || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(trimmed)) return null;
  try {
    const url = new URL(trimmed, localOrigin + '/' + documentPath);
    if (url.origin !== localOrigin) return null;
    return {canonical:decodeURIComponent(url.pathname.slice(1)), suffix:url.search + url.hash};
  } catch { return null; }
}

export function rewriteAssetURL(value, documentPath, sources) {
  const reference = localReference(value, documentPath);
  const asset = reference && sources.assets[reference.canonical];
  return asset ? asset.url + reference.suffix : value;
}

export function rewriteCSS(text, documentPath, sources) {
  return text.replace(/url\(\s*(?:(["'])((?:\\.|(?!\1)[\s\S])*?)\1|([^"')]*))\s*\)/gi, (whole, quote, quoted, bare) => {
    const value = quote ? quoted : bare.trim();
    const rewritten = rewriteAssetURL(value, documentPath, sources);
    return rewritten === value ? whole : `url(${quote || '"'}${rewritten}${quote || '"'})`;
  });
}

// URL/descriptor boundaries preserve data URLs, which can contain commas.
export function rewriteSrcset(text, documentPath, sources) {
  let position = 0;
  let last = 0;
  let result = '';
  while (position < text.length) {
    while (position < text.length && /[\s,]/.test(text[position])) position++;
    const start = position;
    while (position < text.length && !/\s/.test(text[position])) position++;
    let end = position;
    while (end > start && text[end - 1] === ',') end--;
    if (end > start) {
      result += text.slice(last, start) + rewriteAssetURL(text.slice(start, end), documentPath, sources);
      last = end;
    }
    if (end < position) continue;
    let parentheses = 0;
    while (position < text.length) {
      const character = text[position++];
      if (character === '(') parentheses++;
      if (character === ')') parentheses = Math.max(0, parentheses - 1);
      if (character === ',' && !parentheses) break;
    }
  }
  return result + text.slice(last);
}

function rewriteTag(tag, documentPath, sources) {
  return tag.replace(/(\b(?:srcset|src|poster|href|style)\s*=\s*)(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+))/gi, (whole, prefix, double, single, bare) => {
    const quote = double !== undefined ? '"' : single !== undefined ? "'" : '';
    const value = double ?? single ?? bare;
    const decoded = value.replace(/&(?:amp|quot|apos|lt|gt|#x[\da-f]+|#\d+);/gi, entity => {
      const named = {'&amp;':'&', '&quot;':'"', '&apos;':"'", '&lt;':'<', '&gt;':'>'};
      if (named[entity.toLowerCase()]) return named[entity.toLowerCase()];
      const code = entity[2].toLowerCase() === 'x' ? parseInt(entity.slice(3, -1), 16) : parseInt(entity.slice(2, -1), 10);
      return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : entity;
    });
    const attribute = prefix.trim().split(/\s*=/)[0].toLowerCase();
    const rewritten = attribute === 'style' ? rewriteCSS(decoded, documentPath, sources) : attribute === 'srcset' ? rewriteSrcset(decoded, documentPath, sources) : rewriteAssetURL(decoded, documentPath, sources);
    if (decoded === rewritten) return whole;
    const delimiter = quote || '"';
    const escaped = rewritten.replace(/&/g, '&amp;').replace(delimiter === '"' ? /"/g : /'/g, delimiter === '"' ? '&quot;' : '&#39;');
    return prefix + delimiter + escaped + delimiter;
  });
}

export function rewriteHTML(text, documentPath, sources) {
  return text.replace(/<!--[\s\S]*?-->|<script\b[^>]*>[\s\S]*?<\/script\s*>|<style\b[^>]*>[\s\S]*?<\/style\s*>|<(?:[^>"']|"[^"]*"|'[^']*')+>/gi, token => {
    if (token.startsWith('<!--')) return token;
    if (/^<script\b/i.test(token)) return token.replace(/^<script\b[^>]*>/i, tag => rewriteTag(tag, documentPath, sources));
    if (/^<style\b/i.test(token)) return token.replace(/(^<style\b[^>]*>)([\s\S]*)(<\/style\s*>$)/i, (_, open, css, close) => rewriteTag(open, documentPath, sources) + rewriteCSS(css, documentPath, sources) + close);
    return rewriteTag(token, documentPath, sources);
  });
}

function injectAssets(text, documentPath, assetsMode) {
  const directory = path.posix.dirname(documentPath);
  const relative = name => path.posix.relative(directory === '.' ? '' : directory, name) || name;
  const hasRuntime = /<script\b[^>]*\bsrc\s*=\s*["'][^"']*asset-runtime\.js["']/i.test(text);
  const scripts = hasRuntime ? '' : `<script src="${relative('data/asset-sources.js')}"></script><script src="${relative('site/runtime/asset-runtime.js')}"></script>`;
  const setup = `<script data-atlas-assets>window.AtlasAssetMode=${JSON.stringify(assetsMode === 'github' ? 'github' : 'auto')};</script>${scripts}`;
  if (!/<head\b[^>]*>/i.test(text)) throw new Error('Asset runtime requires a head element: ' + documentPath);
  // Resolve the library theme before asset loading can delay the first paint.
  const head = /<head\b[^>]*>[\s\S]*?<\/head\s*>/i.exec(text)?.[0] || '';
  const themeBoot = /<script src="[^"]*\/theme\.js"><\/script>/i.exec(head)?.[0];
  if (themeBoot) return text.replace(themeBoot, themeBoot + setup);
  return text.replace(/<head\b[^>]*>/i, head => head + setup);
}

function normalizeEncodedAt() {
  const extensions = new Set(['.html', '.htm', '.js', '.mjs', '.css', '.json']);
  function visit(directory) {
    for (const item of fs.readdirSync(directory, {withFileTypes:true})) {
      const filename = path.join(directory, item.name);
      if (item.isDirectory()) visit(filename);
      else if (extensions.has(path.extname(item.name).toLowerCase())) {
        const original = fs.readFileSync(filename, 'utf8');
        const documentPath = path.relative(output, filename).split(path.sep).join('/');
        let text = original.replace(/[^\s"'`()<>]+/g, fragment => {
          if (!/%40/i.test(fragment)) return fragment;
          const reference = localReference(fragment, documentPath);
          return reference && fs.existsSync(path.join(output, reference.canonical)) ? fragment.replace(/%40/gi, '@') : fragment;
        });
        if (documentPath === 'demos/materials/three-html-render/index.html') {
          // The import-map alias names a virtual module rather than a physical file.
          text = text.replace('./vendor/three%400.185.1/three.core.js', './vendor/three@0.185.1/three.core.js');
        }
        if (text !== original) fs.writeFileSync(filename, text, 'utf8');
      }
    }
  }
  for (const directory of ['demos', 'previews']) visit(path.join(output, directory));
}

export function prepareStatic(assetsMode = 'local', commit) {
  assertRepositoryLineEndings(root);
  if (!['local', 'github'].includes(assetsMode)) throw new Error('Asset mode must be local or github.');
  if (commit !== undefined && !/^[a-f\d]{40}$/i.test(commit)) throw new Error('Supply --commit <40-digit hex>.');
  const sources = assetsMode === 'github' ? buildAssetSources(root, commit) : {assets:{}};
  const snapshotPaths = loadMaterials({root}).filter(material => material.snapshotPath).map(material => material.snapshotPath);
  for (const relative of contentPaths) fs.cpSync(path.join(root, relative), path.join(output, relative), {recursive:true});
  normalizeEncodedAt();
  const omitted = Object.entries(sources.assets);
  let omittedBytes = 0;
  for (const [relative, asset] of omitted) {
    fs.unlinkSync(path.join(output, relative));
    omittedBytes += asset.bytes;
  }
  if (assetsMode === 'github') fs.writeFileSync(path.join(output, 'data/asset-sources.js'), serializeAssetSources(sources), 'utf8');
  let rewrittenDocuments = 0;
  function finalize(directory) {
    for (const item of fs.readdirSync(directory, {withFileTypes:true})) {
      const target = path.join(directory, item.name);
      if (item.isDirectory()) finalize(target);
      else if (item.isFile()) {
        const canonical = path.relative(output, target).split(path.sep).join('/');
        if (snapshotPaths.some(prefix => canonical.startsWith(prefix)) && !/\.(?:html|css)$/.test(item.name)) continue;
        if (item.name.endsWith('.html') || item.name.endsWith('.css')) {
          const original = fs.readFileSync(target, 'utf8');
          let text = original;
          if (assetsMode === 'github') text = item.name.endsWith('.html') ? rewriteHTML(text, canonical, sources) : rewriteCSS(text, canonical, sources);
          if (item.name.endsWith('.html') && /<head\b[^>]*>/i.test(text)) text = injectAssets(text, canonical, assetsMode);
          if (text !== original) { fs.writeFileSync(target, text, 'utf8'); rewrittenDocuments++; }
        } else if (item.name.endsWith('.md')) {
          const bytes = fs.readFileSync(target);
          if (!bytes.subarray(0, 3).equals(Buffer.from([0xef, 0xbb, 0xbf]))) fs.writeFileSync(target, Buffer.concat([Buffer.from([0xef, 0xbb, 0xbf]), bytes]));
        }
      }
    }
  }
  finalize(output);
  if (commit) {
    const catalogPath = path.join(output, 'agent/catalog.json');
    const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
    catalog.source = {repository:'MIBXR/web-atlas-next', commit, baseUrl:`https://raw.githubusercontent.com/MIBXR/web-atlas-next/${commit}/`};
    fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2) + '\n', 'utf8');
  }
  function size(directory) {
    return fs.readdirSync(directory, {withFileTypes:true}).reduce((total, item) => {
      const target = path.join(directory, item.name);
      return total + (item.isDirectory() ? size(target) : fs.statSync(target).size);
    }, 0);
  }
  const totalBytes = size(output);
  if (assetsMode === 'github' && totalBytes > 200000000) throw new Error(`dist exceeds 200 MB: ${totalBytes} bytes.`);
  console.log(`Prepared dist (${assetsMode} assets): ${totalBytes} bytes (${(totalBytes / 1000000).toFixed(3)} MB).`);
  console.log(`Omitted ${omitted.length} media assets (${omittedBytes} bytes); rewrote ${rewrittenDocuments} HTML/CSS documents.`);
  return {assetsMode, totalBytes, omittedAssets:omitted.length, omittedBytes, rewrittenDocuments};
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  let assetsMode = 'local', commit;
  while (args.length) {
    const arg = args.shift();
    if (/^--assets=(?:local|github)$/.test(arg)) assetsMode = arg.split('=')[1];
    else if (arg === '--commit' && args.length) commit = args.shift();
    else throw new Error('Usage: node scripts/build-static.mjs --assets=local|github [--commit <40-digit hex>]');
  }
  prepareStatic(assetsMode, commit);
}
