import { chromium } from 'playwright';

const url = process.argv[2] ?? 'https://counsel-unsubscribe-ripe-poet.trycloudflare.com/card';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 420, height: 860 } });
page.on('pageerror', (e) => console.log('PAGE-ERR:', e.message));
const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 40000 });
console.log('STATUS:', res?.status());
await page.waitForTimeout(2500);
await page.screenshot({ path: 'shots/tunnel_card.png' });
await browser.close();
console.log('DONE');
