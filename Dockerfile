FROM node:20 AS build

WORKDIR /app

COPY client ./client
WORKDIR /app/client

RUN npm install --legacy-peer-deps
RUN npm run build


FROM nginx:alpine AS production

COPY --from=build /app/client/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]