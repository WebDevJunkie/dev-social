FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/dev-social-api
WORKDIR /srv/app/dev-social-api

COPY package.json /srv/app/dev-social-api
COPY package-lock.json /srv/app/dev-social-api

RUN npm install

COPY . /srv/app/dev-social-api

CMD ["npm", "run", "server"]
