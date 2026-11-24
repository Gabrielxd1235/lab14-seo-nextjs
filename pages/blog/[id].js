import Link from "next/link";
import SEO from "@/components/SEO";
import { getPost, getPosts } from "@/lib/cms";

// Meta tags generados a partir del contenido de cada artículo.
export default function Post({ post }) {
  return (
    <>
      <SEO
        title={post.title}
        description={post.body.replace(/\n/g, " ").slice(0, 155)}
        keywords={`blog, artículo ${post.id}, SEO`}
        path={`/blog/${post.id}`}
        type="article"
      />
      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>
      <p><Link href="/blog">← Volver al blog</Link></p>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return { paths: posts.map((p) => ({ params: { id: String(p.id) } })), fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  if (!post) return { notFound: true };
  return { props: { post }, revalidate: 60 };
}
