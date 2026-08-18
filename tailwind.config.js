/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#05070D',
        surface: {
          50: '#181F2F',
          100: '#121724',
          200: '#0C101A',
          300: '#080A11',
          DEFAULT: '#0E1422',
        },
        brand: {
          cyan: '#00F0FF',
          violet: '#8B5CF6',
          purple: '#A855F7',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        display: ['Space Grotesk', 'Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(0, 240, 255, 0.15) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
        'glass-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.005) 100%)',
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #00F0FF 0deg, #8B5CF6 180deg, #00F0FF 360deg)',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -8px rgba(0, 240, 255, 0.4)',
        'glow-violet': '0 0 40px -8px rgba(139, 92, 246, 0.4)',
        'glow-emerald': '0 0 40px -8px rgba(16, 185, 129, 0.4)',
        'hud': '0 0 0 1px rgba(0, 240, 255, 0.2), 0 8px 30px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'border-beam': 'borderBeam 8s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.02)' },
        },
        borderBeam: {
          '100%': { 'offset-distance': '100%' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
