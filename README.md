# PortFeid - Portafolio Web

![PortFeid](public/images/portfeid-preview.png)

## 🚀 Descripción

PortFeid es un portafolio web moderno e innovador para desarrolladores, inspirado en la estética visual y musical de **Feid**. Diseñado con un enfoque minimalista pero vibrante, utiliza colores oscuros combinados con detalles neón (púrpuras, rosas y azules eléctricos) que crean una experiencia visual única.

El proyecto está construido con **Astro**, un moderno generador de sitios estáticos que permite una excelente optimización y rendimiento.

## ✨ Características

- **Diseño Responsive**: Adaptado para dispositivos móviles, tablets y escritorio.
- **Tema Claro/Oscuro**: Cambio de tema con transiciones suaves y persistencia mediante localStorage.
- **Animaciones Elegantes**: Efectos sutiles de entrada, salida y hover inspirados en Feid.
- **Optimizado para SEO**: Metadatos, Open Graph, robots.txt y sitemap.xml completos.
- **Rendimiento Optimizado**: Lazy loading de imágenes y componentes para carga rápida.
- **Accesibilidad**: Cumple con estándares WCAG para accesibilidad web.
- **Interactividad**: Efectos visuales y microinteracciones que mejoran la experiencia del usuario.

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)**: Framework principal
- **[TailwindCSS](https://tailwindcss.com/)**: Estilado y componentes UI
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático para JavaScript
- **[tsParticles](https://particles.js.org/)**: Efectos de partículas interactivas
- **[Framer Motion](https://www.framer.com/motion/)**: Animaciones avanzadas
- **[AOS](https://michalsnik.github.io/aos/)**: Animaciones basadas en scroll
- **[Chart.js](https://www.chartjs.org/)**: Gráficos y visualizaciones
- **[Three.js](https://threejs.org/)**: Efectos 3D y WebGL

## 📂 Estructura del Proyecto

```
portfeid/
├── public/             # Archivos estáticos (favicons, imágenes, etc.)
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── layouts/        # Plantillas de página
│   ├── pages/          # Páginas del sitio
│   └── styles/         # Estilos globales
└── astro.config.mjs    # Configuración de Astro
```

## 🔍 Componentes Principales

- **Hero**: Sección de portada con efectos de partículas y animaciones de texto.
- **About**: Sección sobre mí con información personal y habilidades técnicas.
- **Projects**: Proyectos organizados por año con filtros por categorías.
- **Experience**: Línea de tiempo vertical con experiencia laboral.
- **Certificates**: Carrusel con certificaciones y credenciales.
- **Contact**: Formulario de contacto con validación y efectos visuales.

## 🚀 Cómo Usar

### Requisitos Previos

- Node.js 16.x o superior
- npm o yarn

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/portfeid.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd portfeid
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

### Ejecución en Desarrollo

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en `http://localhost:3000`

### Compilación para Producción

```bash
npm run build
```

Los archivos generados estarán en el directorio `dist/`.

## 🌐 Despliegue

El proyecto está configurado para ser desplegado en plataformas como **Vercel**, **Netlify** o **GitHub Pages**.

Para Vercel o Netlify, simplemente conecta tu repositorio y selecciona el framework como Astro.

## 🧩 Personalización

El sitio puede personalizarse fácilmente:

- Colores y temas en `tailwind.config.js`
- Contenido personal en componentes individuales
- Imágenes y logos en `public/images/`

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Tu Nombre**

¡No dudes en contactarme si tienes alguna pregunta o sugerencia!

---

💚 Inspirado en el estilo de [Feid](https://www.instagram.com/feid/)

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
