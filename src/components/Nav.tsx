import { perfil } from "@/data/perfil";

const enlaces = [
  { href: "#proyectos", texto: "Proyectos" },
  { href: "#sobre-mi", texto: "Sobre mí" },
  { href: "#contacto", texto: "Contacto" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-accent">~</span>/{perfil.alias}
        </a>
        <div className="flex items-center gap-4 text-sm text-muted sm:gap-6">
          {enlaces.map((e) => (
            <a key={e.href} href={e.href} className="hover:text-foreground">
              {e.texto}
            </a>
          ))}
          <a
            href={perfil.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-line px-3 py-1 text-xs hover:border-accent/60 hover:text-foreground sm:inline-flex"
          >
            GitHub ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
