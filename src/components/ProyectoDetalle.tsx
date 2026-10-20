"use client";

import Ventana from "@/ui/Ventana";
import { useIdioma } from "@/i18n/I18nProvider";
import { grupos, porSlug } from "@/data/proyectos";

export default function ProyectoDetalle({ slug }: { slug: string }) {
  const { t, idioma } = useIdioma();
  const proyecto = porSlug(slug);
  const grupo = grupos.find((g) => g.proyectos.some((p) => p.slug === slug));

  if (!proyecto || !grupo) {
    return (
      <div className="pt-16">
        <Ventana titulo="ERROR.404">
          <div className="p-8 text-center">
            <p className="texto-crt text-3xl text-acento">{t("noEncontrado")}</p>
            <p className="mt-2 text-xs text-tenue">{t("noEncontradoSub")}</p>
            <a href="/" className="btn95 mt-6">
              {t("volverHome")}
            </a>
          </div>
        </Ventana>
      </div>
    );
  }

  const p = proyecto;
  const urlDemo = p.demoUrl ? new URL(p.demoUrl) : null;

  const estado = p.porConfirmar
    ? t("estadoPorConfirmar")
    : p.tipo === "web"
      ? t("estadoListo")
      : t("estadoNoWeb");

  const ficha = [
    { k: t("campoAnio"), v: `${grupo.anio} · ${idioma === "es" ? "Semestre" : "Semester"} ${grupo.semestre}` },
    { k: t("campoTipo"), v: p.tipo === "web" ? t("tipoWeb") : t("tipoEscritorio") },
    { k: t("campoEstado"), v: estado },
    { k: t("campoLenguajes"), v: p.tecnologias.join(" · ") || "—" },
  ];

  return (
    <div className="space-y-5 pt-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <a href="/" className="btn95">
          {t("volver")}
        </a>
        <span className="etiqueta">C:\PORTAFOLIO\{p.slug.toUpperCase()}\</span>
      </div>

      <Ventana titulo={`${p.slug}.exe`} ruta={`/${p.slug}`} crt>
        <div className="p-5 sm:p-7">
          <h1 className="texto-crt text-4xl leading-none text-tinta sm:text-5xl">
            {p.nombre}
          </h1>
          {p.destacado && (
            <p className="mt-1 text-xs text-acento">★ {t("destacado")}</p>
          )}
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-tenue">
            {idioma === "es" ? p.resumenEs : p.resumenEn}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.enlaces.map((e) => (
              <a
                key={e.url + e.etiquetaEs}
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className={`btn95 ${e.tipo === "demo" ? "btn95-primario" : ""}`}
              >
                {idioma === "es" ? e.etiquetaEs : e.etiquetaEn}
              </a>
            ))}
            {p.enlaces.length === 0 && (
              <span className="text-xs italic text-tenue">{t("porConfirmar")}</span>
            )}
          </div>
        </div>
      </Ventana>

      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        {/* Demo embebida o cómo ejecutar */}
        {p.tipo === "web" && p.demoUrl ? (
          <Ventana titulo={t("vistaPrevia")} ruta={urlDemo?.host}>
            <div className="p-3">
              {/* Barra de navegador falsa */}
              <div className="marco mb-3 flex items-center gap-2 bg-fondo px-2 py-1.5">
                <span className="pts shrink-0" aria-hidden>
                  <i className="pt ventana-pt" />
                  <i className="pt" />
                  <i className="pt" />
                </span>
                <span className="campo95 truncate py-1 text-[0.7rem] text-tenue">
                  {p.demoUrl}
                </span>
              </div>
              <iframe
                src={p.demoUrl}
                title={`Demo de ${p.nombre}`}
                loading="lazy"
                className="marco h-[520px] w-full bg-fondo"
              />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-[0.68rem] text-tenue">{t("vistaPreviaNota")}</p>
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn95 px-2 py-1 text-[0.62rem]"
                >
                  {t("abrirPestana")}
                </a>
              </div>
            </div>
          </Ventana>
        ) : (
          <Ventana titulo={t("ejecutarTit")}>
            <div className="p-4 text-sm leading-relaxed text-tenue">
              <p>{t("ejecutarIntro")}</p>
              <pre className="marco mt-3 overflow-x-auto bg-fondo p-3 text-xs texto-verde">
                {`git clone ${p.enlaces.find((e) => e.tipo === "repo")?.url ?? "https://github.com/navyri/" + p.slug}
cd ${p.enlaces.find((e) => e.tipo === "repo")?.url.split("/").pop() ?? p.slug}
# sigue el README del repo`}
              </pre>
              <p className="mt-3 text-xs text-tenue">
                {p.tipo === "escritorio"
                  ? idioma === "es"
                    ? "Aplicación de escritorio: corre en tu máquina (Java/POO)."
                    : "Desktop application: runs on your machine (Java/OOP)."
                  : ""}
              </p>
            </div>
          </Ventana>
        )}

        {/* Ficha técnica */}
        <Ventana titulo={t("ficha")}>
          <dl className="divide-y divide-borde/70 text-xs">
            {ficha.map((f) => (
              <div key={f.k} className="flex justify-between gap-3 px-4 py-2.5">
                <dt className="etiqueta shrink-0">{f.k}</dt>
                <dd className="text-right text-tinta">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Ventana>
      </div>

      {/* Capturas */}
      <Ventana titulo={t("capturasTit")} ruta="C:\\CAPTURAS">
        {p.capturas.length > 0 ? (
          <div className="grid gap-3 p-3 sm:grid-cols-2">
            {p.capturas.map((c) => (
              <a key={c} href={c} target="_blank" rel="noreferrer" className="marco block overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c}
                  alt={`Captura de ${p.nombre}`}
                  className="aspect-video w-full object-cover object-top transition hover:opacity-85"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center text-xs text-tenue">{t("sinCapturas")}</div>
        )}
      </Ventana>
    </div>
  );
}
