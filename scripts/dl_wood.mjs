// 下载 Poly Haven wood_table_001 的 2k PBR 贴图（diff/nor/rough）——真摄影测量木纹
import { writeFileSync, mkdirSync } from 'fs';

const meta = await (await fetch('https://api.polyhaven.com/files/wood_table_001')).json();
mkdirSync('public/textures/wood', { recursive: true });

const want = { Diffuse: 'wood_diff', nor_gl: 'wood_nor', Rough: 'wood_rough' };
for (const [key, out] of Object.entries(want)) {
  const info = meta[key]?.['2k']?.jpg ?? meta[key]?.['2k'];
  const url = info?.url;
  if (!url) { console.log('MISS', key); continue; }
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  writeFileSync(`public/textures/wood/${out}.jpg`, buf);
  console.log('OK', out, (buf.length / 1048576).toFixed(1) + 'MB');
}
console.log('DONE');
