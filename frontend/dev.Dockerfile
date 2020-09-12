FROM node:alpine

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD public ./public

ADD .browserslistrc .prettierrc .eslintrc.js babel.config.js vue.config.js .env.development ./

CMD ["npm", "run", "serve"]