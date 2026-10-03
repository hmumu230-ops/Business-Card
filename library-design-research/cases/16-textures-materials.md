# 16 · 木纹/皮革/纸张/烫金 纹理素材与 CSS 实现

## 素材站（可商用）

### Transparent Textures ⭐ 性价比之王
- **URL**：https://www.transparenttextures.com/natural-paper.html
- **本地图**：`../images/texture-paper-fibers.png`、`../images/texture-linen.png`、`../images/texture-egg-shell.png`
- **要点**：半透明噪点 PNG 无底色——叠任何 `background-color` 即做旧；`paper-fibers` 纸纤维/`low-contrast-linen` 亚麻（类精装布面）/`egg-shell` 细噪点
- **手法**：`background-color:#2a2118 + background-image:url(...) repeat`；生产环境自托管；CC BY-SA 系建议署名

### Poly Haven — Dark Wood
- **URL**：https://polyhaven.com/a/dark_wood ｜ https://polyhaven.com/a/dark_wooden_planks
- **要点**：摄影测量真实深色木材（深棕近黑=古籍书房底色）；取 Diffuse 裁 1K 转 WebP；CC0
- **手法**：上盖 `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.75))` 压暗；`background-blend-mode:multiply`

### ambientCG — Leather001 / Marble010
- **URL**：https://ambientcg.com/view?id=Leather001 ｜ https://ambientcg.com/view?id=Marble010
- **要点**：红棕粒面皮革=精装书封卡片质感；大理石裁竖条做分隔/页脚装饰；CC0；皮革 30+ 变体
- **手法**：皮革+`inset box-shadow` 模拟封面凹凸压边；大理石降 opacity 0.3–0.5

### 3dtextures.me — 做旧黄铜
- **URL**：https://3dtextures.me/2026/02/15/metal-weathered-light-brass-001/ （CC0）
- **要点**：氧化斑驳黄铜只裁小面积：书立、装饰角件、徽标底纹；**大面积金属显廉价**

### Unsplash 皮革书脊 Hero 图
- **本地图**：`../images/leather-bound-books.jpg` https://unsplash.com/photos/lVL86Miltr8
- **手法**：背景图+`linear-gradient(180deg,rgba(20,14,8,.65),rgba(20,14,8,.9))`+烫金标题="暗书房金字"

## CSS 生成技巧

### 烫金文字 ⭐ texteffects.dev
- **URL**：https://texteffects.dev/posts/gold-text-effect
```css
h1 {
  background: linear-gradient(to bottom,#cfc09f 27%,#ffecb3 40%,#3a2c0f 78%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: #CA9A2E; /* 降级兜底 */
}
/* 进阶：background-size:200% + keyframes 移 background-position → 流光烫金 */
/* 厚度感：::before 用 attr(data-text) 错位叠深色阴影 */
```

### SVG feTurbulence 噪点（零图片纸感/颗粒）
- **URL**：https://css-tricks.com/grainy-gradients/ ｜深度 https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/
- **要点**：`baseFrequency` 控颗粒、`numOctaves` 控细节、`stitchTiles='stitch'` 无缝；feDiffuseLighting 可做粗糙纸面
- **手法**：data-URI 内联进 `background-image`，`mix-blend-mode:overlay/soft-light` 融入底色
```html
<svg viewBox='0 0 250 250'><filter id='n'>
<feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/>
</filter><rect width='100%' height='100%' filter='url(#n)'/></svg>
```

### Hero Patterns — 可定制 SVG 纹样
- **URL**：https://heropatterns.com/ （CC BY 4.0 署名）
- **要点**：Moroccan/Formal Invitation/Topography 类纹样；前景色取金 `#b48a3c` 低透明=锦缎书衣内衬
- **手法**：`background-color:#1d150e + data:image/svg+xml` 内联省请求

## 可借鉴点

1. **分层做旧**：深底→木纹/皮革（multiply 压暗）→feTurbulence 噪点（overlay,5–12%）→inset 暗角
2. **烫金三段式**：多停点金属渐变+`background-clip:text`+`::before` 偏移阴影；`background-size:200%` 流光只用在 H1/Logo
3. **透明 PNG 换肤术**：换 `background-color` 即"羊皮纸米白↔深夜书房"整体换肤，做 CSS 变量主题
4. **质感分区**：木/皮只做框架（页头/侧栏/封边），正文低对比纸纹保可读；黄铜大理石只点缀
5. **许可与性能**：Poly Haven/ambientCG/3dtextures/Unsplash=CC0 宽松；Hero Patterns 署名；贴图取 1K 转 WebP/AVIF 自托管
