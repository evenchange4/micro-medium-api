FROM node:8.2.1-slim AS builder
WORKDIR /app
COPY . .
RUN yarn install --pure-lockfile --production
RUN ls -lA

FROM mhart/alpine-node:base-8.2.1
ENV PORT=3000
WORKDIR /app
COPY --from=builder /app .
RUN ls -lA
EXPOSE $PORT
CMD ./bin/server.js -p $PORT
