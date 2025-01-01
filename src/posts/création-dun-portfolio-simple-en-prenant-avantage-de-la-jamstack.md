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

![Interface du dashboard Github](/assets/img/uploads/dashboard-github.png "Interface du dashboard Github")

 Donner un nom à votre répertoire, dans notre exemple ce sera "*tutoriel_portfolio*", et validez en cliquant sur "*Create repository*" en bas à droite. (les autres options peuvent être laissés par défaut). 

![Création d'un répertoire dans l'interface github](/assets/img/uploads/dashboard-github-etape-2.png "Création d'un répertoire dans l'interface github")

Si on retourne dans notre dashboard, on voit que nouveau notre répertoire est bien créé. 

![Dashboard de github avec le nouveau répertoire présent](/assets/img/uploads/dashboard-github-etape-3.png "Dashboard de github avec le nouveau répertoire présent")

Maintenant, rendons nous dans Github Desktop. Si ce n'est pas déjà fait, connecter l'application à votre compte Github. Une fois cela fait, on va pouvoir cloner notre répertoire afin de pouvoir travailler en local. \
En haut à gauche, on clique sur "*File*" > "*Clone repository*". 

![Interface de github desktop, clonage d'un répertoire ](/assets/img/uploads/github-desktop-etape-1.png "Interface de github desktop, clonage d'un répertoire")

On choisit le répertoire que l'on a créé plus tôt et on clique sur "Clone" en bas de la fenêtre. 

![Choix d'un répertoire dans github desktop ](/assets/img/uploads/github-desktop-etape-2.png "Choix d'un répertoire dans github desktop")

Une fois le répertoire cloné, on peut constater que l'on se trouve bien dans le bon espace de travail en haut à gauche (et passer d'un projet à un autre si besoin). On peut maintenant ouvrir notre projet dans VScode en cliquant dans le bouton "Open in Visual Studio Code" au centre de l'écran.

![Interface de github desktop une fois un répertoire cloné](/assets/img/uploads/github-desktop-etape-3.png "Interface de github desktop une fois le répertoire cloné")

Et voilà, on est prêt à travailler ! On pourrait s'arrêter là et faire un site internet statique en créant des pages en HTML, en les personnalisant avec des feuilles de styles CSS et en ajoutant de l'interaction en Javascript. Mais avant de faire ça, on va installer Hugo afin de nous faciliter la vie. 

***Avant de continuer, fermez GitHub Desktop et Visual Studio Code.***

## Installation de Hugo et premier push sur Github

Commençons par nous rendre sur [](gohugo.io/installation/)[gohugo.io/installation/](<>) et cliquez sur l'option correspondant à votre navigateur. Pour ce tutoriel, je vais suivre les étapes correspondant à Windows (c'est plus simple pour MacOS). 

Dans un premier temps, il nous faut installer [Go](https://go.dev/doc/install), le langage de programmation dans lequel Hugo est écrit. Pas de panique, nous n'aurons pas besoin d'apprendre un nouveau langage pour ce projet, il est simplement nécessaire de l'installer sur notre machine pour la mise en place du projet. Télécharger l'exécutable pour Windows et suivez les instructions de l'installateur. 

![Choisir le bon exécutable pour installer Go](/assets/img/uploads/go.png "Choisir le bon exécutable pour installer Go")

Vous pouvez changer l'emplacement de l'installation sans problème lors de l'installation. 

![Changement de l'emplacement d'installation de Go](/assets/img/uploads/go_2.png "Changement de l'emplacement d'installation de Go")

Une fois l'installation terminé, on peut ouvrir un invite de commande (Windows + R et sélectionner "*cmd*" ou cliquer sur le menu démarrer et chercher "*cmd*"). Taper dans le console la ligne "*Go version*" pour constater que l'installation est bien réussit. 

![Go est bien installé sur cette machine](/assets/img/uploads/go_3.png "Go est bien installé sur cette machine")

Dans la même console, on peut maintenant copier la commande suivante pour installer Hugo : 

`go install github.com/gohugoio/hugo@latest`

Une fois que l'installation est terminé, on est prêt à créer notre site ! Pour ça, on réouvre GitHub Desktop et notre projet dans Visual Studio Code. Une fois dans VScode, on va dans "*Terminal* > *New Terminal*". 

![Ouvrir un terminal dans Visual Studio Code](/assets/img/uploads/terminal.png "Ouvrir un terminal dans Visual Studio Code")

Dans le terminal qui s'est ouvert en bas de l'éditeur, on va pouvoir maintenant gérer notre site avec hugo. Pour cela, rien de plus simple, il suffit de taper la ligne de commande suivante : 

`Hugo new site NOM_DU_SITE `

Il suffit de remplacer NOM_DU_SITE par le nom de votre choix (dans espace ni caractères spéciaux).

![La création du site est terminé dans VScode](/assets/img/uploads/hugo-new-site.png "La création du site est terminé dans VScode")

On constate une fois la création du site terminé, que des dossiers et fichiers ont été ajoutés dans notre projet.
