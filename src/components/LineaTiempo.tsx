import { grupos, type Proyecto } from "@/data/proyectos";

function Tarjeta({ p }: { p: Proyecto }) {
  return (
    <article
      className={`card ${p.destacado ? "border-accent/45" : ""} ${
        p.porConfirmar ? "opacity-80" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-snug">{p.nombre}</h3>
        {p.destacado && (
          <span className="shrink-0 text-xs text-accent" title="Proyecto destacado">
            ★ destacado
          </span>
        )}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted">{p.resumen}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tecnologias.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.porConfirmar || p.enlaces.length === 0 ? (
          <span className="text-xs text-muted italic">
            Enlaces por confirmar
          </span>
        ) : (
          p.enlaces.map((e) => (
            <a
              key={e.url + e.etiqueta}
              href={e.url}
              target="_blank"
              rel="noreferrer"
              className={e.tipo === "demo" ? "btn btn-primario" : "btn btn-linea"}
            >
              {e.etiqueta} ↗
            </a>
          ))
        )}
      </div>
    </article>
  );
}

export default function LineaTiempo() {
  return (
    <section id="proyectos" className="py-16">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        Proyectos
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        Mi trayectoria en una línea de tiempo: cada tarjeta tiene una vista
        previa y un enlace para entrar y probarlo.
      </p>

      <div className="rail mt-10 space-y-12 pl-8">
        {grupos.map((g) => (
          <div key={g.periodo} className="relative">
            {/* Punto del periodo */}
            <span className="rail-punto" aria-hidden />

            <div className="mb-5">
              <span className="font-mono text-sm font-semibold text-accent-2">
                {g.periodo}
              </span>
              <p className="mt-1 text-sm text-muted">{g.descripcion}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {g.proyectos.map((p) => (
                <Tarjeta key={p.nombre} p={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
