# 21 · 可商用大图/纹理资源站清单

## Unsplash（图书馆摄影，已验证直链）

| 本地文件 | 内容 | 页面 |
|---|---|---|
| `../images/trinity-unsplash.jpg` | Trinity Long Room 仰视 | https://unsplash.com/photos/Ty6KjYKmiUk |
| `../images/bookshelf-full.jpg` | 满架书籍近景 | https://unsplash.com/photos/eXFG9dM_1f8 |
| `../images/curved-wooden-shelves.jpg` | 弧形木书架 | https://unsplash.com/photos/wzaADxAu9zo |
| `../images/cozy-library.jpg` | 温馨复古书屋 | https://unsplash.com/photos/Vz_-Uto9y3k |
| `../images/tall-bookshelf-window.jpg` | 窗边旧书高书架 | https://unsplash.com/photos/dI8WOJMvoD8 |
| `../images/antique-book-rows.jpg` | 古籍书脊特写 | https://unsplash.com/photos/gz_abaSsT7g |
| `../images/old-books-como.jpg` | 旧书满架 | https://unsplash.com/photos/QadU6Qa7ckM |
| `../images/leather-bound-books.jpg` | 皮革书脊特写 | https://unsplash.com/photos/lVL86Miltr8 |

许可：Unsplash License 免费可商用无需署名。⚠️ `plus.unsplash.com/premium_*` 是付费 Unsplash+，勿用。

## Wikimedia Commons（古籍扫描+图书馆摄影）

| 本地文件/条目 | 许可 |
|---|---|
| `../images/long-room-trinity.jpg` Long Room（Diliff）| CC BY-SA 4.0 需署名 |
| `../images/kells-folio.jpg` Book of Kells Folio 32v | Public Domain |
| 更多手稿 | https://commons.wikimedia.org/wiki/Category:Medieval_manuscripts |
| 真皮书封纹理 | https://commons.wikimedia.org/wiki/File:Free_antique_leather_book_cover_texture_for_layers_(2978544161).jpg |

**直链技巧**：`https://commons.wikimedia.org/wiki/Special:FilePath/{文件名}?width=1600` = 稳定重定向直链。

## 聚合入口与 API

### Library of Congress
- https://www.loc.gov/free-to-use/ ｜ https://loc.gov/pictures/
- `cdn.loc.gov` 分级下载：`_150px.jpg`/`r.jpg`/`v.jpg`/`u.tif`；选 "No known restrictions" 条目；大部分 PD

### Open Library 封面 API ⭐
- 文档 https://openlibrary.org/dev/docs/api/covers
- `https://covers.openlibrary.org/b/{isbn|olid|oclc|lccn}/{value}-{S|M|L}.jpg`
- 加 `?default=false` 缺封面返 404；书架栏目可动态取真书封面；公开引用须回链致谢

### Poly Haven / ambientCG（CC0 材质）
- https://polyhaven.com/textures ｜ https://ambientcg.com/ — Paper001/Wood019/Wood095/Leather001/Marble010 等
- 1K–16K zip 下载；CSS 平铺或 Three.js PBR 皆可

### Pexels / Pixabay（页面可用，直链需自取）
- https://www.pexels.com/photo/37302573/ （暖灯复古书架）
- https://www.pexels.com/photo/10402079/ （书架走廊纵深）
- https://pixabay.com/photos/old-books-book-old-library-436498/ （古籍堆叠）
- Pexels 下载：`https://www.pexels.com/photo/{slug}/download/`

## 资源获取要点

1. **Unsplash 热链参数**：`?fm=jpg&q=80&w=1600&auto=format&fit=crop` 按需裁尺寸，配 `srcset` 响应式
2. **Open Library**：`covers.openlibrary.org/b/isbn/{isbn}-M.jpg`；禁爬取，允许 `<img>` 直接引用+回链
3. **Wikimedia**：`Special:FilePath/{文件名}` 稳定直链；区分 PD（随意用）与 CC BY-SA（署名+同许可）
4. **LoC 分档**：`_150px/r/v/u.tif` 后缀；优先 "No known restrictions"
5. **生产建议**：所有第三方图下载自托管（`public/textures/`），转 WebP；避免热链失效与被替换风险
