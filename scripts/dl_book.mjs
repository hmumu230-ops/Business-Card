// 下载 Poly Haven book_encyclopedia_set_01 的 2k glTF 全套文件
import { writeFileSync, mkdirSync } from 'fs';

const meta = await (await fetch('https://api.polyhaven.com/files/book_encyclopedia_set_01')).json();
const g = meta.gltf['2k'];
mkdirSync('public/models/book_set/textures', { recursive: true });

const files = [];
for (const [sub, info] of Object.entries(g)) {
  if (info.url) files.push([sub.includes('.') ? sub : `${sub}.gltf`, info.url]);
  for (const [name, f] of Object.entries(info.include ?? {})) files.push([name, f.url]);
}
for (const [name, url] of files) {
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  writeFileSync(`public/models/book_set/${name}`, buf);
  console.log('OK', name, (buf.length / 1048576).toFixed(1) + 'MB');
}
console.log('DONE', files.length, 'files');
