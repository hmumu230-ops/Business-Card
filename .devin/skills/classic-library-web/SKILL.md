---
name: classic-library-web
description: 古典大图书馆/满墙书架写实风格网页的设计与实现规范——配色、字体、书脊CSS、3D书架、滚动叙事、装饰元素。基于 library-design-research/ 案例库提炼。
---

# 古典图书馆风格 Web 实现规范

为「写实古典大图书馆 / 满墙书架」风格页面提供可直接落地的配方。案例证据见 `library-design-research/`（22 个主题案例文件 + images/ 实拍截图与素材图）。本项目技术栈：Astro + Three.js + GSAP + Lenis + page-flip + Cinzel/Cormorant/IM Fell/Noto Serif SC。

---

## 1. 色彩系统（双基调，按段落交替）

**暗色基调**（书墙/展厅/hero，主基调）：
```css
--ink:        #14110E;  /* 最深底 */
--mahogany:   #4A2C1D;  /* 书架木/皮革 */
--forest:     #1F3A2E;  /* 墨绿次底（可选） */
--walnut:     #241708;  /* 近黑橡木（远景剪影用 #1a0f08/#241509） */
```

**纸色基调**（正文/卡片/扉页，本项目现有 token 已吻合）：
```css
--paper:      #F2EAD6;  /* 羊皮纸 */   --card: #F8F1E0;
--ink-text:   #2E241A;  /* 墨色正文 */  --ink-soft: #6B5A44;
--line:       #D9C9A8;
```

**点缀色**（总量 ≤10%，少即是多）：
```css
--gold:       #B8933F;  /* 烫金：线/图标/描边/标题 */
--gold-bright:#C9A86A;  /* 蜡烛金（暗底上的金） */
--oxblood:    #6C1818;  /* 皮书脊红/印章红（accent 现 #a63f2e 亦可） */
```

规则：深底上文字用羊皮纸色（对深松绿/墨黑底对比度 ≥7:1）；纸面上文字用墨色。强调色永远只有一个色系在场。

## 2. 字体与排版

- **西文三件套**：标题 `Cinzel`(700, 全大写, letter-spacing .08em)；正文 `EB Garamond`/`Cormorant Garamond`；引文/章节题 `IM Fell English`(SC 变体得 small caps)
- **中文**：`Noto Serif SC`。**font-family 栈中拉丁字体必须前置**（Noto Serif SC 的拉丁字形=Source Serif，气质不符）
- **纪律**：正文 16–18px、`line-height` 无单位 ≥1.6（中文 1.7 更稳）、行长 `max-width:62–66ch` 居中成"版框"；强调用字号/斜体/small caps，**少用 bold**；禁 blackletter 与 Times
- **垂直节奏**：块间距=行高整数倍（`margin:1.7em`）
- **章节开篇**：drop cap `initial-letter:3 3`（`@supports` 包裹，float 兜底）+ `::first-line{font-variant:small-caps}`；中文用 `text-indent:2em`
- **扉页式首页**：小字眉题(Cinzel caps)→烫金细线→主标题→斜体副题→底部"出版行"（城市·年份）；页脚 colophon+monogram

## 3. 书架构建——三条技术路线（按预算选型）

| 路线 | 适用 | 上限参考 |
|---|---|---|
| A. CSS 2.5D 书脊墙 | 内容列表/栏目导航，首选 | adammaj.com（CSS transform+SVG 滤镜伪 3D） |
| B. CSS 3D 抽书/翻页 | 电子名片级（5–10 本书=栏目） | shubhamchandra.com、Codrops animated books |
| C. Three.js 满墙/长廊 | 沉浸式 hero/展廊 | Stripe Press、Bibliotheca Perpetua |

### 路线 A：书脊墙配方（推荐起步）
```css
.book { width:22–46px; /* JS 随机，或页数→宽度 */
        height:78–96%; /* JS 随机 */
        background:linear-gradient(90deg, 深色 0%, 主色 45%, 亮色 55%, 主色 100%); /* 圆柱受光 */
        box-shadow: inset -3px 0 6px rgba(0,0,0,.4); }
.spine-title { writing-mode: sideways-lr; }   /* 英文书脊自下而上；中文可 vertical-rl */
/* 精装凹槽：再叠一层色标挤在 0–5% 区间的 linear-gradient（黑→白高光→透明硬切） */
/* 竹节装饰带：2–3px 横向 repeating-linear-gradient 亮暗线 */
```
- 姿态破机械感：±2–7° 斜靠、2–3 本水平横堆、1 本半抽出；留 1 个空档/"Coming soon"位
- 交互：hover `transform-origin:bottom` + `rotate(-4~6deg) translateY(-15~30px)` + 投影加深 = 抽出半本

### 路线 B：CSS 3D 书（电子名片"书=栏目"）
- 结构：`.book-container{perspective} > .book{preserve-3d}`；封面 `translateZ(thickness/2)`，书脊/书页侧缘 `rotateY(90deg)`，书页侧用 `repeating-linear-gradient` 灰白条
- 参数变量化：`--book-thickness/--spine-radius/--cover-radius/--aspect-ratio`
- 交互叙事链：悬停微倾+微光 → 点击抽出转封面 → 打开翻页（page-flip 已在依赖里）→ 关闭归架。打开后书架可坍缩为导航条（Shubham 模式）

