/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // /sitemap.xml (ruta estándar que buscan los buscadores) sirve el sitemap dinámico.
  async rewrites() {
    return [{ source: "/sitemap.xml", destination: "/api/sitemap" }];
  },
};

export default nextConfig;
