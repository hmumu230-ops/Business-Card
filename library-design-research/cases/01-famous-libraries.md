# 01 · 世界顶级古典图书馆实景素材

> 远景大厅图做 hero/section 背景，近景书脊特写做纹理与平铺——两层素材策略。

## 案例

### Trinity College Dublin — The Long Room（都柏林）
- **来源**：https://commons.wikimedia.org/wiki/File:Long_Room_Interior,_Trinity_College_Dublin,_Ireland_-_Diliff.jpg （Diliff，CC BY-SA 4.0，原图 9000px）；官网 360° 漫游 https://www.tcd.ie/library/using-library/360.php
- **本地图**：`../images/long-room-trinity.jpg`、`../images/trinity-unsplash.jpg`
- **设计要点**：65m 桶形拱顶大厅、深色橡木书架与大理石半身像交替；严格一点透视、灭点居中——天然把视线引向标题。配色：深橡木 `#2E1F14`、暖琥珀 `#B07D3E`、赭红书脊 `#7A3B2E`、大理石 `#D9D2C4`
- **实现手法**：全屏 hero 背景 + 深色渐变遮罩；GSAP Ken Burns 缓慢推近；书架立面裁竖条可作 Three.js 侧墙贴图。另有 1885 年历史照片（公有领域）可做"古今对照"彩蛋

### Admont Abbey Library（奥地利，世界最大修道院图书馆）
- **来源**：分类页 https://commons.wikimedia.org/wiki/Category:Stiftsbibliothek_Admont ；3D 漫游 https://discover-culture.com/en/partner/benediktinerstift-admont/touren/klosterbibliothek/
- **设计要点**：晚期巴洛克金白大厅 + 天顶壁画，"知识即光明"的明调范本。配色：象牙白 `#F5EFE2`、鎏金 `#D4AF6A`、壁画粉蓝 `#A8C3CF`、书脊棕 `#6B4A2B`
- **实现手法**：作为暗色 hero 后的"亮色段落"反转，形成滚动明暗节奏

### Strahov Monastery — Philosophical Hall（布拉格）
- **来源**：https://commons.wikimedia.org/wiki/File:Philosophical_Hall_(Strahov_Monastery).jpg （CC BY 3.0）
- **设计要点**：双层胡桃木书橱 + 地球仪列阵 + 壁画天花占上部 1/3。配色：胡桃木 `#4A3220`、古铜金 `#8C6239`、青灰 `#7E9BA6`、羊皮纸 `#D9C9A3`
- **实现手法**：宽图 hero；地球仪/梯子做 Three.js 前景视差道具；书架特写可做纹理图集

### Bodleian Library — Duke Humfrey's（牛津）
- **来源**：https://commons.wikimedia.org/wiki/File:Duke_Humfrey%27s_Library_Interior_1,_Bodleian_Library,_Oxford,_UK_-_Diliff.jpg （同系列 Interior 1–6）
- **设计要点**：dark academia 幽暗氛围范本——低机位长廊透视、哥特尖拱、密集书脊、锁链书。配色：近黑橡木 `#241708`、赭金 `#C89B5A`、暗红 `#5C2E21`
- **实现手法**：深色 section 背景；书脊特写裁竖向无缝条带 → Three.js 书墙低成本贴图

### BnF Richelieu — Salle Labrouste / Salle Ovale（巴黎）
- **来源**：https://commons.wikimedia.org/wiki/Category:Salle_Labrouste
- **设计要点**：9 座穹顶 + 纤细铸铁柱的重复韵律；拱券构成"框架中的框架"。配色：石灰石 `#D8CDB8`、铸铁青灰 `#5B6668`、氧化绿 `#4E7A6A`
- **实现手法**：拱券母题抽象为 SVG 边框纹样/拱形卡片；Salle Ovale 椭圆环绕构图适合环形导航参考

### Klementinum Baroque Library（布拉格）
- **来源**：https://commons.wikimedia.org/wiki/File:Clementinum_baroque_library_2.jpg （CC BY-SA 4.0，6000×4000）
- **设计要点**：剧场感最强的小型馆，中轴地球仪列阵=视觉红毯。深栗木 `#3A2417`、鎏金 `#C9A227`、天青 `#9FB6C3`

### Stiftsbibliothek St. Gallen（瑞士 UNESCO）
- **来源**：https://commons.wikimedia.org/wiki/File:CH.SG.St-Gallen_2023-11-15_Abbey-Library-of-Saint-Gall_3728_4x3-R_11K.jpg （11K 超清）
- **设计要点**：洛可可浅色木雕 + 波浪楼廊 + 灰调天花，最克制素雅。蜜色原木 `#A8763E`、鼠尾草绿 `#9AA487`、灰白 `#E5E0D5`
- **实现手法**：11K 图裁多张局部做滚动画廊不损画质；中调暖木背景对浅色文字友好

### Unsplash 书脊/书架特写（可直接商用）
- `antique-book-rows.jpg` 古籍书脊 https://unsplash.com/photos/gz_abaSsT7g
- `old-books-como.jpg` 旧书满架 https://unsplash.com/photos/QadU6Qa7ckM
- `leather-bound-books.jpg` 皮革书脊 https://unsplash.com/photos/lVL86Miltr8
- `bookshelf-full.jpg` https://unsplash.com/photos/eXFG9dM_1f8
- `cozy-library.jpg` https://unsplash.com/photos/Vz_-Uto9y3k
- `tall-bookshelf-window.jpg` https://unsplash.com/photos/dI8WOJMvoD8
- `curved-wooden-shelves.jpg` https://unsplash.com/photos/wzaADxAu9zo
- **微观质感**：金 `#B08D3E`、皮棕 `#5A3A24`、墨绿布面 `#33473B`

### 补充馆源
| 馆 | 链接 |
|---|---|
| Biblioteca Joanina（巴洛克金木） | https://commons.wikimedia.org/wiki/File:Joanina_Library_-_Coimbra_University.jpg |
| Melk Abbey | https://commons.wikimedia.org/wiki/File:Melk_-_Abbey_-_Library.jpg |
| Wiblingen Abbey（洛可可竖图） | https://commons.wikimedia.org/wiki/File:Wiblingen_Abbey_Library.jpg |
| Kells 泥金写本（PD） | `../images/kells-folio.jpg` |

## 可借鉴点

1. **双基调叙事**：Long Room/Duke Humfrey's 的深木暗角作主基调，Admont/St. Gallen 的象牙金做局部反转——明暗交替比单一暗调有呼吸感
2. **一点透视即构图**：灭点 = hero 标题与入场推镜的锚点
3. **两层素材**：全景给氛围，书脊特写给质感，勿拉伸单图当纹理
4. **前景道具**：地球仪/梯子/半身像做视差层，强化"写实场景"而非"贴图背景"
5. **许可**：Diliff/Royan 图多 CC BY-SA（需署名+同许可共享）；Unsplash 免费可商用；生产环境自托管
