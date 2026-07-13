---
sidebar_position: 7
title: Sauvegarde & restauration
---

# Sauvegarde & restauration

Toutes vos données (scénarios, personnages, sessions, réglages) tiennent dans une
seule base SQLite. Leticia permet de l'exporter et de la réimporter depuis
l'interface.

## Exporter

Dans **Paramètres → Données → Exporter une base**, téléchargez un fichier de
sauvegarde. Par défaut il est **chiffré** avec votre `SETTINGS_MASTER_KEY`.

Vous pouvez aussi protéger l'export par un **mot de passe** dédié (champ prévu),
utile pour transférer la sauvegarde en dehors de la machine.

## Restaurer

Dans **Paramètres → Données → Importer une base**, sélectionnez un fichier de
sauvegarde. S'il est protégé par mot de passe, renseignez-le.

:::warning
L'import **remplace** la base courante. Exportez d'abord l'état actuel si vous
avez un doute.
:::

## Bon réflexe

Planifiez un export régulier (avant chaque mise à jour, et périodiquement).
Conservez la `SETTINGS_MASTER_KEY` **à part** : sans elle, une sauvegarde
chiffrée par la clé maître ne peut plus être déchiffrée.
