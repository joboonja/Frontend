FROM kkarczmarczyk/node-yarn:latest
WORKDIR /app
COPY package.json /app/package.json
RUN yarn install  

COPY src /app
COPY public /app

CMD ["yarn", "start"]





