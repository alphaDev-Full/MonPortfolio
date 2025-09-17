import { Injectable } from '@angular/core';
import { TypeCopetence } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ServicePortfolio {
  //Gestion des competences
  backend: TypeCopetence = {
    name: 'Backend',
    competences: [
      { nom: 'PHP', niveau: 50 },
      { nom: 'NODE.Js', niveau: 30 },
      { nom: 'MYSQL', niveau: 80 },
      { nom: 'SQL', niveau: 85 },
    ],
  };

  frontend: TypeCopetence = {
    name: 'Frontend',
    competences: [
      { nom: 'HTML & CSS', niveau: 85 },
      { nom: 'JavaScript', niveau: 60 },
      { nom: 'Bootstrap', niveau: 75 },
      { nom: 'Angular', niveau: 60 },
    ],
  };

  tools: TypeCopetence = {
    name: 'tolls',
    competences: [
      { nom: 'Git & GitHub', niveau: 80 },
      { nom: 'Visual Studio Code', niveau: 85 },
      { nom: 'Vim', niveau: 40 },
      { nom: 'Responsive Design', niveau: 75 },
    ],
  };

  softSkills: TypeCopetence = {
    name: 'Soft Skills',
    competences: [
      { nom: 'Résolution de problème', niveau: 80 },
      { nom: 'Travail en équipe', niveau: 85 },
      { nom: 'Adaptabilité', niveau: 75 },
      { nom: 'Autonomie', niveau: 80 },
    ],
  };

  getCompetences(): TypeCopetence[] {
    return [this.backend, this.frontend, this.tools, this.softSkills];
  }
}
