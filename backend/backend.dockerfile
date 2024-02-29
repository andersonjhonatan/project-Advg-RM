FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install typescript -g

COPY src/prisma ./prisma

RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]
