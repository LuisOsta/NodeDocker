FROM node

#creates app directory

RUN mkdir -p /usr/src/app

# install npm modules needed
COPY package.json /usr/src/app
WORKDIR /usr/src/app
RUN npm install

#copy source files
COPY src/index.js /usr/src/app

EXPOSE 8080
CMD ["node", "/usr/src/app/index.js"]