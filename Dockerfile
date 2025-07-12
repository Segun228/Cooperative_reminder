# ========== 1. Сборка приложения ==========
FROM node:20 AS build
WORKDIR /app
COPY ./client ./client
WORKDIR /app/client
RUN npm install --legacy-peer-deps && npm run build

# ========== 2. Раздача через nginx ==========
FROM nginx:1.29-alpine
COPY --from=build /app/client/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf