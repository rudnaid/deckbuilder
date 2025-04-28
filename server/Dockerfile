FROM node:20-slim AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:20-slim

WORKDIR /app

COPY --from=build /app ./

CMD ["node", "server.js"]
