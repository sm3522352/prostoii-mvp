import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}','./lib/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C1A12',
        accent: '#FF7A42',
        bg: '#FFF7ED',
        surface: '#FFEAD6',
        text: '#2B211A',
        'muted-foreground': '#5D4A3D',
      },
      borderRadius: { lg: '1rem', xl: '1.25rem' },
      fontFamily: { sans: ['var(--font-manrope)','var(--font-inter)','sans-serif'] },
      keyframes: {
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.9)' },
        },
      },
      animation: { blob: 'blob 20s infinite' },
    },
  },
  plugins: [],
}
export default config
