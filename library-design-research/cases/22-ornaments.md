# 22 · 古籍装饰元素的网页化

## 资源

### CSS-Tricks: Versal Letters（泥金写本首字母）
- **URL**：https://css-tricks.com/getting-creative-with-versal-letters/
- **手法**：`::first-letter` + `initial-letter:3 3` + `@supports` 回退；`border-image` 花边框、`clip-path` 裁背景纹理
```css
p::first-letter { -webkit-initial-letter:3 3; initial-letter:3 3; }
```

### Smashing Magazine: Drop Caps 历史与最佳实践
- **URL**：https://www.smashingmagazine.com/2012/04/drop-caps-historical-use-and-current-best-practices/
- 5 种实现对比；图片型首字母用 `text-indent` 隐藏文字+`background-image` 保可访问性

### Bibliodex — 图书馆卡片目录模板 ⭐
- **URL**：https://osteophage.neocities.org/projects/templates/bibliodex
- **本地图**：`../images/site-bibliodex.jpg`
- **要点**：米白卡片+打字机排版+分类筛选；纯 HTML+CSS 零 JS；`light-dark()` 暗色
- **手法**：radio input+`:has()`/`~` 无 JS 过滤——"目录卡片=文章索引页"现成范本

### Verse Vault — 1950s 卡片目录设计系统 ⭐
- **URL**：https://github.com/thebigjah/verse-vault/commit/2cf2ab2c8e981434e211ed214eaf513b6fbf3d7e
- **配色可直接抄**：牛皮纸棕 `#c4a574` 底 / 卡片奶油 `#f5edd3` / 马尼拉标签 `#d8b964` / 印章红 `#8b2920` / 铅笔灰 `#6e6358`
- **手法**：`repeating-linear-gradient` 横线纹+22px 红左边线；`rotate()` 斜盖 "REVIEW N" 印章；页眉 SHELF/DEWEY/CIRCULATION 元信息条

### FromOldBooks.org — 4400+ 公共领域古籍版画 ⭐
- **URL**：https://www.fromoldbooks.org/ （装饰字母集 https://www.fromoldbooks.org/DelamotteOrnamentalAlphabets/ ）
- **要点**：木刻首字母（Holbein 1523 死亡之舞字母表）、文艺复兴书页边框、章首花饰、藤蔓框；Delamotte 系列标注 "suitable for use as a drop cap"
- **手法**：PNG 作 `::first-letter` 图片替换、`border-image-source`、`mask-image` 叠标题做旧

### Wikimedia Commons — Ex Libris 藏书票
- **URL**：https://commons.wikimedia.org/wiki/Category:Ex_libris_of_the_United_States （另有 18/19 世纪分类）
- **要点**：**"纹章盾框+环形场景+EX LIBRIS 铭带+签名留白"三段式构图**；深褐单色雕版
- **手法**：提取构图用内联 SVG 重绘（外框+铭带+文字区）→ 响应式藏书票；`filter:sepia()` 统一色调

### Fleuron 印刷饰花 — 零成本分隔线 ⭐
- **URL**：https://en.wikipedia.org/wiki/Fleuron_(typography) ｜实践 https://www.ctrl.blog/entry/hr-asterism.html
- **手法**：Unicode 字符即素材——`❦`(U+2766 aldus leaf)、`❧`、`☙`、`⁂`(U+2042 asterism)
```css
hr { border:none; text-align:center; }
hr::before { content:'❦'; opacity:.6; }
/* 或 ⁂ 三星分段符；fleuron 字符平铺可做花边 */
```

### border-image 装饰边框
- **URL**：素材 https://openclipart.org/detail/317927/vintage-ornate-border-frame （PD）｜手法 https://css-tricks.com/revisiting-css-border-image/
```css
.card { border-image-source:url('data:image/svg+xml;utf8,…');
        border-image-slice:150 95 150 95 fill;
        border-image-repeat:stretch round; }
/* 九宫格切片：角落保形、边缘 round/stretch、中央 fill 随内容伸缩 */
```

### 火漆印章
- **URL**：SVG 滤镜 https://rayzia.com/filters/wax-seal/ ｜CC0 矢量 https://www.svgrepo.com/svg/321688/wax-seal
- **手法**：feTurbulence 系凹凸 filter `filter:url(#wax)` 套任意形状；或径向渐变+异形 `border-radius`+内阴影扁平蜡封

## 可借鉴点

1. **首字母两级方案**：`initial-letter`（@supports 包裹）→float 兜底→FOBO 木刻字母图片替换
2. **零成本花边**：`hr::before{content:'❦'}` 天然适配暗色模式；重口花边再 `border-image`
3. **藏书票身份卡**：纹章框+EX LIBRIS 铭带+签名留白三段式内联 SVG，about/页脚归属标记，姓名放手写体
4. **目录卡片系统**：Verse Vault 调色板+`repeating-linear-gradient` 横线纹+红边线+`rotate()` 印章；过滤抄 Bibliodex radio+`:has()`
5. **边框伸缩术**：`border-image` 九宫格单内联 SVG data-URI 即可，角落保形边缘伸缩；注意 `border-style` 兜底
