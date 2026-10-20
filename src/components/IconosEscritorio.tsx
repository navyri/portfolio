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

function IconoPersona() {
  return (
    <svg viewBox="0 0 16 16" className="h-7 w-7" shapeRendering="crispEdges" aria-hidden>
      {/* Cabeza redonda pixelada */}
      <rect x="6" y="2" width="4" height="1" fill="currentColor" />
      <rect x="5" y="3" width="6" height="4" fill="currentColor" />
      <rect x="6" y="7" width="4" height="1" fill="currentColor" />
      {/* Hombros en campana */}
      <rect x="6" y="8" width="4" height="1" fill="var(--acento-txt)" />
      <rect x="5" y="9" width="6" height="1" fill="var(--acento-txt)" />
      <rect x="4" y="10" width="8" height="1" fill="var(--acento-txt)" />
      <rect x="2" y="11" width="12" height="1" fill="var(--acento-txt)" />
      <rect x="1" y="12" width="14" height="2" fill="var(--acento-txt)" />
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
      {/* Nota doble (♫) */}
      <rect x="4" y="2" width="9" height="2" fill="currentColor" />
      <rect x="4" y="2" width="2" height="7" fill="currentColor" />
      <rect x="11" y="2" width="2" height="8" fill="currentColor" />
      <rect x="1" y="8" width="5" height="3" fill="var(--acento-txt)" />
      <rect x="8" y="9" width="5" height="3" fill="var(--acento-txt)" />
    </svg>
  );
}

/**
 * Iconos del escritorio: columna fija centrada en el espacio libre a la
 * izquierda del contenido (fuera del contenedor, no le roban ancho a las
 * páginas). Su ancho es exactamente el hueco entre el borde y el contenido
 * central (max-w-6xl = 72rem): (100vw - 72rem) / 2.
 * Solo aparece en pantallas desde 1360px, donde hay espacio libre
 * a los lados del contenido.
 */
export default function IconosEscritorio() {
  const { t } = useIdioma();
  const iconos = [
    { href: "/proyectos", icon: <IconoMonitor />, texto: t("iconProyectos") },
    { href: "/acerca", icon: <IconoPersona />, texto: t("iconAcerca") },
    { href: "/acerca#contacto", icon: <IconoSobre />, texto: t("iconContacto") },
    { href: "/#musica", icon: <IconoNota />, texto: t("iconMusica") },
  ];

  return (
    <aside
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-screen w-[calc((100vw_-_72rem)/2)] flex-col items-center gap-1 pt-16 [@media(min-width:1360px)]:flex"
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
