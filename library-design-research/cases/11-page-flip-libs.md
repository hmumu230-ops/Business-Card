# 11 · 翻书/翻页效果库与案例

> 本项目已安装 `page-flip@2.0.7`（StPageFlip）与 three.js，本页为选型与配方。

## 库对比

### StPageFlip（npm: `page-flip`）⭐ 本项目已装
- **URL**：https://nodlik.github.io/StPageFlip/ ｜ https://github.com/Nodlik/StPageFlip
- **特性**：零依赖纯 JS；canvas 图片与复杂 HTML 块均可为页；软页/硬页两种类型（仅 HTML 模式）；横竖屏；移动端多点触控
- **用法**：`new PageFlip(el,{width,height}).loadFromHTML(pages)`；`flipNext(corner)`/`flip(pageNum,corner)`/`turnToPage`
- React 包装：https://nodlik.github.io/react-pageflip/（`ref.pageFlip()` 取实例）

### turn.js — 老牌 jQuery 插件
- **要点**：star 数历史最高但更新慢、触屏适配差；`$("#flipbook").turn({width:800,height:600})`；自定义页面材质/翻页影子/书脊厚度自由但兼容性需自己修——**新项目不建议首选**

### turngl — WebGL 卷页库 ⭐ 上限最高
- **URL**：https://github.com/oguzhanT/turngl
- **手法**：细分 PlaneGeometry 顶点沿圆柱路径形变 `x=dist·cos(angle), z=dist·sin(angle)`，外缘超前内缘 LEAD 系数——真·纸张卷曲；可移植公式进顶点 shader，GSAP tween `progress` 驱动

### Wawa Sensei 3D Book Slider 教程
- **URL**：https://wawasensei.dev/it/tuto/3d-book-slider-landing-page-threejs-and-react
- **手法**：R3F 实现翻页——曲线控弯曲强度与旋转角、多页翻动 delay 错峰、hover 页高亮；带完整视频

### 纯 CSS 方案
- 见 `05-css-shelf-codepen.md`：radio-input 抽书预览（jkantner）、错峰 `rotateY` 翻页（Elo/Codrops）
- Cover Flow 式 `scroll-snap + view-timeline`：https://addyosmani.com/blog/coverflow/ → `../images/site-coverflow.jpg`

## 选型建议

| 需求 | 选 |
|---|---|
| 名片"翻开一本栏目书"（页数少、求稳） | page-flip/StPageFlip（已装） |
| 书页逼真卷曲+与 Three.js 场景融合 | turngl 公式 + 自写顶点动画 |
| 零 JS 彩蛋/降级 | Codrops/Elo 纯 CSS 错峰翻页 |
| 移动端保底 | CSS Cover Flow 或静态书页图 |

## 实践要点

1. 软页物理（软封面杂志）与硬页（精装书）手感不同——精装用硬页或低弯度
2. 翻页音效+页面"先抬后落"lift 微交互大幅提升触感（Obys 经验）
3. 页面内容渲染为贴图+热区是成本最低路径（Book of Qbject 验证）
4. 注意 `prefers-reduced-motion` 与移动端窄屏：书脊降到 ~44px 保可触性（Bibliotheca Perpetua 做法）
