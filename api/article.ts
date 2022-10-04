import http from '../utils/request'
export interface IFindLimit {
    page: number;
    pageSize: number;
    keyword?: string;
    sortField: string;
    sortMethod: string;
    category?: string;
    tag?: string;
}
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

// 获取所有标签
export const getTags = () => {
  return http.get('/api/tag/allTags')
}

// 添加标签
export const createTags = (body) => {
  return http.post('/api/tag/createTag', body)
}

// 发布文章
export const createArticle = (body) => {
  return http.post('/api/articles/createArt', body)
}

// 根据Id获取文章数据
export const getArticleById = (id) => {
  return http.get(`/api/articles/${id}`)
}

// 根据Id获取文章数据
export const findArticleList = (params: IFindLimit) => {
  return http.get('/api/articles/list', params)
}
