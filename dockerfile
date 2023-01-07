FROM node:lts-alpine

# Add OS Pack
# RUN apk add git

RUN npm install -g npm@8.19.2

RUN npm install -g nodemon

RUN addgroup -S admin && adduser -S admin -G admin

WORKDIR /home/admin/pooria-sherek
EXPOSE 3000

CMD [ "top" ]