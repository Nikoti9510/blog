---
title: "Création d'un portfolio simple en prenant avantage de la JamStack. #WIP"
description: Avec Hugo, Sveltia, Netlify et Github.
tags:
  - post
  - web-dev
date: 2024-12-29T17:57:00.000Z
slug: tutoriel-portfolio
image: /assets/img/uploads/photo1608697941321-16086979414821299367462-2464785606.jpg
imageAlt: Un enfant devant un ordinateur levant le pousse en l'air
---
\#WIP#WIP#WIP#WIP#WIP#WIP

# Création d'un portfolio simple en prenant avantage de la JamStack.

Avant de rentrer dans le vif du sujet, on présente rapidement le principe, les outils et la méthodologie. 

On parle de JamStack pour décrire un site créer en prenant avantage de plusieurs outils mis à disposition (gratuitement, en libre de droit, payant, avec abonnement, etc..) et en les assemblant afin de bénéficier de leurs avantages (et ne pas réinventer la roue à chaque contrainte). Par exemple, plutôt que de gérer manuellement l'hébergement de notre site, on utilise un outil comme Netlify qui le fait pour nous. L'idée, c'est de ne pas perdre de temps sur des fonctionnalités déjà existantes, et de se concentrer sur le design et le contenu de notre site.

Dans ce tutoriel, on va créer un site en utilisant les outils suivants : 

