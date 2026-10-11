// 把桌面上的书籍蒸馏 zip 合并导入为 content collection
// 每本书的所有 md 按序号合并成一个文件：## 篇名 分节 + frontmatter
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const BOOKS = [
  { zip: 'C:/Users/29980/Desktop/《掌控习惯》.zip', slug: 'atomic-habits', title: '《掌控习惯》', author: 'James Clear', en: 'Atomic Habits' },
  { zip: 'C:/Users/29980/Desktop/《认知觉醒》.zip', slug: 'cognitive-awakening', title: '《认知觉醒》', author: '周岭', en: 'Cognitive Awakening' },
  { zip: 'C:/Users/29980/Desktop/《思考，快与慢》.zip', slug: 'thinking-fast-slow', title: '《思考，快与慢》', author: 'Daniel Kahneman', en: 'Thinking, Fast and Slow' },
];

const OUT_DIR = 'src/content/reading';

// 读 zip：扫本地文件头，store/deflate 两种方法
function readZip(file) {
  const buf = fs.readFileSync(file);
  const entries = [];
  let off = 0;
  while (off < buf.length - 4) {
    if (buf.readUInt32LE(off) !== 0x04034b50) { off++; continue; }
    const method = buf.readUInt16LE(off + 8);
    const csize = buf.readUInt32LE(off + 18);
    const nlen = buf.readUInt16LE(off + 26);
    const elen = buf.readUInt16LE(off + 28);
    const name = buf.slice(off + 30, off + 30 + nlen).toString('utf8');
    const dataOff = off + 30 + nlen + elen;
    let data = null;
    if (csize > 0) {
      const raw = buf.slice(dataOff, dataOff + csize);
      data = method === 8 ? zlib.inflateRawSync(raw) : raw;
    }
    entries.push({ name, data });
    off = dataOff + csize;
  }
  return entries;
}

// 去掉文件首个 H1 作为篇名；其余标题降两级（跳过代码围栏），
// 保证渲染后 depth-2 只剩插入的篇名，目录干净
function processMd(text) {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  let title = null;
  const out = [];
  let inFence = false;
  for (const line of lines) {
    if (/^```/.test(line)) inFence = !inFence;
    if (!inFence && title === null && /^#\s+/.test(line)) {
      title = line.replace(/^#\s+/, '').trim();
      continue;
    }
    if (!inFence && /^(#{1,4})\s/.test(line)) {
      out.push('##' + line);
      continue;
    }
    out.push(line);
  }
  return { title, body: out.join('\n').trim() };
}

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const b of BOOKS) {
  const entries = readZip(b.zip)
    .filter((e) => e.data && /\.md$/i.test(e.name) && !/toutiao[\\/]/i.test(e.name))
    .sort((a, b2) => a.name.localeCompare(b2.name, 'zh'));

  const toc = [];
  const parts = [];
  for (const e of entries) {
    const { title, body } = processMd(e.data.toString('utf8'));
    const sec = title || path.basename(e.name, '.md').replace(/^\d+-/, '');
    toc.push(sec);
    parts.push(`## ${sec}\n\n${body}`);
  }

  const fm = [
    '---',
    `title: "${b.title}"`,
    `author: "${b.author}"`,
    `en: "${b.en}"`,
    `sections: ${toc.length}`,
    '---',
  ].join('\n');

  fs.writeFileSync(path.join(OUT_DIR, `${b.slug}.md`), `${fm}\n\n${parts.join('\n\n---\n\n')}\n`);
  console.log(`${b.slug}: ${entries.length} sections`);
}
console.log('done');
