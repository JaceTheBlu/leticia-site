---
sidebar_position: 2
title: Installation
---

# Installation

Choisissez le format adapté à votre environnement. Dans tous les cas,
l'application est ensuite accessible sur **`http://<machine>:8000`**.

:::info[Clé de chiffrement]
`SETTINGS_MASTER_KEY` chiffre vos clés API stockées en base. Générez-en une
solide et **conservez-la** : sans elle, une sauvegarde restaurée ne peut plus
déchiffrer les secrets. Générer une valeur : `openssl rand -hex 32`.
:::

## Option A - Docker (recommandé sur serveur)

Prérequis : Docker.

```bash
export SETTINGS_MASTER_KEY="$(openssl rand -hex 32)"
docker run -d --name leticia -p 8000:8000 \
  -e SETTINGS_MASTER_KEY="$SETTINGS_MASTER_KEY" \
  -v leticia_data:/app/data \
  ghcr.io/jacetheblu/leticia:latest
```

Le volume `leticia_data` conserve la base SQLite entre les redémarrages.

Avec **Docker Compose** :

```yaml
services:
  leticia:
    image: ghcr.io/jacetheblu/leticia:latest
    ports:
      - "8000:8000"
    environment:
      SETTINGS_MASTER_KEY: "remplacez-par-une-valeur-générée"
    volumes:
      - leticia_data:/app/data
    restart: unless-stopped
volumes:
  leticia_data:
```

```bash
docker compose up -d
```

## Option B - Archive sans Docker

Prérequis : Python 3.11+.

1. Téléchargez `leticia-<version>-no-docker.tar.gz` depuis la page des
   [releases GitHub](https://github.com/JaceTheBlu/leticia/releases) et
   décompressez-la.
2. Installez les dépendances et lancez :

```bash
pip install -r requirements.txt
export SETTINGS_MASTER_KEY="$(openssl rand -hex 32)"
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

## Option C - Installeur Windows

Pour un poste Windows sans Python ni Docker.

1. Téléchargez l'installeur `.exe` depuis les
   [releases GitHub](https://github.com/JaceTheBlu/leticia/releases).
2. Lancez-le : l'application s'installe et démarre, avec une icône dans la barre
   système pour l'ouvrir ou la quitter.
3. Au premier lancement, la `SETTINGS_MASTER_KEY` est générée automatiquement et
   les données sont stockées dans `%APPDATA%\Leticia`.

L'application s'annonce aussi sur le réseau local sous **`http://leticia.local:8000`**
(accessible depuis les autres appareils du même réseau).

### IA locale hors-ligne (optionnelle)

Pendant l'installation, vous pouvez cocher l'installation d'une **pile IA locale**
sans Docker : dialogue (Ollama), reconnaissance vocale (Whisper) et synthèse
vocale (Piper). L'installeur télécharge les outils, puis un **unique modèle
recommandé** (`qwen3:4b`, qui tourne sur CPU) est téléchargé au premier lancement
derrière un écran d'attente. Aucun accès cloud ni clé API n'est alors nécessaire.

Vous gardez la main sur ces services :

- **Arrêter / redémarrer** chaque backend depuis l'icône de la barre système, ou
  depuis **Réglages → Diagnostics → Services IA locaux** dans l'application.
- **Tester** chaque IA (dialogue, images, transcription, synthèse) avec la
  configuration enregistrée depuis ce même onglet Diagnostics.

À la **désinstallation**, une option propose de retirer aussi l'IA locale (Ollama
et les modèles téléchargés, plusieurs Go). Vos parties, personnages et réglages
sont conservés dans tous les cas.

## Et ensuite ?

Au premier accès, l'application vous demande de créer le **compte
administrateur** : voir [Premiers pas & configuration](./configuration).
