FROM node:12.16.3-alpine3.10

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

COPY --chown=node:node package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .

CMD ["yarn", "dev"]
