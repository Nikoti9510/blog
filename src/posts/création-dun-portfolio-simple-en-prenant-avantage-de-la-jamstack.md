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

Dans ce tutoriel, on va créer un site en utilisant les outils suivants : 

* [Github Desktop](https://desktop.github.com/download/) nous permet de gérer facilement notre projet, de créer des sauvegardes et différentes versions de travailles, ainsi que de stocker notre projet en ligne. On utilise la version desktop pour nous simplifier le travail, et ne pas avoir à apprendre les commandes gits. 
* [Visual Studio Code](https://code.visualstudio.com/) pour notre éditeur de code. il nous permet de facilement faire le lien avec Github et Hugo. Il est tout à fait possible d'en utiliser un autre, mais c'est de loin de plus pratique.
* [Hugo](https://gohugo.io/), un framework ultra rapide et open source, qui nous permet de simplifier la construction d'un site web optimisé, avec des options de templating nous permettant de facilité la maintenabilité et les modifications du site.
* [Netlify](https://www.netlify.com/), qui fait le lien avec notre répertoire github où est stocké notre projet, pour le transformer en site internet disponible en ligne. 

## Mettre en place le projet 

Une fois Github Desktop et Visual Studio Code installé, on va pouvoir mettre en place le projet. On se rend dans notre [espace personnel sur GitHub](https://github.com/) et on créer un nouveau répertoire en cliquant sur le bouton "*New*" en haut à gauche.

![Interface du dashboard Github](/assets/img/uploads/dashboard-github.png)

 Donner un nom à votre répertoire, dans notre exemple ce sera "*tutoriel_portfolio*", et validez en cliquant sur "*Create repository*" en bas à droite. (les autres options peuvent être laissés par défaut). 

![Création d'un répertoire dans l'interface github](/assets/img/uploads/dashboard-github-etape-2.png)

Si on retourne dans notre dashboard, on voit que nouveau notre répertoire est bien créé. 

![Dashboard de github avec le nouveau répertoire présent](/assets/img/uploads/dashboard-github-etape-3.png)
