"use client";

import Link from "next/link";
import Ventana from "@/ui/Ventana";
import { useIdioma } from "@/i18n/I18nProvider";
import { grupos, type Proyecto } from "@/data/proyectos";

function Miniatura({ p }: { p: Proyecto }) {
  if (p.capturas.length > 0) {
    return (
      <div className="marco relative aspect-video overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.capturas[0]}
          alt={`Captura de ${p.nombre}`}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className="marco flex aspect-video items-center justify-center bg-fondo">
      <span className="texto-crt text-xl text-tenue/70">[ {p.nombre.slice(0, 18)} ]</span>
    </div>
  );
}

function Tarjeta({ p }: { p: Proyecto }) {
  const { t, idioma } = useIdioma();

  const botones = p.enlaces.map((e) => (
    <a
      key={e.url + e.etiquetaEs}
      href={e.url}
      target="_blank"
      rel="noreferrer"
      className="btn95 px-2 py-1 text-[0.62rem]"
    >
      {idioma === "es" ? e.etiquetaEs : e.etiquetaEn}
    </a>
  ));

  return (
    <Ventana
      titulo={`${p.slug}.exe`}
      ruta={p.tipo === "web" ? `/${p.slug}` : ".jar"}
      className="flex h-full flex-col"
    >
      <div className="flex flex-1 flex-col gap-3 p-3">
        <Miniatura p={p} />

        <div className="flex items-start justify-between gap-2">
          <h3 className="texto-crt text-xl leading-tight text-tinta">{p.nombre}</h3>
          {p.destacado && (
            <span className="shrink-0 text-xs text-acento" title="★">
              ★
            </span>
          )}
        </div>

        <p className="line-clamp-3 text-xs leading-relaxed text-tenue">
          {idioma === "es" ? p.resumenEs : p.resumenEn}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {p.tecnologias.map((tec) => (
            <span key={tec} className="chip95">
              {tec}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 border-t border-dashed border-borde pt-3">
          <Link href={`/proyectos/${p.slug}`} className="btn95 btn95-primario px-2 py-1 text-[0.62rem]">
            {t("abrir")}
          </Link>
          {p.porConfirmar ? (
            <span className="self-center text-[0.65rem] italic text-tenue">
              {t("porConfirmar")}
            </span>
          ) : (
            botones
          )}
        </div>
      </div>
    </Ventana>
  );
}

export default function LineaTiempo() {
  const { t, idioma } = useIdioma();
  const total = grupos.reduce((n, g) => n + g.proyectos.length, 0);

  return (
    <section id="proyectos" className="pt-14">
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
                <Tarjeta key={p.slug} p={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
