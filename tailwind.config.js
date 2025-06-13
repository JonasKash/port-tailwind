/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          neon: '#00F0FF',
          purple: '#9442FE',
        },
        secondary: {
          neon: '#FE42E8',
        },
        success: {
          neon: '#42FE71',
        },
        warning: {
          neon: '#FED042',
        },
        error: {
          neon: '#FE4242',
        },
      },
      boxShadow: {
        'neon-sm': '0 0 5px rgba(0,240,255,0.3)',
        'neon': '0 0 15px rgba(0,240,255,0.3)',
        'neon-lg': '0 0 25px rgba(0,240,255,0.3)',
        'neon-xl': '0 0 35px rgba(0,240,255,0.3)',
        'neon-2xl': '0 0 50px rgba(0,240,255,0.3)',
        'neon-secondary-sm': '0 0 5px rgba(148,66,254,0.3)',
        'neon-secondary': '0 0 15px rgba(148,66,254,0.3)',
        'neon-secondary-lg': '0 0 25px rgba(148,66,254,0.3)',
        'neon-secondary-xl': '0 0 35px rgba(148,66,254,0.3)',
        'neon-secondary-2xl': '0 0 50px rgba(148,66,254,0.3)',
      },
      dropShadow: {
        'neon-sm': '0 0 2px rgba(0,240,255,0.5)',
        'neon': '0 0 3px rgba(0,240,255,0.5)',
        'neon-lg': '0 0 5px rgba(0,240,255,0.5)',
        'neon-xl': '0 0 7px rgba(0,240,255,0.5)',
        'neon-2xl': '0 0 10px rgba(0,240,255,0.5)',
        'neon-secondary-sm': '0 0 2px rgba(148,66,254,0.5)',
        'neon-secondary': '0 0 3px rgba(148,66,254,0.5)',
        'neon-secondary-lg': '0 0 5px rgba(148,66,254,0.5)',
        'neon-secondary-xl': '0 0 7px rgba(148,66,254,0.5)',
        'neon-secondary-2xl': '0 0 10px rgba(148,66,254,0.5)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%': { filter: 'brightness(100%) blur(0)' },
          '100%': { filter: 'brightness(150%) blur(1px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-neon': 'linear-gradient(to right, #00F0FF, #9442FE)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}; 