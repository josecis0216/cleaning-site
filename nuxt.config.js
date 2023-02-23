export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cleaning-site',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel:"preconnect", href: "https://fonts.googleapis.com" }],
    link: [{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: 'true' }],
    link: [{ href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap", rel: "stylesheet" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    baseUrl: process.env.BASE_URL || 'https://auroras-cleaning-default-rtdb.firebaseio.com',
    fbAPIKey: 'AIzaSyCDAePRLQ3-41QNbfJ7bJoDrwijHTHGEMM'
  },
}
