FROM node:8.2.1-slim
MAINTAINER Michael Hsu <evenchange4@gmail.com>

# Config
ENV PORT=3000

WORKDIR /app
COPY src src
COPY package.json .
COPY yarn.lock .

# Script
RUN yarn install --pure-lockfile --production
RUN ls -lA

# Expose
EXPOSE $PORT
CMD yarn run start -- -p $PORT
