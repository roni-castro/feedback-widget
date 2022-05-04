const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      brand: '#8257E5',
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
