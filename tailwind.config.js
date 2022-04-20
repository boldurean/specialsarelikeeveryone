module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // creat your color palette (orange - primary ?500 ? 400)
        'osob': {
          '50': '#fff7f2', 
          '100': '#ffeee6', 
          '200': '#ffd6bf', 
          '300': '#ffbd99', 
          '400': '#ff8b4d', 
          '500': '#ff5900', 
          '600': '#e65000', 
          '700': '#bf4300', 
          '800': '#993500', 
          '900': '#7d2c00'
      }
      }
    },
  },
  plugins: [],
}

