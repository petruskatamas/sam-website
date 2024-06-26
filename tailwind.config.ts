import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  safelist: [
    // @ts-ignore
    ...[...Array(768).keys()].flatMap((i) => [`w-[${i * 1}px]`])
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    safelist: ['bg-transparent'],
    extend: {
      colors: {
        'primary-orange': '#f8673a',
        'dark-blue': '#15325a'
      },
      backgroundImage: {
        'main-hero': "url('/main-hero-bg.webp')",
        'pros-hero': "url('/pros-bg.webp')"
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('tailwindcss-animated')]
} satisfies Config

export default config
