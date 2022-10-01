// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  experimental: {
    externalVue: true,
  },
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',

    // Public keys that are exposed to the client
    public: {
      apiBase: 'http://127.0.0.1:18080'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:18080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
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
        ],
      },
    ],
  ],
})
