// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    "~": "/<rootDir>",
    "@": "/<rootDir>",
    "assets": "/<rootDir>/assets",
    "public": "/<rootDir>/public"
  },
  css: ["/assets/css/icon.css", '/assets/css/index.css'],
  modules: [
    ['@vueuse/nuxt'],
    ['@nuxtjs/tailwindcss'],
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动导入 imports `defineStore` 和 imports `defineStore` as `definePiniaStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
})
