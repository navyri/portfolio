"use client";

import { useEffect, useState } from "react";
import { useIdioma } from "@/i18n/I18nProvider";

/**
 * Pantalla de arranque BIOS: se muestra una sola vez por sesión de pestaña
 * y se omite con cualquier clic/tecla. No aparece con prefers-reduced-motion.
 */
export default function BootScreen() {
  const { t } = useIdioma();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem("boot-ok")) return;
      sessionStorage.setItem("boot-ok", "1");
    } catch {
      /* sin sessionStorage: no molestar */
    }

    setVisible(true);
    const fin = window.setTimeout(() => setVisible(false), 2900);
    const saltar = () => setVisible(false);
    window.addEventListener("keydown", saltar);
    window.addEventListener("pointerdown", saltar);
    return () => {
      window.clearTimeout(fin);
      window.removeEventListener("keydown", saltar);
      window.removeEventListener("pointerdown", saltar);
    };
  }, []);

  if (!visible) return null;

  const lineas = [
    t("boot1"),
    t("boot2"),
    t("bootMem"),
    t("boot3"),
    t("bootSpotify"),
    t("boot4"),
    t("boot5"),
    t("bootStart"),
  ];

  return (
    <div className="boot-pantalla" role="status" aria-label="Arranque del sistema">
      <div className="max-w-3xl">
        {lineas.map((linea, i) => (
          <div key={i} className="linea-log" style={{ ["--i" as string]: i }}>
            {linea}
          </div>
        ))}
        <div className="linea-log mt-3" style={{ ["--i" as string]: lineas.length }}>
          <div className="barra-pixel max-w-xs" style={{ background: "transparent" }}>
            <span style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <p
        className="linea-log absolute bottom-8 left-0 w-full px-[8vw] text-base opacity-70"
        style={{ ["--i" as string]: lineas.length + 1 }}
      >
        {t("bootOmitir")}
      </p>
    </div>
  );
}
