/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kumbh-shans': [' "Kumbh Sans" ', 'sans-serif'],
      },
      backgroundColor: {
        'violet': '#5964e0',
        'light-violet': '#939bf4',
        'dark-blue': '#19202d',
        'midnight': '#121721',
        'white': '#fff',
        'grey': '#9daec2',
        'light-grey': '#f4f6f8',
        'dark-grey': '#6e8098',
      },
      textColor: {
        'violet': '#5964e0',
        'light-violet': '#939bf4',
        'dark-blue': '#19202d',
        'midnight': '#121721',
        'white': '#fff',
        'grey': '#9daec2',
        'light-grey': '#f4f6f8',
        'dark-grey': '#6e8098',
      }, 
    },
  },

}
