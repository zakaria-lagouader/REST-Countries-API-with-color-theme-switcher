module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"'],
      }
    },
    colors: {
      'dark-blue': "hsl(209, 23%, 22%)",
      'very-dark-blue': "hsl(207, 26%, 17%)",
      'dark-gray': "hsl(0, 0%, 52%)",
      'very-light-gray': "hsl(0, 0%, 98%)",
      'white': "hsl(0, 0%, 100%)",
    }
  },
  plugins: [],
  darkMode: 'class'
}
