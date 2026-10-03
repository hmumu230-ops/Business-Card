# 02 · Awwwards 获奖图书/图书馆网站

> 由各主题报告交叉汇总；子代理报告未单独返回时以已知获奖信息+可访问页面为准。

## 案例

### Obys' Design Books — Awwwards SOTD ⭐
- **URL**：https://library.obys.agency/ ｜获奖页 https://www.awwwards.com/sites/obys-design-books ｜Codrops 拆解 https://tympanus.net/codrops/2026/01/12/obys-design-books-turning-a-reading-list-into-a-tactile-web-library/
- **本地图**：`../images/site-obys-library.jpg`
- **要点**："可触摸的纸上图书馆"——抛弃层级导航，所有纸页层叠同屏可见、点击提到最前；每页独立再生纸纹理；重阻尼 smooth scroll 模拟"搬动实体"感
- **手法**：HTML/CSS/JS+GSAP 层叠位移；lift 微交互（先抬升再落下）；Strapi CMS

### Stripe Press
- **URL**：https://press.stripe.com/
- **本地图**：`../images/site-stripe-press.jpg`、`../images/site-stripe-press-scrolled.jpg`
- **要点**：深色 `#201819` + 发光封面；滚动驱动书脊→封面旋转；"Living Cover"生成艺术封面；全站 SSR ~1MB 单 HTML
- **手法**：Three.js 全真 3D 书模+自定义 shader；详见 `06-threejs-3d-shelf.md`

### Aardvark Book Club — Awwwards SOTD
- **URL**：https://www.awwwards.com/sites/aardvark-book-club
- **要点**：scroll-driven 3D book reveal 招牌交互
- **手法**：GSAP+Barba.js+Webflow——证明滚动翻书可用低代码栈实现

### Norstedts — 瑞典最老出版社（Honorable Mention）
- **URL**：https://www.awwwards.com/sites/norstedts ｜书架元素专页 https://www.awwwards.com/inspiration/bookshelf-norstedts
- **要点**：古典出版气质×现代排印的美术方向参照；书架作为真实 UI 元素

### Expo 58 — House of European History（SOTD）
- **URL**：https://historia.europa.eu/en/digital-offer/expo-58 ｜https://www.awwwards.com/sites/expo-58-immersive-experience
- **要点**：可行走 3D 展厅内浏览档案；拟物档案 UI（翻相册/文件夹）；Unity→WebGL 桥接 DOM 事件

### Awwwards 检索入口
- https://www.awwwards.com/websites/?text=book ｜ https://www.awwwards.com/websites/?text=library
- SiteInspire 按 "library/archive" 标签过滤：https://siteinspire.com/

## 可借鉴点

1. 获奖级"书架站"共同点：**一个强隐喻贯彻全站**（纸堆/书墙/展厅），而非局部装饰
2. 深色底+发光内容物是最稳定的评审偏好组合
3. 获奖站普遍保留常规菜单作兜底（Obys 也有 Menu 按钮）——隐喻与可用性并存
4. 拆案渠道：Codrops/Tympanus 常有获奖站官方复盘（含实现细节），比看 awwwards 评论区有效
