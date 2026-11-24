import Head from "next/head";
import { SITE_URL } from "@/lib/cms";

// Meta tags reutilizables: cada página pasa sus propios valores.
export default function SEO({ title, description, keywords, path = "/", image = "/images/seo-image.png", type = "website" }) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | Mi Sitio Optimizado`;
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="es_PE" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
    </Head>
  );
}
