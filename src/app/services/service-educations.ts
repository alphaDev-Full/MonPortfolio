import { Injectable } from '@angular/core';
import { Education } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ServiceEducations {
  educations: Education[] = [
    {
      titre: 'Licence 2 Informatique',
      lieux: 'Université de Limoges (2024 - 2025)',
      description: [
        'Formation approfondie en programmation avec une pédagogie innovante et rigoureuse',
        "Travail sur des projets concrets avec respect total d'un cahier de charge bien défini",
        "Développement des compétences en gestion de projets et travail d'équipe",
        'Approfondissement des connaissances en C',
      ],
    },
    {
      titre: 'Licence 4 Génie Informatique',
      lieux: 'Université de Conakry (2023 - 2024)',
      description: [
        'Formation approfondie en Réseaux et systèmes',
        "Travail sur des projets concrets avec respect total d'un cahier de charge bien défini",
        "Développement des compétences en gestion de projets et travail d'équipe",
        'Approfondissement des connaissances en Sisco, Linux...',
      ],
    },
    {
      titre: 'Licence Génie Informatique',
      lieux: 'Université de Conakry (2020 - 2023)',
      description: [
        'Formation en programmation Python, Java, C#, Programmation web, C et C++...',
        "Travail sur des projets concrets avec respect total d'un cahier de charge bien défini",
        "Développement des compétences en gestion de projets et travail d'équipe",
        'Approfondissement des connaissances en Mathématiques',
      ],
    },
    {
      titre: 'Lycée Option Scientifique',
      lieux: 'Groupe Scolaire St. Magalie (2017 - 2020)',
      description: [
        'Formation en Mathématiques, Physique Chimie avec une pédagogie innovante et rigoureuse',
        "Travail sur des projets concrets avec respect total d'un cahier de charge bien défini",
        "Développement des compétences en gestion de projets et travail d'équipe",
        'Pratique intense du sport',
      ],
    },
  ];

  //Fonction pour recuperer la liste des éducations

  getAllsEducation(): Education[] {
    return this.educations;
  }

  getEducationByIndex(index: number): Education {
    return this.educations[index];
  }
}
