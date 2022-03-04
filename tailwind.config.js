module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'font-sans'],
        ubuntu: ['Ubuntu', 'font-sans'],
      },
      backgroundImage: (theme) => ({
        'dia-1': "url('/img/proyectos/dias/dia1.jpg')",
        'dia-2': "url('/img/proyectos/dias/dia2.jpg')",
        'dia-3': "url('/img/proyectos/dias/dia3.jpg')",
        'dia-4': "url('/img/proyectos/dias/dia4.jpg')",
        'dia-5': "url('/img/proyectos/dias/dia5.jpg')",
        'dia-6': "url('/img/proyectos/dias/dia6.jpg')",
      }),
      colors: {
        gold: '#FFDF00',
        bluejuli: '#008aae',
        redjuli: '#f23941',
        yellowjuli: '#FFDF00', //#fed718
      },
    },
  },
  plugins: [],
}
