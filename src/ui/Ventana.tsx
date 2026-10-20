import type { ReactNode } from "react";

/** Ventana estilo Win95/BIOS: barra de título biselada + cuerpo. */
export default function Ventana({
  titulo,
  ruta,
  children,
  className = "",
  crt = false,
  id,
}: {
  titulo: string;
  ruta?: string;
  children: ReactNode;
  className?: string;
  crt?: boolean;
  id?: string;
}) {
  return (
    <div className={`ventana ${crt ? "crt" : ""} ${className}`} id={id}>
      <div className="titulo">
        <span className="pts" aria-hidden>
          <i className="pt ventana-pt" />
          <i className="pt" />
        </span>
        <span className="truncate">{titulo}</span>
        {ruta && <span className="titulo-ruta hidden truncate md:inline">{ruta}</span>}
        <span className="titulo-btns" aria-hidden>
          <i className="titulo-btn">_</i>
          <i className="titulo-btn">▫</i>
          <i className="titulo-btn">✕</i>
        </span>
      </div>
      {children}
    </div>
  );
}
