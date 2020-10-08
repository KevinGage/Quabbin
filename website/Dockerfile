# build environment
FROM node:14.13.1-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install -g serve
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 5000
CMD ["serve", "-s", "build"]