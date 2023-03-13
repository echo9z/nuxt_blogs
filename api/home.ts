import http from '../utils/request'
import { SayHiObj } from './homeTypes'

// 获取导航页
export const getNavPages = () => {
  return http.get('/api/page/findPages')
}

// 获取分类 文章
export const getCount = () => {
  return http.get('/api/page/findArticleInfo')
}

// 每日一言
export const getSayHi = () => {
  return http.get('/api/external/getOneSay')
}
