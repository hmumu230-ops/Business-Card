# 17 · 古典衬线字体与排版（中英双语）

## 资源

### Stone Soup Colophon — "把网站做成一本书" ⭐
- **URL**：https://stonesoup.com/stone-soup-colophon/
- **本地图**：`../images/site-stonesoup.jpg`
- **要点**：Cormorant Garamond 只做大标题 + EB Garamond 正文；行长仿印刷 ~13 词/行、`max-width:62rem`；`1.5em` **首行缩进**替段间距；标题 small-caps+tracking；版心边距循 17–18 世纪印刷工法则；白纸页居中于亚麻奶油底

### The Elements of Typographic Style Applied to the Web — 排版圣经
- **URL**：https://webtypography.net/
- **要点**：`line-height` 用无单位乘数；正文 ≥1.3（本站用 1.5）；**垂直节奏**——段间距=行高整数倍；行长 45–75 字符、66 理想
```css
p { line-height:1.5; margin-top:1.5em; margin-bottom:1.5em; }
```

### Drop cap：`initial-letter` ⭐
- **URL**：https://developer.chrome.com/blog/control-your-drop-caps-with-css-initial-letter
- **要点**：`initial-letter:3.5 3`（占行高/下沉行数）；Chrome110+/Safari(`-webkit-`)/Firefox 未实现→`@supports` 兜底；组合 `::first-line{font-variant:small-caps}`
```css
@supports (initial-letter:1 1) {
  p::first-letter { initial-letter:3 3; }
}
@supports not (initial-letter:1 1) {
  p::first-letter { float:left; font-size:250%; padding:6px 3px; margin-right:6px; line-height:1; }
}
```

### The Classical Page — 古典页面三特征
- **URL**：http://www.typographicwebdesign.com/designing-the-page/the-classical-page/
- ① 文本居中版框+充裕留白；② 全衬线（Humanist→Old Style→Transitional→Didone）；③ 强调靠字号/斜体/small caps 而非粗体；正文可两端对齐

### W3C CLReq — 中西文混排权威
- **URL**：https://www.w3.org/TR/clreq/
- **要点**：汉字与西文间 **¼ 汉字宽（~0.25em）** 间隙；中文行距 1.5–2.0；两端对齐+标点悬挂；直排西文三种处理（直立/转90°/纵中横排）

### 赫蹏 Heti — 中文排版增强库
- **URL**：https://sivan.github.io/heti
- `.heti--ancient` 古文/`.heti--vertical` 竖排/`.heti-verse` 诗居中；自动中西文 ¼em 间距+标点挤压；标题宋体/正文宋体/引用楷体预设

### open-guji/webtex-cn — 浏览器古籍竖排引擎
- **URL**：https://github.com/open-guji/webtex-cn
- `vertical-rl` 右起竖排；版心鱼尾/书名/章节；双行夹注；"四库全书""红楼梦甲戌本"模板——可做"古籍模式"彩蛋页

### 字体事实
- Cinzel=Trajan 系碑刻大写，**只做标题不能排正文**，无斜体无小写
- Cormorant SC / IM Fell English SC 直接输出 small caps 字形
- **Noto Serif SC 的拉丁字形=Source Serif**——气质不符，`font-family` 栈里西文字体必须前置

## 可借鉴点

**1. 中英混排方案（可直接落地）**
```css
body {
  font-family: "Cormorant Garamond","IM Fell English","Noto Serif SC",serif;
  font-size:18px; line-height:1.7; text-align:justify;
}
h1,.title-caps {
  font-family:"Cinzel","Noto Serif SC",serif;
  letter-spacing:.08em; /* tracking 只加拉丁/标题 */
}
:lang(zh) { letter-spacing:.02em; } /* 中文正文不大 tracking */
```

**2. 首页=扉页（title page）**：顶部 half-title 小字（Cinzel caps）→烫金细线→主标题→斜体副题→底部 imprint 出版行（城市·年份）；页脚 colophon+monogram

**3. 章节开篇**：`initial-letter:3 3`+`::first-line small-caps` 成本最低最"书"；中文段 `text-indent:2em`

**4. 垂直节奏**：无单位 line-height；块间距=行高整数倍；阅读栏 `max-width:62–66ch` 居中

**5. 少即是多**：奶油纸底+墨+至多一个点缀色；装饰只许细线/单一 ornament/细边框；中文长文可选"古籍竖排模式"而非全站默认
