# Portafolio · Héctor San Martín

Sitio de portafolio personal hecho con [Astro](https://astro.build).

## Editar contenido

Casi todo el texto está en **`src/data/site.ts`**:

- `reelsMarcas` y `reelsClaude`: enlaces de los reels de Instagram (pega el link del reel).
- `campanas`: los correos de la sección de mailing (imagen en `public/mailing/` y PDF en `public/`).
- `experiencia`, `servicios`, `herramientas`, `marcas`, `contacto`.

Las imágenes y PDF van en `public/` (`perfil.jpg`, `meme_spoiler.jpg`, `cv.pdf`, etc.).

## Probar en tu computador

Requiere Node.js 18.20.8 o superior.

```bash
npm install
npm run dev      # abre http://localhost:4321
npm run build    # genera el sitio final en dist/
```

## Publicar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En vercel.com → Add New → Project → importa el repositorio.
3. Vercel detecta Astro solo (Build: `npm run build`, Output: `dist`). Presiona Deploy.

Cada push a GitHub vuelve a publicar el sitio automáticamente.
