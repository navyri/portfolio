import type { Metadata } from "next";
import SobreMi from "@/components/SobreMi";
import Contacto from "@/components/Contacto";

export const metadata: Metadata = {
  title: "Acerca de — Mariana Esguerra",
  description:
    "Quién soy, en qué trabajo y cómo contactarme: Ingeniería de Sistemas, software e IA.",
};

export default function PaginaAcerca() {
  return (
    <>
      <SobreMi />
      <Contacto />
    </>
  );
}
