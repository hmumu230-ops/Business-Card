# 09 · 书架/图书馆隐喻的个人网站 ⭐（与本案最贴合）

## 案例

### The Bookshelf — Shubham Chandra ⭐ 最贴"电子名片"
- **URL**：https://shubhamchandra.com ｜源码 https://github.com/ShubhamMChandra/personal-site
- **本地图**：`../images/site-shubham-bookshelf.jpg`
- **要点**：整站=一面 3D 暖木书架+黄铜名牌（带装饰螺丝）。**每本书=一个栏目**：Work 深红 / About 藏蓝 / Contact 墨绿 / References 深紫 / Mystery 紫(Coming soon)
- **交互链**：点书→抽出翻开→书架坍缩为导航条→点外部合书归架；灵感自《上古卷轴5》物品栏
- **手法**：零框架纯 HTML/CSS/JS（styles.css ~2800 行）；CSS 3D transforms；SVG 渐变+光照画书脊；`#work` hash 路由；键盘翻页；自定义光标

### Adam Majmudar Reading 页 ⭐（此流派开端）
- **URL**：https://adammaj.com/ ｜源码 `components/Bookshelf.tsx` https://github.com/adam-maj/adammaj.com
- **本地图**：`../images/site-adammaj-reading.jpg`
- **要点**：书=真实读过的书+书评；书脊朝外排列，点击旋转露封面进书评页；横向滚动+箭头+边界钳制
- **手法**：Next.js+Chakra；**CSS transform+SVG filter 伪造 3D**（书脊窄条 41.5px+封面 4×宽），远比 WebGL 轻；`useDimensions` 响应式算可视书数

### leviv.cool Bookshelf — Goodreads 数据驱动
- **URL**：https://leviv.cool/projects/2025/10/12/bookshelf.html
- **要点**：**页数→书脊宽度、评分/元数据→外观**——"厚薄不一"的真实感关键；Goodreads CSV 数据源+封面抓取+书脊取色
- **手法**：Adam Majmudar 代码移植为 Svelte；研究过 Stripe Press 编译产物后主动降级为 CSS 方案

### Stripe Press — 3D 书架源头
- 见 `06-threejs-3d-shelf.md`

### Obys' Design Books — 可触摸纸上图书馆（Awwwards SOTD）
- **URL**：https://library.obys.agency/ ｜拆解 https://tympanus.net/codrops/2026/01/12/obys-design-books-turning-a-reading-list-into-a-tactile-web-library/
- **本地图**：`../images/site-obys-library.jpg`
- **要点**：抛弃层级导航——所有页面纸页堆叠同屏可见，点击提到最前；三级导航并存（点纸页/总览菜单/快捷菜单）；用户可重排堆叠；每页独立再生纸纹理
- **手法**：HTML/CSS/JS+GSAP；纸质纹理；z-index 层叠管理

### Bibliotheca Perpetua — 博尔赫斯无限图书馆 ⭐ 最贴"古典大图书馆"
- **URL**：https://fable-25-830.netlify.app/sites/bibliotheca/ ｜设计文档 https://fable-25-830.netlify.app/sites/bibliotheca/guide/
- **本地图**：`../images/site-bibliotheca.jpg`、`../images/site-bibliotheca-scrolled.jpg`
- **要点**：赭石建筑+绿黑阅览室+血红皮革书脊+灯光照明；滚动 520vh 穿"无限书架长廊"（9–12 框体模运算回绕）；程序化书名两半混排+作者+皮色+索书号+品相+摘录；点书脊开 CSS 皮革装帧书（纸渐变书页+folio 页码+书眉）；"编目柜"输入短语哈希生成稳定书目
- **手法**：原生 JS；`translate3d`+modulo 无限回廊；`makeBook()`/`mix()` 防重复；移动端降 44px 窄书脊

### Deskfolio — 书桌场景作品集
- **URL**：https://github.com/mortspace/Deskfolio
- **要点**：摊开的书=作品集本体；周围可拖拽缩放桌面贴纸；hover 荧光笔迹自动描下划线（stroke-dashoffset）；证明**非书道具（贴纸/名牌/台灯）也能承载内容**
- **手法**：弹簧物理翻页；SVG 路径描边；长按环形菜单

### Talking Bookshelf — AI 书架
- **URL**：https://talkingbookshelf.com/demo ｜复盘 https://dev.to/shusukedev/...
- **本地图**：`../images/site-talking-bookshelf.jpg`
- **要点**：书架拟人化（眨眼眼镜+书拼嘴）；对话式访问——"问书架一个问题"可做电子名片彩蛋
- **手法**：React19+MUI+Framer Motion；Gemini 后端三工具函数

### 补充实现资源
- kat3samsin/simpleshelf https://github.com/kat3samsin/simpleshelf ：零依赖 3D 书架组件，hover 露封面、页数定尺寸、Open Library 封面 API
- mawise/bookshelf https://github.com/mawise/bookshelf ：Calibre 数据源+封面宽高比定书高
- kmcheung12/goodshelf ：Svelte+Goodreads RSS
- books.rixx.de ：静态站书评库"书单列表"IA → `../images/site-rixx-books.jpg`
- thecreations.com Vintage Library：12 封面随光标阻尼弹簧移动（⚠️ 部署已暂停，`site-vintage-library.jpg` 为暂停提示页）

## 可借鉴点（信息架构）

1. **两级映射按内容量选型**：内容少→书=栏目（Shubham 5 本+Mystery 悬念位）；内容多→书=条目（Adam/Levi 模式+横滚或程序化生成）；折中→一层=一分类
2. **物理属性编码数据**：页数→厚度、评分→做旧度、年份→装帧风、分类→色系；"厚薄不一、高低错落、偶有几本斜靠/平放堆叠"才真实
3. **混合 IA 更可用**：书架=主视觉+一级入口，铭牌/卡片目录/梯子做辅助，始终保留普通列表出口
4. **完整交互链可照搬**：悬停=微倾+微光→点击=抽出/旋转露封面→打开=翻页→关闭=归架；每步对应技术层级，CSS transform+SVG 滤镜即达 adammaj 水准
5. **氛围道具是差异化空间**：黄铜名牌/卡片目录柜/台灯暖光/桌面文具/AI 图书管理员——让每个书架站长得不一样
