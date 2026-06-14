# Auditoría de la landing — Dra. Raquel Rodríguez (Ortodoncia)

Stack: Next.js 14.2 (App Router) · framer-motion + gsap + lenis · Tailwind + shadcn (parcial). Origen: export de v0.dev.
Objetivo del sitio: conversión → agendar consulta (canal único: WhatsApp `+54 9 388 578 6946`).

---

## 🔴 TOP 5 — Mayor impacto en conversión (atacar primero)

### 1. El hero (LCP) está saboteado: imagen de 3,1 MB + texto que arranca invisible
- **Qué:** El fondo del hero es `/hero-raquel.webp` de **3,1 MB** servido como `<img>` sin optimizar (`app/page.tsx:125-130`), y `next.config.mjs:14` tiene `images.unoptimized: true`. Además el `<h1>` y el texto arrancan en `opacity-0` y se animan con GSAP con `delay: 0.5–1s` (`app/page.tsx:79-88, 163`). En mobile esto destruye el LCP: el elemento más grande pesa 3 MB y el título recién aparece ~1,5 s después.
- **Por qué importa:** LCP lento = más rebote y peor ranking (Core Web Vitals es factor de SEO). En una landing local de captación, cada 100 ms cuentan.
- **Recomendación:** (a) Comprimir el hero a <300 KB y servir versiones responsive (AVIF/WebP por breakpoint); reactivar `next/image` con `priority`. (b) No animar con opacity el `<h1>`: que sea visible de entrada o animá solo un leve `translateY` sin ocultar. (c) Borrar `hero-raquel.mp4` (17 MB) y `hero-raquel-web.mp4` (2,1 MB) que ya no se usan: son ~19 MB muertos en el deploy.

### 2. Todo el embudo termina en un `wa.me` "pelado", sin contexto ni trazabilidad
- **Qué:** Todos los CTA principales apuntan a `https://wa.me/5493885786946` **sin `?text=` ni UTM** (`components/whatsapp-button.tsx:26`, `navbar.tsx:99,152`, `page.tsx:581`). Solo el botón de urgencias prellena mensaje (`page.tsx:114`).
- **Por qué importa:** No podés medir qué sección convierte, y el paciente abre WhatsApp con el chat en blanco (más fricción, menos contexto para la Dra.).
- **Recomendación:** Prellenar mensaje por origen, ej. `?text=Hola,%20quiero%20agendar%20mi%20primera%20consulta%20de%20ortodoncia`. Agregar parámetro de origen (hero/navbar/contacto) para saber de dónde vino. Idealmente, evento de conversión (GA4/Meta Pixel) en el click.

### 3. Testimonios que parecen inventados
- **Qué:** Los 3 testimonios están **hardcodeados** con nombres genéricos "María L.", "Carolina R.", "Pablo M." (`page.tsx:458-461`). Para un servicio de salud, esto se lee como placeholder y resta credibilidad.
- **Por qué importa:** La prueba social real es el mayor driver de conversión en clínicas. Reseñas que "huelen" a falsas hacen el efecto contrario.
- **Recomendación:** Reemplazar por reseñas reales de Google (con nombre tal cual aparece y, si se puede, link al perfil). Mostrar el **número de reseñas** junto al "5.0" (un "5.0" sin cantidad es débil). Si hay autorización, sumar antes/después reales — en ortodoncia es el activo visual que más convierte y hoy **no existe** ninguna sección de resultados.

### 4. Sin formulario ni alternativa a WhatsApp, y sin mapa embebido
- **Qué:** No hay formulario de turno/contacto en ningún lado (revisado `page.tsx` y `app/pacientes/page.tsx`). La dirección es solo un link a Google Maps (`page.tsx:515`), sin mapa visible.
- **Por qué importa:** WhatsApp es el canal correcto en Argentina, pero perdés a quien no quiere chatear o entra desde desktop. Un mapa embebido aumenta confianza y conversión en negocios locales.
- **Recomendación:** Mantener WhatsApp como CTA primario, pero sumar (a) un formulario corto de "pedí que te llamemos" (nombre + teléfono + motivo) como fallback, y (b) un mapa embebido en la sección Contacto.

