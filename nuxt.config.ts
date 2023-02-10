// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },

})

{
  buildModules: [
    '@nuxtjs/pwa',
  ]
}

{
  pwa: {
    icon: false // disables the icon module
  }
}
