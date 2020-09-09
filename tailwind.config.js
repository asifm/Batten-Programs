const { customColors } = require('./src/data/colors');
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
    options: {
      // replace with program type colors
      whitelist: ['bg-experience', 'bg-learn', 'bg-connect'],
    },
  },
  theme: {
    extend: {
      colors: customColors,
      fontFamily: {
        heading: ['franklin-gothic-urw', 'sans-serif'],
        body: ['georgia', 'serif'],
        sans: ['franklin-gothic-urw', 'sans-serif'],
      },
      margin: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
  variants: {
    boxShadow: ['group-focus', 'hover'],
  },
  // Turning off because the plugin crashes the rollup-based build process
  plugins: [require('@tailwindcss/ui')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
