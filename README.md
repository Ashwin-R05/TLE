# TLE — Ideas, then impact.

[![React](https://img.shields.io/badge/React-18.3-blue.svg?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.13-black.svg?style=flat&logo=framer)](https://www.framer.com/motion/)

> **TLE** is a technology studio based in Trichy, India. We build high-performance, bespoke digital products for businesses and provide hands-on, 1-on-1 engineering mentorship to help student innovators turn raw concepts into real, deeply understood technical projects.

---

## 🌟 Key Features & Pages

### 1. **Homepage (`/`)**
- **Dynamic Hero**: High-definition video background with requestAnimationFrame crossfades and subtle dark vignettes.
- **Interactive Project Intake**: Liquid-glass interactive pill input that automatically composes pre-filled email dispatches to `mounaragamtle@gmail.com`.
- **About & Manifesto**: Clear studio positioning (*"Building then solutions for businesses, and ideas then projects for students"*).
- **Interactive Approach Video**: Immersive video player with floating liquid-glass commentary cards.
- **Philosophy (`Innovation x Vision`)**: Two-column layout exploring technical depth and design strategy.
- **Services Hub**: Dual-card navigation linking directly to specialized service portals.

### 2. **Digital Solutions (`/digital-solutions`)**
- **Studio Agenda**: Transparent mission statement rejecting generic templates in favor of tailored engineering.
- **Featured Projects Portfolio**: Interactive case studies with honest status tags:
  - `Client project`
  - `Hackathon build`
  - `In development`
- **Tech Stack Badges & Inquiry**: Direct project scoping and pre-tagged email outreach.

### 3. **Idea & Project Guidance (`/student-guidance`)**
- **Problem Statement**: Honest deconstruction of common student dilemmas and project pitfalls.
- **9-Stage Mentorship Framework**:
  1. *Understand the problem*
  2. *Analyze existing solutions (prior-art research)*
  3. *Identify the differentiation*
  4. *Evaluate technical feasibility*
  5. *Suggest technologies & design architecture*
  6. *Guide prototype development*
  7. *Guide full project development*
  8. *Help with documentation & presentation*
  9. *Explore research/patent direction (guidance toward qualified IP professionals)*
- **"What We're Not" Manifesto**: Transparent commitment to genuine student learning (*"We don't build it for you — we mentor you so you understand every line"*).
- **Student Case Journeys**: Real breakdown of pivots from sci-fi ideas to funded hardware/software prototypes.
- **Idea Submission Intake**: Instant 1-sentence idea submission flow.

---

## 🎨 Design System & Aesthetics

- **Liquid Glass CSS**: Custom `.liquid-glass` component architecture utilizing masked 180° linear gradient borders, luminosity blending, and hardware-accelerated backdrop blur (`backdrop-filter: blur(4px)`).
- **Typography**: Google's `Instrument Serif` (regular and italic) for distinctive editorial headlines paired with clean sans-serif system type for maximum legibility.
- **Rotational Geometric Monogram**: Scalable SVG vector logo mark with exact 180° rotational symmetry representing the "TL" monogram.
- **Fully Responsive & Adaptive**: Fluid scaling across mobile viewports (320px–390px), tablets (640px–1024px), standard laptops, and 4K ultra-wide monitors.

---

## 📁 Project Structure

```text
Aim/
├── public/
│   ├── favicon.svg             # Vector TLE browser favicon
│   └── logo.svg                # Vector TLE logo asset
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Logo.tsx        # Scalable SVG Monogram logo component
│   │   │   ├── Button.tsx      # Reusable styled button
│   │   │   └── Footer.tsx      # Global footer component
│   │   ├── AboutSection.tsx    # Homepage about & manifesto section
│   │   ├── FeaturedVideoSection.tsx # Video player section
│   │   ├── PhilosophySection.tsx    # Philosophy & vision section
│   │   └── ServicesSection.tsx      # Services dual-card section
│   ├── data/
│   │   ├── guidanceSteps.ts    # 9-stage framework & case journey data
│   │   └── projects.ts         # Digital solutions portfolio projects
│   ├── pages/
│   │   ├── Index.tsx           # Main landing page
│   │   ├── DigitalSolutionsPage.tsx # Business services route
│   │   ├── StudentGuidancePage.tsx  # Student mentorship route
│   │   └── ContactPage.tsx     # Direct contact page
│   ├── App.tsx                 # Router & ScrollToTop setup
│   ├── index.css               # Design system tokens & liquid-glass styles
│   └── main.tsx                # React root entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ashwin-R05/TLE.git
   cd TLE
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be live at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production bundle**:
   ```bash
   npm run preview
   ```

---

## 📬 Contact & Inquiries

- **Email**: [mounaragamtle@gmail.com](mailto:mounaragamtle@gmail.com)
- **Location**: Trichy, Tamil Nadu, India
- **Socials**:
  - Instagram: [@tle.in](https://instagram.com/tle.in)
  - X / Twitter: [@tle_in](https://x.com/tle_in)

---

## 📄 License

&copy; 2026 **TLE**. All rights reserved.
