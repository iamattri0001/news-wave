/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#040508',
        faded: '#29485d',
        light: '#c4d2e9',
        primary: '#2bd2fe',
        'primary-var': '#2aa2e9',
        secondary: '#375cca',
        tertiary: '#aa6538'
      }
    },
  },
  plugins: [],
}

