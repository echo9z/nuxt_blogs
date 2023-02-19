export function useAbout() {
  return `
  # 关于我

  👋  你好啊，我叫echo9z.
  💻  热爱前端开发
  😄  这是我自己写的博客网站，目前博客功能还在完善，主要折腾捣鼓～
  ⭐️  感谢你在茫茫互联网中找到了这里～
  
  ## ☀️ 博客主要使用到的技术如下：
  
  ### 前端 博客页（不分前后台）：
  - TS + Nuxt3（存在坑）
  - UI库使用 tailwindcss
  - 状态集中管理工具 Pinia
  - 前端路由 Vue-Router
  - markdown格式渲染工具 [md-editor-v3](https://github.com/imzbf/md-editor-v3)
  - 表单校验 vee-validate
  - 组件数据懒加载 vueuse
  
  ### 后端：
  - 后端使用Nest.js框架，包括：
  - 权限模块：管理员、作者、访客用户、JWT认证
  - 用户模块：登录、注册（功能未开放）
  - 文章模块：文章创建、搜索、分类等
  - log4js配置：数据sql日志，access日志
  - upload模块：图片的上传
  - 数据库：使用TypeORM操作 Mysql的CRUD
  - Redis模块：基本的get 和 set 文章的查询缓存
  
  ### 部署腾讯云：
  - 服务轻量云服务器
  - 前端Nuxt:3 和 服务端Nest:9 部署在docker 
  - Nginx 反向代理 和 Redis部署在docker
  - 配置SSL证书，开启\`HTTPS\`访问
  - mysql基础版
  
  ## 联系方式
  - Email：wang96m@qq.com
  - Github：[echo9z · GitHub](https://github.com/echo9z)
  `
}