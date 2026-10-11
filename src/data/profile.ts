// ============================================================
// 个人信息配置 —— 改这个文件就能更新整个网站的内容
// ============================================================

export const site = {
  // 站点品牌名，显示在导航、古籍封面和页脚
  name: "hemu's Bibliotheca",
  // 一句话宣言，首页和页脚的大字
  motto: '记录做过的，分享学到的，做成想到的。',
  signature: 'Bound with curiosity.',
};

export const profile = {
  name: 'hemu',
  initial: 'S',
  // 个人定位（about 页标题下的小字，可用 | 分隔）
  roles: 'AI Nativer | Building with AI.',
  tagline: '全栈开发者 · 内容创作者',
  // about 页开头的自我介绍长文
  intro:
    '我在广州，一边工作，一边用 AI 构建产品。喜欢把有趣的想法变成真实可用的东西，也公开分享项目、工作流与实践中的经验。比起维护已经确定的答案，我更喜欢进入未知、理解系统，再把它变成真正可用的产品。',
  bio: '热爱技术与设计的开发者。喜欢把有趣的想法变成真实的产品，空闲时间写写博客、做做开源。',
  location: '广州, 中国',
  avatar: '/avatar.svg',
  status: '开放合作中',

  social: [
    { label: 'GitHub', url: 'https://github.com/hmumu230-ops', icon: 'github' },
  ],
};

// 首页宣言区下面的一行数据亮点
export const stats = [
  { value: '广州', label: '生活与工作' },
  { value: '01', label: '核心项目' },
  { value: '20+', label: '公开分享' },
  { value: '∞', label: '保持探索' },
];

// 首页「EDITOR'S PICKS」精选排行（从书架里挑 3 条最有代表性的）
export const featured = [
  { order: '01', title: 'AI 执行规划助手', category: '提示词', url: '/library' },
  { order: '02', title: '从 0 到 1 做独立开发的一年', category: '故事', url: '/library' },
  { order: '03', title: '个人反思模板', category: '提示词', url: '/library' },
];

// 首页「WHAT'S NEW」动态流
export const updates = [
  { date: '09.14', text: '个人网站改版上线：电子名片升级为个人书架', url: '/' },
  { date: '09.09', text: '新故事：从 0 到 1 做独立开发的一年', url: '/library' },
  { date: '09.04', text: '个人喜好新增：玩独立游戏', url: '/about#hobby' },
  { date: '08.13', text: '内容书架升级为四个专栏', url: '/library' },
];

// 首页三个入口卡
export const entrances = [
  {
    title: '个人介绍',
    desc: '浏览我的成长路径、个人爱好、项目经历与社会价值。',
    cta: '了解我',
    url: '/about',
  },
  {
    title: 'hemu Build',
    desc: '把你的想法，真正做出来：将明确的需求开发成本地可运行的 MVP。',
    cta: '了解开发服务',
    url: '/build',
  },
  {
    title: '内容分享',
    desc: '探索提示词、笔记、故事与旅途，一座持续生长的书架。',
    cta: '进入资源库',
    url: '/library',
  },
];

// ===== 个人介绍页（/about）=====

export const values = [
  {
    title: '成为自己的主体',
    desc: '我相信每个人都应该成为自己人生的主体。好的产品应该增加选择，而不是替人决定。',
  },
  {
    title: '把混乱变成系统',
    desc: '面对开放问题，我喜欢先理解结构，再把零散经验整理成能够验证、复用和继续演进的系统。',
  },
  {
    title: '让想法进入现实',
    desc: '想法只有跑进真实世界才完整。快速开始，也为关键步骤保留检查点，让结果经得起使用。',
  },
];

export const hobbies = [
  {
    title: '摄影',
    desc: '在城市里散步时收集光影。拍照让我从高速思考中慢下来，重新观察日常的质地。',
  },
  {
    title: '写作',
    desc: '把散落的想法整理成文字，是复盘也是表达。写下来的经验才真正属于自己。',
  },
  {
    title: '玩独立游戏',
    desc: '喜欢独立游戏里不受惯例限制的表达，感受创作者如何用机制、叙事与视觉传递想法。',
  },
];

