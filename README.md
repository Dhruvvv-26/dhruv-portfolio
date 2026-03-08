# Portfolio V2 - Dhruv Gupta

**🟢 Live Deployment:** [https://dhruv-portfolio-dusky.vercel.app](https://dhruv-portfolio-dusky.vercel.app/)

A high-performance, cybersecurity-themed portfolio website built with React, Vite, and Tailwind CSS. Designed to showcase work in Machine Learning, Security Engineering, and Systems Architecture.

![Hero Section](/home/dhruvvv_26/.gemini/antigravity/brain/eb5d1b54-a1f8-4ca3-bd43-fe5e1af7e712/hero_dark_v2.png)

## Features & Highlights

- **Cybersecurity Aesthetic**: Dark mode terminal interfaces, glowing accent colors (`#00E5FF`), and data-driven visual components.
- **Dynamic Data Visualization**: Animated metric sparklines triggered by scroll events using `IntersectionObserver`.
- **Live Threat Feed Widget**: An auto-scrolling dashboard component simulating real-time SOC alerts.
- **Interactive Terminal**: A functional, custom-built terminal component serving as a secondary navigation system.
- **Optimized Performance**: 
  - Zero-jank scroll animations (`useInView` hook).
  - Component-level lazy loading (`React.lazy`) with Suspense fallbacks.
  - Granular Vite code chunking (`d3-vendor`, `react-router-dom`, `react-core`).
- **SEO & Meta Ready**: Open Graph headers, customized Twitter card integration, and optimized metadata for rich link previews.
- **Mobile First**: Fluid layouts, responsive font scaling, touch-safe interactivity, and a custom `BadgeGrid` for complex data structures like the Skills module.

## Setup & Installation

**Prerequisites:** Node.js (v18+) and npm.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` folder.

## Customization Guide

### 1. Resume Setup
To enable the "Resume" button and the `sudo hire dhruv` terminal command:
- Place a PDF copy of your resume in the `public/` directory.
- Name the file exactly `resume.pdf`.

### 2. Contact Form
The "Send Message" form is fully functional without a backend server. It intercepts the submission and directly opens the user's local email client using a `mailto:` link, pre-filling the subject and body with the inputted data.
- To change the target email, locate `dhruvgupta.atwork@gmail.com` in `src/components/Contact.jsx` and replace it.

### 3. Open Graph Image
The preview image that appears when the link is shared on social media is located at `public/og-image.png`.

## Core Technologies
- `React 18` (Hooks, Context, Suspense)
- `Vite` (Build tooling, manualChunking)
- `Tailwind CSS` (Utility-first styling, custom theme tokens)
- `D3.js / Canvas` (Sparkline integrations)
- `React Router DOM`

---
> System built by Dhruv Gupta // STATUS: ONLINE
