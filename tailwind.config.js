const newColors = require('./colors.js');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    enabled: production,
    content: [
      './src/**/*.svelte', //
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.ts',
    ],
  },
  theme: {
    extend: {
      colors: newColors,
      fontFamily: {
        heading: ['franklin-gothic-urw', 'serif'],
        body: ['georgia', 'serif'],
        sans: ['franklin-gothic-urw', 'sans-serif'],
      },
      margin: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
  variants: {},
  // plugins: [require('@tailwindcss/ui')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
