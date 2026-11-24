const tecnicas = [
  ["Meta tags dinámicos", "next/head", "Mejora el CTR en Google y la vista previa en redes"],
  ["Sitemap dinámico", "API Route /api/sitemap", "Google descubre e indexa todas las rutas"],
  ["Imágenes optimizadas", "next/image", "WebP/AVIF, tamaño adaptable y lazy load"],
  ["Lazy loading", "next/dynamic", "Menos JavaScript en la carga inicial"],
  ["Fuentes optimizadas", "next/font/google", "Fuente self-hosted, sin layout shift"],
];

export default function LargeComponent() {
  return (
    <section className="card">
      <h2>Técnicas aplicadas (componente cargado con lazy loading)</h2>
      <table>
        <thead>
          <tr><th>Técnica</th><th>Herramienta</th><th>Beneficio</th></tr>
        </thead>
        <tbody>
          {tecnicas.map(([t, h, b]) => (
            <tr key={t}><td>{t}</td><td><code>{h}</code></td><td>{b}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
