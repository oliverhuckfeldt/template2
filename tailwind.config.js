/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif']
    },
    colors: {
      'primary': '#f44336',
      'light': '#fff',
      'background': '#fff',
      'body': '#000',
      'test-highlight': '#f9f9f9'
    },
    extend: {},
  },
  plugins: [],
}
