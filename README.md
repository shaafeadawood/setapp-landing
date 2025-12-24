# Setapp Landing Page

> Modern, responsive landing page built with React, TypeScript, and Tailwind CSS

![Setapp Landing](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/react-19.2.3-61DAFB.svg)
![Tailwind CSS](https://img.shields.io/badge/tailwind-3.4-38B2AC.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.8.2-3178C6.svg)

## ✨ Features

- 🎨 **Pixel-Perfect Design** - Exact spacing, typography, and colors using Tailwind design tokens
- 📱 **Fully Responsive** - Mobile-first design that works seamlessly across all devices
- ⚡ **Modern Stack** - Built with React 19, TypeScript 5.8, and Tailwind CSS 3.4
- 🎭 **Smooth Animations** - Custom animations and transitions for enhanced UX
- ♿ **Accessible** - WCAG compliant with semantic HTML and ARIA labels
- 🚀 **Optimized Performance** - Fast load times and smooth interactions

## 🛠️ Tech Stack

- **Framework**: React 19.2.3
- **Language**: TypeScript 5.8.2
- **Styling**: Tailwind CSS 3.4.17
- **Build Tool**: Vite 6.2.0
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

## 🚀 Quick Start

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/setapp-landing.git
   cd setapp-landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
setapp-landing/
├── components/
│   ├── Header.tsx          # Navigation bar with search and menu
│   ├── Hero.tsx            # Hero section with animated widgets
│   ├── FeatureSection.tsx  # Feature cards grid
│   ├── VideoSection.tsx    # Video testimonial carousel
│   ├── Testimonials.tsx    # User testimonial cards
│   ├── PricingBanner.tsx   # CTA pricing banner
│   ├── Footer.tsx          # Footer with newsletter and links
│   └── icons/
│       └── Icons.tsx       # SVG icon components
├── src/
│   └── index.css           # Tailwind directives and custom styles
├── App.tsx                 # Main app component
├── index.tsx               # React entry point
├── index.html              # HTML template
├── types.ts                # TypeScript type definitions
├── tailwind.config.js      # Tailwind configuration with custom tokens
├── postcss.config.js       # PostCSS configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design Tokens

### Colors

- **Primary Dark**: `#26262B`
- **Primary White**: `#FFFFFF`
- **Surface Light**: `#FEFEFE`
- **Surface Accent**: `#F5F5F5`
- **Text Muted**: `#969799`
- **Border Subtle**: `#E5E5E5`

### Typography (Avenir Next / Inter)

- **Display Hero**: 64px, 700 weight
- **Display Section**: 36px, 600 weight
- **Display Card**: 26px, 600 weight
- **Body Large**: 18px, 400 weight
- **Body Base**: 16px, 400 weight
- **Label Nav**: 14px, 500 weight

### Spacing

- `4px`, `16px`, `32px`, `40px`, `120px`

### Border Radius

- `6px`, `15px`, `20px`, `9999px` (pill)

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

3. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

1. **Install Netlify CLI**

   ```bash
   npm i -g netlify-cli
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Environment Variables

Create a `.env` file in the root directory (if needed):

```env
VITE_API_URL=your_api_url_here
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## 🎯 Components Overview

### Header

- Fixed navigation with backdrop blur
- Search functionality
- Mobile responsive menu
- CTA buttons with hover states

### Hero

- Animated floating widgets
- Gradient background banner
- Platform download buttons
- Call-to-action section

### FeatureSection

- Responsive grid layout (1-2 columns)
- Interactive card hovers
- Custom illustrations
- Feature descriptions

### VideoSection

- Testimonial carousel
- Video play functionality
- Pagination dots
- Navigation arrows

### Testimonials

- 3-column grid (responsive)
- Social platform integration
- User avatars
- Quote cards

### PricingBanner

- Prominent CTA section
- Pricing information
- Multiple button options

### Footer

- Newsletter subscription
- Multi-column link layout
- Social media icons
- Legal information

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Design inspired by Setapp by MacPaw
- Built with modern web technologies
- Optimized for performance and accessibility

## 📞 Support

For support, email support@setapp.com or open an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

🔗 **Live Demo**: [https://setapp-landing.vercel.app](https://setapp-landing.vercel.app)

🔗 **Repository**: [https://github.com/yourusername/setapp-landing](https://github.com/yourusername/setapp-landing)
