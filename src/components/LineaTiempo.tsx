"use client";

import Link from "next/link";
import Ventana from "@/ui/Ventana";
import TarjetaProyecto from "@/components/TarjetaProyecto";
import { useIdioma } from "@/i18n/I18nProvider";
import { grupos } from "@/data/proyectos";

/** Explorador completo: todos los proyectos por semestre. */
export default function LineaTiempo() {
  const { t, idioma } = useIdioma();
  const total = grupos.reduce((n, g) => n + g.proyectos.length, 0);

  return (
    <section id="proyectos" className="pt-8">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="texto-crt text-3xl text-tinta sm:text-4xl">
          {t("rutaProyectos")}
          <span className="text-acento">*</span>
        </h2>
        <span className="etiqueta">
          {total} {t("archivos")}
        </span>
      </div>

      <div className="space-y-10">
        {grupos.map((g) => (
          <div key={`${g.anio}-${g.semestre}`}>
            {/* Encabezado de carpeta */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="bg-vino-alto px-3 py-1 texto-crt text-lg tracking-widest text-tinta">
                C:\{g.anio}\{idioma === "es" ? "SEMESTRE" : "SEMESTER"}_{g.semestre}\
              </span>
              <span className="text-xs text-tenue">
                {idioma === "es" ? g.descripcionEs : g.descripcionEn}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.proyectos.map((p) => (
                <TarjetaProyecto key={p.slug} p={p} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/" className="btn95">
          ◀ {t("volverHome")}
        </Link>
      </div>
    </section>
  );
}
