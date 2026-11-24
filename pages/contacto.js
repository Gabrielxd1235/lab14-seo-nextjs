import SEO from "@/components/SEO";

export default function Contacto() {
  return (
    <>
      <SEO
        title="Contacto - Asesoría en SEO y optimización web"
        description="Contáctanos para mejorar el posicionamiento SEO y la velocidad de carga de tu sitio web con Next.js."
        keywords="contacto, asesoría SEO, optimización web"
        path="/contacto"
      />
      <h1>Contacto</h1>
      <p>¿Quieres mejorar el SEO de tu sitio? Escríbenos.</p>
      <form className="card" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" name="nombre" required />
        <label htmlFor="correo">Correo</label>
        <input id="correo" name="correo" type="email" required />
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows={4} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
