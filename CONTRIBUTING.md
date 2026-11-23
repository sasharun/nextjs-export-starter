# Contributing to nextjs-export-starter

欢迎提交 Bug 修复、文档改进与轻量级增强！本项目定位为**轻量化、高性能、零多余依赖的 B2B 外贸 / 工厂询盘站模板**。

## 开发与本地验证

请统一使用 `pnpm`：

```bash
pnpm install
pnpm dev
pnpm lint && pnpm build
```

提交 PR 前请务必确认 `pnpm lint` 与 `pnpm build` 均零错误通过。

## 贡献原则

- **保持轻量**：不引入重型 CMS、购物车支付或冗余 npm 包（详情见 [PRODUCT.md](./PRODUCT.md)）。
- **保持数据驱动**：页面内容改动优先通过 `site/*.json` 配置，不硬编码特定公司业务文案。
- **尊重双语与 SEO**：新增页面或板块须同时支持 `en`/`zh` 与语义化结构。
- **零追踪与安全**：不提交任何真实 API Key、真实客户隐私或追踪参数链接。
