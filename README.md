# Herson Taekwondo — Landing Page

Informe de proyecto para el desarrollador. Este documento resume la información de marca y negocio necesaria para adaptar la plantilla base al cliente, y las directrices de estilo y funcionalidad que debe cumplir el resultado final.

> Este proyecto ya parte de una **plantilla base HTML** con un **prompt inicial** entregado para adaptarla al negocio. Este README **no define secciones ni estructura de la landing page** — eso ya está resuelto por la plantilla. Úsalo como complemento: información de marca, assets, paleta y requisitos de estilo/efectos que debes aplicar sobre esa base, iterando con Claude.

---

## 1. Sobre el negocio

- **Nombre de marca:** Herson Taekwondo (usuario/handle en redes: `academia.herson`)
- **Rubro:** Academia de Taekwondo (artes marciales)
- **Identidad visual actual:** logo con mascota — un león caricaturesco vestido con dobok (uniforme de taekwondo), en pose de energía/puño al frente, dentro de un emblema circular con el texto "Herson" y el término **태권도** (coreano para "Taekwondo"), transmitiendo autenticidad de la disciplina.
- El resto de la información de negocio (dirección, teléfono, horarios de clases, precios, testimonios, nombres de instructores, logros/torneos, edades de los alumnos, etc.) **no está disponible en archivos locales** — debe obtenerse de las redes sociales del cliente (ver sección 3).

No inventes datos de contacto ni de negocio que no aparezcan en el logo o en las redes sociales reales del cliente.

---

## 2. Assets disponibles localmente

Carpeta `imagenes/`:

- `logo.jpeg` — **único archivo disponible en el proyecto.**
  - ⚠️ **Tarea obligatoria:** el logo tiene fondo blanco sólido y debe quedar con **fondo transparente (PNG)** antes de usarse en el sitio. Se necesita para el header/navbar, el footer, la pantalla de carga y el favicon, y en la mayoría de esos usos el fondo blanco del logo se verá mal sobre fondos oscuros o de color.
  - Puedes resolverlo con una herramienta de remoción de fondo (remove.bg, Photoshop/GIMP, una librería como `rembg`, etc.) o pidiéndole ayuda a Claude para automatizarlo. Guarda el resultado como un nuevo asset (ej. `logo-transparente.png`) sin sobrescribir el original.

No hay más fotos, videos ni documentos del negocio en este repositorio.

---

## 3. Fuente de contenido real: redes sociales del cliente

Todo el contenido adicional (fotos de alumnos, instalaciones, clases, competencias, instructores, testimonios, teléfono, dirección, horarios, etc.) debe extraerse manualmente de estas redes:

- Instagram: https://www.instagram.com/academia.herson
- Facebook: https://www.facebook.com/share/1bbBJNzHpL/

Revisa publicaciones, destacados/historias guardadas, foto de perfil, foto de portada y la bio de ambos perfiles para recopilar imágenes reales y datos de contacto/negocio verídicos. Usa ese material real en la landing en vez de contenido genérico o de stock, siempre que la calidad de imagen lo permita.

---

## 4. Paleta de colores (extraída del logo)

Colores medidos directamente sobre `logo.jpeg`:

| Color | Hex | Dónde aparece en el logo | Rol sugerido en el sitio |
|---|---|---|---|
| Dorado | `#E6B92C` | Rostro del león | Acento principal "premium" — líneas, íconos, bordes, detalles |
| Negro / carbón | `#1A1A1A` aprox. | Contornos, trazos | Fondo principal en modo oscuro, tipografía |
| Blanco | `#FFFFFF` | Fondo del logo | Espacios en blanco, fondo claro, contraste |
| Bronce / marrón | `#A47E2B` | Melena del león | Tono cálido de apoyo, texturas, degradados |
| Naranja quemado | `#CF6A02` | Anillo del emblema | Acento secundario, hover states, detalles puntuales |
| Rojo vivo | `#FE0000` | Texto "Herson" | Acento de alto impacto, usar con moderación (CTA, hover, highlights) |

**Importante sobre el uso de esta paleta:** el logo es un diseño tipo mascota/cartoon con colores muy saturados, pero el sitio debe verse **premium, corporativo y minimal** (ver sección 5). No traslades los 6 colores en bloques planos por igual. Recomendación: construye el sitio sobre una base de **negro/carbón + blanco/hueso**, usa el **dorado como color de acento dominante** (líneas finas, bordes, iconografía, detalles de hover), y reserva el **rojo y el naranja como acentos puntuales** (un CTA, un detalle, un highlight) para mantener la sensación "high-end" en vez de "cartoon".

---

## 5. Dirección de diseño (obligatorio)

El sitio debe transmitir una identidad de marca **premium, enterprise y corporativa** — nivel **high-tech**, elegante y a la vez **minimal**. Este es el estilo que se debe mantener en todo el sitio, no solo en el hero.

- Diseño limpio, con espacios en blanco generosos, tipografía cuidada y jerarquía visual clara.
- Sensación de marca establecida y confiable, no de plantilla genérica ni de sitio "hecho rápido".
- El dorado y el negro deben ser protagonistas del look premium; evita que el sitio se vea infantil pese a que el logo tenga una mascota.
- Consistencia visual en toda la página: mismos radios de borde, mismas transiciones, misma paleta reducida.

---

## 6. Efectos visuales y animaciones requeridas

- **Pantalla de carga (loading screen):** debe mostrarse al cargar el sitio, con un spinner de carga y el **logo del negocio (versión sin fondo)** en el centro.
- **Animaciones al hacer scroll:** los elementos de cada sección deben animarse al entrar en el viewport (fade-in, slide-up, etc. — a tu criterio siempre que se sienta fluido y premium, no recargado).
- **Efectos en el título del Hero:**
  - Efecto de **máquina de escribir (typewriter)** en el texto del título.
  - Efecto de **cambio de color en las letras** del título (ej. gradiente animado, shimmer dorado, transición de color letra por letra).
- En general, cuida que las animaciones refuercen la sensación high-tech/elegante y no se sientan excesivas o "genéricas de plantilla".

---

## 7. Estructura del sitio

No se define estructura ni secciones en este documento. Se trabaja sobre la **estructura de la plantilla base ya existente**, adaptando su contenido, estilo, paleta y efectos según lo indicado arriba. No agregues ni quites secciones salvo que sea estrictamente necesario para acomodar el contenido real obtenido de redes sociales.

---

## 8. Forma de trabajo con Claude

Este proyecto se construye iterando con Claude a partir del prompt inicial ya usado sobre la plantilla. Puedes seguir dándole instrucciones a Claude sin restricción, iterando todas las veces que sea necesario hasta lograr el resultado deseado — tanto para ajustes de contenido/marca como para el estilo premium y los efectos descritos en este documento.

---

## 9. Checklist de entregables

- [ ] Logo con fondo removido (PNG transparente) integrado en header, footer, loading screen y favicon.
- [ ] Contenido real (imágenes, textos, contacto) extraído de Instagram y Facebook del cliente.
- [ ] Paleta de marca aplicada con criterio premium (dorado/negro/blanco como base, rojo/naranja como acento puntual).
- [ ] Estilo general premium, enterprise, high-tech y minimal aplicado de forma consistente.
- [ ] Pantalla de carga con spinner + logo.
- [ ] Animaciones de scroll en las secciones.
- [ ] Efecto typewriter + cambio de color en el título del hero.
- [ ] Estructura de la plantilla base respetada (sin secciones inventadas fuera de lo necesario).
