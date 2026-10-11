---
status: done
verify: 
max_blocks: 12
created: 2026-10-11 11:56
---

> 原始诉求：多加一个阅读的栏目，并帮我把这几本我已经阅读过蒸馏过的书籍放在上面[c:\Users\29980\Desktop\《掌控习惯》.zip](file:///c%3A%5CUsers%5C29980%5CDesktop%5C%E3%80%8A%E6%8E%8C%E6%8E%A7%E4%B9%A0%E6%83%AF%E3%80%8B.zip) [c:\Users\29980\Desktop\《认知觉醒》.zip](file:///c%3A%5CUsers%5C29980%5CDesktop%5C%E3%80%8A%E8%AE%A4%E7%9F%A5%E8%A7%89%E9%86%92%E3%80%8B.zip) [c:\Users\29980\Desktop\《思考，快与慢》.zip](file:///c%3A%5CUsers%5C29980%5CDesktop%5C%E3%80%8A%E6%80%9D%E8%80%83%EF%BC%8C%E5%BF%AB%E4%B8%8E%E6%85%A2%E3%80%8B.zip)

## 头脑风暴纪要

- 三个 zip 已确认是结构化蒸馏内容：每本含 `00-蒸馏笔记.md`、`01-大纲.md`、若干集数、 `99-完整版.md`；思考快与慢另有 `toutiao/` 头条改编版（发布用副本，不上站）
- 现有栏目机制：`profile.ts` 的 `columns[]` + `shelf[]`（kind 驱动筛选），shelf 条目目前都是外链、无详情页
- 蒸馏笔记是完整长文（14-95KB md），需要真正的阅读页 → 用 Astro content collection（`src/content/reading/` + `src/pages/reading/`）是本项目最顺的做法
- 用户反馈 v1：不要 40+ 篇级子页面 → 改为「/reading 列书名 → 点书名进单页看全部蒸馏内容」，全书合并渲染、共 +4 页

## 1. 预期效果

`/library` 新增「阅读」专栏与筛选类；新增 `/reading` 页——点进去就是三本书的书名列表（《掌控习惯》/《认知觉醒》/《思考，快与慢》），点某本书名进入 `/reading/<书>` 单页，**该书的全部蒸馏内容**（蒸馏笔记+大纲+全部集数+完整版，按序排列、顶部目录锚点）在这一页内可完整阅读。总页数 8→12。`toutiao/` 改编副本不上站。

## 2. 方案与结论

- **导入时合并单页（推荐）**：每本书的所有 md 在导入阶段拼接成一个内容文件 → `/reading/<slug>` 一页渲染全部蒸馏内容。满足"点书名→看全部"，页面少、无层级迷宫。
- ~~每篇一个子页面~~：40+ 页层级，用户明确否决。
- ~~/reading 单页平铺三本书~~：三书合并 ~400KB 文本一页太长，弃。

组织：`src/content/reading/<slug>.md` 每书一份合并文件（frontmatter 带书名/作者/篇目清单），篇与篇之间插 `---` 分隔和二级标题；阅读页顶部自动生成篇目锚点目录。

## 3. 具体执行操作

1. **导入脚本** —— 新建 `scripts/import_books.mjs`
   - 读三个 zip（本地文件头 + zlib.inflateRaw），按序号排序后把每本书的 md 合并写入 `src/content/reading/<slug>.md`，跳过 `toutiao/`；frontmatter：`title`（书名）、`author`、`toc`（篇目名数组）；正文每篇前插 `## 篇名` + `---`
   - slug：atomic-habits / cognitive-awakening / thinking-fast-slow
   - 依赖：无

2. **内容集合配置** —— 新建 `src/content.config.ts`
   - `reading` collection，`loader: glob({ pattern: '*.md', base: './src/content/reading' })`
   - 依赖：1

3. **阅读索引页** —— 新建 `src/pages/reading/index.astro`
   - 书目式风格：三本书编号列出（书名+作者+「已蒸馏」标签），点击进入该书页
   - 依赖：2

4. **书籍详情页** —— 新建 `src/pages/reading/[book].astro`
   - `getStaticPaths` 按 collection 生成 3 页；页首书名+作者+篇目锚点目录，下方渲染合并后的全部蒸馏内容；正文衬线限宽排版，页底返回书目链接
   - 依赖：2

5. **library 接入** —— `src/data/profile.ts`
   - `columns[]` 加 `{ name: '阅读', desc: '读过并蒸馏过的书', url: '/reading' }`；`shelf[]` 加 3 条 `kind: '阅读'` 书目条目（书名即可点击，url `/reading/<slug>`）
   - 依赖：3

6. **构建 + 部署 + 推送**
   - `npm run build` 全绿（页面数 12）；`npm run deploy`；git 提交推送
   - 依赖：1-5

## 4. 风险与备选

- 合并单页较长（完整版 ~95KB）→ 顶部锚点目录 + 浏览器原生查找即可；如需折叠后续再加
- md 内 `---` 与 frontmatter 冲突 → frontmatter 只在文件最顶部注入一次
- 中文文件名编码 → zip entry 按 UTF-8 读，输出文件名一律 ASCII slug

## 5. 验收清单

- [x] `npm run build` 无报错，共 12 页 —— 构建通过，输出 "12 page(s) built"，4 个 /reading 路由全部生成 [check: npm run build]
- [x] dist 生成 `/reading/`、`/reading/atomic-habits/`、`/reading/cognitive-awakening/`、`/reading/thinking-fast-slow/` 四页 —— `ls dist/reading/...` 四个 index.html 全部存在；线上四路由 curl 实测均 200
- [ ] /library 出现「阅读」专栏与三条书名；点书名进入对应蒸馏全文页且排版可读 [human]
