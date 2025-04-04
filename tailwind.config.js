/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2E86C1',
        'primary-green': '#27AE60',
        'light-blue': '#AED6F1',
        'light-green': '#A9DFBF',
        'warm-beige': '#FAE5D3',
        'dark-text': '#2C3E50',
        'medium-text': '#566573',
      }
    },
  },
  plugins: [],
}

