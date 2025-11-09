FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

CMD ["npx", "tailwindcss", "init", "-p"]
