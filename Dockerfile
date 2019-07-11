FROM node:10.15.3 as base

RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
COPY tsconfig.json /app
COPY nuxt.config.ts /app
COPY tailwind.config.js /app
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH
COPY ./src /app/src
COPY ./jest.config.js /app
COPY ./tslint.json /app
RUN npm run lint
RUN npm run test
RUN npm run build
RUN npm prune --production

FROM node:10.15.3-slim
RUN mkdir /app && chown node:node /app
WORKDIR /app
COPY --from=base /app/ /app/
ARG NUXT_PORT=3000
ENV NUXT_PORT $NUXT_PORT
EXPOSE $NUXT_PORT
USER node
CMD ["npm", "start"]
