# Persons Management Application

Application qui permet d'enregistrer des personnes dans une base de données, avec un frontend Next.js et un backend NestJS.

## Configuration des GitHub Actions

Pour que les workflows CI/CD fonctionnent, vous devez configurer les secrets GitHub suivants :

1. `DOCKERHUB_USERNAME` : Votre nom d'utilisateur Docker Hub
2. `DOCKERHUB_TOKEN` : Votre token d'accès Docker Hub (généré dans les paramètres de compte Docker Hub)
3. `SERVER_HOST` : L'adresse IP ou le nom d'hôte de votre serveur de déploiement
4. `SERVER_USER` : Le nom d'utilisateur pour SSH sur votre serveur
5. `SSH_PRIVATE_KEY` : La clé SSH privée pour accéder à votre serveur

## Structure du projet

- `frontend` : Application Next.js pour l'interface utilisateur
- `backend` : API NestJS pour la gestion des données
- `docker-compose.yml` : Configuration pour le déploiement local avec Docker

## Démarrage rapide

```bash
# Démarrer l'application localement
docker-compose up -d

# Accéder à l'application
# Frontend: http://localhost:3001
# API: http://localhost:5001/persons
```

## Déploiement

L'application est automatiquement déployée lorsque des modifications sont poussées vers les branches principales (main/master). Le workflow CI/CD effectue les étapes suivantes :

1. Tests et construction des images Docker
2. Publication des images sur Docker Hub
3. Déploiement sur le serveur via SSH

## Développement

Pour le développement local :

```bash
# Démarrer en mode développement
docker-compose up

# Arrêter l'application
docker-compose down
```
