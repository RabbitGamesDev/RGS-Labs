# RGS Labs™ — Official Website

> **Technology • AI • Digital Experiences**
> 
> Ecosistemas digitales premium para marcas que se niegan a ser genéricas.
> Cada línea de código es intencional. Cada animación tiene un propósito. Cada experiencia está diseñada para durar.

**5+ servicios activos · 3 divisiones tecnológicas · 2 proyectos de IA en vivo · ∞ visión**

¿Listo para construir algo real?
**[rgslabs.contact@gmail.com](mailto:rgslabs.contact@gmail.com)**

*by Rab · Founder & CEO · © 2026 RGS Labs™*

---

## 📑 Tabla de Contenidos

- [Sobre RGS Labs](#sobre-rgs-labs)
- [Estructura del sitio](#estructura-del-sitio)
- [Tecnologías usadas](#tecnologías-usadas)
- [Páginas y funciones](#páginas-y-funciones)
- [Sistema de contacto](#sistema-de-contacto)
- [Proyectos destacados](#proyectos-destacados)
- [Servicios](#servicios)
- [Redes sociales](#redes-sociales)
- [Cómo publicar](#cómo-publicar)
- [Historial de versiones](#historial-de-versiones)
- [Créditos](#créditos)

---

## 🏢 Sobre RGS Labs

| Campo | Detalle |
|---|---|
| Nombre oficial | RGS Labs™ (formerly RabGamesStudio™) |
| Tipo | Estudio tecnológico moderno |
| Especialidad | IA · Automatización · Branding · Experiencias digitales premium |
| Herramientas | HTML5 · CSS3 · JavaScript vanilla · YouTube Embed API |
| Plataformas activas | GitHub Pages · Vercel (RabAI) |
| Correo oficial | rgslabs.contact@gmail.com |
| Eslogan | *"We don't sell websites. We build digital ecosystems."* |
| Fundado | 2024 |

---

## 📁 Estructura del Sitio

```
RGS-Labs/
├── index.html          → Home — Hero + Ecosystem + Why RGS + Stats
├── about.html          → About — Historia + Valores + Meet the Founder + Proceso
├── services.html       → Services — 4 servicios + Brand Identity System (3 tiers)
├── projects.html       → Projects — Portfolio + Case Studies en modal
├── contact.html        → Contact — Formulario completo + Policy Modal + Gmail
├── .nojekyll           → Desactiva Jekyll para que GitHub Pages sirva HTML puro
└── README.md           → Este archivo
```

---

## 🛠 Tecnologías Usadas

| Tecnología | Uso |
|---|---|
| HTML5 + CSS3 + JS vanilla | 100% del sitio — sin frameworks, sin npm, sin build step |
| Google Fonts CDN | Syne (headings) · DM Sans (body) |
| YouTube Embed API | Video Hero + Videos del Founder (EN/ES) |
| CSS Custom Properties | Sistema de tokens de diseño (colores, tipografía, spacing) |
| IntersectionObserver API | Sistema de scroll reveal en todas las secciones |
| CSS Animations | Slide-up hero · fade-in · ambient glow · dot pulse · scan lines |
| mailto: / Gmail compose | Sistema de contacto sin backend |
| GitHub Pages | Hosting estático gratuito |

**Peso total:** ~56 KB (todos los archivos) · Sin dependencias externas · Sin base de datos · Sin servidor

---

## 📄 Páginas y Funciones

### 🏠 index.html — Home
- Hero con canvas animado (grid + líneas de pulso + nodos flotantes)
- Video embed de YouTube en contenedor rectangular premium con glow púrpura
- Sección Ecosystem — 3 divisiones con cards hover premium
- Sección Why RGS Labs — 3 diferenciadores con border animation
- Stats strip — 4 números clave
- CTA strip con nota de PDF Brief requerido

### 👤 about.html — About
- Page hero cinematográfico con ambient glow
- Historia de RGS Labs con grid de estadísticas
- Valores — 3 principios con card hover
- **Meet the Founder** — Video del fundador con cambio automático EN↔ES según idioma seleccionado
- Proceso — 4 pasos (Contact → PDF Brief → Build → Deliver)

### ⚡ services.html — Services
- 4 servicios base con precios y tags incluidos
- **Brand Identity System** — servicio #05 expandible con animación fluida
  - **SIGNAL** — desde $100 USD (cyan/blue)
  - **PULSE** — desde $220 USD (purple premium)
  - **OMNISTACK** — desde $450 USD (gold/white/purple ultra)
- Proceso de trabajo integrado
- CTA con nota de PDF Brief

### 🗂 projects.html — Projects
- Cards de proyectos clickeables
- **Case Study modal** — Problema → Solución → Resultado para cada proyecto
- Sección "On the Horizon" con proyectos en desarrollo
- RabAI y Backstage con links directos a proyectos en vivo

### 📬 contact.html — Contact
- Formulario de calificación con 8 campos:
  - Nombre, Email, Negocio/Marca, País
  - Tipo de proyecto (multi-select con checkboxes: Landing Page, Website, AI Assistant, QR Card, SIGNAL, PULSE, OMNISTACK)
  - Presupuesto, Objetivo, Referencias, Descripción
  - Checkbox "Tengo mi PDF Brief listo"
- **Policy Acknowledgement Modal** — el usuario debe confirmar haber leído todas las políticas antes de enviar
- Al confirmar → abre Gmail con el brief pre-formateado completo en el cuerpo del correo
- Links a 4 políticas legales (Privacy, Terms, Payments, Revisions) en modales

### ✨ Features Globales
| Feature | Descripción |
|---|---|
| Bilingüe EN/ES | Toggle en navbar — cambia 100% del contenido incluyendo videos del founder |
| Cursor personalizado | Dot minimalista púrpura, escala en hover, comprime en click |
| Scroll reveal | IntersectionObserver con fade-up, fade-left, fade-right y scale |
| Stagger animations | Delays escalonados para cards y grids |
| Noise overlay | Textura de ruido CSS sobre todo el sitio |
| Ambient glow | Radial gradient púrpura animado en hero y secciones clave |
| Nav scroll effect | Navbar transparente → frosted glass al hacer scroll |
| Responsive | Desktop · Laptop · Tablet · Mobile — breakpoint principal 900px |
| Legal modals | 4 políticas en modales overlay con animación suave |

---

## 📬 Sistema de Contacto

**Flujo del formulario:**

```
Usuario llena formulario (8 campos + multi-select + PDF checkbox)
    ↓
Validación de campos requeridos en JS
    ↓
Policy Acknowledgement Modal
  → Usuario lee políticas (Privacy · Terms · Payments · Revisions)
  → Marca checkbox de confirmación
  → Clic en "Confirm & Send Brief"
    ↓
JS construye mailto estructurado con todos los datos
    ↓
Abre Gmail con asunto y cuerpo pre-formateado
  → Asunto: [RGS Labs™] New Project Brief — {Marca}
  → Cuerpo: Contact info + Project details + Description + PDF status + Policy confirmation
    ↓
Cliente adjunta su PDF Brief manualmente y envía
    ↓
RGS Labs responde en 24–48 horas
```

**Email destino:** rgslabs.contact@gmail.com

> ⚠️ **TODO:** Conectar servicio de email (EmailJS / Formspree) cuando esté disponible el correo profesional oficial. El código tiene los comentarios listos con ejemplos de implementación en `contact.html`.

---

## 🚀 Proyectos Destacados

| Proyecto | Tipo | Estado | URL |
|---|---|---|---|
| RabAI | AI Product · Flagship | ✅ Live | [rab-ai-repository.vercel.app](https://rab-ai-repository.vercel.app/) |
| Backstage — Website | Portfolio · Photography | ✅ Live | [bit.ly/BackstageFoto](https://bit.ly/BackstageFoto) |
| Backstage — Landing Page | Landing · Photography | ✅ Live | [bit.ly/XV-Backstage](https://bit.ly/XV-Backstage) |
| LUNA | AI Product | 🔧 In Development | — |
| Talk to the Hand | Creative · Game | 🔧 In Development | — |

---

## ⚡ Servicios

| # | Servicio | Precio |
|---|---|---|
| 01 | Landing Page | $50–120 USD |
| 02 | Professional Website | $150–400 USD |
| 03 | AI Business Assistant | +$30–100 USD (add-on) |
| 04 | QR Business Card | $15–40 USD |
| 05 | SIGNAL — Brand Identity | Desde $100 USD |
| 05 | PULSE — Brand Identity | Desde $220 USD |
| 05 | OMNISTACK — Brand Identity | Desde $450 USD |

**Política:** 50% anticipo · 2 rondas de revisión incluidas · PDF Brief requerido · Entrega tras pago final

---

## 🌐 Redes Sociales

| Plataforma | URL |
|---|---|
| GitHub | [github.com/RabbitGamesDev](https://github.com/RabbitGamesDev) |
| YouTube | [youtube.com/@RGS_Labs](https://www.youtube.com/@RGS_Labs) |
| GameJolt | [gamejolt.com/@RGS_Labs](https://gamejolt.com/@RGS_Labs) |
| Email | rgslabs.contact@gmail.com |

---

## 🚀 Cómo Publicar

### GitHub Pages
1. Subir los 5 archivos HTML + `.nojekyll` a la raíz del repositorio
2. `Settings → Pages → Deploy from branch → main / root`
3. URL: `https://RabbitGamesDev.github.io/RGS-Labs/`

### Dominio propio (cuando esté listo)
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   rabbitgamesdev.github.io
```
Luego en `Settings → Pages → Custom domain` escribir el dominio.

### Actualizar archivos
Editar directamente en GitHub con el lápiz ✏️ o subir archivo reemplazando el existente. GitHub Pages se actualiza en 1–2 minutos automáticamente.

---

## 📋 Historial de Versiones

| Versión | Descripción | Fecha |
|---|---|---|
| **v1.0 — Website** | Conversión de landing a website multi-página (5 archivos). Case Studies, Brand Identity System con precios, formulario con policy modal, Gmail pre-formateado, footer con 4 columnas. | Jun 2026 |
| **v0.5 — Landing v5** | Nuevo logo SVG "R", videos YouTube conectados (Hero + Founder EN/ES), switch automático de idioma en video founder. | Jun 2026 |
| **v0.4 — Landing v4** | Cursor minimalista, hero video rectangular premium, Meet Rab section, formulario sin WhatsApp, redes sociales en footer. Responsive completo. | Jun 2026 |
| **v0.3 — Landing v3** | Animaciones profesionales, canvas hero, video circular → rectangular, Brand Identity System expandible (SIGNAL/PULSE/OMNISTACK), policy modals. | Jun 2026 |
| **v0.2 — Landing v2** | Logo mascota integrado, acento púrpura, sección legal completa con modales, formulario con campos estratégicos. | Jun 2026 |
| **v0.1 — Landing v1** | Primera versión. Hero, Ecosystem, Services, Projects, Why, Process, Contact. Toggle EN/ES. | Jun 2026 |

---

## 🛠 Créditos

| Elemento | Crédito |
|---|---|
| Diseño y desarrollo web | Claude (Anthropic) |
| Dirección creativa e identidad | Rab — Founder, RGS Labs™ |
| Videos del Founder (AI Avatar) | RGS Labs™ |
| Video Hero (comercial tecnológico) | RGS Labs™ |
| Logo "RGS Labs™" tipográfico | RGS Labs™ |
| Fuentes | Google Fonts — Syne · DM Sans (OFL) |
| Hosting | GitHub Pages |
| Videos | YouTube (unlisted embeds) |

---

*"We don't sell websites. We build digital ecosystems."* — **RGS Labs™ · 2026**
