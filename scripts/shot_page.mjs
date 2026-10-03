import { chromium } from 'playwright';

const path = process.argv[2] ?? '/library';
const name = process.argv[3] ?? 'page';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('pageerror', (e) => console.log('PAGE-ERR:', e.message));
await page.goto(`http://localhost:4321${path}`, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(1800);
await page.screenshot({ path: `shots/${name}_top.png` });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.5));
await page.waitForTimeout(900);
await page.screenshot({ path: `shots/${name}_mid.png` });
await browser.close();
console.log('DONE');
