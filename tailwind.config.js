const plugin = require('tailwindcss/plugin')
const flattenColorPalette = require('tailwindcss/src/util/flattenColorPalette')
const toColorValue = require('tailwindcss/src/util/toColorValue')

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    plugin(function ({ matchUtilities, e, config, theme }) {
      const textBorderSize = `--tw${config('prefix')}-text-border-size`

      matchUtilities(
        {
          'text-border': (value) => ({
            'text-shadow': `0 0 var(${textBorderSize},1px) ${toColorValue(
              value
            )}`
          })
        },
        {
          values: (({ DEFAULT: _, ...colors }) => colors)(
            flattenColorPalette(theme('borderColor'))
          ),
          type: 'color'
        }
      )

      matchUtilities(
        {
          'text-border-size': (value) => ({
            [textBorderSize]: value
          })
        },
        { values: theme('borderWidth') }
      )
    })
  ],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'wedding-green': '#005421'
      },
      backgroundImage: {
        splash: "url('./assets/splash.png')"
      },
      fontFamily: {
        header: 'Nothing You Could Do',
        content: 'Noto Serif JP'
      }
    }
  }
}
