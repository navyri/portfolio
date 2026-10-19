# navyri.online — Portafolio personal

Portafolio personal de **Mariana Lemus** (navyri): proyectos universitarios
mostrados en una línea de tiempo, con vista previa y enlace para probar cada
uno en vivo.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Vercel.

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Editar contenido (lo único que necesitas tocar)

| Qué cambiar | Archivo |
| --- | --- |
| Nombre, correo, LinkedIn, avatar, semestre | `src/data/perfil.ts` |
| Proyectos de la línea de tiempo | `src/data/proyectos.ts` |
| Colores (tema) | `src/app/globals.css` (variables `:root`) |

### Placeholder pendiente

- `src/data/perfil.ts` → `email: "hola@navyri.online"` es un marcador de
  posición; cámbialo por tu correo real.
- `src/data/perfil.ts` → `linkedin` está vacío; pega tu URL para que aparezca
  el botón en Contacto.
- `src/data/proyectos.ts` → los proyectos con `porConfirmar: true`
  (Portfolio IngWeb v2, Horario-Ayane, BirthdayCard) no tienen enlaces
  públicos todavía; agrega sus `enlaces` (o bórralos).

### Agregar un proyecto nuevo

Copia una entrada existente en `src/data/proyectos.ts` y ajusta `nombre`,
`resumen`, `tecnologias` y `enlaces`:

```ts
{
  nombre: "Mi proyecto",
  resumen: "Una o dos frases que expliquen qué hace.",
  tecnologias: ["Python", "FastAPI"],
  enlaces: [
    { etiqueta: "Probar en vivo", url: "https://...", tipo: "demo" },
    { etiqueta: "Código", url: "https://github.com/navyri/...", tipo: "repo" },
  ],
}
```

Si el proyecto no tiene demo, deja solo el enlace de `repo`. Si aún no tiene
enlaces públicos, agrega `porConfirmar: true`.

## Despliegue en Vercel + dominio navyri.online

1. Sube el repo a GitHub:
   ```bash
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/navyri/PORTAFOLIO.git
   git push -u origin main
   ```
2. En [vercel.com/new](https://vercel.com/new) → **Import** del repo →
   Framework: Next.js (detectado automáticamente) → **Deploy**.
3. **Settings → Domains** → agrega `navyri.online` (y `www`).
   Vercel te mostrará los DNS a configurar en el registrador del dominio:
   - Registro **A** `@` → `76.76.21.21`
   - Registro **CNAME** `www` → `cname.vercel-dns.com`
4. Vuelve a Vercel y pulsa **Refresh**; HTTPS se activa solo cuando los DNS
   propaguen.

> Ojo: `navyri.space` apunta a otro sitio; este portafolio vive en
> **navyri.online**.
