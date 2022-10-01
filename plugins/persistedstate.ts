import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/nuxt'

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.$pinia.use(createNuxtPersistedState(useLocalStorage))
  // NuxtApp.$pinia.use(createNuxtPersistedState(useCookie)) 将数据存在到cookie中
})