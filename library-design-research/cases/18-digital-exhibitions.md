# 18 · 博物馆/古籍数字展览沉浸页面

## 案例

### DigiVatLib + Thematic Pathways（梵蒂冈图书馆）
- **URL**：https://digi.vatlib.it/ ｜展览 https://spotlight.vatlib.it/
- **本地图**：`../images/kells-folio.jpg`（同类泥金写本参考）
- **要点**：30,542 册手稿数字化；目录页学术朴素（深 header+羊皮纸色），展览页切换"展厅式"叙事；IIIF manifest 驱动（`digi.vatlib.it/iiif/MSS_*/manifest.json`）
- **手法**：IIIF Image/Presentation API+Spotlight 框架；深缩放查看器

### British Library Turning the Pages™ — 古籍翻阅鼻祖
- **URL**：存档 https://web.archive.org/web/20130927005823/http:/www.bl.uk/ttp2/ttp1.html ｜现役 https://armadillosystems.com/index.php/what-we-do/
- **要点**：1996 年构思的"虚拟翻书"——**材质感知的翻页形变**（羊皮纸自重塌陷）、Sherborne Missal **金箔随光闪烁**、放大细节+专家语音+批注
- **手法**：Shockwave→WPF→HTML5(TTP3.0)→DeepZoom 切片→IIIF；现役 BL 用 IIIF Universal Viewer（多光谱图层切换）

### BnF Expositions virtuelles（法国国家图书馆）
- **URL**：https://expositions.bnf.fr/
- **要点**：112 个虚拟展览、六主题画廊、年访问 400 万；每展=独立美术风 microsite+可翻阅古籍工具；策展="文本+图版+动线"屏幕再媒介化

### 故宫博物院数字矩阵
- **URL**：数字文物库 https://digicol.dpm.org.cn/ ｜全景 https://pano.dpm.org.cn/ ｜名画记 https://minghuaji.dpm.org.cn/
- **要点**：186 万+藏品高清影像；"空无一人"紫禁城全景（VR 日升月落）；名画记数十亿像素无极缩放+私人藏画馆；多宝阁 360° 文物；宫墙红+深底+金饰殿堂配色
- **手法**：360° 拼接全景、三维扫描 PBR、DeepZoom 分级瓦片

### Google Arts & Culture — Timbuktu Manuscripts ⭐
- **URL**：https://artsandculture.google.com/experiment/the-timbuktu-manuscripts/BQE6pL2U3Qsu2A
- **要点**：40,000 册手稿→**"Universe of Verse"深色空间漂浮手稿星群**，点击放大；3D 视图可翻阅；滚动驱动图文 story+热点标注
- **手法**：WebGL 漂浮粒子/网格+相机漫游；ML 主题聚合

### e-codices（瑞士虚拟手稿馆）
- **URL**：https://www.e-codices.unifr.ch/en
- **要点**：3,049 册/100 馆；"手稿即物体"——拍封面封底书脊切口+古文书学描述；列表朴素如卡片目录、阅读页 facsimile+元数据侧栏
- **手法**：IIIF 双 API+Universal Viewer/Mirador；"地点—图书馆—索书号"三级目录

### SLS Arkivgalaxen — 40,000 档案的 3D 宇宙
- **URL**：https://greatapes.studio/work/sls-arkivgalaxen
- **要点**：档案映射 3D 向量空间，近义聚拢成"星系"；纯黑底+发光粒子；500㎡ 投影 mapping 首发
- **手法**：实时渲染 40k 交互对象；GenAI 关键词→向量化→空间排布（个人站可用 three.js+力导向简化复刻）

### Expo 58 — 可行走 3D 展厅
- **URL**：https://historia.europa.eu/en/digital-offer/expo-58 ｜Awwwards SOTD
- **要点**：3D 复原展馆内浏览档案；UI 拟物档案质感（翻相册/文件夹触觉）
- **手法**：Unity→WebGL/VR 双输出，3D 交互触发 DOM 事件

## 可借鉴点

1. **翻阅分层实现**：上限=TTP 材质感知形变+金箔反光；落地=CSS/Three.js 书页卷曲+翻页音效；图像层 OpenSeadragon/DeepZoom；内容允许就发 IIIF manifest 白嫖生态
2. **"展厅"IA**：博文/收藏按主题房间组织，每展厅独立色彩装饰系统（深底+金饰仿泥金手稿）
3. **深色宇宙可视化**：黑底漂浮书页星群，位置由标签相似度决定——小规模 three.js+力导向即可
4. **纯 CSS 考古感**：Mosby's Files 证明文件夹标签+纸纹零 JS 可行；羊皮纸+烫金衬线+朱红/墨绿点缀低成本得古籍质感
5. **漫游+静观双模态**：首页可拖拽环视"大厅"做导航枢纽（只需全景图+热点），链接各展厅页