* [Github Desktop](https://desktop.github.com/download/) nous permet de gérer facilement notre projet, de créer des sauvegardes et différentes versions de travailles, ainsi que de stocker notre projet en ligne. On utilise la version desktop pour nous simplifier le travail, et ne pas avoir à apprendre les commandes Gits. 
* [Visual Studio Code](https://code.visualstudio.com/) pour notre éditeur de code. il nous permet de facilement faire le lien avec Github et Hugo. Il est tout à fait possible d'en utiliser un autre, mais c'est de loin de plus pratique.
* [Hugo](https://gohugo.io/), un framework ultra rapide et open source, qui nous permet de simplifier la construction d'un site web optimisé, avec des options de templating nous permettant de facilité la maintenabilité et les modifications du site.
* Sveltia, à présenter
* [Netlify](https://www.netlify.com/), qui fait le lien avec notre répertoire Github où est stocké notre projet, pour le transformer en site internet disponible en ligne. 

## Mettre en place le projet

Une fois Github Desktop et Visual Studio Code installé, on va pouvoir mettre en place le projet. On se rend dans notre [espace personnel sur GitHub](https://github.com/) et on créer un nouveau répertoire en cliquant sur le bouton "*New*" en haut à gauche.

![Interface du dashboard Github](/assets/img/uploads/dashboard-github.png "Interface du dashboard Github")

 Donner un nom à votre répertoire, dans notre exemple ce sera "*tutoriel_portfolio*", et validez en cliquant sur "*Create repository*" en bas à droite. (les autres options peuvent être laissés par défaut). 

![Création d'un répertoire dans l'interface github](/assets/img/uploads/dashboard-github-etape-2.png "Création d'un répertoire dans l'interface github")

Si on retourne dans notre dashboard, on voit que notre nouveau répertoire est bien créé. 

![Dashboard de github avec le nouveau répertoire présent](/assets/img/uploads/dashboard-github-etape-3.png "Dashboard de github avec le nouveau répertoire présent")

Maintenant, rendons nous dans Github Desktop. Si ce n'est pas déjà fait, connecter l'application à votre compte Github. Ensuite, on peut cloner notre répertoire afin de pouvoir travailler localement sur notre machine. \
En haut à gauche, on clique sur "*File*" > "*Clone repository*". 

![Interface de github desktop, clonage d'un répertoire ](/assets/img/uploads/github-desktop-etape-1.png "Interface de github desktop, clonage d'un répertoire")

On choisit le répertoire que l'on a créé plus tôt et on clique sur "Clone" en bas de la fenêtre. 

![Choix d'un répertoire dans github desktop ](/assets/img/uploads/github-desktop-etape-2.png "Choix d'un répertoire dans github desktop")

Une fois le répertoire cloné, on peut constater que l'on se trouve bien dans le bon espace de travail en haut à gauche (et passer d'un projet à un autre si besoin). On peut maintenant ouvrir notre projet dans VScode en cliquant dans le bouton "Open in Visual Studio Code" au centre de l'écran.

![Interface de github desktop une fois un répertoire cloné](/assets/img/uploads/github-desktop-etape-3.png "Interface de github desktop une fois le répertoire cloné")

Et voilà, on est prêt à travailler ! On pourrait s'arrêter là et faire un site internet statique en créant des pages en HTML, en les personnalisant avec des feuilles de styles CSS et en ajoutant de l'interaction en Javascript. Mais avant de faire ça, on va installer Hugo afin de nous faciliter la vie. 

***Avant de continuer, fermez GitHub Desktop et Visual Studio Code.***

## Installation de Go, Hugo et Git

Oui je sais, j'ai écris plus haut qu'on n'aurait pas besoin de travailler avec Git. j'ai un tout petit peut menti, mais promis c'est très simple ! Et surtout, ce n'est que pour l'étape d'installation et d'initialisation du projet. Ensuite, on travaille uniquement avec la version Desktop (mais comme Git sera installé, si l'envie vous prend d'aller plus loin, c'est possible).

### Installer GO et Hugo

Commençons par nous rendre sur [](gohugo.io/installation/)[gohugo.io/installation/](<>) et cliquez sur l'option correspondant à votre navigateur. Pour ce tutoriel, je vais suivre les étapes correspondant à Windows (c'est plus simple pour MacOS). 

Dans un premier temps, il nous faut installer [Go](https://go.dev/doc/install), le langage de programmation dans lequel Hugo est écrit. Pas de panique, nous n'aurons pas besoin d'apprendre un nouveau langage pour ce projet, il est simplement nécessaire de l'installer sur notre machine pour installer Hugo. Télécharger l'exécutable pour Windows et suivez les instructions de l'installateur. 

![Choisir le bon exécutable pour installer Go](/assets/img/uploads/go.png "Choisir le bon exécutable pour installer Go")

Vous pouvez changer l'emplacement de l'installation sans problème lors de l'installation. 

![Changement de l'emplacement d'installation de Go](/assets/img/uploads/go_2.png "Changement de l'emplacement d'installation de Go")

Une fois l'installation terminé, on ouvre une invite de commande (Windows + R et sélectionner "*cmd*" ou cliquer sur le menu démarrer et chercher "*cmd*"). Taper dans le console la ligne "*Go version*" pour constater que l'installation est bien réussit. 

![Go est bien installé sur cette machine](/assets/img/uploads/go_3.png "Go est bien installé sur cette machine")

Dans la même console, on peut maintenant copier la commande suivante pour installer Hugo : 

`go install github.com/gohugoio/hugo@latest`

### Installer Git

Rendez vous sur le [site de git pour Windows](https://git-scm.com/downloads/win) pour télécharger la dernière version en cliquant sur le premier lien. Il fois le téléchargement terminé, lancez l'exécutable et suivez les instructions. Voilà, c'est terminé. Pour le moment, pas si terrible.

## Création du site avec Hugo

Une fois que l'installation est terminé, on est prêt à créer notre site ! Pour ça, on réouvre GitHub Desktop et notre projet dans Visual Studio Code. Une fois dans VScode, on va dans "*Terminal* > *New Terminal*". 

![Ouvrir un terminal dans Visual Studio Code](/assets/img/uploads/terminal.png "Ouvrir un terminal dans Visual Studio Code")

Dans le terminal qui s'est ouvert en bas de l'éditeur, on va pouvoir maintenant gérer notre site avec Hugo. Pour cela, rien de plus simple, il suffit de taper la ligne de commande suivante : 

`Hugo new site NOM_DU_SITE`

Remplacer NOM_DU_SITE par le nom de votre choix (sans espaces ni caractères spéciaux).

![La création du site est terminé dans VScode](/assets/img/uploads/hugo-new-site.png "La création du site est terminé dans VScode")

On constate une fois la création du site terminé, que des dossiers et fichiers ont été ajoutés dans notre projet. À partir de là, deux choix s'offre à nous. Le premier, c'est d'installer un thème compatible avec Hugo. Le deuxième, continuer notre projet en partant de zéro. Pour ce tutoriel et dans un soucis de d'exhaustivité, je vais vous montrer comment installer un de ces thèmes. Mais nous continuerons ensuite notre projet sans, afin de n'utiliser que ce qui est nécessaire et pour bien comprendre le fonctionnement de Hugo.

## Installer un thème

Hugo propose une [collection de thème gratuit sur son site](https://themes.gohugo.io/), et il est également possible d'en trouver des plus complets sur d'autres sites, comme par exemple [gethugothemes.com](https://gethugothemes.com/products) ou [anvodstudio.com](https://anvodstudio.com/hugo-themes/). Pour l'exemple, j'ai choisi le thème [PaperMod](https://themes.gohugo.io/themes/hugo-papermod/). Pour l'installer, rien de compliqué, il suffit de se rendre sur le page Github du thème (en cliquant sur le bouton "Download" dans la page du thème) et de copier la commande pour installer le submodule dans le terminal de VScode. Pour PaperMod, voilà la commande : 

`git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod`

> /!\ Il faut s'assurer que l'on se trouve à la racine de notre projet avant d'exécuter la commande. Dans le terminal, le chemin devrait être "GitHub\tutoriel_portfolio". Si ce n'est pas le cas, il faut s'y rendre. Utiliser *cd Nom_du_dossier* vous permet de vous rendre à cette endroit. Utilisez *ls* vous permet de lister tout les dossiers en enfant de celui dans lequel vous êtes. Utilisez *cd ..* vous permet de remonter un niveau. 

Une fois la commande lancé et le thème téléchargé, il ne reste plus qu'a indiquer à Hugo que nous souhaitons utiliser ce thème. Pour cela, il faut se rendre dans le fichier de configuration *config.toml* (ou *hugo.toml* cela les cas) et d'ajouter la ligne suivante dans le fichier : 

`theme = ["PaperMod"]`

![Choix du template dans le fichier Hugo.toml](/assets/img/uploads/hugo_toml.png "Choix du template dans le fichier Hugo.toml")

Et voila ! Le template est chargé et on peut le prévisualiser sur le serveur de test, mais on va voir ensemble comment faire cela juste après, en partant de notre projet vierge. 

## Configuration du site sans template

Dans cette partie, nous allons créer la structure de base pour notre site. On va commencer par créer une page d'accueil, avec une header, du contenu et un footer. Le contenu de cette page comprendra une section d'introduction, une liste de projet et une bandeau de contact. Cela va nous permettre de prendre en main le fonctionnement de Hugo, en particulier le système de *partials* et comment les manipuler. 

### Lancer un serveur de test

Hugo nous permet de tester notre travail via un serveur local. Pour cela, il suffit de taper la commande suivant dans le terminal : 

`hugo serve`

Une fois le serveur lancé, il suffit de cliquer sur le lien que nous donne Hugo pour visualiser notre site. (Il faut utiliser le raccourcis clavier *Ctrl+C* pour couper le serveur local).

![Lancement d'un serveur de test](/assets/img/uploads/hugo-serve.png "lancement d'un serveur de test")

 Si on se rend sur la page, on se rend compte qu'il y a un soucis. 

![Hugo ne trouve pas de page à afficher](/assets/img/uploads/404-rip.png "Hugo ne trouve pas de page à afficher")

## Structure d'un site Hugo

Si rien ne s'affiche, c'est parce que notre site est vide (malin je sais). Regardons la structure généré par Hugo lors de la création du site d'un peu plus près. 

![Structure du projet dans VScode](/assets/img/uploads/structure-du-site.png "Structure du projet dans VScode")

Pour le moment, il y a 3 dossiers qui nous intéresses :

1. **assets** : C'est ici que l'on va stocker toutes les ressources utiles au site, tels que les images, les fichiers CSS et Javascripts, etc.
2. **content** : Dans ce dossier, on va retrouver nos pages, en format *.HTML* ou *.md* (pour [Markdown](https://www.markdownguide.org/cheat-sheet/))
3. **layouts** : Où l'on va stocker les fameuses Partials, en quelques sortent des sections ou widgets, que l'on va pouvoir réutiliser dans notre site.

Pour plus de détails sur la structure de Hugo, consulter la documentation à ce sujet : [gohugo.io/getting-started/directory-structure/#directories](https://gohugo.io/getting-started/directory-structure/#directories)

Pour que notre site puisse fonctionner, il y quelques étapes à suivre : 

1. Créer un dossier *_default* dans *layouts*.
2. Toujours dans layouts, créer un fichier index.html avec le contenu suivant :

   ![Contenu du fichier index.html](/assets/img/uploads/indexhtml-contenu.png "Contenu du fichier index.html")
3. Dans *layouts* > *_default*, créer un fichier baseof.html avec le contenu suivant :

   ![Contenu de baseof.html](/assets/img/uploads/baseofhhtml-contenu.png "Contenu de baseof.html")
4. enfin, dans le dossier content, ajouter un fichier index.md avec le contenu suivant : 

   ![Contenu de index.md](/assets/img/uploads/indexmd-contenu.png "Contenu de index.md")

Voilà à quoi ressemble la structure après la création.

![Création des nouveaux fichiers](/assets/img/uploads/fichier-de-base.png "Création des nouveaux fichiers")

Si on relance notre serveur de test, on constate bien que du contenu s'affiche ! 

![La page affiche bien du contenu](/assets/img/uploads/le-site-fonctionne-.png "la page affiche bien du contenu")

Expliquons ce que l'on vient de faire : 

On créer un fichier index.html qui correspond à notre page d'accueil et on l'ajoute dans le dossier layouts pour que Hugo le trouve. Dans ce fichier, on défini un bloc que l'on appelle "main" dans lequel on ajoute le contenu de la page, "*Content*". Ce contenu est récupéré automatiquement par Hugo dans le fichier *.md* possédant le même nom que notre page, si celle-ci existe dans le dossier content. On a également ajouté une balise HTML, qui elle sera statique et ne dépendra pas du contenu de la page. 

On a ensuite défini dans notre dossier _defaut le template de page pour toute nos pages, qui se nomme toujours baseof.html. C'est cette page qui est toujours utilisé par Hugo pour assembler nos pages (il est possible d'en définir plusieurs en cas de besoin, voir [gohugo.io/templates/lookup-order](https://gohugo.io/templates/lookup-order/)). Pour le moment, notre fichier baseof.html est très simple, mais on va venir l'améliorer un peu plus tard. 

Enfin, on créer le fichier Markdown, c'est à dire le fichier de contenu, pour notre page. On le place bien dans le dossier *content*, pour que Hugo puisse le retrouver et l'injecter dans la page. 

Avant d'aller plus loin, sauvegardons notre travail. 

## Pousser les fichiers locaux sur Github

On se rend dans GitHub Desktop, et on remarque que plusieurs fichiers sont ajoutés dans la liste des modifications. Pour pouvoir les envoyer sur notre RepoGitHub™, il faut donner un nom à notre commit. Quelques choses dans la veine de "Premier push" fera l'affaire. Vous pouvez ajouter une descriptions si l'envie vous prend. Essayez d'être clair et précis dans vos noms de push, car vous pourrez les retrouver dans Github et revenir en arrière quand les bugs vont inévitablement apparaitre.  

![Le premier push sur notre répertoire GitHub](/assets/img/uploads/premier-push-github.png "Le premier push sur notre répertoire GitHub")

On clique ensuite sur "Commit to main" en bas de la fenêtre. Il ne reste plus qu'a publier le commit sur le projet, pour cela, on clique sur "Publish branch". 

![Publier le commit en ligne](/assets/img/uploads/publier-la-branch-en-ligne.png "Publier le commit en ligne")

Une fois cela fait et le chargement effectué, on peut bien retrouver notre travail sur notre espace GitHub en ligne. 

![Notre projet sur le dashboard GitHub](/assets/img/uploads/premier-push-sur-le-dahsboard-github.png "Notre projet sur le dashboard GitHub")

Améliorons un peu notre site.

## Mettre en place des sections avec les Partials

Comme on l'a dit plus haut, Hugo nous permet de mettre en place des sous éléments ou sections qui vont nous permettre de réutiliser les bout de code à plusieurs endroits de notre site. Dans notre template par defaut *baseof.html*, ajoutons le code suivant : 

![Ajout de partials dans le layout de base](/assets/img/uploads/partials-dans-baseof.png "Ajout de partials dans le layout de base")

On a ajouté dans notre page de partials, head.html et footer.html. La syntaxe est toujours : 

```
{{ partials "chemin/du/partial.html" . }}
```

> [](https://gohugo.io/getting-started/directory-structure/#directories)Concernant le "." que l'on ajoute après le chemin (et que l'on remarque aussi dans l'appel du block "main"), il représente le contexte. Je ne rentre pas dans le détail ici, mais il est indispensable au bon fonctionnement du partial. Plus d'info sur la [documentation du contexte](https://gohugo.io/templates/introduction/#context) dans Hugo et des [partials](https://gohugo.io/templates/partial/). 

Il faut maintenant créer les fichiers pour que Hugo puisse les charger. Pour cela, on créer un dossier *partials* dans le dossiers *layouts.* On peut créer nos deux partials dans ce dossier et on se retrouve avec la structure suivante : 

![Le dossier des partials](/assets/img/uploads/dossier-partials.png "Le dossier des partials")

Dans nos partials, on construit notre élément avec uniquement ce qui est nécessaire à son fonctionnement. par exemple, créons un *footer* très simple avec le contenu suivant : 

```html
<p>Le footer de mon site - 2025</p>
```

Pour notre *head*, ajoutons un tout petit peu plus de contenu : 

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{ .Title }}</title>
<link rel="stylesheet" href="/css/style.css">
```

Dans la balise *title*, on fait référence au titre de la page active, en faisant appel au contexte (avec le symbole ".") de la page. La valeur de ce titre est récupéré dans le fichier index.md. Il changera donc en fonction de la page dans lequel on se trouve. 

On a également ajouté un lien vers un fichier CSS. Celui-ci doit être ajouté dans le dossier *static* de notre projet (dans cette exemple, on a donc *static > css > style.css*). Le contenu de ce dossier est chargé tel quel lors de la construction du site, mais le dossier lui n'est pas ajouté ! Il ne faut donc pas l'ajouter dans le chemin (j'ai perdu quelques cheveux à comprendre ça).

Avec un peu de CSS basique et nos deux partials, notre site commence (presque) à ressembler à quelque chose.

![Le site avec les partials et le CSS](/assets/img/uploads/le-site-avec-les-partials-et-le-css.png "Le site avec les partials et le CSS")

On peut faire un nouveau commit pour sauvegarder notre travail. Pensez à le faire de temps à temps, une fois que vous avez ajouter des fichiers ou modifier du contenu de manière significative.
