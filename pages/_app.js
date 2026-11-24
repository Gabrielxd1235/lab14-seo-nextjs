import "@/styles/globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

// next/font descarga la fuente en el build y la sirve desde el propio dominio (sin layout shift).
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <nav className="nav">
        <Link href="/">Inicio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
