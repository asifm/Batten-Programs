// Darden Blue and Darden Orange shades/tints denerated here: https://javisperez.github.io/tailwindcolorshades/#/?cloud-burst=232d4b&Mango%20Tango=e57200&tv=1
const customColors = {
  // https://www.htmlcsscolor.com/hex/232d4b
  'dd-blue': {
    50: '#F4F5F6',
    100: '#E9EAED',
    200: '#C8CBD2',
    300: '#A7ABB7',
    400: '#656C81',
    default: '#232D4B',
    600: '#202944',
    700: '#151B2D',
    800: '#101422',
    900: '#0B0E17',
  },
  // https://www.htmlcsscolor.com/hex/e57200
  'dd-orange': {
    50: '#FEF8F2',
    100: '#FCF1E6',
    200: '#F9DCBF',
    300: '#F5C799',
    400: '#ED9C4D',
    default: '#E57200',
    600: '#CE6700',
    700: '#894400',
    800: '#673300',
    900: '#452200',
  },
  // https://www.htmlcsscolor.com/hex/84bd00
  citrus: '#9dd619',
  // https://www.htmlcsscolor.com/hex/642f6c
  seance: '#642f6c',
  // https://www.htmlcsscolor.com/hex/f2cd00
  tangerine: '#f2cd00',
  // https://www.htmlcsscolor.com/hex/141e3c
  midnight: '#141e3c',
  lightmidnight: '#cdd0d6',
  // https://www.htmlcsscolor.com/hex/cac0b6
  stark: '#cac0b6',
  // https://www.htmlcsscolor.com/hex/007681
  tealy: '#007681',
  // Theme colors
  // learn: '#d7c9d9', // light seance
  learn: '#F5C799', // dd-orange-300
  experience: '#f9e57d', // light tangerine
  connect: '#cdea89', // light citrus
};

exports.customColors = customColors;

// Previous colors. Clean up later.
// module.exports = {
//   'dd-lightblue': 'rgba(32, 41, 70, 1)',
//   learn: 'rgba(229, 114, 0, 0.8)',
//   experience: 'rgba(242, 205, 0, 0.8)',
//   connect: 'rgba(157, 214, 25, 0.8)',
// };
