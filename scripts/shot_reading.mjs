import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import http from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

mkdirSync('shots', { recursive: true });
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2', '.gltf': 'model/gltf+json', '.bin': 'application/octet-stream' };
const srv = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let f = join('dist', p);
  if (statSync(f, { throwIfNoEntry: false })?.isDirectory()) f = join(f, 'index.html');
  if (!existsSync(f)) { res.writeHead(404); return res.end('nf'); }
  res.writeHead(200, { 'content-type': MIME[extname(f)] || 'application/octet-stream' });
  res.end(readFileSync(f));
});
await new Promise((r) => srv.listen(4399, r));

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('pageerror', (e) => console.log('PAGE-ERR:', e.message));

await page.goto('http://localhost:4399/reading/', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'shots/reading_index.png' });

await page.goto('http://localhost:4399/reading/atomic-habits/', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'shots/reading_book_top.png' });
await page.evaluate(() => window.scrollTo(0, 1400));
await page.waitForTimeout(400);
await page.screenshot({ path: 'shots/reading_book_body.png' });

await page.goto('http://localhost:4399/library/', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'shots/library_reading.png' });

await browser.close();
srv.close();
console.log('done');
