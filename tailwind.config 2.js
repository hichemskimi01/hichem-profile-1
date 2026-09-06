/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0C',
        surface: '#131316',
        surface2: '#1B1B1F',
        line: 'rgba(255,255,255,0.08)',
        ink: '#EDEDEF',
        muted: '#8A8A93',
        accent: '#C9A876',
        accentSoft: 'rgba(201,168,118,0.16)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(201,168,118,0.25)',
        soft: '0 8px 30px rgba(0,0,0,0.35)',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.06)' },
        },
        riseIn: {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        drift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-20px,-30px,0)' },
        },
      },
      animation: {
        breathe: 'breathe 4.5s ease-in-out infinite',
        riseIn: 'riseIn 0.7s cubic-bezier(0.16,1,0.3,1) both',
        drift: 'drift 18s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
