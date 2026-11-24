import { SITE_URL, getPosts } from "@/lib/cms";

const BASE_URL = SITE_URL;

export default async function handler(req, res) {
  const staticUrls = ["/", "/blog", "/contacto"];
  // Rutas dinámicas: una por cada artículo publicado en el CMS.
  const posts = await getPosts();
  const postUrls = posts.map((p) => `/blog/${p.id}`);
  const today = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...postUrls]
  .map(
    (url) =>
      `  <url><loc>${BASE_URL}${url}</loc><lastmod>${today}</lastmod><changefreq>${url.startsWith("/blog/") ? "weekly" : "daily"}</changefreq><priority>${url === "/" ? "1.0" : "0.8"}</priority></url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
