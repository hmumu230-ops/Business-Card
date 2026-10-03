// 批量截取"古典图书馆/书架"参考网站 → library-design-research/images/site-*.jpg
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const OUT = 'library-design-research/images';
mkdirSync(OUT, { recursive: true });

// [文件名, URL, 额外等待ms, 滚动比例(0-1, 可选第二张)]
const SITES = [
  ['site-stripe-press',        'https://press.stripe.com/',                                   5000, 0.35],
  ['site-obys-library',        'https://library.obys.agency/',                                6000, 0],
  ['site-shubham-bookshelf',   'https://shubhamchandra.com/',                                 4000, 0],
  ['site-adammaj-reading',     'https://adammaj.com/reading',                                 5000, 0],
  ['site-bibliotheca',         'https://fable-25-830.netlify.app/sites/bibliotheca/',         4000, 0.4],
  ['site-qbject-book',         'https://book.qbject.dev/',                                    6000, 0],
  ['site-viks-bookshelf',      'https://vikramtiwari.com/notes/side-projects/book-shelf.html',5000, 0],
  ['site-vintage-library',     'https://thecreations.com/c/vintage-library-animated',         5000, 0],
  ['site-stonesoup',           'https://stonesoup.com/',                                      3000, 0],
  ['site-bookcover-js',        'https://acestronautical.github.io/bookcover-js/',             3000, 0],
  ['site-bibliodex',           'https://osteophage.neocities.org/projects/templates/bibliodex',3000, 0],
  ['site-talking-bookshelf',   'https://talkingbookshelf.com/demo',                           4000, 0],
  ['site-enteria',             'https://enteria.neocities.org/',                              4000, 0],
  ['site-rixx-books',          'https://books.rixx.de/',                                      3000, 0],
  ['site-coverflow',           'https://scroll-driven-animations.style/demos/cover-flow/css/multiple', 3000, 0],
  ['site-gsap-horizontal',     'https://demos.gsap.com/demo/horizontal-scrolling-gallery/',   3000, 0.5],
];

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36',
});

for (const [name, url, wait, scrollPct] of SITES) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(wait);
    await page.screenshot({ path: `${OUT}/${name}.jpg`, type: 'jpeg', quality: 72 });
    console.log('OK', name);
    if (scrollPct > 0) {
      await page.evaluate((p) => window.scrollTo(0, document.body.scrollHeight * p), scrollPct);
      await page.waitForTimeout(2500);
      await page.screenshot({ path: `${OUT}/${name}-scrolled.jpg`, type: 'jpeg', quality: 72 });
      console.log('OK', name + '-scrolled');
    }
  } catch (e) {
    console.log('FAIL', name, e.message.slice(0, 120));
  }
  await page.close();
}
await browser.close();
console.log('DONE');
