FROM node:22.9.0

WORKDIR /app

# Copier et installer les dépendances
COPY package*.json ./
RUN npm instal

# Copier le code
COPY . .

EXPOSE 8081
CMD ["node", "index.js"]