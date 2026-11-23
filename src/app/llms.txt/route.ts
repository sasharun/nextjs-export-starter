import { content, productHref, site } from "@/lib/site-data";

export const dynamic = "force-static";

/**
 * Dynamic /llms.txt for GEO & AI search engines (ChatGPT, Claude, Perplexity, Google AI Mode).
 * Automatically generated from site/site.json and site/content-pack.json.
 */
export function GET() {
  const base = site.base_url.replace(/\/$/, "");
  const c = content.company;

  const lines: string[] = [
    `# ${c.name_en} (${c.name_zh})`,
    "",
    `> ${c.tagline_en}`,
    "",
    "## Company Overview",
    "",
    c.about_en,
    "",
    `- Founded: ${c.founded}`,
    `- Team Size: ${c.employees}`,
    `- Address: ${c.address_en}`,
    `- Email: ${c.email}`,
    `- Phone: ${c.phone}`,
    `- WhatsApp: ${c.whatsapp}`,
    "",
    "## Key Pages",
    "",
    `- [Home (EN)](${base}/en)`,
    `- [Home (ZH)](${base}/zh)`,
    `- [Products Catalog](${base}/en/products)`,
    `- [About Factory](${base}/en/about)`,
    `- [Quality & Certifications](${base}/en/quality)`,
    `- [FAQ](${base}/en/faq)`,
    `- [Contact / Request a Quote (RFQ)](${base}/en/contact)`,
    "",
    "## Product Categories",
    "",
    ...content.categories.map(
      (cat) => `- ${cat.name_en} (${cat.name_zh}): ${base}/en/products?cat=${cat.id}`
    ),
    "",
    "## Featured Products",
    "",
    ...content.products.map((p) => {
      const url = `${base}/en${productHref(p.id)}`;
      const moq = p.moq ? ` | MOQ: ${p.moq}` : "";
      const model = p.model ? ` (${p.model})` : "";
      return `- [${p.name_en}${model}](${url})${moq}`;
    }),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
