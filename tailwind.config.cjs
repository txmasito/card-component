/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      darkCyan: 'hsl(158, 36%, 37%)',
      hoverDarkCyan: '#184131',
      Cream: 'hsl(30, 38%, 92%)',
      veryDarkBlue: 'hsl(212, 21%, 14%)',
      darkGrayishBlue: 'hsl(228, 12%, 48%)',
      White: 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      fraunces: ['Fraunces'],
      montserrat: ['Montserrat'],
    },
    backgroundImage: {
      desktop: 'url("/src/assets/image-product-desktop.jpg")',
      mobile: 'url("/src/assets/image-product-mobile.jpg)',
    },
    screens: {
      maxResp: {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      minResp: {'min': '640px'}
      // => @media (min-width: 640px) { ... }
    }
  },
  plugins: [],
}
