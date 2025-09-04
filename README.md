# 🏃‍♂️ Running Plan - Weekly Training Tracker

A beautiful, mobile-first Progressive Web App for tracking your weekly running training. Built with modern web technologies and optimized for performance, SEO, and user experience.

![Running Plan App](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-green)
![SEO Optimized](https://img.shields.io/badge/SEO-Optimized-brightgreen)

## ✨ Features

### 🏃 Core Training Features
- **Weekly running schedule** with detailed workout plans
- **Daily workout view** showing today's training with all details
- **Photo check-in system** to track completed workouts
- **Streak counter** to maintain motivation and consistency
- **Rest day tracking** with proper recovery scheduling

### 🎨 Premium Design
- **Apple-inspired interface** with clean, modern aesthetics
- **Mobile-first responsive design** optimized for all devices
- **Glass morphism effects** with translucent headers and cards
- **Smooth animations** and micro-interactions
- **Custom color scheme** (Warm Cream #FEF9F3, Burnt Orange #DE9151, Charcoal #424242)
- **Premium typography** using Inter font with perfect smoothing

### 📱 Progressive Web App (PWA)
- **Installable** on iOS, Android, and desktop devices
- **Offline-ready** with service worker and manifest
- **Native app experience** with proper splash screens
- **App shortcuts** for quick access to key features
- **iOS home screen integration** with custom touch icons

### 🤗 Motivation System
- **Daily anime hug GIFs** from nekos.best API for positive motivation
- **Random content** that changes with each visit
- **Encouraging design elements** throughout the interface
- **Visual progress tracking** with streak visualization

### 🔍 SEO & Performance
- **Complete metadata optimization** with Open Graph and Twitter Cards
- **Schema.org structured data** for rich search results
- **XML sitemap** and robots.txt for search engines
- **Perfect Lighthouse scores** for performance and accessibility
- **Social media preview optimization**

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or later
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/running-plan.git
cd running-plan

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
running-plan/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page (today's workout)
│   │   ├── plan/           
│   │   │   └── page.tsx     # Weekly plan view
│   │   ├── globals.css      # Global styles and fonts
│   │   └── sitemap.ts       # Auto-generated sitemap
│   └── data/
│       ├── runningPlan.ts   # Weekly training schedule
│       └── quotes.ts        # Anime motivation system
├── public/
│   ├── icon.svg            # Main app icon
│   ├── favicon.svg         # Browser favicon
│   ├── manifest.json       # PWA manifest
│   ├── og-image.svg        # Social media preview
│   └── robots.txt          # Search engine directives
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.js          # Next.js configuration
```

## 🏃‍♀️ Training Schedule

The app includes a complete weekly running plan designed for endurance building:

| Day | Workout Type | Duration | Pace | Notes |
|-----|-------------|----------|------|-------|
| **Monday** | Rest | - | - | Recovery day |
| **Tuesday** | Base Endurance | 50 min | 8:45-9:15 | Last 10 min moderate |
| **Wednesday** | Easy Run | 30 min | 9:15-9:45 | HR: 120-130 bpm |
| **Thursday** | Base Endurance | 45 min | 8:45-9:15 | + 6×100m strides |
| **Friday** | Rest | - | - | Recovery day |
| **Saturday** | Long Run | 1:10 hrs | 8:50-9:20 | Base endurance pace |
| **Sunday** | Easy Run | 30 min | - | HR: 120-130 bpm |

## 🎨 Design System

### Color Palette
- **Primary Background**: `#FEF9F3` (Warm Cream)
- **Accent Color**: `#DE9151` (Burnt Orange)
- **Text Primary**: `#424242` (Charcoal)
- **Text Secondary**: `#8E8E93` (Light Gray)

### Typography
- **Font Family**: Inter (with fallback to system fonts)
- **Font Smoothing**: Antialiased for crisp rendering
- **Scale**: Responsive typography scaling

### Components
- **Cards**: Rounded corners (16px), subtle shadows, glass effects
- **Buttons**: Touch-friendly (44px minimum), active state animations
- **Icons**: Custom SVG icons with consistent styling

## 🔧 Technology Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Hooks](https://react.dev/reference/react)** - Modern React patterns

### APIs & External Services
- **[nekos.best](https://nekos.best/)** - Anime hug GIFs for motivation
- **[Inter Font](https://rsms.me/inter/)** - Premium typography from Google Fonts

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixing

## 📱 Mobile Optimization

### Responsive Design
- **Mobile-first approach** with progressive enhancement
- **Touch-friendly interface** with proper tap target sizes
- **Optimized viewport** settings for mobile browsers
- **Smooth scrolling** and touch interactions

### iOS Integration
- **Apple Touch Icons** for home screen installation
- **Status bar styling** matching app theme
- **Splash screen optimization**
- **Standalone mode** for app-like experience

### Android Support
- **Theme color** matching for system UI
- **Maskable icons** for adaptive icon support
- **Web App Manifest** with all required fields

## 🔍 SEO Features

### Metadata Optimization
- **Dynamic titles** with template system
- **Rich descriptions** with targeted keywords
- **Open Graph** tags for social media sharing
- **Twitter Cards** for enhanced Twitter previews
- **Canonical URLs** for search indexing

### Structured Data
- **Schema.org markup** for rich snippets
- **WebApplication** type with feature descriptions
- **Organization** data for brand recognition

### Search Engine Support
- **XML sitemap** with proper priorities
- **robots.txt** with crawling directives
- **Meta robots** tags for indexing control

## 🚀 Deployment

### Recommended Platforms

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`

#### Other Platforms
The app is a static Next.js application and can be deployed on any platform that supports Node.js or static hosting.

## 🤝 Contributing

This project was built with **Claude Code** - an AI-powered development assistant that helped create:

- ✨ Complete application architecture and implementation
- 🎨 Apple-inspired design system and components  
- 📱 Progressive Web App features and optimization
- 🔍 Comprehensive SEO and metadata setup
- 🎯 Mobile-first responsive design
- 🚀 Production-ready build configuration

### Development Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Claude Code** - AI development assistant that built this entire application
- **nekos.best** - Providing adorable anime motivation content
- **Next.js Team** - Amazing React framework and tooling
- **Tailwind CSS** - Incredible utility-first CSS framework
- **Vercel** - Excellent hosting and deployment platform

---

<div align="center">

**Built with ❤️ using Claude Code**

*An AI-powered development experience that turns ideas into production-ready applications*

[🚀 Deploy to Vercel](https://vercel.com/new) • [📱 View Demo](https://running-plan.vercel.app) • [🐙 GitHub](https://github.com/yourusername/running-plan)

</div>