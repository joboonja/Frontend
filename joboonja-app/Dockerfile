FROM kkarczmarczyk/node-yarn:latest
WORKDIR /app
COPY package.json /app/package.json
RUN yarn install  

COPY src/ /app/src/
COPY public/ /app/public/

CMD ["yarn", "start"]





