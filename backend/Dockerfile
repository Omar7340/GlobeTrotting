# Utiliser l'image officielle Python comme base
FROM python:3.11-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Installer les dépendances système nécessaires à GeoDjango
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       binutils \
       libproj-dev \
       gdal-bin \
       libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copier le fichier de configuration des dépendances
COPY requirements.txt .

# Copier des fichiers nécessaires
COPY ./secret_key.txt .

# Installer les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code du backend dans le conteneur
COPY . .

# Exposer le port du backend
EXPOSE 8000

# Commande pour démarrer l'application Django
RUN chmod +x ./docker-entrypoint.sh
ENTRYPOINT [ "./docker-entrypoint.sh" ]