<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=210&color=390f16&text=NAVYRI.ONLINE&fontColor=ffff&fontSize=56&fontAlignY=32&desc=Portafolio%20personal%20retro%20con%20proyectos%20y%20demos%20en%20vivo&descColor=EDE6D6&descAlignY=58"/>
</p>

<p align="center">
  <a href="https://www.navyri.online" title="Abrir navyri.online en la nube">
    <img src="https://64.media.tumblr.com/90a181475f0d4b8729503689a6051ef3/12e95d275a7dbda7-eb/s1280x1920/0ab0d9637d0978ab43677ce377a7f130cbc8d94a.pnj" height="200" alt="navyri.online — abrir el portafolio"/>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-280C11?style=flat-square&logo=nextdotjs&logoColor=cf6d74"/>
  <img src="https://img.shields.io/badge/TypeScript-strict-3F1117?style=flat-square&logo=typescript&logoColor=f2efe9"/>
  <img src="https://img.shields.io/badge/Tailwind-v4-571A22?style=flat-square&logo=tailwindcss&logoColor=cf6d74"/>
  <img src="https://img.shields.io/badge/despliegue-0%20USD-CF6D74?style=flat-square"/>
  <img src="https://img.shields.io/badge/i18n-ES%20%2F%20EN-0B0909?style=flat-square"/>
  <img src="https://img.shields.io/badge/dominio-navyri.online-390F16?style=flat-square"/>
</p>

**navyri.online** es el portafolio personal de **Mariana Esguerra** (navyri): un "escritorio" retro
( BIOS / Win95 / estética Lain ) donde cada proyecto es un archivo con vista previa, capturas y demo
en vivo. Corre en Next.js 16 (App Router) con TypeScript y Tailwind CSS 4, y está desplegado gratis
(0 USD) en Vercel bajo su propio dominio.

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&height=6&color=390F16"/>
</p>

## Características

| Característica | Detalle |
|---|---|
| Estética de sistema operativo | Ventanas biseladas, boot log, relojes, barra de tareas con CPU% y efectos CRT |
| Modo oscuro (por defecto) y claro | Botón de tema en la barra superior |
| ES / EN | Selector de idioma en la barra superior; se guarda en `localStorage` y detecta el idioma del navegador la primera vez |
| Línea de tiempo | Proyectos por semestre, con capturas reales |
| URLs limpias | `navyri.online/ponyarchive`, `navyri.online/yes-or-no`, etc. (rewrites en `next.config.ts` → página `/proyectos/<slug>`) |
| Demos embebidas | Los proyectos web muestran su demo real dentro de un "navegador simulado" (iframe), sin salir del portafolio |

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&height=6&color=390F16"/>
</p>

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
```

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&height=6&color=390F16"/>
</p>

## Editar contenido (lo único que necesitas tocar)

| Qué cambiar | Archivo |
|---|---|
| Nombre, correo, LinkedIn, avatar | `src/data/perfil.ts` |
| Proyectos, capturas, demos, enlaces | `src/data/proyectos.ts` |
| Textos del sitio (ES y EN) | `src/i18n/diccionario.ts` |
| Colores (tema oscuro/claro) | `src/app/globals.css` (variables `:root` y `[data-theme="light"]`) |

### Placeholders pendientes

- `src/data/perfil.ts` → `email` ya es tu correo real; `linkedin` vacío
  oculta el botón (agrega tu perfil cuando quieras mostrarlo).
- **Capturas de proyectos Java** (POO, citas veterinarias, gestión de
  empleados, camel racing): toma capturas de pantalla, guárdalas en
  `public/capturas/` y pon la ruta en `capturas: ["/capturas/archivo.jpg"]`.

### Agregar un proyecto nuevo

Copia una entrada en `src/data/proyectos.ts` y ajusta `slug`, `nombre`,
`resumenEs/En`, `tecnologias`, `capturas` y `enlaces`. Reglas:

- `tipo: "web"` + `demoUrl` → se embebe la demo en vivo en su página.
- `tipo: "escritorio"` → su página muestra cómo clonar/ejecutar + capturas.
- Después, agrega el `slug` al arreglo de `slugs` en `next.config.ts`
  para que `navyri.online/<slug>` funcione.

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&height=6&color=390F16"/>
</p>

## NOW.PLAYING con Spotify (opcional)

El widget NOW.PLAYING se sincroniza con tu cuenta de Spotify (misma
implementación que navyri-site). En **Vercel → Settings → Environment
Variables** agrega las variables que ya usas en navyri-site:

| Variable | Descripción |
|---|---|
| `SPOTIFY_CLIENT_ID` | Client ID de tu app en developer.spotify.com |
| `SPOTIFY_CLIENT_SECRET` | Client secret de la misma app |
| `SPOTIFY_REFRESH_TOKEN` | Refresh token obtenido con `/api/spotify/login` |
| `SPOTIFY_REDIRECT_URI` | `https://www.navyri.online/api/spotify/callback` (solo para volver a conectar) |

Si faltan variables, el widget funciona igual y muestra el tema por defecto
(DUVET — bôa) sin romper nada. Para regenerar el refresh token: visita
`https://www.navyri.online/api/spotify/login`, autoriza y canjea el `?code=` por
token (el callback ya no muestra credenciales).

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&height=6&color=390F16"/>
</p>

## Despliegue en Vercel + dominio navyri.online

1. Sube el repo a GitHub:
   ```bash
   git add .
   git commit -m "Portafolio v2"
   git branch -M main
   git remote add origin https://github.com/navyri/portfolio.git
   git push -u origin main
   ```
2. En [vercel.com/new](https://vercel.com/new) → **Import** del repo →
   Framework: Next.js (detectado automáticamente) → **Deploy**.
3. **Settings → Domains** → agrega `navyri.online` (y `www`). Configura los
   DNS en tu registrador:
   - Registro **A** `@` → `216.198.79.1`
   - Registro **CNAME** `www` → `496569c03d37b306.vercel-dns-017.com`
4. Vuelve a Vercel y pulsa **Refresh**; HTTPS se activa solo.

> Las demos de los proyectos web se sirven desde subdominios de
> `navyri.online` (pony-archive, pokemon, yes-or-no, portfolio-2025, lucha)
> y se embeben con iframe desde aquí; navyri.space corre en su propio
> dominio.

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&height=6&color=390F16"/>
</p>

## Autora

· © <a href="https://github.com/navyri" target="_blank">**Mariana Esguerra**</a>

Portafolio personal — navyri.online.

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=390f16" alt=""/>
</p>
