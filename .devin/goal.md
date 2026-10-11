---
status: paused
verify: 
max_blocks: 8
created: 2026-10-11 12:15
source: plan-mode
---

# 目标

执行 .devin/plan.md 中已批准的计划。

## 预期效果
`/library` 新增「阅读」专栏与筛选类；新增 `/reading` 页——点进去就是三本书的书名列表（《掌控习惯》/《认知觉醒》/《思考，快与慢》），点某本书名进入 `/reading/<书>` 单页，**该书的全部蒸馏内容**（蒸馏笔记+大纲+全部集数+完整版，按序排列、顶部目录锚点）在这一页内可完整阅读。总页数 8→12。`toutiao/` 改编副本不上站。

## 具体执行操作
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

## 验收清单
- [x] `npm run build` 无报错，共 12 页 —— 构建实测通过，输出 "12 page(s) built"，4 个 /reading 路由生成 [check: npm run build]
- [x] dist 生成 `/reading/`、`/reading/atomic-habits/`、`/reading/cognitive-awakening/`、`/reading/thinking-fast-slow/` 四页 —— `ls` 实测四个 index.html 存在；线上 https://hemu-card.pages.dev/reading/ 及三个书页 curl 均返回 200
- [ ] /library 出现「阅读」专栏与三条书名；点书名进入对应蒸馏全文页且排版可读 [human]
