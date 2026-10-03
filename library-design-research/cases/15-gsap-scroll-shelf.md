# 15 · 滚动驱动书架动画（GSAP / Lenis）

## 案例

### The Codex Academy — 整站即一本书 ⭐
- **URL**：https://github.com/kash-123/cinematic-scroll-landing （含 `references/book-mode.md` 讲 sheet 模型与时间线数学）
- **手法**：100vh sticky 舞台 + 单条 scrubbed GSAP timeline；CSS 3D "sheet" 绕书脊旋转，正面=右页 k、背面=左页 k+1；总滚动 ~8 屏；React19+ScrollTrigger+Lenis

### Codrops Blender 相机路径滚动画廊 ⭐
- **URL**：https://tympanus.net/codrops/2026/07/07/building-a-scroll-driven-3d-gallery-using-a-blender-camera-path-with-three-js-and-gsap/
- **手法**：Blender 画路径导 JSON → `THREE.CatmullRomCurve3(points,true)` 闭合循环；相机位置由 t(0→1) 驱动，滚动进度直接映射——"沿走廊两侧书墙推进"的标准解

### Codrops Cinematic 3D Scroll — 镜头编排方法论
- **URL**：https://tympanus.net/codrops/2025/11/19/how-to-build-cinematic-3d-scroll-experiences-with-gsap/
- **手法**：ScrollSmoother 包裹 + WebGL canvas `position:fixed` 背景层 + `height:500vh` 滚动驱动层；`scrub:1` 驱动 `cameraAnim{x,y,z}` 逐镜头补间；CustomEase 电影感缓动

### GSAP 官方横向滚动画廊 ⭐
- **URL**：https://demos.gsap.com/demo/horizontal-scrolling-gallery/ ｜进阶 https://codepen.io/GreenSock/embed/WNJOVmP
- **本地图**：`../images/site-gsap-horizontal.jpg`、`../images/site-gsap-horizontal-scrolled.jpg`
- **手法**：pin+scrub，横移 `x:-(scrollWidth-视口)`，`ease:"none"`；`marginLeft:50vw` 首尾居中；**`containerAnimation`**——每卡片在横向容器内有独立 ScrollTrigger（`start:"left 75%"`），卡片 `rotateY:-100/rotateX:25/scale:2.5` 转正="书脊转封面"

### Envato Tuts+ 横向滚动教程
- **URL**：https://webdesign.tutsplus.com/create-horizontal-scroll-animations-with-gsap-scrolltrigger--cms-108881t
- `end:"+=500%"` 精确控驻留；滑到某本书时 caption/简介浮现

### Codrops Never Ending Story — Lenis 无限滚动
- **URL**：https://tympanus.net/codrops/2026/05/28/the-never-ending-story-building-a-seamless-infinite-scroll-experience-with-gsap-lenis/
- **手法**：首节复制到尾部+Lenis `infinite`+snap 逐屏吸附——"无尽书架走廊"意象

### Cover Flow 纯 CSS 版 — 降级方案
- **URL**：https://addyosmani.com/blog/coverflow/ ｜demo https://scroll-driven-animations.style/demos/cover-flow/css/multiple
- **本地图**：`../images/site-coverflow.jpg`
- **手法**：零 JS——`scroll-snap-type:x mandatory` 居中吸附 + `view-timeline`(axis:inline) 驱动 z-index 与 rotateY 关键帧

### 补充站点
- Aardvark Book Club（Awwwards SOTD）：scroll-driven 3D book reveal，GSAP+Barba.js+Webflow
- Norstedts（瑞典最老出版社）：https://www.awwwards.com/sites/norstedts 古典出版×现代排印
- LUCID（R3F）：相机与 lookAt 各走一条 CatmullRomCurve3+逐帧 damp；reduced-motion 降级经验
- shelffaux https://github.com/cfritsch5/shelffaux ：Canvas 逐条采样封面像素做透视，鼠标掠过书脊转封面，纯 JS
- lenis-gsap-lab https://github.com/creativoma/lenis-gsap-lab ：**Lenis+ScrollTrigger 接线范本**——`lenis.on('scroll',ScrollTrigger.update)` + `gsap.ticker.add(t=>lenis.raf(t*1000))`

## 可借鉴点

1. **整站即一本书**：100vh sticky+单条 scrubbed timeline 驱动 CSS 3D sheet 翻页，纯 DOM 无需 WebGL
2. **相机推进公式**：fixed canvas+500–760vh scroll-driver，progress→`CatmullRomCurve3.getPointAt(t)`；`scrub` 用数值 0.8–1 吸收快滚抖动；lookAt 单独走视线曲线
3. **横向书架段=pin+scrub+containerAnimation**：每本书独立触发器"书脊转正+信息浮现"；`end:"+=300~500%"` 控节奏
4. **触感来自细节**：纸纹差异+点击先抬升再落下的 lift 微交互+重阻尼 smooth scroll+Lenis infinite snap
5. **降级路径**：`view-timeline` 纯 CSS Cover Flow；`prefers-reduced-motion` 静态版；WebGL 书墙是增强非门槛
