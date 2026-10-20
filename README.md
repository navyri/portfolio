# navyri.online — Portafolio personal

Portafolio personal de **Mariana Esguerra** (navyri): un "escritorio" retro
( BIOS / Win95 / estética Lain ) donde cada proyecto es un archivo con vista
previa, capturas y demo en vivo.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Vercel.

## Características

- 🖥️ **Estética de sistema operativo**: ventanas biseladas, boot log, relojes,
  barra de tareas con CPU%, efectos CRT.
- 🌗 **Modo oscuro (por defecto) y claro** — botón ☾/☀ en la barra superior.
- 🌐 **ES / EN** — selector de idioma en la barra superior (se guarda en
  `localStorage`; detecta el idioma del navegador la primera vez).
- 📁 **Línea de tiempo** de proyectos por semestre, con capturas reales.
- 🔗 **URLs limpias**: `navyri.online/ponyarchive`, `navyri.online/yes-or-no`,
  etc. (rewrites en `next.config.ts` → página `/proyectos/<slug>`).
- 📺 **Demos embebidas**: los proyectos web muestran su demo real dentro de un
  "navegador simulado" (iframe), sin salir del portafolio.

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Editar contenido (lo único que necesitas tocar)

| Qué cambiar | Archivo |
| --- | --- |
| Nombre, correo, LinkedIn, avatar | `src/data/perfil.ts` |
| Proyectos, capturas, demos, enlaces | `src/data/proyectos.ts` |
| Textos del sitio (ES y EN) | `src/i18n/diccionario.ts` |
| Colores (tema oscuro/claro) | `src/app/globals.css` (variables `:root` y `[data-theme="light"]`) |

### Placeholders pendientes

- `src/data/perfil.ts` → `email: "hola@navyri.online"` es un marcador;
  cámbialo por tu correo real. `linkedin` vacío oculta el botón.
- Proyectos con `porConfirmar: true` (Portfolio IngWeb v2, Horario-Ayane,
  BirthdayCard): no están como públicos en GitHub; agrega sus enlaces en
  `src/data/proyectos.ts` o bórralos.
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

## 🎵 NOW.PLAYING con Spotify (opcional)

El widget NOW.PLAYING se sincroniza con tu cuenta de Spotify (misma
implementación que navyri-site). En **Vercel → Settings → Environment
Variables** agrega las variables que ya usas en navyri-site:

| Variable | Descripción |
| --- | --- |
| `SPOTIFY_CLIENT_ID` | Client ID de tu app en developer.spotify.com |
| `SPOTIFY_CLIENT_SECRET` | Client secret de la misma app |
| `SPOTIFY_REFRESH_TOKEN` | Refresh token obtenido con `/api/spotify/login` |
| `SPOTIFY_REDIRECT_URI` | `https://navyri.online/api/spotify/callback` (solo para volver a conectar) |

Si faltan variables, el widget funciona igual y muestra el tema por defecto
(DUVET — bôa) sin romper nada. Para regenerar el refresh token: visita
`https://navyri.online/api/spotify/login`, autoriza y canjea el `?code=` por
token (el callback ya no muestra credenciales).

## Despliegue en Vercel + dominio navyri.online

1. Sube el repo a GitHub:
   ```bash
   git add .
   git commit -m "Portafolio v2"
   git branch -M main
   git remote add origin https://github.com/navyri/PORTAFOLIO.git
   git push -u origin main
   ```
2. En [vercel.com/new](https://vercel.com/new) → **Import** del repo →
   Framework: Next.js (detectado automáticamente) → **Deploy**.
3. **Settings → Domains** → agrega `navyri.online` (y `www`). Configura los
   DNS en tu registrador:
   - Registro **A** `@` → `76.76.21.21`
   - Registro **CNAME** `www` → `cname.vercel-dns.com`
4. Vuelve a Vercel y pulsa **Refresh**; HTTPS se activa solo.

> Las demos de PonyArchive y navyri.space siguen corriendo en sus propios
> dominios (Vercel/Render) y se embeben con iframe desde aquí. Si en el
> futuro quieres re-hostearlas bajo `navyri.online` sin iframe, se pueden
> compilar como estáticas con `base: "./"` dentro de `public/apps/`.
