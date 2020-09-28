FROM node:alpine AS builder

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/