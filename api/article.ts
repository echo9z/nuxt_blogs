import http from '../utils/request'
// 上传文件
export const uploadImg = (file) => {
  const body = new FormData()
  body.append('file', file)
  return http.post('/api/file/upload', body)
}
// 获取文章分类
export const getCategory = () => {
  return http.get('/api/category/list')
}
