// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
  css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },

      modules: [
        '@kevinmarrec/nuxt-pwa'
      ],

  pwa: {
    workbox: {
      enabled: true
    }
  }

})

// {
//   buildModules: [
//     '@nuxtjs/pwa',
//   ]
// }

// {
//   pwa: {
//     icon: false // disables the icon module
//   }
// }

