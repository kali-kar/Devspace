/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        space: {
          950: '#05070f',
          900: '#0a0f1e',
          800: '#0f172a',
          700: '#1e2a45',
          600: '#2d3f5e',
        },
        accent: {
          DEFAULT: '#6ee7f7',
          dim: '#38bcd4',
          glow: 'rgba(110, 231, 247, 0.15)',
        },
        neon: {
          pink: '#f472b6',
          purple: '#a78bfa',
          green: '#34d399',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:    { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp:   { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(110,231,247,0.1)' },
          '50%':      { boxShadow: '0 0 40px rgba(110,231,247,0.3)' },
        },
      },
    },
  },
  plugins: [],
};
