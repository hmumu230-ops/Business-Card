# 03 · Dribbble 书架 UI 设计稿

> 重点看写实/深色木质方向的配色板与光影层次。直链图需打开 shot 页右键提取 `cdn.dribbble.com` 地址。

## 案例

### Bookshelf Product Showcase — Mario Šimić ⭐
- **URL**：https://dribbble.com/shots/3485492-Bookshelf-Product-Showcase
- **配色**：深胡桃木 `#4B2214`、羊皮纸 `#F9EADA`、木高光 `#D7AC85`、`#DAC5B0`——最标准的"深木+羊皮纸"组合
- **实现手法**：木架区 `#4B2214→#2a1409` 纵向渐变打底；层板底边 `box-shadow: inset 0 -18px 24px rgba(0,0,0,.55)` 模拟板下暗区；板前沿留 1px `#D7AC85` 高光

### iOS Bookshelf App Icon — weirdsgn
- **URL**：https://dribbble.com/shots/5847344-iOS-Bookshelf-App-Icon
- **配色即 PBR 色卡**：`#0F0503` 缝隙黑 / `#5E220D` `#A04B28` 红棕木 / `#9A5C24` 受光木 / `#C8A453` 烫金 / `#C8C3B5` 书页 / `#64574A` 阴影
- **实现手法**：可映射为 Three.js 材质参数（color / roughness / 微弱 emissive 烫金线）

### Designers Bookshelf — Mikhail Nikipelov
- **URL**：https://dribbble.com/shots/6451834-Designers-Bookshelf
- **要点**：书脊颜色错落+宽度不一 = "真书架感"。书脊色 `#C26226`/`#E39B1B`/`#408B70`/`#F70B07`，底 `#F6F6F6`、浅木 `#B7ABA4`
- **实现手法**：DOM 生成书脊 `.spine { width:22–46px 随机; height:78–96% 随机; background:linear-gradient(90deg, 深→主色→浅) }`；个别 `rotate(-4deg)` 斜靠或横堆

### Cemetery of Forgotten Books — Andrey Prokopenko
- **URL**：https://dribbble.com/shots/21550247-Cemetery-of-Forgotten-books
- **要点**："遗忘书之墓"纵深——极暗环境+高耸书架层叠+单一暖光源。背景近黑 `#0d0906`，光池 `radial-gradient(ellipse at 50% 30%, rgba(200,164,83,.18), transparent 60%)`，远景剪影 `#1a0f08`/`#241509` 多层视差 + `inset 0 0 180px rgba(0,0,0,.8)` 暗角

### Villa of the Papyri — Andrey Prokopenko
- **URL**：https://dribbble.com/shots/20977838-Villa-of-the-Papyri
- **要点**：古典壁龛式书架构图——书架做成"建筑立面"CSS Grid，格间立柱 `border-left:10px solid #3B2314` + 拱形 `border-radius`

### Litscape 书店 / Pixelib Library / Full Bookshelf
- Litscape https://dribbble.com/shots/25816180-Litscape-Online-Bookstore-Experience ：`#EFEDE4` 纸底+`#08080B` 墨标题+`#AA261E` 皮红 CTA+`#553C29` 木棕——左侧 sticky 竖排导航呼应书脊
- Pixelib https://dribbble.com/shots/10708500-Pixelib-Library ：深色骨架公式——卡片比背景亮 6–8% + 1px `rgba(255,255,255,.06)` 顶边高光
- Full Bookshelf https://dribbble.com/shots/2445616-Full-Bookshelf-Shot ：书脊配色分布参考（取色后 `brightness(.7) saturate(.75)` 压暗降饱=旧书感）

## 可借鉴点

1. **配色公式直接可用**：深胡桃木 `#4B2214`/`#3B2314` + 羊皮纸 `#F9EADA`/`#EFEDE4` + 烫金 `#C8A453` + 皮书脊红 `#AA261E`
2. **书脊代码生成**：随机宽高色相 + `linear-gradient(90deg)` 圆柱受光 + inset 侧影；斜靠/横堆/半抽出三种姿态破机械感
3. **拟物感=三层光**：板前沿 1px 亮边 + 板下内阴影 + 全局顶光池暗角；叠 3–5% 噪点即够
4. **纵深三层**：近景清晰书脊→中景低明度剪影→远景近黑，配 ScrollTrigger 分层视差
5. **动在书不在架**：书架静态庄严，光标邻近书轻微外推倾斜（damped spring），hover 烫金微光