### 5. El segundo CTA del hero saca al visitante nuevo del embudo
- **Qué:** Los dos botones del hero son WhatsApp (bien) y **"Ya estoy en tratamiento" → /pacientes** (`page.tsx:171-179`). El secundario sirve a pacientes existentes, no a captar nuevos.
- **Por qué importa:** En el punto de mayor atención, la mitad del peso visual apunta a una página que no convierte.
- **Recomendación:** Que el secundario refuerce la conversión nueva (ej. "Ver tratamientos" o "Cómo es la primera consulta") y mover el acceso a "Pacientes en tratamiento" a la navbar (donde ya está) o a un enlace secundario más discreto.

---

## ⚙️ Performance (resto)

- **Tres librerías de animación en simultáneo** — framer-motion 11 + gsap/ScrollTrigger + lenis (`package.json`). Lenis corre un `gsap.ticker` continuo (`smooth-scroll.tsx:25-28`) con `touchMultiplier: 2` (`:17`), o sea **secuestra el scroll también en mobile**, donde suele molestar y generar jank en gama baja. Recomendación: desactivar Lenis en mobile (o detrás de `prefers-reduced-motion`) y evaluar si framer-motion alcanza para todo (gsap aporta poco aquí más allá del hero y los count-ups).
- **`prefers-reduced-motion` no se respeta en ningún lado.** Accesibilidad + usuarios que marean. Hay decenas de `whileInView`/`motion` sin guard.
- **Toda la home es client-side.** `app/page.tsx:1` es `"use client"` y hay **61 archivos** con `"use client"`. Se pierde el render de servidor de React: más JS al cliente, peor TTI. Idealmente el contenido estático (texto, secciones) se sirve como server components y solo las islas animadas son cliente.
- **`images.unoptimized: true`** (`next.config.mjs:14`) + uso de `<img>` crudo en vez de `next/image` en todo el sitio → sin responsive, sin AVIF, sin lazy-decode nativo. Es la causa raíz del punto 1.

## 🧱 Estructura del proyecto (deuda técnica)

- **~13 componentes muertos** (0 imports): `about-section`, `benefit-card`, `footer`, `generic-avatar`, `language-switcher`, `service-benefits`, `service-features`, `sticky-cards`, `testimonial-card`, `testimonials`, `theme-provider`, `video-section`, `whatsapp-float`. Borrar.
- **`lucide-react` es dependencia muerta en el código activo**: la app usa `hugeicons-react` vía `components/icons.ts`; `lucide-react` solo aparece en los componentes muertos de arriba y en el kit `ui/`. Tras limpiar, se puede sacar del bundle.
- **Doble sistema de i18n**: `lib/i18n.ts` (623 líneas, incluye un set completo en **inglés** que nunca se usa) + `utils/translations.ts` + `contexts/language-context.tsx` + `components/language-provider.tsx` (que hardcodea `"es"` y desactiva el switch, `language-provider.tsx:6-10`). El sitio es solo español → colapsar a una sola fuente y **borrar el bloque EN** (peso muerto en el bundle cliente).
- **Hooks duplicados**: `hooks/use-mobile.tsx` vs `components/ui/use-mobile.tsx`, y `hooks/use-toast.ts` vs `components/ui/use-toast.ts`.
- **Kit shadcn casi entero sin usar**: ~70 archivos en `components/ui/` y solo se usan accordion (y sonner/toaster). No rompe (tree-shaking), pero es ruido y superficie de mantenimiento.
- **Builds con chequeos apagados**: `next.config.mjs:9-13` tiene `eslint.ignoreDuringBuilds: true` **y** `typescript.ignoreBuildErrors: true`. Se publican errores de tipos/lint sin que nadie se entere. Reactivar al menos TypeScript.
- **Restos de v0.dev**: import a `./v0-user-next.config` (`next.config.mjs:3`), `placeholder*.svg/png`, `og-image.html`. Limpiar.

## 🔍 SEO / metadata

