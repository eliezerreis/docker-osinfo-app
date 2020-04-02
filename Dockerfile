#template image used
FROM node:alpine

MAINTAINER Eliezer Oliveira <eliezerreis@gmail.com>

#application folder
WORKDIR /srv/www/docker-os-info

#install git
RUN apk update && \
    apk upgrade && \
    apk add git

#change the user
RUN chown -R node:node /srv/www/docker-os-info
USER node

#clone and install dependencies
RUN git clone https://github.com/eliezerreis/docker-osinfo-app.git . \
    && npm install \
    && npm cache clean

#configure port
ENV PORT 3000
EXPOSE 3000

#run the app
CMD ["node", "./bin/www"]
