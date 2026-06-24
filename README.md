# MacBook GSAP App

An interactive 3D MacBook showcase application built with React, Vite, GSAP animations, and Three.js. This project features stunning product visualizations with smooth scroll-triggered animations and responsive design.

## Overview

This is a modern web application that showcases MacBook products in an immersive way. It combines cutting-edge web technologies to deliver a premium interactive experience with:

- **3D Product Viewer**: Interactive 3D MacBook models using React Three Fiber
- **Scroll Animations**: Smooth, scroll-triggered GSAP animations throughout the page
- **Responsive Design**: Seamlessly adapts to all screen sizes using Tailwind CSS
- **Multiple Models**: Support for different MacBook variants (14-inch, 16-inch)
- **Performance Optimized**: Fast load times and smooth 60fps animations

## Tech Stack

### Frontend Framework & Build Tools
- **React 19** - UI library
- **Vite 8** - Next-generation build tool with lightning-fast dev server
- **JavaScript (ES modules)**

### Animation & 3D Graphics
- **GSAP 3.15** - Professional-grade animation library
- **@gsap/react** - React integration for GSAP
- **Three.js 0.184** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### Styling
- **Tailwind CSS 4.3** - Utility-first CSS framework
- **@tailwindcss/vite** - Vite plugin for Tailwind CSS

### State Management
- **Zustand 5** - Lightweight state management

### Utilities
- **react-responsive** - Media query hooks for responsive design
- **clsx** - Utility for constructing className strings

### Development Tools
- **ESLint** - Code quality linting
- **@vitejs/plugin-react** - React plugin for Vite

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd macbook_gsap_app
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement (HMR):
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx            # Hero section
│   ├── ProductViewer.jsx   # 3D product viewer
│   ├── Showcase.jsx        # Product showcase section
│   ├── Performance.jsx     # Performance highlights
│   ├── Features.jsx        # Features section
│   ├── Highlights.jsx      # Key highlights
│   ├── Footer.jsx          # Footer component
│   ├── three/              # Three.js components
│   │   ├── StudioLights.jsx
│   │   └── ModelSwitcher.jsx
│   └── models/             # 3D MacBook models
│       ├── Macbook.jsx
│       ├── Macbook-14.jsx
│       └── Macbook-16.jsx
├── store/                  # Zustand state management
├── constants/              # Application constants
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css              # Global styles
```

## Key Features

- **Interactive 3D Viewer**: Rotate, zoom, and explore MacBook models in real-time
- **Scroll-Triggered Animations**: Content animates as you scroll through the page
- **Multiple Product Variants**: Toggle between different MacBook models
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Performance Focus**: Leverages Vite's fast bundling and modern optimization
- **Professional Lighting**: Studio-quality 3D lighting setups

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Development Notes

- HMR (Hot Module Replacement) is enabled during development for instant feedback
- ESLint is configured with React best practices
- Tailwind CSS is configured with Vite integration for optimal performance

## License

This project is part of the macbook_gsap_app repository.

## Author

Muhammad Harib
