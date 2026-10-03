# 13 · 数字图书馆/档案馆 UI

## 案例

### Internet Archive — 书架视图 + BookReader
- **URL**：https://archive.org/ （BookReader 开源：https://github.com/internetarchive/bookreader ）
- **要点**：收藏品"shelf"视图、馆内借阅的翻页阅读器（双页摊开+翻页动画+进度尺）；文字检索命中高亮
- **借鉴**：BookReader 是"翻开的书"界面现成蓝本（双页、缩略图条、章节标记）

### Google Books 书架视图
- **URL**：https://books.google.com/ → My library
- **要点**："我的书架"封面网格+书架分栏（Favorites/To read…）——最克制的书封网格范式

### Gallica（BnF）/ Europeana
- Gallica https://gallica.bnf.fr/ ：法式学院派检索+手稿阅读器；主题专辑
- Europeana https://www.europeana.eu/ ：跨馆聚合+条目卡片的"档案卡片"样式

### HathiTrust / Digital Bodleian / DigiVatLib
- HathiTrust https://www.hathitrust.org/ ：学术馆联合目录，列表+扫书视图
- Digital Bodleian https://digital.bodleian.ox.ac.uk/ ：牛津藏品影像，IIIF 驱动深缩放
- DigiVatLib https://digi.vatlib.it/ ：见 `18-digital-exhibitions.md`

### e-codices / BL Universal Viewer
- https://www.e-codices.unifr.ch/en ：朴素卡片目录列表+facsimile 阅读页+"地点—图书馆—索书号"三级目录
- BL IIIF Universal Viewer：https://iiif.bl.uk/uv/ ——多光谱图层、旋转、亮度对比度调节

## 可借鉴点

1. **编目三级目录**（地点—馆—索书号）映射个人站（专栏—系列—条目），自带"机构感"
2. **列表朴素+阅读页隆重**的反差节奏：索引页克制如卡片目录，打开条目进入沉浸 facsimile
3. **IIIF/深缩放**：展示高清作品图时用 OpenSeadragon 式分级切片而非单大图
4. **书架分栏命名**：Favorites/To read/Currently reading 的"进行中"语义比静态分类更有生长感
5. **档案卡片样式**：条目卡片做成"目录卡"（编号+馆藏章+字段行）即古籍索引质感
