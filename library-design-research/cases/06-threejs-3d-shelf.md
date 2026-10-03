# 06 · Three.js / WebGL 3D 书架场景

## 案例

### Stripe Press — 行业标杆 ⭐
- **URL**：https://press.stripe.com/ （拆解 https://norrly.io/inspiration/press-stripe-com）
- **本地图**：`../images/site-stripe-press.jpg`
- **要点**：深色底 `#201819` + 单一高亮强调色，烫金封面发光；滚动驱动书脊→封面→封底旋转；每本书=真 3D 物体（几何+贴图+自定义 shader 哑光微闪）
- **手法**：滚动进度绑定 `rotationY`——与 GSAP ScrollTrigger 天然契合

### Symptom Library（Lee Martin 技术博客）⭐ 可直接照抄
- **URL**：https://leemartin.dev/developing-a-symptom-library-for-shinedown-in-three-js-75e6b38a687a
- **手法**：
  - 低模书 = `BoxGeometry`（书页块+纸纹理）+ `PlaneGeometry`×3（后封面/书脊/前封面），统一挂 `Object3D`
  - 前封面独立做——沿书脊铰链开盖动画
  - **导航移动相机而非书**——无限书架的关键简化
  - 封面图案 canvas 程序化生成，支撑无限新书

### MyShelves — 第一人称书房（性能经验值钱）
- **URL**：https://discourse.threejs.org/t/myshelves-a-first-person-library-you-build-book-by-book/93870
- **手法**：**"Draw calls 才是预算，不是三角形"**——一屋书仅 ~6k tris 但 ~19 draw call/本 → 书脊墙必须 `InstancedMesh`/合并几何；`shadowMap.autoUpdate=false` 只在物体移动时手动渲阴影（点光源阴影=cube 6 次渲染）；物理 1/60 vs 渲染 144fps 相机抖动用插值解决

### The Complete Shelf — 已有 Astro 移植版 ⭐⭐
- **仓库**：https://github.com/KhanMaytok/complete-shelf （**Astro + React islands**，`src/scripts/shelf.js` + `src/styles/shelf.css` + `src/data/books.ts`）；原版 https://github.com/LINY12121/Three.js-bookshelf-inspired-by-the-Stripe-Press-site.
- **要点**：精装书完整结构（boards/spine/hinges/endpapers/page block/headbands/烫金/contact shadows）；程序化布料、烫金、书口、木纹 roughness/normal 纹理（canvas 生成+WebP 图集）
- **手法**：交互状态机 `shelf → opening detail → closed inspection → open book → closing → shelf`，全部变换走确定性 GSAP 时间线 + 精确终点，reparent 零跳帧

### The Book of Qbject — 3D 书本形态作品集
- **URL**：https://book.qbject.dev/ ｜ https://github.com/qbject/the-book-of-qbject/
- **本地图**：`../images/site-qbject-book.jpg`
- **手法**："页面=贴图+热区"是个人站成本最低方案；Three.js+TS+Vite 无框架

### 翻页卷曲实现
- **Wawa Sensei 教程** https://wawasensei.dev/it/tuto/3d-book-slider-landing-page-threejs-and-react ：R3F 曲线控弯度+多页 delay 错峰
- **turngl** https://github.com/oguzhanT/turngl ：细分 `PlaneGeometry` 顶点沿圆柱路径形变 `x=dist·cos(angle), z=dist·sin(angle)`，外缘超前内缘——公式可抄进顶点 shader，GSAP tween 一个 `progress` 驱动

### Vik's Book Shelf — 几百本书 60fps
- **URL**：https://vikramtiwari.com/notes/side-projects/book-shelf.html
- **本地图**：`../images/site-viks-bookshelf.jpg`
- **手法**：共享 box 几何+自定义封面纹理、环形 carousel 轨道、Fuse.js 模糊搜索+CSV 数据源

## 免费 3D 模型资源

| 资源 | URL | 许可 |
|---|---|---|
| Poly Haven Wooden Bookshelf Worn | https://polyhaven.com/a/wooden_bookshelf_worn | CC0，59MB 全 PBR |
| Poly Haven 书架分类 | https://polyhaven.com/models/furniture/storage-furniture/shelving-bookcases | CC0 |
| Sketchfab Wooden Bookcases with Books | https://sketchfab.com/3d-models/wooden-bookcases-with-books-d0618ac16b2a4a87b9b6c7d5e6765626 | 7k tris 4K PBR |
| Sketchfab Librarian's Room | https://sketchfab.com/3d-models/librarians-room-5363dd8100c64cb2a99b5619b7d78610 | 9.2k tris 书房场景 |
| Poly Pizza 低模书架 | https://poly.pizza/m/b8uN4cUxVrc | CC-BY，快速原型 |

⚠️ 高模（50 万+ tris）只适合烘焙底模或远景，铺满墙必须减面/实例化。

## 可借鉴点

1. **移动相机而非书** + 确定性状态机：GSAP timeline 用 `fromTo`（非 `to`）根除跳帧
2. **Draw call 是第一预算**：InstancedMesh + `instanceColor`/图集 UV 偏移；`shadowMap.autoUpdate=false`
3. **低模书公式**：BoxGeometry 书页 + PlaneGeometry×3 挂铰链 Group；翻页=铰链旋转+顶点圆柱卷曲
4. **氛围三件套**：深底+单一暖光+程序化 canvas 纹理+contact shadow；Poly Haven CC0 补 PBR
5. **架构已验证**：Astro 壳 + 无框架 Three.js 场景 + HTML 控件覆盖层可行；备 CSS 3D 降级方案
