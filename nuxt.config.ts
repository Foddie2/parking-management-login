// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Park your ride',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Park your ride.' }
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
