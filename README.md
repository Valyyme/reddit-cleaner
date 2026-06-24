# Reddit Cleaner

Ce script simplifie l'affichage de Reddit en supprimant les éléments structurels qui occupent inutilement de l'espace à l'écran. L'objectif est d'offrir une lecture plus fluide et une meilleure immersion dans le flux de contenu, particulièrement lors de la consultation de vidéos ou sur des écrans de petite taille.

## Installation
1. Installez une extension de gestion de scripts utilisateur comme [Tampermonkey](https://www.tampermonkey.net/) ou [Violentmonkey](https://violentmonkey.github.io/).
2. [🚀 Installer le script](https://github.com/Valyyme/reddit-cleaner/raw/refs/heads/main/reddit_cleaner.user.js)

## Utilisation
Le script s'active automatiquement sur les pages `reddit.com/r/*`. Il s'exécute au chargement complet du document (`document-idle`).

## Fonctionnalités
Le script cible et supprime les éléments suivants :
*   `reddit-header-large` (Header principal)
*   `left-sidebar-container` (Barre latérale gauche)
*   `right-sidebar-container` (Barre latérale droite)

## Détails techniques
*   **Cible :** DOM manipulation directe via des sélecteurs ID et de balise.
*   **Performance :** Très léger, aucune dépendance externe.
*   **Compatibilité :** Fonctionne sur les sous-reddits standards.

---
*Note : Le projet est fonctionnel mais minimaliste. Les modifications sont effectuées directement sur le DOM au chargement.*
