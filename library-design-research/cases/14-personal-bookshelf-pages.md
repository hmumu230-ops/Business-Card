# 14 · 个人 /bookshelf 页面与数字书架产品

## 案例

### adammaj.com/reading ⭐ 流派起点
- **URL**：https://adammaj.com/reading ｜源码 https://github.com/adam-maj/adammaj.com
- **本地图**：`../images/site-adammaj-reading.jpg`
- **要点**：真实读过的书脊墙（白底简洁版）+书评详情；书脊窄条 41.5px+封面 4×宽；横向滚动+计数+箭头

### leviv.cool — 数据驱动书脊
- **URL**：https://leviv.cool/projects/2025/10/12/bookshelf.html
- **要点**：Goodreads CSV→页数映射书脊宽、评分驱动外观——"厚薄不一"真实感的关键手法

### books.rixx.de（log(book)）
- **URL**：https://books.rixx.de/
- **本地图**：`../images/site-rixx-books.jpg`
- **要点**：静态站书评库；"书单列表"IA——按主题聚合而非时间流

### Goodreads 替代品的书架视图
- **Literal** https://literal.club/ ：极简卡片+阅读状态（reading/finished/want to read）
- **StoryGraph** https://thestorygraph.com/ ：情绪标签（mood）分类——"想读一本 dark academia 的书"式检索
- **Bookwyrm** https://joinbookwyrm.com/ ：联邦式开源替代，书架=收藏集

### 零依赖组件
- **kat3samsin/simpleshelf** https://github.com/kat3samsin/simpleshelf ：页数定尺寸、随机倾斜、Open Library 封面 API
- **mawise/bookshelf** https://github.com/mawise/bookshelf ：Calibre 数据源+封面宽高比定书高
- **kmcheung12/goodshelf**：Svelte+Goodreads RSS 虚拟书架

## 可借鉴点

1. **个人书架页三种形态**：封面网格（最快）/书脊墙（最图书馆）/主题书单列表（最内容向）——可并存切换
2. **数据源**：Goodreads CSV/StoryGraph 导出/Open Library API 取封面；静态站建议构建期取数（本项目 `src/data/profile.ts` 集中数据的惯例可直接扩展 `shelf` 字段）
3. **状态语义**：正在读/想读/读完分层摆放，半空格层制造生长感
4. **每本书=一个条目页**：书脊点击→详情（书评+摘录+标签），slug 路由直达
