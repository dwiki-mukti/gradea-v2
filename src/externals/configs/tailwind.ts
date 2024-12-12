import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e93339', //dc5315
        'contras-primary': '#fff',
        'secondary': '#FC4100',
        'contras-secondary': '#fff',
      },
      transitionDuration: {
        'very-fast': '100ms',
        'fast': '300ms',
        'slow': '500ms',
        'very-slow': '700ms',
      }
    },
    fontSize: {
      'xxs': ['0.75rem', '0.875rem'],
      'xs': ['0.8125rem', '0.9375rem'],
      // 'xs': ['0.75rem', '0.875rem'],
      'sm': ['0.875rem', '1rem'],
      'base': ['1rem', '1.125rem'],
      'lg': ['1.125rem', '1.25rem'],
      'xl': ['1.25rem', '1.375rem'],
      '2xl': ['1.5rem', '1.625rem'],
      '3xl': ['1.875rem', '2rem'],
      '4xl': ['2.25rem', '2.375rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1']
    },
    // fontSize: {
    //   xxs: ['12px', '14px'],
    //   xs: ['13px', '15px'],
    //   sm: ['14px', '16px'],
    //   base: ['16px', '18px'],
    //   lg: ['18px', '20px'],
    //   xl: ['20px', '22px'],
    //   '2xl': ['22px', '24px'],
    //   '3xl': ['24px', '26px'],
    // },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.bg-primary-gradient': {},
        '.card': {},
        '.card-header': {},
        '.card-body': {},
        '.card-footer': {},
        '.card-title': {},
        '.btn': {},
        '.btn-lg': {},
        '.btn-flat': {},
        '.btn-outline': {},
        '.btn-action': {},
        '.btn-disabled': {},
        '.btn-loading': {},
        '.input-form': {},
        '.input-radio': {},
        '.input-checkbox': {},
        '.input-checkbox-transparent': {},
        '.invalid-border': {},
        '.invalid-message': {},
        '.input-group-invalid': {},
        '.modal': {},
        '.mark': {},
        '.bg-image': {},
        '.bg-profile': {},
        '.table': {},
        '.table-carded': {},
        '.table-striped': {},
        '.section-table': {},
      })
    })
  ],
}
export default config
