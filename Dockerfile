FROM node:18-alpine

WORKDIR /findAfriend

ADD package.json /findAfriend/

RUN npm i --silent

ADD . /findAfriend/

CMD npx prisma generate && npm rum dev