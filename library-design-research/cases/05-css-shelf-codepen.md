# 05 · 纯 CSS 书架/3D 书本实现（CodePen 系）

## 案例

### Codrops Animated Books with CSS 3D Transforms ⭐ 经典教材
- **URL**：https://tympanus.net/codrops/2013/07/11/animated-books-with-css-3d-transforms/ ｜无 JS demo https://codepen.io/DanSmaR/details/eYZQpxv
- **要点**：精装书=封面立方体+独立书脊面+封底立方体；平装=封面+横纹纸页+封底；各部件可用 CSS/图片/锚点替换
- **手法**：
```css
/* hover 开书：封面绕书脊轴翻转，页面错峰翻转 */
.book:hover > .hardcover_front { transform:rotateY(-145deg) translateZ(0); z-index:0; }
.book:hover > .page li:nth-child(1) { transform:rotateY(-30deg);  transition-duration:1.5s; }
.book:hover > .page li:nth-child(2) { transform:rotateY(-35deg);  transition-duration:1.8s; }
.book:hover > .page li:nth-child(3) { transform:rotateY(-118deg); transition-duration:1.6s; }
/* 关书时页面 transition-duration 更短，避免与封面穿插 */
```

### Codrops 3D Book Showcase
- **URL**：https://tympanus.net/codrops/2013/01/08/3d-book-showcase/
- **要点**：hover `rotate3d(0,1,0,35deg)` 微转；"View inside"开盖+箭头翻页预览内页；不支持 CSS 3D 的浏览器降级为纯封面图

### 3D Book Browsing — jkantner ⭐ 纯 CSS 抽书预览
- **URL**：CodePen "3D Book Browsing"（Gist 备份 https://gist.github.com/OhBonsai/414a97f9ccaa36dbe12334b2d047f6d8 ）
- **要点**：模拟从书架抽书+第一人称预览；**零 JS**——labels+offscreen radio inputs 管理每本书状态，reset input 当"放回"按钮；SCSS 参数化 `$blocks` 列表定义书架格子与每本书的坐标/宽高/颜色
- **手法**：`$sqSize` 栅格化 3D 空间；`.block-inner` 六面拼装；Safari 有状态动画怪异行为需注意

### Book Opening Animation — Elo（纯 CSS 开书动画）
- **URL**：https://codepen.io/Elo/embed/mxVwyW/
- **手法**：`perspective:70rem`+`transform-origin:100% 0`；封面 `rotateY(0→180deg)`、页面不同终态角度（55°/150°/180°）+animation-delay 错峰；`30%` 关键帧切换 `z-index:999` 解决翻页穿插
- 纸页色 `#e9e6c4` + `inset 3px 0 20px rgba(0,0,0,.2)` 书脊侧内阴影

### Steve Workman CSS3 Bookshelf（2010 原型）
- **URL**：https://www.steveworkman.com/2010/css3-bookshelf/
- **手法**：hover 抽书 `rotate(-5deg) translateX(-30px)`+`transform-origin:left bottom`+box-shadow——最简可用抽书动效

### Building a Book Shelf with HTML and CSS（格架教程）
- **URL**：https://incodethismeans.com/building-a-book-shelf-with-html-and-css
- **本地图**：`../images/css-bookshelf-tutorial.png`
- **手法**：cuboid 五面拼格间；隔板"地板厚度"扁 div；格间顶部内阴影模拟顶板遮光

## 可借鉴点

1. **纯 CSS 能走多远**：radio input 状态机可撑"抽书→预览→放回"完整交互（jkantner）；状态复杂度再高再上 JS
2. **翻页穿插靠 z-index 时序**：翻起过程 `z-index` 前置（30% 处切 999），落下归位
3. **错峰 delay 是"纸感"关键**：多页不同 duration/delay（1.2–1.8s 区间）比同步翻页真实
4. **参数化起步**：SCSS/CSS 变量先定义 `sqSize`、书坐标表，再谈装饰
5. **降级自觉**：Codrops 先例——不支持 CSS 3D 时显示纯封面图
