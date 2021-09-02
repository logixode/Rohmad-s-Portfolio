export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Rohmad Kurniadi",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I'am Rohmad Kurniadi a.k.a logiXode, Experienced Frontend Developer with demonstrated history of working as a Freelancer for almost 2 years. Skilled in Javascript like Vue.js, Nuxt.js, Node.js, also Tailwind CSS for Website Development and Flutter for Mobile App Development."
      },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "og:title",
        property: "og:title",
        content: "Rohmad Kurniadi a.k.a logiXode"
      },
      {
        name: "og:description",
        property: "og:description",
        content:
          "Saya Rohmad Kurniadi a.k.a logiXode, seorang Frontend Developer sekaligus Mahasiswa aktif di Politeknik Negeri Banyuwangi. Berpengalaman bekerja sebagai Freelance Frontend Developer menggunakan Framework Vue.js, Nuxt.js, Node.js, dan didukung dengan Framework lain seperti Tailwind CSS, Bootstrap, dll. dan juga menggunakan Flutter dalam pengembangan Aplikasi Mobile. Berkomitmen untuk menjadi Frontend Developer yang baik dan tertarik dengan berbagai hal yang berkaitan dengan visual seperti design, photography, dan termasuk juga warna-warni syntax highlight dari text editor :D"
      },
      { name:"robots", content: "index, follow" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: {
    color: "#39b982"
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ["three"],
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  },
  watchers: {
    webpack: {
      ignored: /node_modules/
    }
  }
};
