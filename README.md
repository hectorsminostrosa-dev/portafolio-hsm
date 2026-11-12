# Portafolio · Héctor San Martín

Sitio de portafolio personal hecho con [Astro](https://astro.build).

## Probar en tu computador

Requiere Node.js 18.20.8 o superior.

```bash
npm install
npm run dev      # abre http://localhost:4321
npm run build    # genera el sitio final en dist/
```

## Estructura

```
public/        Imágenes y PDF (perfil, CV, campañas, meme)
src/layouts/   Plantilla base (head, Tailwind)
src/pages/     index.astro: la página principal
```

## Publicar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En vercel.com → Add New → Project → importa el repositorio.
3. Vercel detecta Astro solo (Build: `npm run build`, Output: `dist`). Presiona Deploy.

Cada vez que hagas push a GitHub, Vercel vuelve a publicar el sitio automáticamente.
