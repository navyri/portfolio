"use client";

import Link from "next/link";
import Ventana from "@/ui/Ventana";
import TarjetaProyecto from "@/components/TarjetaProyecto";
import { useIdioma } from "@/i18n/I18nProvider";
import { grupos, totalProyectos } from "@/data/proyectos";

/** Ventana "RECIENTES" del inicio: proyectos destacados. */
export default function Recientes() {
  const { t } = useIdioma();
  const destacados = grupos
    .flatMap((g) => g.proyectos)
    .filter((p) => p.destacado)
    .slice(0, 3);

  return (
    <section className="pt-4">
      <Ventana titulo="RECIENTES.EXE" ruta={"C:\\DESTACADOS"}>
        <div className="p-3">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <span className="etiqueta">{t("recientesIntro")}</span>
            <Link href="/proyectos" className="btn95 px-2 py-1 text-[0.62rem]">
              {t("verTodos")} ({totalProyectos}) ▸
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destacados.map((p) => (
              <TarjetaProyecto key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </Ventana>
    </section>
  );
}
