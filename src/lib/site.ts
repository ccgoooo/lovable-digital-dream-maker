// Site-wide SEO switch. Set NOINDEX to false to allow search engines to index pages.
export const NOINDEX = true;
export const SITE_NAME = "Qinghe Atelier";
export function seo(title: string, description: string, path: string) {
  const full = `${title} — ${SITE_NAME}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: NOINDEX ? "noindex, nofollow" : "index, follow" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
