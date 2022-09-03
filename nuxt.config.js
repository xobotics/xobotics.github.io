export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Xobotics",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
      {
        hid: "description",
        name: "description",
        content: "Xobotics",
      },
      {
        name: "keywords",
        content: "xobotics",
      },
      {
        name: "author",
        content: "s-a-tanjim",
      },
      {
        property: "og:title",
        content: "Xobotics",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:description",
        content: "Complete Industrial Business Solution",
      },
      {
        property: "og:image",
        content: "https://xobotics.io/site-thumbnail.jpg",
      },
      {
        property: "og:url",
        content: "https://xobotics.io",
      },
      {
        name: "facebook-domain-verification",
        content: "cs99nbcrk22pfz8z4j82alghuyvntx",
      },
      {
        property: "twitter:title",
        content: "Xobotics",
      },
      {
        property: "twitter:creator",
        content: "s-a-tanjim",
      },
      {
        property: "twitter:description",
        content: "Complete Industrial Business Solution",
      },
      {
        property: "twitter:image",
        content: "https://xobotics.io/site-thumbnail.jpg",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        href: "/css/main.css",
        rel: "stylesheet",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap",
        rel: "stylesheet",
      },
      // {
      //   href: "/css/tailwind.css",
      //   rel: "stylesheet",
      // },
    ],
    script: [
      /*{
        async: true,
        src: '/bootstrap/main.js',
      },*/
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-ZLL0NYHQZB",
      },
      {
        src: "/js/main.js",
      },
    ],
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/404.vue"),
      });
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
