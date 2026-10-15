# VPS의 기존 서비스(Node 20 등)와 섞이지 않도록 Node 22 컨테이너 안에서 빌드·실행합니다.
FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3000 DATA_FILE=/data/db.json
COPY --from=build /app/dist ./dist
COPY server ./server
COPY package.json ./
VOLUME /data
EXPOSE 3000
USER node
CMD ["node", "server/index.js"]
