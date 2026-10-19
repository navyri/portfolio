import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LineaTiempo from "@/components/LineaTiempo";
import SobreMi from "@/components/SobreMi";
import Contacto from "@/components/Contacto";
import { perfil } from "@/data/perfil";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        <Hero />
        <LineaTiempo />
        <SobreMi />
        <Contacto />
      </main>
      <footer className="border-t border-line/70">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 {perfil.nombre} · {perfil.dominio.replace("https://", "")}
          </span>
          <span className="font-mono">
            Hecho con Next.js · desplegado en Vercel
          </span>
        </div>
      </footer>
    </>
  );
}
