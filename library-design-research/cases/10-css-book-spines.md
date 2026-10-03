# 10 · CSS 书脊渲染技巧

## 案例

### Virtual Bookshelf — petargyurov ⭐ 书脊朝外整排书架
- **URL**：https://github.com/petargyurov/virtual-bookshelf ｜教程 https://janhendrikewers.uk/bookshelf_for_personal_website
- **手法**：
  - `.book > .side.spine`（含 `.spine-title`/`.spine-author`）+`.side.top`+`.side.cover`，3D 变换拼合
  - 书脊图案=CSS 变量存多组 `linear-gradient`：`--argyle`/`--tartan`/`--stairs`/`--pyramid`（4 层不同角度渐变+半透明黑白，`background-size:20px` 平铺织物质感）
  - JS 随机分配图案/高度/色相；`.slanted-book` 斜靠类

### Skeuomorphic Book Cover — Varun Dhawan ⭐ 书脊压痕
- **URL**：https://varundhawan.com/blog/2022/01/18/skeuomorphic-book-cover-css
- **手法**：`linear-gradient(to right,…)` 色标挤在左侧 0%–5.4% 区间伪造精装书脊铰链——极浅黑→白高光→回落；**色标 0.25%–0.5% 级差形成硬切线**=凹槽边缘；右缘 99%→100% 灰边收尾。无图无 DOM 改动

### Codrops Animated Books（2013 经典）
- **URL**：https://tympanus.net/codrops/2013/07/11/animated-books-with-css-3d-transforms/
- **手法**：`preserve-3d`+`rotateY` 三面拼合；伪元素提供厚度；书脊是独立面

### Sébastien Castiel 3D Book 教程+生成器
- **URL**：https://scastiel.dev/animated-3d-book-css/ ｜https://github.com/scastiel/3d-book-image-css-generator
- **手法**：`.book-container` `perspective`+`preserve-3d`；`rotateY(-30deg)`；封面右缘 `border-radius:3px`（左缘直角=书脊侧）；书页侧伪元素 `rotateY(90deg)`+等距 `#fff/#f9f9f9` 条纹模拟纸页
- **参数化变体**（jackofalltrad.es）：`--book-thickness`/`--book-spine-radius`/`--book-cover-radius`/`--book-aspect-ratio` 全抽 CSS 变量，封面 `translateZ(calc(thickness/2))`

### build-your-bookshelf — kayserifserif 生成式书脊算法
- **URL**：https://github.com/kayserifserif/build-your-bookshelf
- **风格算法**：Dominant colour（封面取主色）/Colours with gradient/Cover crop/Cover with blur；规划 Vintage/Embellished floral/Dark——古典方向路线图

### SimpleShelf / Library / Book Cover JS
- SimpleShelf https://github.com/kat3samsin/simpleshelf ：tilt/gap 自动随机；`getThickness(pages)`/`getHeight(pages)` 页数驱动尺寸
- claudiasrn/library https://github.com/claudiasrn/library ：CSS Grid 摆架；书脊=body色/binding accent/bookmark 三元组；accent 带=古典书**竹节装饰带+烫金线**；书脊=数据纯函数
- Book Cover JS https://acestronautical.github.io/bookcover-js/ → `../images/site-bookcover-js.jpg`：书脊排版参数面板（居中/旋转/混合、`Spine Art Style` 网格图案）

### 竖排书名权威依据
- W3C https://www.w3.org/International/articles/vertical-text/index.en ：英文书脊用 `writing-mode:sideways-lr`（自下而上）；`text-orientation:upright` 得逐字堆叠古典效果。**勿用 `rotate(90deg)`**（不改布局盒）

### 烫金文字
- https://texteffects.dev/posts/gold-text-effect ：双层文本+`background-clip:text`+`text-fill-color:transparent`+金铜多段渐变+微 `text-shadow`
- https://codefronts.com/motion/css-text-gradient-effect/metallic-gold-text-gradient-effect-css/ ：`#92400e→#d97706→#fbbf24→#fef3c7` 高光带

### 磨损质感贴图
- Century Library `Worn Book Spine Edge`/`Aged Leather` https://centurylibrary.com/shop/patterns-textures/
- Wikimedia CC 真皮书封扫描 https://commons.wikimedia.org/wiki/File:Free_antique_leather_book_cover_texture_for_layers_(2978544161).jpg （`mix-blend-mode` 叠加做磨损）

## 可借鉴点

1. **立体感核心=挤色标**：色标压进 0.5%–5% 窄区间快切黑/白/透明=精装凹槽；纸页侧缘 `repeating-linear-gradient` 灰白条
2. **随机化归 JS，质感归 CSS 变量**：图案/调色板做成变量，JS 随机挑值+随机 height/rotate（±2–7°）；页数→高厚映射
3. **竖排按语种**：英文 `sideways-lr`、古典堆叠 `upright`、中文可 `vertical-rl`
4. **烫金与竹节分层**：烫金=`background-clip:text`+多段渐变+drop-shadow；竹节=横向 `repeating-linear-gradient` 亮暗线或 2–3px inset 阴影
5. **参数统一**：`--book-thickness`/`--spine-radius`/`--cover-radius`+`aspect-ratio`+`translateZ(thickness/2)`——单参数生成协调整书，满墙书架每本改 3 个变量
