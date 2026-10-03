# 07 · 拟物化木质书架 UI（iBooks 时代）

## 案例

### iBooks 木质书架（iOS 5–6）
- **参考**：https://www.theverge.com/2013/11/14/5104266/ibooks-updated-with-ios-7-design
- **要点**：浅色松木书架+封面直立陈列+隔板投影；乔布斯逐张审查皮革/木纹贴图。iOS 7 扁平化后只留"白色渐变行"——架子骨架隐喻保留、材质剥离
- **手法**：无缝木纹 `background-repeat`；每排书底加 8–16px 隔板前沿（浅木正面+深色侧面）；封面 `box-shadow:0 4px 8px rgba(0,0,0,.4)`

### Delicious Library 1–3（Mac）——拟物祖师爷 ⭐
- **参考**：https://en.wikipedia.org/wiki/Delicious_Library ；https://arstechnica.com/gadgets/2013/04/delicious-library-3-is-here-and-its-a-beast/
- **细节**：
  - 每层隔板前沿贴**标签贴纸**写首尾书名范围（"Giampaolo to Levy"）→ 分类导航拟物细节
  - DL3 书架顶部**皇冠线条檐口** + 3 个光源 + 法线/反射/环境贴图；书随鼠标"转头"
  - 20 种木材 ⌘←/⌘→ 切换；不同品类不同背板（书→木架、数码→金属架、工具→洞洞板）
- **手法**：`repeating-linear-gradient` 木纹 + `perspective`+`rotateX/Y` 封面跟光标微转；标签贴纸=隔板前沿浅色小卡片

### Classics for iPhone（2008）——最早"温暖书架"
- **参考**：https://blog.cocoia.com/2008/designing-classics/
- **招牌细节**：点选书"悬浮离架"并在身后隔板与邻书上投下阴影——光影随动的教科书细节；读完时深红丝带书签滑入
- **手法**：`transform-origin:bottom` + `translateY(-20px) scale(1.05)` + 加深 `box-shadow`；丝带=渐变红 `::after` slide-down

### Newsstand / Kindle Fire
- Newsstand：松木横档货架；**空书架激发"填满"冲动**（配合 Store 按钮拉动订阅）→ 留白诱导设计参考
- Kindle Fire：深色木旋转书架 Carousel 主屏；NN/g 拟物教科书案例 https://www.nngroup.com/articles/skeuomorphism/

## CSS 重现资源

### "Building a Book Shelf with HTML and CSS" 教程
- **URL**：https://incodethismeans.com/building-a-book-shelf-with-html-and-css
- **本地图**：`../images/css-bookshelf-tutorial.png`
- **核心技巧**：cuboid 五面拼格间；隔板"地板厚度"单独扁 div 分深浅两色；**格间顶部内阴影模拟顶板遮光**——凹进去的关键一笔

### Wooden Wall CSS Gist —— 纯渐变木纹四层配方 ⭐
- **URL**：https://gist.github.com/WALLReTuRn/1bed172438b868f3472bf11ff0468742
```css
/* ① 底色径向渐变中心受光 */  body { background-image: radial-gradient(#D1A46B,#B57744); }
/* ② 木纹细丝：4 条竖向渐变，background-size 互质 13/29/37/53px 防可见平铺 */
/* ③ 木板拼缝：硬色标 93% 暗线+97% 亮线=板缘倒角，background-size:40px */
/* ④ 超大 inset box-shadow 暗角 */
```
- 同类：Tim Pietrusky 纯渐变木纹 https://gist.github.com/TimPietrusky/5744255 ；漆面胡桃木按钮（88°~92° 微角度 repeating-gradient，周期 3/7/11/23px 互质）https://codefronts.com/components/css-buttons/css-lacquered-walnut-wood-button/

### 现代演化参考
- **ShubhamMChandra/personal-site** https://github.com/ShubhamMChandra/personal-site ：零依赖 CSS 3D 书架作品集、黄铜铭牌、Cormorant Garamond——**与本项目栈最接近的代码级参考**
- Steve Workman CSS3 Bookshelf（2010，hover 抽书原型）：`rotate(-5deg) translateX(-30px)` + `transform-origin:left bottom`
- Obys' Design Books：https://library.obys.agency/

## 可借鉴点

1. **木纹分层配方**：径向底光→互质周期细丝→硬色标板缝→inset 暗角；或直接无缝贴图+这套阴影层
2. **立体感三件套**：隔板深色前沿（厚度）+格间顶内阴影（遮光）+物品接触阴影——纯色块也能像实木格架
3. **灯光叙事**：顶部暖光晕主灯+四周 vignette+重点展品单独 drop-shadow/扫光=博物馆射灯感
4. **拟物交互>堆砌材质**：hover `transform-origin:bottom`+`rotate(-4~6deg) translateY(-15~30px)`=抽出半本；点击离架悬浮+身后投影；小物件点到为止
5. **空与满都是设计**：半空格层做"最近在读/心愿单"+"推荐我一本书"CTA，书架有生长感
