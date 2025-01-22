FROM node:14

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

WORKDIR /usr/src/app/frontend
RUN npm run build

WORKDIR /usr/src/app

EXPOSE 5432

CMD ["npm", "start"]