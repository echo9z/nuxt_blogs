import http from '../utils/request'
export interface IUserinfo {
  username: number
  password: string
}

// 登录
export const login = (payload: IUserinfo) => {
  return http.post('/api/auth/login', payload)
}
