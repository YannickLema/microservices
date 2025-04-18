FROM node:22.9.0
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY index.js ./
EXPOSE 8082
CMD ["node","index.js"]
