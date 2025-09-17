import { Injectable } from '@angular/core';
import { Projet } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ServiceProjets {
  projets: Projet[] = [
    {
      titre: 'Généalogie Familiale',
      date: 'Janvier - Mai 2025',
      gitHubLink: 'https://github.com/alphaDev-Full/Genealogie_Familiale.git',
      description: [
        "Développement d'un logiciel de Généalogie Familiale avec Python et Sqlite.",
        "Mise en place d'une interface graphique fluide et dynamique avec Tkinter.",
        'Gestion complète des familles et des individus (Enregistrer, modifier, afficher, ...).',
        "Affichage des ascendants et des descendants (sous forme d'arbre et de liste).",
      ],
    },
    {
      titre: 'Sportify',
      date: 'Déc. 2024 - Fév. 2025',
      gitHubLink: 'https://github.com/alphaDev-Full/projet-sportify.git',
      description: [
        "Conception d'une plateforme de réservation sportives en ligne.",
        "Intégration du front-end interactif avec formulaire de réservation, pages d'activités, devis, contact avec HTML, CSS, JavaScript.",
        'Développement du back-end avec gestion des utilisateurs, des activités et de la base de données avec PHP et MySQL.',
        'Site 100% responsive avec Bootstrap.',
      ],
    },
    {
      titre: "Galerie d'images",
      date: 'Sep. 2024 - Déc. 2024',
      gitHubLink: 'https://github.com/alphaDev-Full/Gestion-galerie-image.git',
      description: [
        "Développement d'une interface qui permet de charger, afficher et modifier des images avec Java et JavaFX.",
        'Ajout de fonctionnalités : rotation, filtres, suppression, renommage, cryptage.',
        'Sauvegarde des métadonnées (tags) dans une base de données Derby.',
        "Mise en place d'une gestion des erreurs et de tests pour assurer stabilité et performance du programme.",
      ],
    },
    {
      titre: 'Jeu Space Invaders',
      date: 'Janvier - Août 2024',
      gitHubLink: 'https://github.com/alphaDev-Full/Projet_Space_Invider.git',
      description: [
        "Développement d'un jeu inspiré de Space Invaders avec Java (Processing) en respectant un cahier des charges complet.",
        "Création d'un menu interactif et d'une interface utilisateur dynamique.",
        'Gestion des niveaux, de score, de sauvegarde et des collisions.',
        'Utilisation de la programmation orientée objet pour structurer le code de manière modulaire et évolutive.',
      ],
    },
  ];

  //Fonction pour récuperer les projets

  getAllProjects(): Projet[] {
    return this.projets;
  }
}
