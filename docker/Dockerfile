FROM mhart/alpine-node:latest

RUN apk update && apk upgrade
RUN	apk add --no-cache bash git openssh

RUN npm install gulp -g
RUN npm install pm2@latest -g

ADD run.sh /run.sh
RUN chmod +x /run.sh

CMD /run.sh
