import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  // 2.使用容器中的state
  state: () => {
    return {
      profile: {
        id: '',
        avatar: '',
        email: '',
        nickname: '',
        username: '',
        role: '',
        phone: '',
        token: ''
      },
      // 登录后的回调低至
      redirectUrl: '/'
    }
  },
  getters: {},
  actions: {
    // 修改用户信息对象，payload就是用户信息对象
    setUser (payload: any) {
      this.profile = payload
    },
    setRedirectUrl (redirectUrl: any) {
      this.redirectUrl = redirectUrl
    }
  },
  persist: true
});
