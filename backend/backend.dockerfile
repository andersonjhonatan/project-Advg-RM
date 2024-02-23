FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src/prisma ./prisma

RUN npx prisma generate

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]