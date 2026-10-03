# 08 · Dark Academia 美学体系

> 核心共识：低饱和暖深色底 + 羊皮纸/奶油文字 + 金色点缀 + 古典衬线 + 纸纹 + 书籍装饰。

## 资源

### Digital Heroes 风格指南 ⭐
- **URL**：https://digitalheroesco.com/styles/dark-academia/
- **六色体系**：`oxblood #6c1818` / `deep forest #1f3a2e` / `parchment #f0e6d2` / `candle gold #c9a86a` / `ink black #14110e` / `mahogany #4a2c1d`
- **字体**：展示 Caslon/EB Garamond、正文 Lora/Source Serif Pro、工具 Source Sans Pro。**禁忌：blackletter、Times New Roman**
- **商业参照**：Penguin Classics、NYRB、The Paris Review

### Made Good Designs 配色板
- **URL**：https://madegooddesigns.com/dark-academia-color-palette/
- "Old Library" 方案：`#3B2F2F` 主棕 + `#4A0E18` oxblood + `#B08D57` 古金 + `#2C3B2D` 墨绿 + `#E8E0CF` 奶油

### Funnelgraphic 4 套变体
- **URL**：https://funnelgraphic.com/dark-academia-color-palettes/
- 核心五色：`#F5F0E8`/`#2C1A0E`/`#6B1E2D`/`#2A4A3A`/`#1C1C1C`；"Warm Library"变体：Cognac `#7A4F2E`+Dusty Gold `#C9A84C`
- `Aged Burgundy #6B1E2D` 展示字 + `#F5F0E8` 底是最稳组合；60-30-10 分配

### 字体三件套（Google Fonts，OFL）
- **Cinzel**：罗马碑刻比例，全大写感 400–900 六档，无斜体→hero 标题/纹章文字 https://fonts.google.com/specimen/Cinzel
- **EB Garamond**：1592 Egenolff-Berner 数字复刻，5 字重+斜体+small caps→正文首选 https://fonts.google.com/specimen/EB+Garamond
- **IM Fell English**：牛津 17 世纪 Fell 铸字复刻，自带老印刷瑕疵感，400+SC 变体→引文/章节题 https://fonts.google.com/specimen/IM+Fell+English+SC
- **Cormorant Garamond**：高对比 display，300–700+斜体→副标题/drop cap

### Haley Park 作品集拆解（真实案例）
- **URL**：https://styles.refero.design/style/c47654a9-7d7a-4b2c-8e0a-cd9296719c69
- **要点**：深松绿 `#143930` 底 + 羊皮纸 `#f8f2de` 文字（对比度 11.3:1 达标）；哥特玫瑰窗/拱券作全宽结构图案；细线端点十字；**无投影无渐变无圆角**——深度全靠线宽与色彩对位

### ThemeShaper Dark Academia 主题
- **URL**：https://themeshaper.com/dark-academia/
- 50:50 双栏左固定；Libre Caslon Display+Text；右栏做旧纸纹平铺——"左书架右内容"结构

### 纹理素材
- https://www.transparenttextures.com/ （`paper-fibers`/`low-contrast-linen`/`egg-shell` 透明 PNG 平铺）→ **本地已下载** `../images/texture-*.png`
- https://texturize.app/generators/paper 免费无缝羊皮纸生成器
- https://opengameart.org/content/old-parchment-paper CC0 parchment.png
- https://aitextured.com/textures/paper/aged-parchment-texture-seamless.html 1K–8K

### 公共领域装饰素材
- https://www.fromoldbooks.org/Butsch-RenaissanceOrnament/ 48 件文艺复兴雕版（drop cap/花边）
- https://www.fromoldbooks.org/Jugend-1900/pages/19-318-bookplate/ EX LIBRIS 藏书票
- https://freesvg.org/vintage-flourish-decoration-1875-british-library 等 19 世纪分隔线 SVG（PD）

### 真实个人站参考
- https://enteria.neocities.org/ （DA×像素风）→ `../images/site-enteria.jpg`
- https://goblincatkc.neocities.org/ （ARCHIVE/NOTES 档案分栏+drop cap）
- https://haunteddigitalheart.com/ （烛光 flicker+环境音）

## 可借鉴点（一套可直接落地方案）

```css
:root {
  --ink: #14110E;       /* 最深底/墨黑 */
  --mahogany: #4A2C1D;  /* 书架木/皮革主面 */
  --forest: #1F3A2E;    /* 墨绿次底 */
  --oxblood: #6C1818;   /* 酒红点缀 */
  --gold: #C9A86A;      /* 蜡烛金：线/图标/描边 */
  --parchment: #F0E6D2; /* 羊皮纸文字/卡片 */
}
/* 标题 Cinzel 700 大写+tracking；正文 EB Garamond；引文 IM Fell English SC；drop cap Cormorant Italic */
```
- 70% 深底 / 20% 羊皮纸文字区 / 10% 金+酒红点缀
- 纹理分层：深底+低透明纸纹 PNG repeat；文字区保持纯色面板
- 装饰三件套：细金分隔线嵌 ❦、SVG flourish 染 `currentColor`、drop cap/EX LIBRIS 徽记
- 字体纪律：Cinzel 只做大写标题；正文 ≥16px、line-height ≥1.6；禁 blackletter/Times；字重偏细更古籍
- 微动氛围：hover 金边渐亮、`filter:sepia() brightness()` 照片做旧、可选烛光 flicker
