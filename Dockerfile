FROM node:20.12.2 as BUILD_IMAGE
WORKDIR /app/covid-map-app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:20.12.2 as PRODUCTION_IMAGE
WORKDIR /app/covid-map-app
COPY --from=BUILD_IMAGE /app/covid-map-app/dist/ /app/covid-map-app/dist/
COPY package.json .
COPY vite.config.js .
RUN npm install
EXPOSE 8080
CMD ["npm","run","preview"]