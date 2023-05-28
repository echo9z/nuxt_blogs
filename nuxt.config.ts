// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'echo9z博客 - web前端',
      charset: 'utf-8',
      meta: [
        { name: 'keywords', content: 'web前端,前端,JavaScript,HTML5,CSS3,Node,echo9z博客' },
        { name: 'description', content: 'echo9z博客,专注于Web前端技术文章分享,包含JavaScript、HTML5、CSS3等前端基础知识,以及Vue.js,React,Augular等前端框架' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        // 引入icon标签 这里的引入的是
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        // { rel: 'stylesheet', href: 'https://unpkg.com/reset-css/reset.css' }
      ],
      htmlAttrs: {
        lang: 'zh-CN'
      },
    },
  },
  experimental: {
    externalVue: true,
  },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      NEST_API: 'blogs',
      // BASE_API_HOST: 'http://127.0.0.1:18080',
      BASE_API_HOST: 'https://www.echouu.com',
      apiBase: '/api',
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
    // 'nuxt-simple-sitemap',
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
    '@pinia-plugin-persistedstate/nuxt',
    '@element-plus/nuxt',
  ],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },
  // sitemap: {
  //   siteUrl: 'https://www.echouu.com',
  // },
  // nitro: {
  //   // prerender: {
  //   //   routes: ['/']
  //   // }
  // },
  elementPlus: { /** Options */ }
})
