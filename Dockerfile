FROM node:18

# 设置工作目录
WORKDIR /zhao_wentao_ui_garden

# 复制package.json和.npmrc
COPY package*.json .npmrc ./

# 设置NPM_TOKEN环境变量
ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN


# 清理并重新安装依赖
RUN rm -rf package-lock.json node_modules \
    && npm install \
    && npm rebuild rollup \
    && npm install @rollup/rollup-linux-x64-gnu

# 复制其余文件
COPY . .


# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]