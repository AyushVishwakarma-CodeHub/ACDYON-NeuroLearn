# NeuroLearn AI — Premium Marketing Homepage

A world-class, interactive marketing and product homepage for **NeuroLearn AI** — an AI-powered personalized learning platform that adapts explanations to every learner's level. Built for the **ACDYON Technologies Frontend Assignment (Part 2)**.

---

## 🌟 Key Features

- **Editorial Hero Section** — Headline with `Instrument Serif` italic accents, live pulsing AI pill badge, and dual CTAs.
- **Interactive Hero Dashboard Mockup** — Featuring categorized navigation (`LEARNING`, `TOOLS`, `PERSONAL`), floating metric badges (`AI Adaptive Engine Active`, `+24% Retention Speed`), interactive task checklist, study streak counter, and learner profile (`Ayush — Level 3 Scholar`).
- **Interactive Mouse Spotlight Glow** — Smooth cursor-following ambient radial spotlight effect.
- **3D Smart Flashcard Flip** — 180-degree 3D perspective flip (`rotateY`) switching between question and answer sides.
- **Interactive AI Quiz UI** — Live choice selection with instant correct/incorrect visual feedback and dynamic explanation cards.
- **Interactive Personalization Demo** — Signature 3-level explanation switcher (Beginner, Intermediate, Advanced) for Derivatives with animated sliding tab indicator.
- **Snappy Micro-Interactions** — Spring hover zoom scale (`stiffness: 500`) on cards, buttons, and badges.
- **Animated Honeycomb Grid** — Continuous 18-second floating background honeycomb drift.
- **Responsive Architecture** — Fully responsive across 390px mobile, 768px tablet, and 1440px desktop layouts with 0 horizontal overflow.
- **Accessibility** — Semantic HTML5 markup, keyboard focus states, ARIA attributes, and `prefers-reduced-motion` compliance.

---

## 🎨 Design System

- **Palette**: Warm Ivory (`#F7F3EA`), Deep Ink (`#171512`), Burnt Orange (`#E45B3F`), and Soft Peach (`#F1D6C8`).
- **Typography**: 
  - `Plus Jakarta Sans` — Modern, high-end geometric sans-serif for UI and headings.
  - `Instrument Serif` — Sophisticated editorial italic font for brand focus words (*personal*, *for you*, *you*).
- **Brand Mark**: Custom Neural-connected **"N"** logo icon in terracotta orange with 4 white synaptic nodes.
- **Shadows**: Warm-toned soft card shadows with hover lift elevation.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI framework |
| **Vite** | Lightning-fast build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling & custom design tokens |
| **Framer Motion** | Physics-based spring micro-animations & layout transitions |
| **Lucide React** | Sleek icon set |

---

## 🚀 Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
ACDYON assignment/
├── public/
│   └── favicon.svg             # Neural-N AI brand favicon mark
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx          # Reusable spring-animated button
│   │   │   └── SectionHeading.jsx  # Section header with eyebrow pill
│   │   ├── Navbar.jsx              # Glassmorphism sticky nav with drawer
│   │   ├── Hero.jsx                # Hero section with CTAs & benefits
│   │   ├── HeroDashboard.jsx       # Interactive SaaS dashboard mockup
│   │   ├── HowItWorks.jsx          # 4-step process cards with hover scale
│   │   ├── ProductShowcase.jsx     # AI Quiz, 3D Flashcard & Analytics UI
│   │   ├── PersonalizationDemo.jsx # Interactive 3-level explanation switcher
│   │   ├── FinalCTA.jsx            # Dark contrast section with radial glow
│   │   └── Footer.jsx              # 4-column footer with newsletter form
│   ├── App.jsx                 # Main layout & cursor spotlight glow
│   ├── main.jsx                # React root entry point
│   └── index.css               # Base styles & animated honeycomb grid
├── DECISIONS.md                # Detailed response to 3 assignment questions
├── README.md                   # Project documentation
├── index.html                  # HTML entry with Google Fonts imports
└── tailwind.config.js          # Custom theme configuration
```

---

## 📄 Deliverables & Answers

Detailed technical decisions, trade-offs, and AI tool usage are documented in [`DECISIONS.md`](./DECISIONS.md).

Build verified with zero errors using `npm run build`. Output generated in `dist/`.
