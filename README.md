# Next.js Export Starter — 外贸 / 工厂询盘站模板

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149eca)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Stars](https://img.shields.io/github/stars/sasharun/nextjs-export-starter?style=social)](https://github.com/sasharun/nextjs-export-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

> 一套可直接跑起来的 **Next.js 16 外贸独立站 / 工厂 B2B 询盘站** 开源起步模板。  
> 英中双语 · 产品目录 · 询盘表单 · SEO + GEO（`/llms.txt` + JSON-LD）全套 · 移动端优先。  
> 改 `site/` 里的 JSON 就能换成你自己的工厂内容；询盘可一键接到邮箱（Resend）或 Webhook（企微 / Make / n8n）。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsasharun%2Fnextjs-export-starter)

**不会写代码？** 先看 **[小白上线指南 docs/GO-LIVE.md](./docs/GO-LIVE.md)**：Fork → Vercel 一键部署 → 配邮箱 → 改内容。

---

## 这个模板解决什么

工厂老板和外贸业务员要的不是「又一个漂亮但没人看的模板官网」，而是：

1. 海外买家 **3 秒看懂你做什么、能不能批量交付**
2. 产品规格 **能翻、能搜、能对比**
3. 想询价时 **表单真的能稳定提交到你邮箱 / 企微**
4. **Google 能收录、AI 搜索（ChatGPT / Gemini / Perplexity）能读懂**，手机打开不卡

---

## 功能清单

| 模块 | 说明 |
|------|------|
| **双语 i18n** | `en` 默认 + `zh`，`next-intl`，自动输出成对 `hreflang` / `canonical` / `x-default` |
| **完整页面** | Home / Products / About / Quality / FAQ / Contact + 独立产品详情页 |
| **Section 组件** | Hero、Stats、产品栅格、类目筛选、认证墙、工厂图集、FAQ、询盘表单等 15+ |
| **数据驱动** | 只需编辑 `site/content-pack.json` + `site.json` + `theme.json` + `blueprint.json` |
| **SEO + GEO** | Metadata、JSON-LD、`sitemap.xml`、`robots.txt`、Open Graph、**自动生成的 `/llms.txt`** |
| **询盘后端** | `/api/inquiries`：Resend 发信 / Webhook（Make / n8n / 企微）/ 本地日志；honeypot 防垃圾 |
| **可选 CMS** | Sanity 拉取内容脚本（见 [docs/SANITY.md](./docs/SANITY.md)） |
| **质量保障** | 内置 `pnpm lint`、`pnpm build`、Lighthouse CI 配置与 GitHub Actions CI |

**刻意不做**：购物车支付、重型自助 CMS、多租户后台。B2B 询盘站就该轻、快、好维护。

---

## 快速开始

```bash
git clone https://github.com/sasharun/nextjs-export-starter.git
cd nextjs-export-starter
pnpm install
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000)（自动跳转默认语言 `/en`，同时可访问 `/llms.txt`、`/sitemap.xml`、`/robots.txt`）。

生产构建与检查：

```bash
pnpm lint && pnpm build && pnpm start
```

部署：点顶部 **Deploy with Vercel** 按钮，或 Push 到你自己的 GitHub 仓库后接入 [Vercel](https://vercel.com) 一键上线。

---

## 询盘怎么接到邮箱（后端）

默认：未配置环境变量时，提交仅打印到服务端日志（方便本地调试）。

**推荐方案（Resend，免费额度够起步）：**

1. 注册 [resend.com](https://resend.com)，创建 API Key
2. 在 Vercel → Project Settings → Environment Variables 填写：

```bash
RESEND_API_KEY=re_xxxx
INQUIRY_TO_EMAIL=sales@yourcompany.com
INQUIRY_FROM_EMAIL=Inquiry Form <onboarding@resend.dev>
```

3. Redeploy，在 Contact 页提交一封测试询盘

> 注意：测试发件人 `onboarding@resend.dev` **只能发到你的 Resend 注册邮箱**。正式对外请绑定并验证自己的企业域名，详见 **[docs/GO-LIVE.md](./docs/GO-LIVE.md)**。

**备选方案：** 配置 `INQUIRY_WEBHOOK_URL` 转发 JSON 到 Make / 企微机器人中转 / n8n，可与 Resend 同时开启。完整环境变量见 [`.env.example`](./.env.example)。

---

## 怎么换成你的工厂内容

主要修改 `site/` 目录下的 JSON 文件：

| 文件 | 作用 |
|------|------|
| `site/content-pack.json` | 公司介绍、产品规格、证书、FAQ（中英双语，同步驱动 `/llms.txt`） |
| `site/site.json` | 站点 `base_url`（用于 canonical、sitemap、Open Graph 与 `/llms.txt`） |
| `site/theme.json` | 主色与视觉主题方案 |
| `site/blueprint.json` | 页面列表与各页板块顺序 |
| `public/media/` | 替换为你的真实工厂与产品图片（请确保版权合规） |

可选：用 Sanity 网页改产品 → `pnpm content:pull` 写回 JSON → 提交触发重新部署。见 **[docs/SANITY.md](./docs/SANITY.md)**。

---

## 文档导航

| 文档 | 给谁看 |
|------|--------|
| [docs/GO-LIVE.md](./docs/GO-LIVE.md) | 小白：从 Fork 到收到第一封询盘 |
| [docs/SANITY.md](./docs/SANITY.md) | 进阶：接入 Sanity 内容后台 |
| [DESIGN.md](./DESIGN.md) | 设计 tokens 与视觉规范 |
| [PRODUCT.md](./PRODUCT.md) | 产品边界与取舍 |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | 参与贡献与 PR 规范 |

---

## 技术栈

Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS v4 · `next-intl` · `zod`  
询盘发信：Resend HTTP API（**零额外 npm 依赖**）

---

## 定制开发

我是 **Gavin**，[模酷科技 ModalCube](https://modalcube.com) 主理人，专注外贸独立站 / 工厂官网 / 询盘站 / 出海品牌站（Next.js）。如果你准备外包建站，建议先看一遍 [外包建站避坑指南](https://modalcube.com/jianzhan-guide)。

> 📧 xqi@live.com　💬 微信 gav1nq　🌐 https://modalcube.com

<p align="center">
  <img src="assets/qr-fuwuhao.png" width="160" alt="模酷科技微信">
  &nbsp;&nbsp;&nbsp;
  <img src="assets/qr-gongzhonghao.png" width="160" alt="模酷科技服务号">
</p>

### 配套开源清单

- [外贸独立站资源大全](https://github.com/sasharun/awesome-waimao-dulizhan)
- [外贸 Google SEO 与询盘获客资源大全](https://github.com/sasharun/awesome-waimao-seo)
- [工厂官网资源大全](https://github.com/sasharun/awesome-gongchang-website)
- [询盘转化自查清单](https://github.com/sasharun/dulizhan-inquiry-checklist)

---

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sasharun/nextjs-export-starter&type=Date)](https://star-history.com/#sasharun/nextjs-export-starter&Date)

---

## License

代码采用 [MIT](./LICENSE) 协议开源。样板文案与示例图片仅演示用，正式上线前请全部替换为你自己的内容与有版权素材。
