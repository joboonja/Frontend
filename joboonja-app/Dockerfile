FROM kkarczmarczyk/node-yarn:latest
WORKDIR /app
COPY package.json /app/package.json
RUN yarn install  

COPY src/ /app/src/
COPY public/ /app/public/

RUN yarn build

RUN yarn global add serve

RUN serve --help

CMD ["serve", "-s", "-l", "80", "build"]





