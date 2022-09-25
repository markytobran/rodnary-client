module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#182B12',
        'light-green': '#566B34',
        'average-pink': '#EB9176',
        'middle-green': '#263322',
        'dark-orange': '#CF6D00',
        'icon-grey': '#424242',
      },
      width: {
        84: '22rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
