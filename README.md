# 个人网站

基于 Astro 构建的个人展示页（电子名片）。

## 修改内容

所有个人信息都集中在 **`src/data/profile.ts`**，改这一个文件即可更新全站：名字、简介、技能、经历、项目、联系方式。

- 头像：把照片放进 `public/`（如 `public/avatar.jpg`），把 `profile.ts` 里的 `avatar` 改成 `'/avatar.jpg'`
- 项目配图：同理，把图片放进 `public/`，填到项目的 `image` 字段
- 微信二维码：图片放进 `public/` 后填到 `contact.wechatQR`

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 产出静态文件到 dist/
```

## 部署

构建产物是纯静态文件（`dist/`），两种推荐方式：

**Vercel / Netlify（推荐，免费）**

1. 把代码推到 GitHub 仓库
2. 在 Vercel（vercel.com）或 Netlify（netlify.com）导入该仓库
3. 框架会自动识别为 Astro，默认配置即可：
   - Build command: `npm run build`
   - Output directory: `dist`
4. 部署后获得免费域名，可再绑定自己的域名

**不改代码也可以**：直接把 `npm run build` 生成的 `dist/` 目录拖到 Netlify 网页上即可完成部署。
