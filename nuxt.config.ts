// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  experimental: {
    externalVue: true,
  },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      NEST_API: 'blogs',
      BASE_API_HOST: 'http://127.0.0.1:18080',
      apiBase: '/api'
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 18081
  },
  // routeRules: {
  //   '/api': { proxy: 'http://127.0.0.1:18080' },
  // },
  // server: {
  //   // port: 18081,
  //   // open: true, // 运行自动打开浏览器
  //   // strictPort: true,
  //   proxy: {
  //     // '/api': {
  //     //   target: 'http://127.0.0.1:18080',
  //     //   changeOrigin: true,
  //     //   // rewrite: (path) => path.replace(/^\/api/, '')
  //     // },
  //     '/api': {
  //       target: 'https://v.api.aa1.cn',
  //       changeOrigin: true,
  //     },
  //   }
  // },
  alias: {
    "~": "/<rootDir>",
    "@": "/<rootDir>",
    "assets": "/<rootDir>/assets",
    "public": "/<rootDir>/public"
  },
  css: ["/assets/css/icon.css", '/assets/css/index.css'],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动导入 imports `defineStore` 和 imports `defineStore` as `definePiniaStore`
          'defineStore', // import { defineStore } from 'pinia'
        ],
      },
    ],
    '@element-plus/nuxt'
  ],
  elementPlus: { /** Options */ }
})
