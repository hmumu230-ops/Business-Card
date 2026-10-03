# 19 · 暖光书房氛围 CSS 技巧

## 资源

### Blur Vignette — Artur Bień ⭐
- **URL**：https://expensive.toys/blog/blur-vignette （含生成器）
- **手法**：`backdrop-filter:blur()` 叠加层 + `mask-image` 由 6 个渐变（4 角 radial+2 边 linear）合成——Vision Pro 式边缘模糊暗角；可换 sepia/grayscale 滤镜变体
```css
.blur-vignette { --radius:32px; --inset:8px; --transition-length:16px; --blur:15px;
  position:absolute; inset:0; border-radius:var(--radius);
  backdrop-filter:blur(var(--blur)); /* mask 由渐变合成 */ }
```

### 暖斑光 Dappled Light — Ken Hawkins / CSS-Tricks
- **URL**：https://www.allaboutken.com/posts/sunlit-dappled-light-effect/ ｜https://css-tricks.com/css-dappled-light-effect/
- **手法**：约 9KB CSS+一个 SVG、零 JS；`mix-blend-mode:plus-lighter` 让灰调渐变"提亮"而非压暗——模拟阳光/灯照进页面；`repeating-linear-gradient` 做百叶窗条纹；尊重 reduced-motion
- **古典场景转译**：把"树叶斑光"换成"高窗光柱/台灯锥形光"——`conic-gradient`/`radial-gradient` 锥形从顶部投下

### Ambilight — 内容色溢光
- **URL**：https://www.expensive.toys/blog/ambilight-effect
- **手法**：SVG filter（feOffset+feColorMatrix+feGaussianBlur）把图片主色投到周围——书封/照片周围泛起同色光晕，深色书房里效果极好

### 基础配方（综合各源）

```css
/* ① 顶部暖光池（房间主灯） */
.light-pool { position:absolute; inset:0; pointer-events:none;
  background:radial-gradient(ellipse at 50% 28%, rgba(200,164,83,.16), transparent 60%); }

/* ② 全局暗角 */
.vignette::after { content:''; position:fixed; inset:0; pointer-events:none;
  box-shadow:inset 0 0 180px rgba(0,0,0,.8); }

/* ③ 局部照明（台灯/射灯扫过书脊） */
.spot { background:radial-gradient(circle at var(--mx,50%) var(--my,40%),
        rgba(255,200,120,.14), transparent 34%); }

/* ④ 烛光微闪（慎用，幅度要小） */
@keyframes candle { 0%,100%{opacity:.92} 50%{opacity:1} }
.glow { animation:candle 3.4s ease-in-out infinite; }

/* ⑤ 灰尘微粒：小尺寸噪点 SVG data-URI 沿 Y 缓慢漂移（transform，不动 layout） */
```

## 可借鉴点

1. **光即叙事**：深色书房里"一盏灯"比均匀照明更有氛围——1 个主光池+若干局部光，其余交给暗角
2. **`plus-lighter` vs `multiply`**：要"光"用前者（提亮），要"影/污渍"用后者——选错混合模式是暗调发脏的常见原因
3. **氛围层全部 `pointer-events:none`**，放 `position:fixed/absolute` 叠加，不抢交互
4. **微动即可**：烛光/尘埃动画幅度克制（opacity±8%、位移<20px），大幅运动会破坏"古典庄严"
5. **移动端降级**：backdrop-filter 与多层渐变有性能成本，`@media (prefers-reduced-motion)` 与低分辨率设备可只留静态暗角
