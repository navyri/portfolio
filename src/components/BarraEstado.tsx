"use client";

import { useEffect, useState } from "react";
import { useIdioma } from "@/i18n/I18nProvider";

/** Barra de estado inferior, estilo Windows 95. */
export default function BarraEstado() {
  const { t } = useIdioma();
  const [cpu, setCpu] = useState(7);

  useEffect(() => {
    const id = setInterval(() => setCpu(4 + Math.floor(Math.random() * 24)), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="sticky bottom-0 z-40 border-t-2 border-sombra border-t-claro bg-panel">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-2 py-1 text-[0.65rem] text-tenue">
        <span className="btn95 px-2 py-0.5 text-[0.65rem] text-tinta">
          ◈ {t("os")}
        </span>
        <span className="hidden marco hidden px-2 py-0.5 sm:inline">
          MEM: 640K OK
        </span>
        <span className="marco px-2 py-0.5">CPU: {cpu}%</span>
        <span className="ml-auto truncate texto-crt text-base text-acento">
          navyri.online<span className="cursor">_</span>
        </span>
      </div>
    </footer>
  );
}
