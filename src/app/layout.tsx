import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { perfil } from "@/data/perfil";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(perfil.dominio),
  title: `${perfil.nombre} — Portafolio`,
  description: `Portafolio de ${perfil.nombre}: proyectos de Ingeniería de Sistemas, software e IA.`,
  openGraph: {
    title: `${perfil.nombre} — Portafolio`,
    description: `Proyectos de Ingeniería de Sistemas, software e IA.`,
    url: perfil.dominio,
    siteName: `${perfil.nombre} — Portafolio`,
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
