FROM node:alpine

RUN mkdir app

WORKDIR /app

COPY ./ /app

RUN npm install

EXPOSE 9000

CMD [ "node","server.js" ]