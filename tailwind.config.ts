import type {Config} from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1400px' }
    },
    extend: {
      colors: {
        chemistry: {
          blue: '#1e3a8a',
          purple: '#7c3aed',
          teal: '#14b8a6',
          orange: '#f97316'
        },
        surface: {
          DEFAULT: '#ffffff',
          dark: '#020617',
          card: '#ffffff',
          'card-dark': '#0f172a',
          muted: '#f8fafc',
          'muted-dark': '#1e293b'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 58, 237, .35)',
        'glow-light': '0 0 40px rgba(124, 58, 237, .15)'
      },
      backgroundImage: {
        'hero-gradient-light': 'linear-gradient(135deg, #f0f9ff 0%, #f5f3ff 40%, #ecfeff 100%)',
        'hero-gradient-dark': 'linear-gradient(135deg, #0f192e 0%, #1a0a2e 40%, #0a2a28 100%)'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 1.8s infinite'
      }
    }
  },
  plugins: []
};

export default config;
