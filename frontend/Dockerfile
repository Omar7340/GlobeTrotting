# Utiliser l'image officielle Node.js comme base
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de configuration de package
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code du frontend dans le conteneur
COPY . .

# Construire l'application React pour la production
RUN npm run build

# Exposer le port pour accéder à l'application
EXPOSE 3000

# Lancer le serveur de développement
CMD ["npm", "start"]