// 成长路径：阶段名 + 标题 + 描述
export const growth = [
  {
    stage: '起点 · 理解系统',
    title: '从好奇开始拆解世界',
    desc: '对工具与系统如何运作的好奇，让我逐渐形成了通过拆解结构来理解问题的习惯。',
  },
  {
    stage: '转向 · 设计与代码',
    title: '重新设计自己的道路',
    desc: '当原来的路径发生变化，我把注意力转向设计与开发，在真实项目里学习如何让想法跑起来。',
  },
  {
    stage: '现在 · 独立构建',
    title: '从单点功能走向系统构建',
    desc: '围绕真实需求做产品，尝试建立一套以用户可见价值为中心的 build 方式。',
  },
  {
    stage: '持续 · 公开积累',
    title: '把经验放回公共空间',
    desc: '通过这座书架记录方法、工具与阶段性理解，让每一次探索都成为下一次出发的材料。',
  },
];

export const currentWork = {
  title: 'hemu Build · MVP 快速开发服务',
  desc: '面向个人、小团队和中小企业，将双方确认的需求开发成本地可运行的 MVP，交付约定的源代码与必要说明。',
  cta: { label: '了解 hemu Build', url: '/build' },
};

export const coreProject = {
  tag: 'CORE PROJECT · 进行中',
  title: '个人知识书架',
  desc: '你正在看的这个网站：把项目经验、AI 工作流和方法论沉淀成一座公开书架，持续生长。',
  tags: ['Astro', '知识管理', '个人品牌'],
  url: '/library',
};

// 「正在做」三栏
export const now = [
  { title: '产品实践', desc: '个人知识书架', note: '核心项目' },
  { title: '知识公开', desc: "Chen's Shelf", note: '持续更新' },
  { title: '工作流与方法', desc: '把开放问题变成可运行的系统', note: '持续验证' },
];

// Elsewhere：各平台入口
export const elsewhere = [
  { label: 'GitHub', handle: '@hmumu230-ops', url: 'https://github.com/hmumu230-ops' },
];

// ===== 内容书架（/library）=====

export const columns = [
  { name: '阅读', desc: '读过并逐章蒸馏过的书，全书精华浓缩', url: '/reading' },
  { name: '诗歌', desc: '随手写下的诗与摘句', url: '/library' },
  { name: '笔记', desc: '在小红书更新的灵感与实践笔记', url: 'https://www.xiaohongshu.com/user/profile/xxx', external: true },
  { name: '故事', desc: '经历、人物与正在发生的故事', url: '/library' },
  { name: '旅途', desc: '沿途见闻、照片和阶段性记录', url: '/library' },
];

// 书架条目：tag 是分类小标签，kind 是大类（用于筛选）
export const shelf = [
  {
    kind: '阅读',
    tag: '已蒸馏',
    title: '《掌控习惯》',
    desc: 'James Clear · 习惯不是靠意志力死扛，是用四定律设计环境。',
    meta: 'Atomic Habits · 10 篇蒸馏',
    url: '/reading/atomic-habits',
  },
  {
    kind: '阅读',
    tag: '已蒸馏',
    title: '《认知觉醒》',
    desc: '周岭 · 你不是懒，是出厂设置困住了你。',
    meta: 'Cognitive Awakening · 17 篇蒸馏',
    url: '/reading/cognitive-awakening',
  },
  {
    kind: '阅读',
    tag: '已蒸馏',
    title: '《思考，快与慢》',
    desc: 'Daniel Kahneman · 你的大脑里有两个操作系统。',
    meta: 'Thinking, Fast and Slow · 17 篇蒸馏',
    url: '/reading/thinking-fast-slow',
  },
  {
    kind: 'Story',
    tag: 'Story',
    title: '从 0 到 1 做独立开发的一年',
    desc: '从第一行代码到产品上线，一年里踩过的坑、验证过的方法和仍然没解决的问题。',
    meta: '2026.09.09 · 独立开发复盘',
    url: '/library',
  },
  {
    kind: '诗歌',
    tag: '短句',
    title: 'AI 执行规划助手',
    desc: '把复杂任务拆成人与 AI 协同执行的方案，并尽量减少真人需要完成的步骤。',
    meta: '复杂任务 · 人机协作',
    url: '/library',
  },
  {
    kind: '诗歌',
    tag: '随笔',
    title: '个人反思模板',
    desc: '把真实事件整理成个性化分析、本人反思和后续行动。',
    meta: '复盘 · 个人成长',
    url: '/library',
  },
  {
    kind: '诗歌',
    tag: '断章',
    title: '开始前验收模板',
    desc: '在 AI 正式执行前，先明确修改范围、保持不变的内容、风险和验收方式。',
    meta: '执行前确认 · 风险控制',
    url: '/library',
  },
  {
    kind: 'Note',
    tag: 'Framework',
    title: '输入—输出通用模板',
    desc: '先对齐输入、执行步骤、最终输出和检查点，再选择稳定可控的推进方式。',
    meta: '需求澄清 · 通用任务',
    url: '/library',
  },
];

