---
title: "Création d'un portfolio simple en prenant avantage de la JamStack. #WIP"
description: Avec Hugo, Netlify et Github.
tags:
  - post
  - web-dev
date: 2024-12-29T17:57:00.000Z
image: /assets/img/uploads/photo1608697941321-16086979414821299367462-2464785606.jpg
imageAlt: Un enfant devant un ordinateur levant le pousse en l'air
---
\#WIP#WIP#WIP#WIP#WIP#WIP

# Création d'un portfolio simple en prenant avantage de la JamStack.

Avant de rentrer dans le vif du sujet, on présente rapidement le principe, les outils et la méthodologie. 

On parle de JamStack pour décrire un site créer en prenant avantage de plusieurs outils mis à disposition (gratuitement, en libre de droit, payant, avec abonnement, etc..) et en les assemblant afin de bénéficier de leurs avantages (et ne pas réinventer la roue à chaque contrainte). Par exemple, plutôt que de gérer manuellement l'hébergement de notre site, on utilise un outil puissant et performant (dans notre cas Netlify) qui le fait pour nous. L'idée, c'est de ne pas perdre de temps sur des fonctionnalités déjà existantes, et de se concentrer sur le design et le contenu du site.

Les étapes :

* On commence par installer github, version desktop c'est suffisant et comme ça on ne se prend pas tête à apprendre les commandes gits. 
* On installe Hugo sur un nouveau projet et on le push ensuite sur un nouveau repoGitHub™
* On créer son site statique en HTML/CSS/JS et autre dans son éditeur de code favori (mais bon VScode c'est quand même plus simple pour notre cas). On se sert de git pour le versionning durant la création du site.
* On se sert de Hugo pour templater notre site, afin de facilité la maintenabilité et les modifications du site.
* Une fois que l'on ait satisfait de son site, on le met en ligne avec Netlify depuis le repo github.

*Et voilà.*
