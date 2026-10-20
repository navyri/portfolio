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

// Extensiones de navegador (p. ej. eSafe de bancos) inyectan atributos como
// bis_skin_checked / __processed_* en el DOM antes de que React hidrate, lo que
// provoca falsos errores de hidratación. Este observer los elimina en cuanto
// aparecen (solo esos atributos; el resto del DOM no se toca).
const scriptAntiExtensiones = `try{(function(){var P=/^(bis_|__processed)/;
function A(el){if(!el||!el.attributes)return;var a=Array.prototype.slice.call(el.attributes);for(var i=0;i<a.length;i++){if(P.test(a[i].name))el.removeAttribute(a[i].name);}}
function S(el){if(!el||el.nodeType!==1)return;A(el);var h=el.querySelectorAll("*");for(var i=0;i<h.length;i++)A(h[i]);}
S(document.documentElement);
var o=new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){var m=ms[i];if(m.type==="attributes")A(m.target);else for(var j=0;j<m.addedNodes.length;j++)S(m.addedNodes[j]);}});
o.observe(document.documentElement,{attributes:true,childList:true,subtree:true});
setTimeout(function(){o.disconnect();},15000);})()}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistMono.variable} ${vt323.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptAntiExtensiones }} />
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
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
