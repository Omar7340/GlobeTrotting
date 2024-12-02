# Utiliser l'image officielle Python comme base
FROM python:3.11-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier de configuration des dépendances
COPY requirements.txt .

COPY ./secret_key.txt /etc

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code du backend dans le conteneur
COPY . .

# Exposer le port du backend
EXPOSE 8000

# Commande pour démarrer l'application Django
CMD ["python", "manage.py", "runserver", "8000"]
