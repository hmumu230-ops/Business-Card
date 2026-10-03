// 探测候选图片 URL 是否可用并下载到 public/textures/real/
import { writeFileSync, mkdirSync } from 'fs';
mkdirSync('public/textures/real', { recursive: true });

const cands = process.argv.slice(2);
for (const url of cands) {
  try {
    const r = await fetch(url);
    if (!r.ok) { console.log('FAIL', r.status, url); continue; }
    const buf = Buffer.from(await r.arrayBuffer());
    const name = url.split('/').pop().split('?')[0];
    const out = `public/textures/real/${name}.jpg`;
    writeFileSync(out, buf);
    console.log('OK', out, (buf.length / 1048576).toFixed(2) + 'MB');
  } catch (e) { console.log('ERR', url, e.message); }
}
console.log('DONE');
