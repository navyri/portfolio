"use client";

import { useEffect, useState } from "react";
import Ventana from "@/ui/Ventana";
import { useIdioma } from "@/i18n/I18nProvider";
import { perfil } from "@/data/perfil";
import { totalProyectos } from "@/data/proyectos";

function Relojes() {
  const fmt = (tz: string) =>
    new Intl.DateTimeFormat("es-CO", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: tz,
    }).format(new Date());
  const [t, setT] = useState({ bog: "--:--:--", utc: "--:--:--" });
  useEffect(() => {
    const tick = () =>
      setT({ bog: fmt("America/Bogota"), utc: fmt("UTC") });
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="grid grid-cols-2 gap-3 p-3 texto-crt text-2xl">
      <div>
        <div className="etiqueta font-mono">BOG</div>
        <div className="text-acento">{t.bog}</div>
      </div>
      <div>
        <div className="etiqueta font-mono">UTC</div>
        <div className="text-acento">{t.utc}</div>
      </div>
    </div>
  );
}

export default function Portada() {
  const { t, idioma } = useIdioma();

  const boot = [
    t("boot1"),
    t("boot2"),
    t("boot3"),
    t("boot4"),
    t("boot5"),
    t("boot6"),
  ];

  const sys = [
    { k: t("sysSemestre"), v: `${perfil.semestre} ${idioma === "es" ? "semestre" : "semester"}` },
    { k: t("sysProyectos"), v: String(totalProyectos) },
    { k: t("sysPais"), v: idioma === "es" ? perfil.paisEs : perfil.paisEn },
    { k: t("sysDesde"), v: String(perfil.desdeAnio) },
  ];

  return (
    <section id="inicio" className="pt-8 sm:pt-12">
      {/* Ventana principal: nombre + tagline */}
      <Ventana titulo={t("biosys")} ruta={"C:\\USERS\\MARIANA"} crt>
        <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="texto-verde texto-crt text-xl">
              C:\&gt; whoami<span className="cursor">▊</span>
            </p>
            <h1 className="mt-2 texto-crt text-5xl leading-none text-tinta sm:text-7xl">
              MARIANA
              <br />
              <span className="text-acento">ESGUERRA</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-tenue">
              {idioma === "es" ? perfil.taglineEs : perfil.taglineEn}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#proyectos" className="btn95 btn95-primario">
                ▶ {t("verProyectos")} ({totalProyectos})
              </a>
              <a href="#contacto" className="btn95">
                ✉ {t("contactar")}
              </a>
            </div>
          </div>

          {/* Columna de widgets */}
          <div className="flex flex-col gap-4">
            <div className="ventana">
              <div className="titulo text-base">
                <span className="pts" aria-hidden>
                  <i className="pt ventana-pt" />
                  <i className="pt" />
                </span>
                {t("sysTitulo")}
              </div>
              <dl className="divide-y divide-borde/70 text-xs">
                {sys.map((s) => (
                  <div key={s.k} className="flex justify-between px-3 py-1.5">
                    <dt className="uppercase tracking-widest text-tenue">{s.k}</dt>
                    <dd className="text-tinta">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="ventana">
              <div className="titulo text-base">
                <span className="pts" aria-hidden>
                  <i className="pt ventana-pt" />
                  <i className="pt" />
                </span>
                NOW.PLAYING
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5">
                <span className="eq" aria-hidden>
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.13}s` }} />
                  ))}
                </span>
                <div className="text-xs">
                  <div className="text-tinta">DUVET — bôa</div>
                  <div className="text-tenue">slowed + reverbed</div>
                </div>
              </div>
            </div>

            <div className="ventana">
              <div className="titulo text-base">
                <span className="pts" aria-hidden>
                  <i className="pt ventana-pt" />
                  <i className="pt" />
                </span>
                WORLD.CLOCK
              </div>
              <Relojes />
            </div>
          </div>
        </div>
      </Ventana>

      {/* Boot log */}
      <div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Ventana titulo="BOOT.LOG" ruta="/var/log">
          <pre className="space-y-1 overflow-x-auto p-4 text-xs leading-relaxed texto-verde">
            {boot.map((linea, i) => (
              <div key={i} className="linea-log" style={{ ["--i" as string]: i }}>
                {linea}
              </div>
            ))}
          </pre>
        </Ventana>

        <Ventana titulo="LEEME.TXT">
          <div className="p-4 text-xs leading-relaxed text-tenue">
            <p>
              {idioma === "es"
                ? "Este portafolio es un escritorio: cada proyecto es un archivo. Haz doble clic (o un clic) en «Abrir ▸» para ver su ficha, capturas y demo en vivo."
                : "This portfolio is a desktop: every project is a file. Double-click (or single click) “Open ▸” to see its details, screenshots and live demo."}
            </p>
            <p className="mt-3 text-tenue">
              {idioma === "es"
                ? "También puedes visitarlos directamente: navyri.online/ponyarchive, navyri.online/yes-or-no, etc."
                : "You can also visit them directly: navyri.online/ponyarchive, navyri.online/yes-or-no, etc."}
            </p>
            <p className="mt-3 texto-crt text-lg text-acento">
              STATUS: <span className="texto-verde">READY</span>
              <span className="cursor">▊</span>
            </p>
          </div>
        </Ventana>
      </div>
    </section>
  );
}
