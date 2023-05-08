#!/usr/bin/env bash
# 定义应用组名
group_name='blog'
# 定义应用名称
app_name='nuxtjs_blogs'
# 定义应用版本
app_version='1.0.0'
# 定义应用环境
profile_active='prod'
echo '----mv source----'
docker stop ${app_name}
echo '----stop container----'
docker rm ${app_name}
echo '----rm container----'
docker rmi ${group_name}/${app_name}:${app_version}
echo '----rm image----'
# 打包编译docker镜像
docker build -t ${group_name}/${app_name}:${app_version} .
echo '----build image----'
docker run -id --name ${app_name} \
-p 18081:18081 \
-e TZ="Asia/Shanghai" \
-e NEST_HOST=blogs \
--net blogs_nework \
${group_name}/${app_name}:${app_version}
echo '----start container----'
rm -rf /mydata/blogs_build/build
echo '----delete build----'