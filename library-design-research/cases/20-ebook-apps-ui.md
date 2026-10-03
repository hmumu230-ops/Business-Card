# 20 · 电子书管理应用的书架 UI

## 案例

### Calibre-Web — 编目式界面
- **URL**：https://github.com/janeczku/calibre-web
- **本地图**：`../images/calibre-web-main.png`
- **要点**：左侧栏 **Authors/Series/Tags/Publishers/Languages/Ratings** = 图书馆编目法直接映射；封面网格墙+随机封面横幅；自定义 shelves 收藏集；内置 caliBlur! 深色主题
- **手法**：Bootstrap3+jQuery 服务端渲染；主题可整体替换

### Komga — 仪表盘+横向滚动画廊
- **URL**：https://github.com/gotson/komga ｜demo https://demo.komga.org
- **要点**：Dashboard 横向滚动封面行（Keep Reading/Recently Added）=流媒体首页式；字母索引条+筛选抽屉（genre/tag/publisher/language）
- **手法**：Vue2+Vuetify；`HorizontalScroller`+`ItemBrowser` 组件

### Kavita — 虚拟滚动卡片网格
- **URL**：https://github.com/Kareadita/Kavita ｜demo https://demo.kavitareader.com/
- **本地图**：`../images/kavita-ui.png`
- **要点**：深色默认主题封面卡片墙为主角；字母 jump bar+元数据筛选栏=标志导航；自定义主题生态
- **手法**：Angular+SCSS；虚拟滚动渲大网格

### Audiobookshelf — 字面意义的"书架行" ⭐
- **URL**：https://github.com/advplyr/audiobookshelf ｜demo https://audiobooks.dev/
- **本地图**：`../images/audiobookshelf-ui.png`
- **要点**：`BookShelfCategorized` 把首页组织成真·一排排书架——每层 shelf 是一行封面+底部搁板线；封面尺寸滑杆；方形/书形宽高比切换
- **手法**：Vue/Nuxt；`app-book-shelf-row` 组件

### Ubooquity — 可换肤老牌
- **URL**：https://www.vaemendis.net/ubooquity/static10/themes
- **要点**：社区主题生态；**"Sepia Comfort"**（暖褐纸感+圆角字体）=纸感配色阅读场景范本；Plex 风主题（顶栏+侧栏+Recently Added 行）

### Jellyfin 图书库
- **URL**：https://github.com/jellyfin/jellyfin-plugin-bookshelf
- **要点**：封面优先（顶层即封面墙）、作者导向浏览、阅读进度指示器；扁平封面墙+元数据筛选优于深文件夹层级

## 可借鉴点

1. **真书架隐喻**：每行封面下加木纹/黄铜搁板线+"继续阅读""新入藏"标签牌，比纯网格有图书馆感
2. **编目式侧栏**：作者/系列/标签/年份/评分=老式卡片目录柜数字化，可做黄铜铭牌样式
3. **字母索引条**：A–Z jump bar → 古籍书脊标签或杜威分类法式索引卡，装饰与功能兼得
4. **双主题**：Sepia Comfort 纸感（日读）+ caliBlur/Kavita 深色（夜读）——"日读书房/夜读书房"切换
5. **横向"新入藏"书车**：首页做"最近新增/正在读"的水平滚动推车区
