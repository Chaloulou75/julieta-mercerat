export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'julieta-mercerat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Julieta Mercerat Website',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8', '@nuxtjs/google-fonts', '@nuxt/image'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
  ],

  googleFonts: {
    preload: true,
    families: {
      Montserrat: true,
    },
    display: 'swap',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  plugins: ['~/plugins/router'],

  i18n: {
    // baseUrl: 'https://objective-spence-c10cd6.netlify.app/',
    skipSettingLocaleOnNavigate: true,
    defaultLocale: 'fr',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    parsePages: false,
    pages: {
      about: {
        en: '/about',
        fr: '/a-propos',
      },
      'portfolio/jour-un/index': {
        en: '/portfolio/day-one',
        fr: '/portfolio/jour-un',
      },
      'portfolio/jour-deux/index': {
        en: '/portfolio/day-two',
        fr: '/portfolio/jour-deux',
      },
      'portfolio/jour-trois/index': {
        en: '/portfolio/day-three',
        fr: '/portfolio/jour-trois',
      },
      'portfolio/jour-quatre/index': {
        en: '/portfolio/day-four',
        fr: '/portfolio/jour-quatre',
      },
      'portfolio/jour-cinq/index': {
        en: '/portfolio/day-five',
        fr: '/portfolio/jour-cinq',
      },
      'portfolio/jour-six/index': {
        en: '/portfolio/day-six',
        fr: '/portfolio/jour-six',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: false,
        minifyCSS: false,
        processConditionalComments: true,
        removeEmptyAttributes: false,
        removeRedundantAttributes: false,
        trimCustomFragments: false,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: false,
      },
    },
  },
}
