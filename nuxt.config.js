const pkg = require('./package')

const moduleCommon = [
  'nuxt-i18n', {
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'ja', iso: 'ja-JP' },
    ],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'en',
    },
    vueI18nLoader: true,
    seo: true,
    detectBrowserLanguage: {
      useCookie: false,
    },
  },
]
const moduleBase = process.env.NODE_ENV === 'production' ? {
  modules: [
    ['@nuxtjs/google-analytics', { id: 'UA-125972611-2' }],
    moduleCommon,
  ]
} : {
  modules: [
    moduleCommon,
  ],
}
const generateBase = process.env.NODE_ENV === 'audio' ? {
  generate: {
    dir: "audio",
  },
} : {}
const routerBase = process.env.NODE_ENV === 'audio' ? {
  router: {
    base: '/portfolio_with_audio_effect',
  },
} : {}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'nabehide\'s portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This website is created with WebGL(Three.js), Nuxt.js and GLSL.' },
      { property: 'og:title', content: 'nabehide portfolio' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://nabehide.com' },
      { property: 'og:description', content: 'This site is created with Nuxt.js and Three.js(WebGL/GLSL).' },
      { property: 'og:image', content: 'https://nabehide.com/thumbnail.png' },

      { property: 'og:twitter:card', content: 'card' },
      { property: 'og:twitter:site', content: '@____nabehide' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome',
  ],

  /*
  ** Nuxt.js modules
  */
  ...moduleBase,

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(glsl|frag|vert)$/,
        loader: 'raw-loader',
        exclude: '/node_modules/',
      })
    }
  },
  ...generateBase,
  ...routerBase,
}
