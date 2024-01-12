# Créez une application web de location immobilière avec React

<p align="center">
  <img src="./src/assets/banner-kasa-readme.png" alt="Bannière Kasa">
</p>

_Projet #7 : Formation Développeur Web [OpenClassrooms](https://openclassrooms.com/fr/paths/717-developpeur-web)_

[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fhileene.github.io%2FBehalalAline_P7_Kasa%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) <img src="./src/assets/made-with-react.svg" alt="For The Badge React image" />
<img src="./src/assets/powered-by-candy.svg" alt="For The Badge Candy image" />

[Kasa](https://hileene.github.io/BehalalAline_P7_Kasa/) - <a href="#version-française">README FR</a> - <a href="#english-version">README EN</a>

---

## VERSION FRANÇAISE

## Sommaire

- [Description du projet](#description-du-projet)
- [Scénario fictif](#scénario-fictif)
- [Compétences évaluées](#compétences-évaluées)
- [Technologies](#technologies)
- [Contraintes techniques](#contraintes-techniques)
- [Contraintes fonctionnelles](#contraintes-fonctionnelles)
- [Installation](#installation)
- [Développé avec](#développé-avec)
- [Auteur](#auteur)

## Description du Projet

Pour ce projet React, ma mission était de développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma et le tout en responsive.

## Scénario Fictif

Kasa me recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers et fait partie des leaders dans son domaine en France. Son site a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important.

Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec
NodeJS côté back-end, et React côté front-end. Le recrutement du développeur back-end n'étant pas terminé donc le Front sera construit à partir des données d'un fichier JSON.

## Compétences Évaluées

- Configurer la navigation entre les pages de l'application avec React Router
- Initialiser une application avec Create React App
- Développer des éléments de l'interface d'un site web grâce à des composants React

## Technologies

- React
- JavaScript
- CSS

## Contraintes Techniques

- Pour le défilement des photos dans la galerie (composant Gallery) :

  - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
  - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
  - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.

- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

- Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page.

- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.

  - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Contraintes Fonctionnelles

- **React:**

  - Découpage en composants modulaires et réutilisables ;
  - Un composant par fichier ;
  - Structure logique des différents fichiers ;
  - Utilisation des props entre les composants ;
  - Utilisation du state dans les composants quand c'est nécessaire ;
  - Gestion des événements ;
  - Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible.

- **React Router:**
  - Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
  - Il existe une page par route.
  - La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
  - La logique du routeur est réunie dans un seul fichier.

## Installation

- Ce projet a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).

- Dans le répertoire du projet, vous pouvez exécuter : `npm start`

- Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour le visualiser.

- La page se rechargera automatiquement lorsque vous apportez des modifications. Vous pouvez également voir les erreurs de lint dans la console.

## Développé Avec

- [Visual Studio Code](https://code.visualstudio.com/)
- [React](https://legacy.reactjs.org)
- [Figma](https://www.figma.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)

## Auteur

- [@hileene](https://www.github.com/Hileene)
- [**Portfolio**](https://portfolio-test.com)

---

## Installation

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- In the project directory, you can run:`npm start`

- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- The page will reload when you make changes. You may also see any lint errors in the console.
