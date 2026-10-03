import { chromium } from 'playwright';

const at = process.argv[2] ?? '1.0';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('pageerror', (e) => console.log('PAGE-ERR:', e.message));
await page.goto(`http://localhost:4321/#dbg=${at}`, { waitUntil: 'domcontentloaded' });
await page.evaluate(() => localStorage.clear());
await page.reload({ waitUntil: 'domcontentloaded' });
await page.waitForSelector('.scene.play', { timeout: 30000 });
await page.waitForTimeout(1200); // 等渲染稳定
await page.screenshot({ path: `shots/dbg_${at}.png` });
await browser.close();
console.log('DONE');
