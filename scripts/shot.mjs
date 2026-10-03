import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

mkdirSync('shots', { recursive: true });

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE-ERR:', m.text()); });
page.on('pageerror', (e) => console.log('PAGE-ERR:', e.message));

await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
await page.evaluate(() => localStorage.clear());
await page.reload({ waitUntil: 'networkidle' });

// 等待动画关键帧并逐段截图
await page.waitForTimeout(1200);
await page.screenshot({ path: 'shots/01_closed.png' });
await page.waitForTimeout(1600);
await page.screenshot({ path: 'shots/02_clasp.png' });
await page.waitForTimeout(1400);
await page.screenshot({ path: 'shots/03_opening.png' });
await page.waitForTimeout(1600);
await page.screenshot({ path: 'shots/04_spread.png' });

// 点击序页（屏幕右侧书页中心）触发翻页
await page.mouse.click(950, 450);
await page.waitForTimeout(1000);
await page.screenshot({ path: 'shots/05_flip.png' });
await page.waitForTimeout(2200);
await page.screenshot({ path: 'shots/06_home.png' });

await browser.close();
console.log('DONE');
