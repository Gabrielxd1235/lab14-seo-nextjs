// Fuente de datos tipo CMS headless (API REST pública).
const CMS_URL = "https://jsonplaceholder.typicode.com/posts";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function getPosts(limit = 10) {
  const res = await fetch(`${CMS_URL}?_limit=${limit}`);
  if (!res.ok) throw new Error(`CMS respondió ${res.status}`);
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${CMS_URL}/${id}`);
  return res.ok ? res.json() : null;
}
