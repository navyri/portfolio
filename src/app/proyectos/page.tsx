import type { Metadata } from "next";
import LineaTiempo from "@/components/LineaTiempo";

export const metadata: Metadata = {
  title: "Proyectos — Mariana Esguerra",
  description:
    "Explorador de proyectos: agentes de IA, aplicaciones full-stack y sistemas de escritorio, por semestre.",
};

export default function PaginaProyectos() {
  return <LineaTiempo />;
}
