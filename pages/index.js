import Image from "next/image";
import dynamic from "next/dynamic";
import SEO from "@/components/SEO";

// Lazy loading: el JS de este componente se descarga aparte y solo en el cliente.
const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false,
  loading: () => <p>Cargando componente...</p>,
});

export default function Home() {
  return (
    <>
      <SEO
        title="Inicio - Optimización y SEO con Next.js"
        description="Aprende sobre optimización SEO y rendimiento en Next.js: meta tags dinámicos, sitemap, imágenes y fuentes optimizadas."
        keywords="Next.js, SEO, optimización web, sitemap, meta tags"
        path="/"
      />
      <h1>Bienvenido a mi página optimizada</h1>
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>
      <Image
        src="/images/seo-image.png"
        width={800}
        height={400}
        alt="Ejemplo de imagen optimizada"
        priority
      />
      <DynamicComponent />
    </>
  );
}
