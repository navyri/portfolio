import Image from "next/image";
import { perfil, hechos } from "@/data/perfil";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="border-t border-line/70 py-16">
      <div className="grid items-start gap-8 md:grid-cols-[auto_1fr]">
        <div className="relative w-fit">
          <div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent to-accent-2 opacity-70"
            aria-hidden
          />
          <Image
            src={perfil.avatar}
            alt={`Foto de ${perfil.nombre}`}
            width={128}
            height={128}
            className="relative rounded-2xl bg-panel"
            priority
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Sobre mí
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Soy {perfil.nombre.split(" ")[0]}, {perfil.semestre} de Ingeniería de
            Sistemas. Empecé programando en C++ y Java en mis primeros semestres;
            hoy construyo aplicaciones full-stack y sistemas con IA — incluyendo
            agentes RAG con recuperación aumentada y modelos que corren en local.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Me interesa que las cosas funcionen de verdad: con pruebas,
            desplegadas y documentadas. Cada proyecto de esta línea de tiempo
            tiene su código en GitHub y, cuando es posible, una demo en vivo
            donde puedes probarlo.
          </p>

          <ul className="mt-6 space-y-2 text-sm">
            {hechos.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-2" />
                <span className="text-muted">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
