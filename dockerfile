# Utiliser une image officielle de Node.js
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet
COPY package.json ./
COPY package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Exposer le port (si ton serveur tourne sur 3000)
EXPOSE 3000

# Démarrer l'application
CMD ["node", "index.js"]
