module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'dark-gray': '#8c8c8c',
        'very-dark-gray': '#696969'
      },
      'fontSize': {
        'default': '15px'
      },
      'fontFamily': {
        'alata': ['Alata', 'sans-serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif']
      },
      'backgroundImage': {
        'hero-gradient-desktop': " linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('assets/images/desktop/image-hero.jpg')",
        'hero-gradient-mobile': " linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('assets/images/mobile/image-hero.jpg')",
      }
      
    },
  },
  plugins: [],
}