- **Bien:** `metadataBase` + canonical, OpenGraph/Twitter completos, `lang="es"`, JSON-LD `Dentist` con dirección/teléfono/horarios y `FAQPage` (`layout.tsx:17-136`). Buena base de SEO local.
- **`/pacientes` no tiene metadata propia** (`app/pacientes/page.tsx` no exporta `metadata`; además es `"use client"`, así que no puede). Hereda título/description del home → **dos URLs con el mismo título**. Solución: envolver con un `layout.tsx` server o un wrapper server que defina su `metadata`.
- **Falta `sameAs` y `aggregateRating` en el JSON-LD.** Tenés Instagram (`@od.rodriguezraquel`) y perfil de Google: sumalos en `sameAs`. Si el 5.0 es real, agregá `aggregateRating` con cantidad de reseñas (habilita estrellas en Google). Sumar `geo` (lat/long) refuerza el local.
- **Sin `favicon`/`icons` en metadata.** `public/favicon.svg` existe (382 B) pero `layout.tsx` no lo referencia ni hay `app/icon`. Agregar `icons` en metadata.
- **Alt text:** correcto en general (features, foto de Raquel, logo). Los decorativos usan `alt="" aria-hidden` bien.

## ✍️ Copy y contenido

- **H1 genérico y sin localización:** "Ortodoncia y Ortopedia Facial para todas las edades." (`page.tsx:164`). No dice dónde ni qué gana el paciente. Para conversión + SEO local conviene incluir "San Salvador de Jujuy" y un beneficio (ej. *"…con diagnóstico preciso y alineadores invisibles en San Salvador de Jujuy"*).
- **Voz inconsistente:** el eyebrow dice **"Sobre mí"** (`page.tsx:191`) pero el texto está en plural — *"Somos un equipo…"* (`i18n.ts:174`) y *"contamos con / nuestra práctica"* (`page.tsx:285-288`). Definir una sola voz (yo vs. nosotros) en todo el sitio.
- **Labels de CTA inconsistentes:** "Reservar consulta" (navbar `:106`), "Reservar primera consulta" (`i18n.ts:169`), y en la tarjeta de contacto el botón dice literalmente **"WhatsApp"** (`page.tsx:584`) en vez de una acción ("Agendar por WhatsApp"). Unificar a un verbo de acción.
- **Bien:** transparencia de precio ($40.000) y medios de pago (`page.tsx:576,587`) — ayuda a calificar. La urgencia dinámica "AGENDA DE [MES] ABIERTA" (`page.tsx:140-142`) está buena.
- **Falta diferenciación:** no se explica *por qué elegirla a ella* frente a otro ortodoncista (qué la hace distinta más allá de "15+ años"). Un bloque corto de propuesta de valor única ayudaría.

## ✅ UX / Conversión — checklist

| Elemento | Estado |
|---|---|
| CTA claro y repetido | ✅ WhatsApp presente en hero, navbar, contacto |
| CTA con contexto/tracking | ❌ `wa.me` sin `?text=` ni UTM |
| Formulario de turno (fallback) | ❌ inexistente |
| Prueba social | ⚠️ testimonios hardcodeados/genéricos; falta nº de reseñas |
| Antes/después | ❌ inexistente (alto impacto en ortodoncia) |
| Info de contacto + horarios | ✅ completa y visible |
| Mapa de ubicación | ⚠️ solo link, sin embed |
| Precio | ✅ visible |
| Accesibilidad (reduced-motion, contraste) | ⚠️ sin reduced-motion; texto `#8A8A94` sobre blanco es contraste bajo |

---

### Plan sugerido (por ROI)
1. **Semana 1 (conversión rápida):** comprimir hero + quitar opacity del H1, prellenar `?text=` + tracking, reemplazar testimonios por reseñas reales, sumar antes/después.
2. **Semana 2 (técnico):** reactivar `next/image` + `typescript.ignoreBuildErrors:false`, borrar código/assets muertos, colapsar i18n y sacar EN/lucide.
3. **Semana 3 (SEO/UX):** metadata propia en `/pacientes`, `sameAs`+`aggregateRating`+favicon, formulario fallback + mapa embebido, `prefers-reduced-motion` y Lenis off en mobile.