// ===== 开发服务（/build）=====

export const build = {
  // 页面大宣言
  title: '把你的想法，真正做出来。',
  subtitle:
    'hemu Build 面向已经知道自己想做什么、但受阻于软件开发的人。你负责想清楚产品怎么工作，我负责把明确需求开发成本地可运行的 MVP。',

  // 面向谁
  audience: [
    { title: '个人创作者', desc: '有明确的产品想法或工具需求，希望快速看到可用的东西。' },
    { title: '小团队', desc: '需要内部工具、验证原型，但还没有专职开发。' },
    { title: '中小企业', desc: '想用轻量方案验证业务想法，不想先投入完整研发团队。' },
  ],

  // 交付什么
  deliverables: [
    '本地可运行的 MVP 产品',
    '约定的完整源代码',
    '部署与使用说明文档',
    '一次交付后的调整窗口',
  ],

  // 合作流程
  process: [
    { step: '01', title: '需求确认', desc: '把想法聊清楚：产品做什么、给谁用、什么算完成。' },
    { step: '02', title: '方案与约定', desc: '明确范围、交付物与时间节点，双方确认后开工。' },
    { step: '03', title: '开发与同步', desc: '按约定推进，关键节点给你看可运行的进展。' },
    { step: '04', title: '交付验收', desc: '本地跑起来验收，交付源码与说明，完成调整。' },
  ],

  cta: '有想法想聊聊？带上你的需求联系我。',
};

// ===== 联系方式 =====

export const contact = {
  wechat: 'hemu_8822',
  email: 'hemumu230@gmail.com',
  note: '联系时请备注来历与意向：交流学习 / 合作咨询 / 商务合作等。',
};

// ===== 个人名片站（/card）=====
// 简短、直接、收口到微信的电子名片；古籍站承载深度内容
export const card = {
  name: '何沐',
  avatar: '/avatar.jpg',
  // 名片上的两行简介
  bio1: 'FDE · AI 产品经理 · AI 咨询',
  bio2: '深入业务现场，把 AI 真正落到产品和流程里',
  // 蓝色标签行
  tags: 'FDE · AI 产品 · AI 咨询',

  // 首页三张功能卡
  entries: [
    {
      title: 'VX 联系',
      desc: '添加微信，备注来意',
      url: '/card/wechat',
    },
    {
      title: '我的服务',
      desc: 'FDE · AI 产品 · AI 咨询',
      url: '/card/services',
    },
    {
      title: '个人介绍',
      desc: '了解我的背景、经历与正在做的事',
      url: '/card/about',
    },
  ],

  // VX 联系页
  wechatTips: '添加后会尽快通过，请简单说明来意。',
  wechatRemark: '建议备注：FDE / 产品 / 咨询 / 交流',

  // 我的服务页：三项主营 + 对应微信备注暗号
  services: [
    {
      name: 'FDE',
      title: 'Forward Deployed Engineering',
      lines: [
        '深入业务现场，理解真实场景与痛点',
        '从方案设计到交付落地全流程负责，让 AI 在业务里跑起来',
      ],
      remark: 'FDE',
    },
    {
      name: '产品',
      title: 'AI 产品经理',
      lines: [
        'AI 产品规划、需求梳理与落地路线图',
        '从想法到可用产品，帮你少踩坑、快验证',
      ],
      remark: '产品',
    },
    {
      name: '咨询',
      title: 'AI 咨询 / 培训',
      lines: [
        '企业 AI 应用咨询与团队上手培训',
        '个人方向梳理、产品思路 1v1',
      ],
      remark: '咨询',
    },
  ],

  // 个人介绍页
  about: [
    {
      title: '我是谁',
      lines: [
        '何沐（hemu），FDE / AI 产品经理 / AI 咨询，在广州。',
        '习惯深入业务现场，把模糊的需求变成能跑起来的产品。',
      ],
    },
    {
      title: '我在做什么',
      lines: [
        '以 FDE 方式交付 AI 产品：贴住业务，从需求到上线负责到底',
        'AI 产品规划与咨询：帮团队想清楚、做出来、用起来',
        '运营个人数字书架，公开分享工作流与实战经验',
      ],
    },
  ],
  aboutClosing: '贴近现场，把事做成。欢迎交流，一起成长。',
};
