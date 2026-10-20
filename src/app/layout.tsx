import type { Metadata } from "next";
import { Geist_Mono, VT323 } from "next/font/google";
import "./globals.css";
import { perfil } from "@/data/perfil";
import { ProveedorIdioma } from "@/i18n/I18nProvider";
import MenuBar from "@/components/MenuBar";
import BarraEstado from "@/components/BarraEstado";
import BootScreen from "@/components/BootScreen";
import IconosEscritorio from "@/components/IconosEscritorio";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
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

// Tema oscuro por defecto; respeta la elección guardada (sin parpadeo).
const scriptTema = `try{var t=localStorage.getItem("tema");document.documentElement.dataset.theme=(t==="light"||t==="dark")?t:"dark";var l=localStorage.getItem("lang");if(l==="en"||l==="es")document.documentElement.lang=l;}catch(e){document.documentElement.dataset.theme="dark";}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistMono.variable} ${vt323.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body className="flex min-h-full flex-col">
        <ProveedorIdioma>
          <BootScreen />
          <IconosEscritorio />
          <MenuBar />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 sm:px-6">
            {children}
          </main>
          <BarraEstado />
        </ProveedorIdioma>
      </body>
    </html>
  );
}
