import { perfil } from "@/data/perfil";
import { totalProyectos } from "@/data/proyectos";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28"
    >
      {/* Orbes de color de fondo */}
      <div className="orb -top-28 -left-20 size-72 bg-accent" aria-hidden />
      <div className="orb top-10 -right-24 size-80 bg-accent-2" aria-hidden />

      <div className="relative">
        <p className="font-mono text-sm text-accent-2">Hola, soy</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
          {perfil.nombre}
        </h1>
        <p className="mt-4 text-lg font-medium text-gradient md:text-xl">
          {perfil.titulo}
        </p>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          {perfil.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#proyectos" className="btn btn-primario">
            Ver proyectos ({totalProyectos})
          </a>
          <a
            href={perfil.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-linea"
          >
            GitHub ↗
          </a>
          <span className="chip ml-1">
            {perfil.semestre} · {perfil.focos.join(" · ")}
          </span>
        </div>
      </div>
    </section>
  );
}
