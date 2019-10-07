FROM node

WORKDIR /usr/src/sff.life
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=0 /usr/src/sff.life/public /usr/share/nginx/html
COPY assets/nginx.conf /etc/nginx/conf.d/default.conf
