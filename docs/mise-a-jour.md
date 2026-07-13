---
sidebar_position: 8
title: Mise à jour
---

# Mise à jour

Avant toute mise à jour, faites une [sauvegarde](./sauvegarde).

## Docker

```bash
docker pull ghcr.io/jacetheblu/leticia:latest
docker rm -f leticia
docker run -d --name leticia -p 8000:8000 \
  -e SETTINGS_MASTER_KEY="$SETTINGS_MASTER_KEY" \
  -v leticia_data:/app/data \
  ghcr.io/jacetheblu/leticia:latest
```

Le volume `leticia_data` est conservé : vos données et votre configuration
restent en place. Le schéma de base est mis à jour automatiquement au démarrage.

## Archive sans Docker

Décompressez la nouvelle archive par-dessus l'ancienne (en conservant votre base
et votre `SETTINGS_MASTER_KEY`), réinstallez les dépendances puis relancez :

```bash
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

## Windows

Téléchargez le nouvel installeur et exécutez-le : il met à jour l'application en
place. Vos données dans `%APPDATA%\Leticia` sont conservées.

:::info
Après une mise à jour, l'application affiche les nouveautés (changelog) au
premier lancement.
:::
