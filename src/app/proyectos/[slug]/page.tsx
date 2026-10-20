import type { Metadata } from "next";
import ProyectoDetalle from "@/components/ProyectoDetalle";
import { porSlug, slugs } from "@/data/proyectos";

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = porSlug(slug);
  return {
    title: p ? `${p.nombre} — Mariana Esguerra` : "Proyecto — Mariana Esguerra",
    description: p?.resumenEs,
  };
}

export default async function PaginaProyecto({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProyectoDetalle slug={slug} />;
}
