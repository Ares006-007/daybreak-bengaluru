/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF8F5',
          200: '#F4EFE6',
          300: '#E9E2D5',
        },
        ink: {
          950: '#0B0714',
          900: '#140E24',
          800: '#1F1735',
          700: '#2F244C',
          muted: '#5E5474',
        },
        daybreak: {
          aqua: '#2DDFFF',
          sunny: '#F5F474',
          pink: '#E33CC7',
          orange: '#FFAA47',
          dragon: '#F54D28',
          gold: '#FFC72C',
          violet: '#7A22C9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        title: ['"Unbounded"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #140E24',
        'brutal-lg': '8px 8px 0px 0px #140E24',
        'brutal-xl': '12px 12px 0px 0px #140E24',
        'brutal-pink': '4px 4px 0px 0px #E33CC7',
        'brutal-orange': '4px 4px 0px 0px #F54D28',
        'brutal-aqua': '4px 4px 0px 0px #2DDFFF',
        'brutal-sunny': '4px 4px 0px 0px #F5F474',
        'glow-orange': '0 0 35px -5px rgba(255, 170, 71, 0.6)',
        'glow-pink': '0 0 35px -5px rgba(227, 60, 199, 0.5)',
        'glow-aqua': '0 0 35px -5px rgba(45, 223, 255, 0.5)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        'sun-rise': {
          '0%': { transform: 'translateY(20px) scale(0.95)', opacity: '0.8' },
          '50%': { transform: 'translateY(0px) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(20px) scale(0.95)', opacity: '0.8' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'float-slow': 'float-slow 4s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'sun-rise': 'sun-rise 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
