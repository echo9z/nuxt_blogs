import http from '../utils/request'

// 获取导航页
export const getNavPages = () => {
  return http.get('/api/page/findPages')
}

// 获取分类 文章
export const getCount = () => {
  return http.get('/api/page/findArticleInfo')
}
