// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future:{
     compatibilityVersion: 4
  },

  devtools: { enabled: true },

  plugins: [
    { src: '~/plugins/lenis.client.js', mode: 'client' },
  ],

  css:["~/assets/style.css", "~/assets/index.scss"],

  postcss: {
   plugins: {
     tailwindcss: {},
     autoprefixer: {},
   },
 },

  modules: ["@nuxt/image", '@pinia/nuxt'],
})