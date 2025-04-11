/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@treasure-dev/tailwind-config')],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textEdge: {
        cap: 'cap',
      },
      leadingTrim: {
        both: 'both',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.leading-trim-both': {
          'leading-trim': 'both',
        },
        '.text-edge-cap': {
          'text-edge': 'cap',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}; 