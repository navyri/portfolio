import { perfil } from "@/data/perfil";

export default function Contacto() {
  return (
    <section id="contacto" className="border-t border-line/70 py-16">
      <div className="card relative overflow-hidden">
        <div
          className="orb -top-24 -right-16 size-56 bg-accent"
          aria-hidden
        />
        <div className="relative">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Contacto
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            ¿Un proyecto, una práctica o solo quieres saludar? Escríbeme y te
            respondo.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${perfil.email}`} className="btn btn-primario">
              ✉ {perfil.email}
            </a>
            <a
              href={perfil.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-linea"
            >
              GitHub ↗
            </a>
            {perfil.linkedin && (
              <a
                href={perfil.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-linea"
              >
                LinkedIn ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
