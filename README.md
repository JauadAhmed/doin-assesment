# ByteSpace Website

> A pixel-perfect implementation of the **ByteSpace** e-learning platform built from the provided Figma design.

## 🚀 Live Demo

**View Live on Vercel →** *[https://doin-assesment.vercel.app/](https://doin-assesment.vercel.app/)*

---

## 📁 Pages Implemented

| Page | Route | Description |
|------|-------|-------------|
| Landing Page | `/` | Full hero, courses catalog, categories, features, CTA, testimonials, footer |
| Login | `/login` | Email + password auth form with social login buttons |
| Register | `/register` | Full name, email, password signup form |

---

## 🎨 Design System

Extracted directly from the Figma Style Guide:

- **Typography**: Poppins (headings) + Satoshi (body)
- **Primary Color**: `#0445ff` (Electric Blue)
- **Accent Color**: `#cbfc01` (Lime Green)
- **Neutral Palette**: 11-step scale from `#f5f5f6` to `#242528`
- **Grid**: 12-column, 120px margin, 40px gutter

---

## 🔧 Tech Stack

- **React 19** + **Vite 6**
- **Vanilla CSS** (design tokens via CSS custom properties)
- **Lucide React** (icons)
- **Canvas Confetti** (enroll/register celebration)
- **Figma REST API** (design assets extracted programmatically)

---

## ⚙️ Running Locally

```bash
git clone https://github.com/JauadAhmed/doin-assesment.git
cd doin-assesment
npm install
npm run dev
```

---

## 🗂 Project Structure

```
src/
├── components/        # Feature-based modular UI components
│   ├── Courses/
│   ├── CreatorCTA/
│   ├── Features/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── LearningPaths/
│   ├── LogoCloud/
│   └── Testimonials/
├── pages/
│   ├── auth.css       # Shared authentication styling
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   └── RegisterPage.jsx
├── data/
│   └── content.js     # All content data extracted from Figma
├── App.jsx            # Client-side routing
├── main.jsx
└── index.css          # Design system tokens & global styles
public/
├── figma_images/      # Course images from Figma API
├── figma_graphics/    # Composite graphics (hero, features)
└── figma_svgs/        # SVG icons (logo, category icons)
```
