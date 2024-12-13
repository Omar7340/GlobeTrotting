# 🗺️ Projet de Planification Collaborative de Voyage

Ce projet permet aux utilisateurs de créer, gérer et partager des itinéraires de voyage collaboratifs. Les utilisateurs peuvent ajouter des étapes, inviter des collaborateurs, commenter des itinéraires, et bien plus encore.

## 📚 Table des matières

- [Aperçu du projet](#aperçu-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du dossier](#structure-du-dossier)

## 🛠️ Aperçu du projet

Ce projet permet de gérer des itinéraires de voyage collaboratifs avec les fonctionnalités suivantes :
- **Créer un itinéraire** : Ajouter un titre, une description, des dates, et des étapes à un itinéraire.
- **Ajouter des étapes** : Chaque itinéraire peut contenir des étapes avec des détails (nom, description, lieu, horaires).
- **Collaborer** : Inviter d'autres utilisateurs à collaborer sur un itinéraire avec des rôles de "lecteur" ou "éditeur".
- **Commentaires** : Ajouter des commentaires sur un itinéraire ou une étape spécifique.
- **Historique des modifications** : Suivre les changements effectués dans un itinéraire.

## ⚙️ Technologies utilisées

- **Frontend** :
  - ReactJS
  - React Router pour la navigation
  - Axios pour les appels API
  - Material-UI pour l'interface utilisateur
- **Backend** :
  - Python avec **Django** et **Django REST Framework**
  - DRF Spectacular pour la génération de la documentation de l'API
  - Django ORM
  - JWT pour l'authentification
  - PostgreSQL comme base de données

## Importer les frontieres mondiales

```python
  python manage.py shell
```

```python
>>> from world import load
>>> load.run()
```


## Générer la documentation de l'API

```python
  cd backend/
  python ./manage.py spectacular --color --file schema.yml 
``` 

## 📂 Structure du dossier

Voici l'organisation des fichiers et dossiers du projet :

```
project-root/
│
├── backend/              # Backend en Django
│   ├── travel_planner/   # Code source du backend
│   ├── requirements.txt  # Dépendances Python
│   ├── manage.py         # Point d'entrée de Django
│   ├── migrations/       # Migrations de la base de données
│   └── README.md         # Instructions backend
│
├── frontend/             # Frontend en ReactJS
│   ├── public/           # Fichiers publics (index.html, favicon)
│   ├── src/              # Code source du frontend
│   └── README.md         # Instructions frontend
│
├── database/             # Fichiers de BDD
├── docker-compose.yml    # Configuration Docker Compose
├── README.md             # Documentation principale
└── .gitignore            # Fichiers à ignorer par Git
```