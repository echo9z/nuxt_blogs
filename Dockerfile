ARG NODE_VERSION=node:16-alpine

FROM $NODE_VERSION AS dependency-base

# 设置时区
ENV TZ=Asia/Shanghai \
    DEBIAN_FRONTEND=noninteractive

# 创建工作目录
RUN mkdir -p /app
WORKDIR /app
COPY . .

RUN npm config set registry https://registry.npm.taobao.org/

RUN npm install -g npm@9.6.3
# 清除缓存
RUN npm cache clean --force

# npm 安装依赖
RUN npm install
# RUN npm ci
RUN npm run build

# Service hostname
ENV NUXT_HOST=0.0.0.0

CMD npm run start:prod

EXPOSE 18081
