# ASR Performance & Tuning — Guía de proyecto

Sitio web one-page para **ASR Performance & Tuning LLC** (Ashland, VA), construido en Angular 16 con énfasis en buenas prácticas y principios SOLID. La fuente del diseño son los JPGs en `/Users/hernays/developer/asr/figma/`, copiados a `src/assets/figma/` como referencia.

## Stack

- **Angular 16** con **standalone components** + `ChangeDetectionStrategy.OnPush`
- **SCSS puro** con CSS variables como design tokens (`src/styles/_tokens.scss`)
- **EmailJS** (`@emailjs/browser`) para el formulario de contacto
- **Reactive Forms** para validaciones
- **Signals** (developer preview en v16) para estado local del FAQ y el envío del form
- Sin librerías UI externas, sin Tailwind, sin Material

## Comandos

```bash
npm start            # dev server en http://localhost:4200
npm run build        # build de producción en dist/asr-web
npm test             # Karma + Jasmine
```

## Arquitectura (SOLID)

```
src/app/
├── core/        # Singletons: services, modelos, tokens DI
│   ├── models/        # interfaces puras (Service, Faq, Value, ContactPayload, NavLink)
│   ├── services/      # ContentService, EmailService, ScrollService
│   └── tokens/        # EMAILJS_CONFIG (InjectionToken<EmailJsConfig>)
├── shared/      # Componentes/recursos reutilizables
│   ├── components/    # UiButton, UiIcon, SectionTitle
│   └── icons/         # ICON_REGISTRY (mapa name -> SVG)
├── features/    # Una sección de la landing por carpeta
│   ├── header/  hero/  services/  about/  gallery/  faq/  contact/  footer/
└── styles/      # _tokens.scss, _mixins.scss, _typography.scss, _reset.scss
```

### Aplicación de SOLID

- **S — Single Responsibility:** cada feature renderiza UNA sección. `EmailService` solo habla con EmailJS; `ContentService` solo expone datos; `ScrollService` solo scrollea y observa secciones visibles.
- **O — Open/Closed:** agregar un servicio nuevo a la grid = añadir un objeto al array en `ContentService.services` sin tocar `ServicesComponent`. Idem para FAQs, values y nav.
- **L — Liskov:** `UiButton` cambia comportamiento por `variant` ('primary' | 'outline') sin romper el contrato del consumidor.
- **I — Interface Segregation:** modelos pequeños y específicos en `core/models/*.ts`. Nada de `Content` gigante.
- **D — Dependency Inversion:** `EmailService` recibe `EMAILJS_CONFIG` por InjectionToken; las keys nunca se importan en componentes. Swappable a otro proveedor cambiando solo el service.

## Reglas para futuras sesiones

1. **Nunca hardcodear colores, spacings ni tipografía** — usar `var(--asr-*)` de `_tokens.scss`. Si necesitas un valor nuevo, agrégalo al token primero.
2. **Todos los componentes son `standalone` + `OnPush`.** Si un componente necesita CD por defecto, debe estar bien justificado.
3. **Datos estáticos** (servicios, FAQs, values, hours, contacto) viven en `ContentService`, no en plantillas.
4. **Iconos:** se registran en `src/app/shared/icons/icon-registry.ts` y se renderizan con `<ui-icon [name]="...">`. No usar img/svg sueltos en plantillas.
5. **EmailJS keys**: NUNCA importar `@emailjs/browser` fuera de `EmailService`. Las keys viven en `app.config.ts` y se inyectan vía `EMAILJS_CONFIG`. En producción mover a `environment.ts`.
6. **Scroll y navegación:** usar `ScrollService.scrollTo(id)` y `ScrollService.observe([...])`. No tocar `window.scroll*` directamente.
7. **Estilos por componente:** SCSS file separado por componente (`*.component.scss`). El SCSS global vive en `src/styles/`.
8. **Imports relativos** para core/shared dentro del mismo proyecto. Si crece, considerar paths alias en `tsconfig`.
9. **Forms:** Reactive Forms con `FormBuilder.nonNullable.group({...})` y validaciones declarativas.
10. **Accesibilidad:** todos los iconos decorativos llevan `aria-hidden`. Iconos interactivos van envueltos en `<button>`/`<a>` con `aria-label`.

## Configuración pendiente (TODO)

| Item | Dónde | Acción |
|---|---|---|
| EmailJS service/template/public keys | `src/app/app.config.ts` | Reemplazar `TODO_USER_*` con valores reales de tu cuenta EmailJS |
| Logo oficial | `src/app/features/header/` y `footer/` | Reemplazar el placeholder text-gradient por el SVG real |
| Fotos finales | `src/assets/` | Hoy los componentes usan los JPGs del figma como background. Sustituir por assets de mayor resolución y formatos modernos (webp/avif) |
| Favicon | `src/favicon.ico` | Reemplazar el de Angular por uno de ASR |
| Mapa real | `ContentService.contact.mapEmbed` | Si quieres el embed firmado por API key (mejor SEO/rendimiento), generarlo en Google Maps Embed API |

## Design tokens

Fuente única en `src/styles/_tokens.scss`. Cambios de tema/branding se hacen ahí, no por componente:

```scss
--asr-bg, --asr-surface, --asr-surface-2     // fondos
--asr-red, --asr-red-hover                   // acento
--asr-text, --asr-text-muted, --asr-border   // texto/bordes
--asr-font-display, --asr-font-body          // tipografía
--asr-container, --asr-gutter, --asr-section-y  // layout
```

## Referencias

- Diseño origen: `src/assets/figma/IMG-20260514-WA0014..0018.jpg`
- EmailJS docs: https://www.emailjs.com/docs/
- Angular 16 standalone components: https://angular.io/guide/standalone-components

## Verificación visual

1. `npm start` y abrir `http://localhost:4200`
2. Comparar lado a lado con las imágenes en `src/assets/figma/`
3. Resolución de referencia: 1280px. Responsive parte de ahí (breakpoints en `_mixins.scss`: sm=640, md=900, lg=1180)
