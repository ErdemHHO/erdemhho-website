FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm install -g serve --force

RUN npm run build

CMD [ "serve", "-s", "build"]
