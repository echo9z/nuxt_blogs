// import http from '../utils/request'
import http from '../utils/http'
export interface IUserinfo {
  username: number
  password: string
}

// 登录
export const login = (payload: IUserinfo) => {
  return http.post('/api/auth/login', payload)
}
// 根据token获取自己的信息
export const getInfo = () => {
  return http.get('/api/auth/getInfo')
}
