FROM node:17

WORKDIR /app

COPY package.json .

RUN npm install -y && mkdir /static

COPY src/ .

EXPOSE 3000

CMD node index.js
