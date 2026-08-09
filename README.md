# RGS Labs™ — Official Website v2.0

> **Technology • AI • Digital Experiences**
>
> An independent technology ecosystem building AI products, developer tools, digital experiences and experimental technology.
> Every line of code is intentional. Every animation has a purpose. Every experience is designed to last.

**5+ products building · 3 divisions · AI-native core · ∞ vision**

¿Listo para construir algo real? **[rgslabs.contact@gmail.com](mailto:rgslabs.contact@gmail.com)**

*by Ian Alexander Domínguez Mora · Founder & Lead Developer · © 2026 RGS Labs™*

---

## 📑 Table of Contents

- [About RGS Labs](#about-rgs-labs)
- [Site Architecture](#site-architecture)
- [Technologies Used](#technologies-used)
- [Pages & Features](#pages--features)
- [Motion System](#motion-system)
- [Contact System](#contact-system)
- [Featured Projects](#featured-projects)
- [Social Links](#social-links)
- [How to Publish](#how-to-publish)
- [Version History](#version-history)
- [Credits](#credits)

---

## 🏢 About RGS Labs

| Field | Detail |
|---|---|
| Official name | RGS Labs™ (formerly RabGamesStudio™) |
| Type | Independent Technology Ecosystem |
| Specialties | AI Products · Developer Tools · Digital Experiences · Experimental Technology |
| Stack | HTML5 · CSS3 · Vanilla JavaScript · No frameworks · No build step |
| Active platforms | GitHub Pages · Vercel (RabAI) |
| Official email | rgslabs.contact@gmail.com |
| Tagline | *"We build technology that moves ideas forward."* |
| Founded | 2024 |
| Location | Xalapa, Veracruz, México |

---

## 📁 Site Architecture

```
RGS-Labs/
├── index.html          → Home — Hero + Ecosystem + Currently Building + Why RGS + Stats
├── about.html          → About — Story + Principles + Founder
├── products.html       → Products — RabAI · DataForge CLI · Visual Format · LUNA
├── projects.html       → Projects — Client Work + RGS Projects
├── labs.html           → Labs — Curriculum + Experiments + Technologies
├── contact.html        → Contact — Dual path form + Social connect
├── styles.css          → Design System + Motion System (shared across all pages)
├── scripts.js          → Interaction Engine (shared across all pages)
├── .nojekyll           → Disables Jekyll for pure HTML serving on GitHub Pages
└── README.md           → This file
```

**Services are NOT part of the main site.** Commercial services (websites, landing pages, branding) live exclusively at the commercial landing page:
👉 **[rgslabs.github.io/RGS-Labs-Landing-Page/](https://rgslabs.github.io/RGS-Labs-Landing-Page/)**

---

## 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 + CSS3 + JS vanilla | 100% of the site — zero frameworks, zero npm, zero build step |
| Google Fonts CDN | Syne (headings) · DM Sans (body) |
| YouTube Embed API | Hero video embed (muted, autoplay, loop) |
| CSS Custom Properties | Design token system (colors, typography, spacing, easing) |
| IntersectionObserver API | Scroll reveal system across all sections |
| CSS Animations | Slide-up hero · fade-in · ambient glow · dot pulse · scan lines · status pulse |
| Formspree | Contact form handling (endpoint: xnqevwzw) |
| GitHub Pages | Free static hosting |

**Total weight:** ~54 KB (all files) · Zero external dependencies · Zero database · Zero server

---

## 📄 Pages & Features

### 🏠 index.html — Home
- **Cinematic Hero** — Staggered entrance sequence: badge pulse → title lines (blur→sharp) → subtext fade-up → CTAs → visual reveal
- **Tech Grid Canvas** — Animated background with grid lines, scan pulses, floating nodes and connections
- **Stats Strip** — 4 key numbers with spotlight hover effect
- **Pinned Ecosystem Section** — "One Ecosystem. Multiple Directions." with word-by-word reveal and directional cards
- **Currently Building** — Live status cards for DataForge CLI, RabAI, Visual Logo Format
- **Why RGS Labs** — 3 principles with border animation and spotlight hover
- **CTA Strip** — Dual path: Explore Projects / Work with RGS

### 👤 about.html — About
- **Cinematic Hero** — "Not just a studio. A technology ecosystem."
- **Our Story** — RabGamesStudio → RGS Labs evolution with timeline visualization
- **What We Believe** — 3 principles (Build with Intention · Technology Accessible · Experimentation) with animated numbers
- **Founder** — Ian Alexander Domínguez Mora profile with philosophy quote and detail cards

### ⚡ products.html — Products
- **Products Hero** — "Products we're building."
- **3D Tilt Cards** — Cards that follow cursor with `rotateX/Y` ±4°, inner content parallax, and radial spotlight
- **RabAI** — v4.3 Live / v5 In Development
- **DataForge CLI** — Live / v2.0 Launch Upcoming
- **Visual Logo / Image Format** — Prototype
- **LUNA** — Concept
- Each card includes: status badge, type, description, links, metadata (status · type · audience/platform)

### 🗂 projects.html — Projects
- **Projects Hero** — "Built for others. Built for us."
- **Client Work** — Backstage Fotografía, Cat Studio™, XV Backstage, Emmanuel with visual cards and project links
- **RGS Projects** — Talk to the Hand (GameJolt), Enemy Audio-Reactive Engine (GitHub), TurboWarp Tools (internal)

### 🧪 labs.html — Labs
- **Labs Hero** — "Experiments become products."
- **Curriculum** — Ian Alexander Domínguez Mora's professional profile:
  - Professional Identity & Quote
  - Core Competencies (Software Dev · AI Products · Full-Stack · Digital Design)
  - Development Philosophy (Problem-First · Iterative · AI as Tool · Self-Directed Learning)
  - Professional Mission
- **Experiments** — AI Architecture Patterns · Visual AI Formats · Audio-Reactive Systems
- **Technologies** — Grid of tools and platforms we work with

### 📬 contact.html — Contact
- **Contact Hero** — "Have something worth building?"
- **Dual Path Layout:**
  - **Work with RGS Labs** → Links to commercial landing page
  - **Build Something with Us** → Direct contact form
- **Contact Form** — Name, Email, Subject, Message (connected to Formspree)
- **Social Connect** — GitHub (tools), GitHub (clients), YouTube, GameJolt
- **Location** — Xalapa, Veracruz, México · Remote / Freelance / Part-time

### ✨ Global Features

| Feature | Description |
|---|---|
| **Bilingual EN/ES** | Language toggle in navbar — switches 100% of content instantly. All pages fully translated. |
| **Custom Cursor** | Minimalist purple dot, scales on hover (48px ring), compresses on click. Disabled on touch devices. |
| **Scroll Reveal** | IntersectionObserver with fade-up, fade-left, fade-right, scale, and blur variants. |
| **Stagger Animations** | Cascading delays for cards, grids, and list items. |
| **Spotlight System** | Cursor-following radial gradient on all interactive cards. |
| **Page Transitions** | 400ms overlay transition between pages — no white flash. |
| **Noise Overlay** | CSS noise texture across entire site for tactile depth. |
| **Ambient Glow** | Animated radial purple gradients in hero and key sections. |
| **Nav Scroll Effect** | Transparent → frosted glass on scroll. Auto-hides on scroll down, reveals on scroll up. |
| **Responsive** | Desktop · Laptop · Tablet · Mobile — primary breakpoint 900px and 768px. |
| **Legal Modals** | Privacy Policy & Terms of Service in animated overlay modals. |

---

## 🎬 Motion System

The RGS Labs Motion System is implemented across all pages using pure CSS and vanilla JavaScript:

| System | Technique | Where |
|---|---|---|
| **Cinematic Hero** | Staggered `translateY` + `blur` → `sharp` with line-by-line reveal | Home, About, Products, Projects, Labs, Contact |
| **3D Tilt Cards** | `rotateX/Y` ±4° with inner content parallax and spotlight | Products page |
| **Spotlight Dynamic** | CSS `radial-gradient` following cursor via custom properties | All cards globally |
| **Text Reveal Premium** | Per-word `translateY(100%)` → `0` with staggered delays | Home ecosystem section |
| **Parallax Layers** | Different scroll speeds for background elements | Global (lightweight) |
| **Page Transitions** | 400ms overlay fade with logo scale | All internal navigation |
| **Microinteractions** | Hover states, arrow shifts, `active:scale(.97)`, nav underline slide | Global |
| **Cursor System** | Smooth-following dot with easing, hover expansion, click compression | Global (disabled on mobile) |
| **Status Pulse** | Breathing dot animation for live/dev indicators | Products, Home |

---

## 📬 Contact System

**Formspree Integration:**
- Endpoint: `https://formspree.io/f/xnqevwzw`
- Fields: Name, Email, Subject, Message
- Success/Error states with user feedback
- No backend required

**Direct Email:**
- rgslabs.contact@gmail.com
- For commercial projects: visit the [landing page](https://rgslabs.github.io/RGS-Labs-Landing-Page/)

---

## 🚀 Featured Projects

| Project | Type | Status | URL |
|---|---|---|---|
| **RabAI** | AI Assistant for IndieDevs | ✅ Live v4.3 / v5 Dev | [rab-ai-repository.vercel.app](https://rab-ai-repository.vercel.app/) |
| **DataForge CLI** | Developer Tool | ✅ Live / v2.0 Soon | [DataForge Website](https://rabbitgamesdev.github.io/DataForge-CLI_Website/) · [GitHub](https://github.com/RabbitGamesDev/DataForge-CLI) |
| **Visual Logo Format** | AI Visual Representation | 🔬 Prototype | — |
| **LUNA** | AI Platform for Business | 💡 Concept | — |
| **Backstage Fotografía** | Client Website | ✅ Live | [Website](https://rabbitgamesdev.github.io/RabGamesStudio-Backstage-website/) |
| **Cat Studio™** | Client Website | ✅ Live | [Website](https://rgslabs.github.io/cat-studio/) |
| **XV Backstage** | Client Landing | ✅ Live | [Landing](https://rabbitgamesdev.github.io/RabGamesStudio-Backstage-XV-Landing/index.html) |
| **Emmanuel** | Client Website | ✅ Live | [Website](https://rgslabs.github.io/Emmanuel-Dios-con-Nosotros-Website-/) |
| **Talk to the Hand** | Indie Game | ✅ Live | [GameJolt](https://gamejolt.com/games/Talk-to-the-hand-RGS/1006802) |
| **Enemy Audio-Reactive Engine** | Experimental Tool | ✅ Live | [GitHub](https://github.com/RabbitGamesDev/enemy-audio-reactive-engine) |

---

## 🌐 Social Links

| Platform | URL | Status |
|---|---|---|
| GitHub (Tools) | [github.com/RabbitGamesDev](https://github.com/RabbitGamesDev) | ✅ Active |
| GitHub (Clients) | [github.com/RGSLabs](https://github.com/RGSLabs) | ✅ Active |
| YouTube | [youtube.com/@RGS_Labs](https://www.youtube.com/@RGS_Labs) | ✅ Active |
| GameJolt | [gamejolt.com/@RGS_Labs](https://gamejolt.com/@RGS_Labs) | ✅ Active |
| Instagram | — | 🔜 Placeholder ready (add URL in `index.html`) |
| TikTok | — | 🔜 Placeholder ready (add URL in `index.html`) |
| Email | [rgslabs.contact@gmail.com](mailto:rgslabs.contact@gmail.com) | ✅ Active |

---

## 🚀 How to Publish

### GitHub Pages
1. Upload all 8 files (`index.html`, `about.html`, `products.html`, `projects.html`, `labs.html`, `contact.html`, `styles.css`, `scripts.js`) plus `.nojekyll` to the repository root.
2. Go to `Settings → Pages → Deploy from branch → main / root`.
3. Your site will be live at: `https://RabbitGamesDev.github.io/RGS-Labs/`

### Custom Domain (when ready)
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   rabbitgamesdev.github.io
```
Then in `Settings → Pages → Custom domain` enter your domain.

### Updating Files
Edit directly on GitHub with the pencil ✏️ icon, or upload files replacing existing ones. GitHub Pages updates automatically within 1–2 minutes.

---

## 📋 Version History

| Version | Description | Date |
|---|---|---|
| **v2.0 — HQ Ecosystem** | Complete redesign. 6-page architecture (Home, About, Products, Projects, Labs, Contact). RGS Labs Motion System with 8 interaction systems. Bilingual EN/ES. 3D tilt cards. Page transitions. Curriculum integrated into Labs. Services removed from main site (moved to external landing). | Aug 2026 |
| **v1.0 — Multi-Page Website** | Conversion from landing to 5-page website. Case studies, Brand Identity System with pricing, form with policy modal, Gmail pre-formatted, 4-column footer. | Jun 2026 |
| **v0.5 — Landing v5** | New SVG "R" logo, YouTube videos connected (Hero + Founder EN/ES), auto language switch for founder video. | Jun 2026 |
| **v0.4 — Landing v4** | Minimalist cursor, premium rectangular hero video, Meet Rab section, form without WhatsApp, social links in footer. Full responsive. | Jun 2026 |
| **v0.3 — Landing v3** | Professional animations, hero canvas, circular → rectangular video, expandable Brand Identity System (SIGNAL/PULSE/OMNISTACK), policy modals. | Jun 2026 |
| **v0.2 — Landing v2** | Integrated mascot logo, purple accent, complete legal section with modals, form with strategic fields. | Jun 2026 |
| **v0.1 — Landing v1** | First version. Hero, Ecosystem, Services, Projects, Why, Process, Contact. EN/ES toggle. | Jun 2026 |

---

## 🛠 Credits

| Element | Credit |
|---|---|
| Web design & development | RGS Labs™ Internal Team |
| Creative direction & identity | Ian Alexander Domínguez Mora — Founder, RGS Labs™ |
| Hero video (tech commercial) | RGS Labs™ |
| Logo "RGS Labs™" typographic | RGS Labs™ |
| Fonts | Google Fonts — Syne · DM Sans (OFL) |
| Hosting | GitHub Pages |
| Videos | YouTube (unlisted embeds) |
| Form handling | Formspree |

---

*"We don't just develop software. We build products that people actually want to use again."* — **Ian Alexander Domínguez Mora, RGS Labs™ · 2026**
