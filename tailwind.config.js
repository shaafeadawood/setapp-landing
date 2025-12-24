/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#26262B',
        'primary-white': '#FFFFFF',
        'surface-light': '#FEFEFE',
        'surface-accent': '#F5F5F5',
        'text-muted': '#969799',
        'border-subtle': '#E5E5E5',
        'brand': {
          dark: '#222325',
          darker: '#1f2022',
          accent: '#F5C294',
        },
        'card': {
          peach: '#F5C294',
          blue: '#9AD7F0',
          pink: '#E398B4',
          teal: '#95D5E5',
          yellow: '#F7D69B',
          purple: '#D99AC5',
          green: '#E6F4EA',
        }
      },
      fontFamily: {
        sans: ['Avenir Next', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        // Custom typography tokens
        'display-hero': ['64px', { lineHeight: '106%', letterSpacing: '0.015em', fontWeight: '700' }],
        'display-section': ['36px', { lineHeight: '144%', letterSpacing: '0.028em', fontWeight: '600' }],
        'display-card': ['26px', { lineHeight: '154%', letterSpacing: '0', fontWeight: '600' }],
        'body-large': ['18px', { lineHeight: '178%', fontWeight: '400' }],
        'body-base': ['16px', { lineHeight: '150%', letterSpacing: '0.062em', fontWeight: '400' }],
        'label-nav': ['14px', { lineHeight: '184%', letterSpacing: '0.064em', fontWeight: '500' }],
        'label-small': ['12px', { lineHeight: '178%', fontWeight: '400' }],
      },
      spacing: {
        '4': '4px',
        '16': '16px',
        '32': '32px',
        '40': '40px',
        '120': '120px',
      },
      borderRadius: {
        'pill': '9999px',
        '20': '20px',
        '15': '15px',
        '6': '6px',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(100%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to right, #3D2B20, #3D1A25)',
      },
      maxWidth: {
        '7xl': '1280px',
      },
    },
  },
  plugins: [],
}
