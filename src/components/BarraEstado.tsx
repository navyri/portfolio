"use client";

import { useEffect, useState } from "react";
import { useIdioma } from "@/i18n/I18nProvider";

/** Barra de estado inferior, estilo Windows 95 (con cinta desplazable). */
export default function BarraEstado() {
  const { t } = useIdioma();
  const [cpu, setCpu] = useState(7);
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const id = setInterval(() => setCpu(4 + Math.floor(Math.random() * 24)), 3000);
    setFecha(
      new Intl.DateTimeFormat("es-CO", {
        weekday: "short",
        day: "2-digit",
        month: "short",
      }).format(new Date()),
    );
    return () => clearInterval(id);
  }, []);

  const cinta = t("cintaTexto");

  return (
    <footer className="sticky bottom-0 z-40 border-t-2 border-sombra border-t-claro bg-panel">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-2 py-1 text-[0.65rem] text-tenue">
        <span className="btn95 px-2 py-0.5 text-[0.65rem] text-tinta">◈ M.E.OS</span>
        <span className="marco hidden px-2 py-0.5 lg:inline">MEM: 640K OK</span>
        <span className="marco px-2 py-0.5">CPU: {cpu}%</span>

        {/* Cinta de bienvenida */}
        <div className="marco ml-1 hidden min-w-0 flex-1 overflow-hidden px-2 py-0.5 sm:block">
          <span className="cinta texto-crt text-[0.85rem] text-acento">
            {cinta + cinta}
          </span>
        </div>

        <span className="ml-auto hidden md:inline">{fecha}</span>
        <span className="marco px-2 py-0.5 texto-crt text-[0.85rem] text-acento">
          navyri.online<span className="cursor">_</span>
        </span>
      </div>
    </footer>
  );
}
