import Link from "next/link";
import SEO from "@/components/SEO";
import { getPosts } from "@/lib/cms";

export default function Blog({ posts }) {
  return (
    <>
      <SEO
        title="Blog - Artículos sobre SEO y rendimiento web"
        description="Lee artículos sobre posicionamiento SEO, rendimiento y buenas prácticas de desarrollo web con Next.js."
        keywords="blog SEO, rendimiento web, Next.js, artículos"
        path="/blog"
      />
      <h1>Blog</h1>
      <p>Artículos obtenidos desde el CMS ({posts.length} publicaciones).</p>
      <ul className="posts">
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/blog/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// ISR: HTML estático (rápido y rastreable) que se regenera cada 60 s con datos nuevos del CMS.
export async function getStaticProps() {
  return { props: { posts: await getPosts() }, revalidate: 60 };
}
