# Backlog — raquel-rodriguez (landing page)

## P1
- [ ] **Sección Transformaciones (antes/después)**: casos propios de Raquel, NO depende de
      Belén. Ubicación acordada: después del Hero, o después de tratamiento/proceso — también
      queda bien pegada a testimonios/estrellitas. Label marketinero ("Mirá nuestros
      resultados" / "Mirá las transformaciones"). Storytelling cohesivo con el resto de la
      página (pedido explícito de Lucas: que todo fluya como una historia).
- [ ] **Navbar fija**: agregar link a Transformaciones/Resultados. Barra actual: inicios,
      tratamientos, primera consulta. Raquel quiere revisar en vivo dónde queda mejor.
- [ ] **Secciones faltantes del flujo de tratamiento** (1ra visita — evaluación clínica; 2da
      visita — estudios complementarios; diagnóstico, explicación y plan). BLOQUEADO por
      material real de la clínica — Belén mandó 1 sola foto (congreso) hasta el 15/8. Revisar
      si el Dropbox que Lucas recibió el 15/8 ya cubre esto antes de seguir esperando.

## P3
- [ ] Actualizar imágenes generales de la landing con las fotos nuevas de la sesión (aparte de
      las secciones específicas de arriba) — pedido genérico, sin spec puntual todavía.

## Done reciente
- [x] 2026-08-15: Fix scroll horizontal fantasma (reportado por Lucas en `localhost:3002`) —
      overflow sub-pixel real (~0.67px, `documentElement.scrollLeft` no clampeaba a 0 pese a
      que `scrollWidth === clientWidth` en enteros) causado casi seguro por la acumulación de
      anchos `vw` del carrusel GSAP pin-scroll de "Diferenciales" (`components/horizontal-scroll.tsx`:
      `82vw`/`42vw`/`30vw`/`85vw`/`40vw`/`35vw`/`15vw`). Windows dibuja la barra completa igual
      aunque el overflow real sea de menos de 1px (thumb con tamaño mínimo). Fix: `overflow-x:
      hidden` en `html, body` (`app/globals.css`) — estándar y sin efectos visuales colaterales,
      no se persiguió el px exacto de origen (no vale la pena para un caso sub-pixel).
- [x] 2026-08-15: Card "Diagnóstico y Planificación" (`public/clinic/diagnostico-servicio.jpg`,
      referenciada desde `components/service-card.tsx`) — reemplazada la foto stock (consultorio
      genérico lila con escáner intraoral, no era de la clínica real) por una foto real del
      consultorio de Raquel (`IMG_8820` del zip `Consultorio Raquel.zip` que Lucas bajó de
      Dropbox el 15/8 a `Downloads/`, 6 fotos en total tomadas 20/7 — las otras 5 quedan
      disponibles para otras secciones). Elegida por mostrar escritorio+monitor (más afín a
      "diagnóstico" que las tomas solo del sillón). **Ninguna de las 6 fotos muestra
      literalmente el escáner 3D/radiografías/cefalometría** que menciona el copy — si Raquel
      quiere esa imagen específica, hace falta una toma nueva del equipo puntual.
