"use client";

import Image from "next/image";
import Ventana from "@/ui/Ventana";
import { useIdioma } from "@/i18n/I18nProvider";
import { perfil, hechosEs, hechosEn } from "@/data/perfil";

export default function SobreMi() {
  const { t, idioma } = useIdioma();

  const campos = [
    { k: t("campoNombre"), v: perfil.nombre },
    { k: t("campoPais"), v: idioma === "es" ? perfil.paisEs : perfil.paisEn },
    { k: t("campoLenguajes"), v: "Python · Java · TypeScript" },
    { k: t("campoEnfoque"), v: (idioma === "es" ? perfil.focosEs : perfil.focosEn).join(" · ") },
  ];

  const enlaces = [
    { nombre: "GitHub", url: perfil.github },
    ...(perfil.linkedin ? [{ nombre: "LinkedIn", url: perfil.linkedin }] : []),
    { nombre: t("correo"), url: `mailto:${perfil.email}` },
  ];

  return (
    <section id="acerca" className="pt-14">
      <Ventana titulo={t("acercaTitulo")} ruta="C:\\USERS\\MARIANA\\DOCS">
        <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[auto_1.4fr_auto]">
          {/* Avatar + ficha */}
          <div className="mx-auto w-full max-w-[240px]">
            <div className="titulo justify-center text-base">{t("reporte")}</div>
            <div className="marco m-2 aspect-square overflow-hidden">
              <Image
                src={perfil.avatar}
                alt={`Foto de ${perfil.nombre}`}
                width={240}
                height={240}
                className="h-full w-full object-cover grayscale-[35%] contrast-110"
                priority
              />
            </div>
            <dl className="px-3 pb-3 text-xs">
              {campos.map((c) => (
                <div key={c.k} className="linea-lista flex justify-between gap-2 py-1.5">
                  <dt className="etiqueta">{c.k}</dt>
                  <dd className="text-right text-tinta">{c.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Biografía */}
          <div className="text-sm leading-relaxed">
            <h2 className="texto-crt text-3xl text-tinta">
              {idioma === "es" ? "Acerca de mí" : "About me"}
            </h2>
            <p className="mt-3 text-tenue">
              {idioma === "es"
                ? `Soy ${perfil.nombre.split(" ")[0]}, ${perfil.semestre} semestre de Ingeniería de Sistemas. Empecé programando en C++ y Java; hoy construyo aplicaciones full-stack y sistemas con IA — incluyendo agentes RAG con recuperación aumentada y modelos que corren en local.`
                : `I'm ${perfil.nombre.split(" ")[0]}, in my ${perfil.semestre} semester of Systems Engineering. I started programming in C++ and Java; today I build full-stack apps and AI systems — including RAG agents with retrieval and models running locally.`}
            </p>
            <p className="mt-3 text-tenue">
              {idioma === "es"
                ? "Me interesa que las cosas funcionen de verdad: con pruebas, desplegadas y documentadas. Cada proyecto de esta línea de tiempo tiene su código en GitHub y, cuando es posible, una demo en vivo donde puedes probarlo."
                : "I care about things that actually work: tested, deployed and documented. Every project in this timeline has its code on GitHub and, when possible, a live demo you can try."}
            </p>

            <ul className="mt-5 space-y-2 text-xs">
              {(idioma === "es" ? hechosEs : hechosEn).map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span aria-hidden className="mt-0.5 text-acento">
                    ◆
                  </span>
                  <span className="text-tenue">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna de enlaces */}
          <div className="w-full max-w-[260px]">
            <div className="titulo justify-center text-base">{t("enlacesTit")}</div>
            <div className="flex flex-col gap-2 p-3">
              {enlaces.map((e) => (
                <a
                  key={e.nombre}
                  href={e.url}
                  target={e.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="btn95 justify-between"
                >
                  <span aria-hidden className="text-acento">
                    ◆
                  </span>
                  {e.nombre} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </Ventana>
    </section>
  );
}
