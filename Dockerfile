#template image used
FROM node:alpine

MAINTAINER Eliezer Oliveira <eliezerreis@gmail.com>

#application folder
WORKDIR /srv/www/docker-os-info

#install git
RUN apk update && \
    apk upgrade && \
    apk add git

#clone and install dependencies
RUN git clone https://github.com/eliezerreis/docker-osinfo-app.git . \
    && npm install

#change the user
RUN chown -R node:node /srv/www/docker-os-info
USER node

#configure port
ENV process.env.PORT 300
EXPOSE 3000

#run the app
CMD ["node", "bin/www"]
