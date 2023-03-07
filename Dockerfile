From node:11.4.0
EXPOSE 8080
COPY package.json package.json
RUN npm install
COPY src src
CMD ["node", "src/app.js"]