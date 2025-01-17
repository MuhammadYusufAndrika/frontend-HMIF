export default {
  // loading: "~/components/loading.vue",
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Responsive Bootstrap 5 Admin Dashboard"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/hmif.ico" }],
    script: [
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/scss/app.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/axios.js",
    "~/plugins/i18n.js",
    "~/plugins/simplebar.js",
    "~/plugins/vue-click-outside.js",
    "~/plugins/vue-apexcharts.js",
    "~/plugins/vuelidate.js",
    "~/plugins/vue-slidebar.js",
    "~/plugins/vue-lightbox.js",
    "~/plugins/vue-chartist.js",
    "~/plugins/vue-mask.js",
    "~/plugins/vue-googlemap.js",
    "~/plugins/toast.js",
    "~/plugins/datatables.js"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
    "@nuxtjs/axios",
    "@nuxtjs/dayjs",

    // Nuxt Auth
    { src: "@nuxtjs/auth", mode: "client" }
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "https://api.hmifamikom.org/api/login",
            method: "post",
            propertyName: "token"
          },
          logout: false,
          user: {
            url: "https://api.hmifamikom.org/api/memberauth",
            method: "get",
            propertyName: false
          }
        }
      }
    },
    redirect: {
      login: "/login",
      logout: "/login",
      home: "/admin"
    }
  },

  router: {
    middleware: ["auth"]
  },

  toast: {
    timeout: 3000,
    closeOnClick: true,
    icon: false
  },

  dayjs: {
    locales: ["en", "id"],
    defaultLocale: "id",
    defaultTimeZone: "Asia/Jakarta",
    plugins: [
      "utc", // import 'dayjs/plugin/utc'
      "timezone", // import 'dayjs/plugin/timezone'
      "relativeTime", // import 'dayjs/plugin/relativeTime'
      "weekOfYear"
    ] // Your Day.js plugin
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  env: {
    auth: process.env.VUE_APP_DEFAULT_AUTH,
    apikey: process.env.VUE_APP_APIKEY,
    authdomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseurl: process.env.VUE_APP_DATABASEURL,
    projectid: process.env.VUE_APP_PROJECTId,
    storgebucket: process.env.VUE_APP_STORAGEBUCKET,
    message: process.env.VUE_APP_MESSAGINGSENDERID,
    appid: process.env.VUE_APP_APPId,
    measurement: process.env.VUE_APP_MEASUREMENTID
  }
};
