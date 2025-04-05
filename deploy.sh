#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

# 进入构建输出目录
cd dist

# 如果您要部署到自定义域名，请取消注释下面一行
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果您要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果您要部署在 https://<USERNAME>.github.io/<REPO>
# 替换为您的实际用户名和仓库名
# git push -f git@github.com:<USERNAME>/dev-command-nav.git main:gh-pages

cd - 