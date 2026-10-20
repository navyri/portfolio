"use client";

import { useState } from "react";
import Ventana from "@/ui/Ventana";
import { useIdioma } from "@/i18n/I18nProvider";
import { perfil } from "@/data/perfil";

export default function Contacto() {
  const { t } = useIdioma();
  const [interes, setInteres] = useState<"si" | "talvez" | null>(null);

  return (
    <section id="contacto" className="pt-14">
      <Ventana titulo={t("contactoTitulo")} ruta="MAILTO://">
        <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="chip95 texto-verde border-current">● {t("contactoEstado")}</span>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-tenue">
              {t("contactoIntro")}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`mailto:${perfil.email}`} className="btn95 btn95-primario">
                ✉ {perfil.email}
              </a>
              <a
                href={perfil.github}
                target="_blank"
                rel="noreferrer"
                className="btn95"
              >
                GitHub ↗
              </a>
              {perfil.linkedin && (
                <a
                  href={perfil.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn95"
                >
                  LinkedIn ↗
                </a>
              )}
            </div>
          </div>

          {/* Widget de radios, estilo formulario retro */}
          <div className="marco bg-fondo p-4">
            <p className="etiqueta">{t("interes")}</p>
            <div className="mt-3 space-y-2 text-xs">
              {(["si", "talvez"] as const).map((op) => (
                <label key={op} className="flex cursor-pointer items-center gap-2 text-tinta">
                  <span
                    aria-hidden
                    className={`inline-block size-3.5 rounded-full border-2 border-borde ${
                      interes === op ? "bg-acento" : "bg-panel"
                    }`}
                  />
                  <input
                    type="radio"
                    name="interes"
                    className="sr-only"
                    checked={interes === op}
                    onChange={() => setInteres(op)}
                  />
                  {t(op === "si" ? "si" : "talvez")}
                </label>
              ))}
            </div>
            {interes && (
              <p className="mt-3 texto-crt text-lg text-acento">
                {t("gracias")}
                <span className="cursor">▊</span>
              </p>
            )}
          </div>
        </div>
      </Ventana>
    </section>
  );
}
