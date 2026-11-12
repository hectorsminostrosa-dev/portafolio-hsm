# 🚀 Portafolio Profesional de Héctor San Martín (Versión Astro)

¡Hola Héctor! He convertido tu portafolio HTML original en una **estructura moderna y modular con Astro**. 

La gran ventaja de esta nueva estructura es que **está pensada especialmente para ti que no programas**: todos los datos, textos, enlaces, videos y servicios están separados en un único archivo de configuración (`src/data/portfolio.js`). ¡Cambiar o agregar cosas ahora es tan fácil como editar un documento de texto!

---

## 📁 Estructura del Proyecto

```text
portfolio-astro/
├── public/                       <-- Archivos estáticos directos (no se compilan)
│   ├── cv.pdf                    <-- Tu archivo de CV (reemplázalo cuando lo actualices)
│   ├── favicon.svg               <-- Ícono de la pestaña del navegador
│   └── images/
│       ├── hector-perfil.jpg     <-- Tu foto de perfil
│       └── hector-meme.jpg       <-- Tu imagen del meme
├── src/
│   ├── components/               <-- Cada sección de la página separada
│   │   ├── Header.astro          <-- Barra de navegación superior y menú móvil
│   │   ├── Hero.astro            <-- Portada principal y métricas de impacto
│   │   ├── Profile.astro         <-- Perfil profesional y trayectoria
│   │   ├── Services.astro        <-- Tus 6 servicios especializados
│   │   ├── Multimedia.astro      <-- Videos de YouTube y Reels de Instagram
│   │   ├── LinkedInPosts.astro   <-- Publicaciones embebidas de LinkedIn
│   │   ├── FreelancePosts.astro  <-- Publicaciones freelance de Instagram
│   │   ├── CameraExperience.astro<-- Videos y contenidos en cámara
│   │   ├── CvViewer.astro        <-- Visor interactivo y botón de descarga de CV
│   │   ├── WhoAmI.astro          <-- Sección ¿Quién Soy?, gustos y meme
│   │   ├── Contact.astro         <-- Botones directos de Email y Teléfono
│   │   └── Footer.astro          <-- Pie de página con año automático
│   ├── data/
│   │   └── portfolio.js          <-- ⭐️ ¡EL ARCHIVO MÁS IMPORTANTE! Aquí editas todo.
│   ├── layouts/
│   │   └── Layout.astro          <-- Estructura base (head, meta, scripts, Tailwind)
│   ├── pages/
│   │   └── index.astro           <-- La página principal que une los componentes
│   └── styles/
│       └── global.css            <-- Estilos globales de Tailwind CSS
├── astro.config.mjs              <-- Configuración de Astro con Tailwind
├── tailwind.config.mjs           <-- Colores y diseño personalizado (Emerald)
├── package.json                  <-- Dependencias listas para Vercel
└── README.md                     <-- Esta guía
```

---

## ✏️ ¿Cómo cambiar o agregar cosas fácilmente?

### 1. Cambiar textos, datos, servicios o videos
Abre el archivo:
📁 **`src/data/portfolio.js`**

Dentro encontrarás secciones claramente rotuladas en español:
- **`personalInfo`**: Cambia tu nombre, cargo, teléfono, correo o titular.
- **`servicesData`**: Si ofreces un nuevo servicio, solo copias un bloque y le pones nuevo título y descripción.
- **`streamingVideos`**: Para agregar un video de YouTube, solo agrega su ID (lo que viene después de `v=` en el link de YouTube).
- **`instagramReels`**: Para agregar un Reel, solo pega la URL de Instagram entre comillas.
- **`linkedInPosts`**: Para actualizar tus posts de LinkedIn.
- **`whoAmIData`**: Para modificar tus párrafos de presentación o gustos personales.

### 2. Actualizar tu Currículum Vítae (CV)
- Ve a la carpeta **`public/`**.
- Reemplaza el archivo **`cv.pdf`** por tu nuevo PDF (manteniendo el mismo nombre `cv.pdf`).
- ¡Listo! Automáticamente se actualizará tanto el visor interactivo como el botón de descarga.

### 3. Cambiar tu foto de perfil o tu meme
- Ve a la carpeta **`public/images/`**.
- Reemplaza **`hector-perfil.jpg`** con tu nueva foto.
- Reemplaza **`hector-meme.jpg`** con tu nuevo meme.

---

## 🌐 Cómo subirlo a GitHub y sincronizarlo con Vercel

Como ya tienes tu portafolio sincronizado entre GitHub y Vercel, el proceso es súper directo:

1. **Descomprime el archivo ZIP** que te adjunto con este proyecto.
2. **Copia todos los archivos de esta carpeta** a tu repositorio local o directamente en GitHub:
   - Si usas la web de GitHub: puedes subir los archivos o hacer un commit con la nueva estructura.
   - Si usas Git en tu computadora:
     ```bash
     git add .
     git commit -m "Migración a estructura modular en Astro"
     git push origin main
     ```
3. **Vercel detecta Astro automáticamente**:
   - Vercel reconocerá el framework **Astro** de inmediato gracias al `package.json`.
   - Ejecutará automáticamente `npm run build` y publicará tu sitio en segundos en tu dominio `hectorignorado.vercel.app`.

---

## 💻 Para probarlo en tu computadora (Opcional)

Si alguna vez quieres probar los cambios en tu computadora antes de subirlos a GitHub:

1. Abre la terminal en la carpeta del proyecto.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
4. Abre tu navegador en `http://localhost:4321`. Cada cambio que hagas en `src/data/portfolio.js` se verá reflejado en tiempo real sin recargar la página.
