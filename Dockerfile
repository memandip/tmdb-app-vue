FROM node:12-alpine as vue-base

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM nginx

COPY --from=vue-base /src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]