### 路线 C：Three.js 场景（沉浸 hero）
- **移动相机而非书**：书按 offset 排列，`CatmullRomCurve3` 相机路径，scroll progress→t
- **低模书公式**：`BoxGeometry`(书页) + `PlaneGeometry`×3(封底/书脊/封面挂铰链 Group)
- **性能红线**：draw call 是预算不是三角形——书脊用 `InstancedMesh`+`instanceColor`/图集 UV；`shadowMap.autoUpdate=false` 仅在变化时渲；点光源阴影=cube 6 次渲染
- **状态机**：`shelf → opening → inspect → open → closing → shelf`，全部变换走 GSAP `fromTo` 确定性时间线（勿用 `to`），reparent 零跳帧
- 翻页卷曲：细分 PlaneGeometry 顶点沿圆柱路径 `x=d·cos(a), z=d·sin(a)`，GSAP tween `progress` 驱动 uniform
- 现成参考：`KhanMaytok/complete-shelf`（Astro+React islands 移植版，与本项目同构）

## 4. 质感与光（写实感的来源）

**分层做旧**（通用四层）：底色 → 纹理（multiply 压暗）→ 噪点（overlay, opacity .05–.12）→ inset 暗角

- **木纹无图配方**：径向底光 + 3–4 条微角度 `repeating-linear-gradient` 细丝（周期取互质 px：13/29/37/53 防可见平铺）+ 硬色标板缝（93% 暗线+97% 亮线）+ 超大 inset 暗角
- **格架立体感三件套**：隔板深色前沿（木板厚度）+ 格间顶部内阴影（顶板遮光）+ 书底接触阴影
- **纸感**：`library-design-research/images/texture-paper-fibers.png` 等透明噪点 PNG 叠在任意底色上即换肤（暗↔亮主题共用）
- **噪点零请求**：SVG `feTurbulence`(fractalNoise, baseFrequency .65, octaves 3, stitch) data-URI 内联
- **烫金文字**（只用 H1/Logo）：
```css
background:linear-gradient(to bottom,#cfc09f 27%,#ffecb3 40%,#3a2c0f 78%);
background-clip:text; -webkit-text-fill-color:transparent;
/* ::before 用 attr(data-text) 错位叠深色阴影=金箔厚度；background-size:200% 动画=流光 */
```
- **暖光氛围**：`radial-gradient(ellipse at 50% 30%, rgba(200,164,83,.18), transparent 60%)` 光池 + `inset 0 0 180px rgba(0,0,0,.8)` 暗角；hover 时金色描边渐亮；可选烛光 flicker 微动画

## 5. 滚动叙事（GSAP + Lenis 接线）

```js
// 单一滚动权威
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t * 1000));
```
- **相机推进书墙**：canvas `position:fixed` + `height:500–760vh` 隐形滚动层；`scrub:0.8–1`（数值非 true，吸收快滚抖动）；lookAt 单独走一条视线曲线+逐帧 damp
- **横向书架段**：pin+scrub+`containerAnimation`，每本书独立触发器"书脊 rotateY 转正+信息浮现"；`end:"+=300~500%"`；`marginLeft:50vw` 收尾
- **触感细节**：点击书先 `y:-8` 抬升再落下的 lift 微交互；重阻尼 smooth scroll
- **降级**：`prefers-reduced-motion` 静态版；纯 CSS `scroll-snap + view-timeline` 可做 Cover Flow 式书脊浏览；WebGL 为增强非门槛

## 6. 信息架构（书架上放什么）

- **内容少（电子名片）**：书=栏目（Work/About/Contact/References + 1 本 Mystery 悬念位），5 本一层刚好
- **内容多**：书=条目，元数据驱动外观——页数→厚度、评分→做旧、分类→色系；"厚薄不一、高低错落"才真实
- **混合 IA**：书架=主视觉+一级入口；铭牌/卡片目录柜/梯子做辅助导航；**始终保留普通列表出口**
- **道具承载内容**：黄铜名牌=站标、卡片目录=搜索索引、标签贴纸=分类名、丝带书签=当前位置、藏书票=关于我

## 7. 装饰元素（零成本优先）

- `hr` 替换：`hr::before{content:'❦'}` 或 `⁂`（fleuron/asterism 字符，天然适配暗色）
- 藏书票身份卡：纹章框+EX LIBRIS 铭带+签名留白三段式内联 SVG（about/页脚）
- 卡片目录配色：牛皮纸 `#c4a574`/卡片 `#f5edd3`/标签 `#d8b964`/印章红 `#8b2920`；`repeating-linear-gradient` 横线纹+22px 红左边线+`rotate()` 印章
- 装饰边框：`border-image` 九宫格单 SVG data-URI（角落保形、边缘 round/stretch、中央 fill）
- 公共领域素材：fromoldbooks.org 雕版字母做图片型 drop cap；Wikimedia Ex Libris 分类

## 8. 素材速查

- **本地实拍图**：`library-design-research/images/`（图书馆大厅、书脊特写、纹理 PNG、19 个参考站截图 `site-*.jpg`）
- **书封 API**：`https://covers.openlibrary.org/b/isbn/{isbn}-M.jpg`（`?default=false` 缺图返 404，需回链致谢）
- **CC0 材质**：polyhaven.com（dark_wood/wooden_bookshelf_worn）、ambientcg.com（Leather001/Paper001/Wood019）
- **Unsplash 直链**：`images.unsplash.com/photo-{id}?fm=jpg&q=80&w=1600`（清单见 cases/21）
- **许可**：Wikimedia 区分 PD 与 CC BY-SA（署名+同许可）；生产环境一律自托管转 WebP

## 9. 反面清单（避免显廉价）

- ❌ blackletter/Times New Roman 正文；❌ 整面金属贴图；❌ 书架本身乱动（动在书不在架）
- ❌ 整齐划一的书脊（必须随机宽高）；❌ 纹理盖住文字可读性；❌ 无降级的强制 WebGL
