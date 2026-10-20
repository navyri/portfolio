"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIdioma } from "@/i18n/I18nProvider";

const enlaces = [
  { href: "/", clave: "navInicio" as const },
  { href: "/proyectos", clave: "navProyectos" as const },
  { href: "/acerca", clave: "navSobre" as const },
  { href: "/acerca#contacto", clave: "navContacto" as const },
];

/** Barra de menú superior: el "taskbar" del sistema operativo. */
export default function MenuBar() {
  const { idioma, setIdioma, t, tema, alternarTema } = useIdioma();
  const ruta = usePathname();
  const [hora, setHora] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      setHora(
        new Intl.DateTimeFormat("es-CO", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "America/Bogota",
        }).format(new Date()),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-claro border-b-sombra bg-panel/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-1.5 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="texto-crt flex shrink-0 items-center gap-2 text-lg text-tinta hover:text-acento"
        >
          <span aria-hidden className="text-acento">
            ◈
          </span>
          <span className="hidden sm:inline">{t("os")}</span>
          <span className="sm:hidden">M.E.OS</span>
        </Link>

        <nav className="flex items-center gap-1 overflow-x-auto">
          {enlaces.map((e) => {
            const activo =
              e.href === "/" ? ruta === "/" : ruta.startsWith(e.href.split("#")[0]);
            return (
              <Link
                key={e.href}
                href={e.href}
                className={`shrink-0 px-2 py-1 text-[0.7rem] uppercase tracking-widest ${
                  activo
                    ? "bg-vino-alto text-tinta"
                    : "text-tenue hover:bg-vino hover:text-tinta"
                }`}
                aria-current={activo ? "page" : undefined}
              >
                {t(e.clave)}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <div
            className="flex border-2 border-claro border-b-sombra border-r-sombra"
            role="group"
            aria-label="Idioma"
          >
            {(["es", "en"] as const).map((i) => (
              <button
                key={i}
                onClick={() => setIdioma(i)}
                className={`px-2 py-0.5 text-[0.65rem] uppercase ${
                  idioma === i ? "bg-vino-alto text-tinta" : "text-tenue hover:text-tinta"
                }`}
                aria-pressed={idioma === i}
              >
                {i}
              </button>
            ))}
          </div>

          <button
            onClick={alternarTema}
            className="btn95 px-2 py-0.5 text-[0.65rem]"
            aria-label={t("tema")}
            title={t("tema")}
          >
            {tema === "dark" ? "☾" : "☀"}
          </button>

          <span className="hidden texto-crt text-lg text-acento md:inline">{hora}</span>
        </div>
      </div>
    </header>
  );
}
