FROM node:16.15.0-alpine

RUN mkdir -p /var/www/beka-cloud
WORKDIR /var/www/beka-cloud

COPY beka-cloud/package*.json ./
RUN yarn

COPY beka-cloud/. .

RUN yarn build

EXPOSE 1001

CMD [ "yarn", "start:prod" ]
