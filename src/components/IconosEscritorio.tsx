"use client";

import Link from "next/link";
import { useIdioma } from "@/i18n/I18nProvider";

/* Iconos pixel-art dibujados con la paleta del sitio (vino / acento / silver) */

function IconoMonitor() {
  return (
    <svg viewBox="0 0 16 16" className="h-7 w-7" shapeRendering="crispEdges" aria-hidden>
      <rect x="1" y="2" width="14" height="10" fill="var(--tenue)" />
      <rect x="2" y="3" width="12" height="8" fill="var(--fondo)" />
      <rect x="3" y="4" width="10" height="6" fill="var(--vino-alto)" />
      <rect x="4" y="5" width="5" height="1" fill="var(--acento-txt)" />
      <rect x="4" y="7" width="8" height="1" fill="var(--acento-txt)" opacity="0.55" />
      <rect x="7" y="12" width="2" height="2" fill="var(--tenue)" />
      <rect x="4" y="14" width="8" height="1" fill="var(--tenue)" />
    </svg>
  );
}

function IconoCarpeta() {
  return (
    <svg viewBox="0 0 16 16" className="h-7 w-7" shapeRendering="crispEdges" aria-hidden>
      <rect x="1" y="4" width="6" height="2" fill="var(--vino-alto)" />
      <rect x="1" y="5" width="14" height="9" fill="var(--vino-alto)" />
      <rect x="2" y="7" width="12" height="6" fill="var(--acento-txt)" />
      <rect x="3" y="9" width="6" height="1" fill="var(--fondo)" opacity="0.45" />
    </svg>
  );
}

function IconoSobre() {
  return (
    <svg viewBox="0 0 16 16" className="h-7 w-7" aria-hidden>
      <rect x="1.5" y="4.5" width="13" height="8" fill="var(--panel)" stroke="currentColor" strokeWidth="1" />
      <path d="M2.5 5.5 L8 10 L13.5 5.5" fill="none" stroke="var(--acento-txt)" strokeWidth="1" />
    </svg>
  );
}

function IconoNota() {
  return (
    <svg viewBox="0 0 16 16" className="h-7 w-7" shapeRendering="crispEdges" aria-hidden>
      <rect x="6" y="3" width="7" height="2" fill="var(--tenue)" />
      <rect x="11" y="3" width="2" height="8" fill="var(--tenue)" />
      <rect x="7" y="9" width="5" height="3" fill="var(--acento-txt)" />
      <rect x="6" y="12" width="6" height="1" fill="var(--acento-txt)" opacity="0.5" />
    </svg>
  );
}

/**
 * Iconos del escritorio: columna fija pegada al borde izquierdo de la
 * ventana (fuera del contenedor, no le roban ancho a las páginas).
 * Solo aparece en pantallas desde 1360px, donde hay espacio libre
 * a los lados del contenido.
 */
export default function IconosEscritorio() {
  const { t } = useIdioma();
  const iconos = [
    { href: "/proyectos", icon: <IconoMonitor />, texto: t("iconProyectos") },
    { href: "/acerca", icon: <IconoCarpeta />, texto: t("iconAcerca") },
    { href: "/acerca#contacto", icon: <IconoSobre />, texto: t("iconContacto") },
    { href: "/#musica", icon: <IconoNota />, texto: t("iconMusica") },
  ];

  return (
    <aside
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-screen w-20 flex-col items-center gap-1 pt-16 [@media(min-width:1360px)]:flex"
      aria-label="Escritorio"
    >
      {iconos.map((i) => (
        <Link key={i.href} href={i.href} className="icono-escritorio pointer-events-auto">
          <span className="icono-caja" aria-hidden>
            {i.icon}
          </span>
          <span className="icono-texto">{i.texto}</span>
        </Link>
      ))}
    </aside>
  );
}
