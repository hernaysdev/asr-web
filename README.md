# ASR Performance & Tuning 🏁

**🌐 [asrperformanceva.com](https://asrperformanceva.com)**

![ASR Performance](docs/captura.jpg)

Sitio web one-page para **ASR Performance & Tuning LLC**, un taller de preparación de autos en Ashland, Virginia (EE.UU.): dyno tuning, upgrades de rendimiento, fabricación, armado de motores, sistema eléctrico y diagnóstico.

## Qué tiene

- Hero, servicios, proceso de trabajo, galería, preguntas frecuentes y contacto.
- **Formulario de contacto** con validaciones (Reactive Forms) que envía por EmailJS.
- Diseño propio desde Figma, **sin librerías de UI**: SCSS con design tokens en variables CSS.
- Responsivo y optimizado para SEO.

## Arquitectura

Angular 16 con **standalone components**, `OnPush` y **Signals**, organizado por principios SOLID:

```
src/app/
├── core/       # servicios, modelos y tokens de inyección (ContentService, EmailService…)
├── shared/     # componentes reutilizables
└── sections/   # cada sección de la página
```

## Stack

![Angular](https://img.shields.io/badge/Angular_16-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6C37)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?logo=cloudflare&logoColor=white)

## Correr en local

```bash
npm ci
npm start        # http://localhost:4200
npm test         # Karma + Jasmine
npm run build    # dist/asr-web
```
