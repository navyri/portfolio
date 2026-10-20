"use client";

import Link from "next/link";
import Ventana from "@/ui/Ventana";
import { useIdioma } from "@/i18n/I18nProvider";
import type { Proyecto } from "@/data/proyectos";

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
      <span className="texto-crt text-xl text-tenue/70">
        [ {p.nombre.slice(0, 18)} ]
      </span>
    </div>
  );
}

/** Tarjeta-ventana de proyecto (la usan el explorador y los recientes). */
export default function TarjetaProyecto({ p }: { p: Proyecto }) {
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
      className="tarjeta-hover flex h-full flex-col"
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
          <Link
            href={`/proyectos/${p.slug}`}
            className="btn95 btn95-primario px-2 py-1 text-[0.62rem]"
          >
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
