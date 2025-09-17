import { Component, OnInit } from '@angular/core';
import { ProjetCard } from '../projet-card/projet-card';
import { ServiceProjets } from '../../services/service-projets';
import { inject } from '@angular/core';
import { Projet } from '../../models/models';
import { slideAnimationBotomToTop } from '../../animations/animations';

@Component({
  selector: 'app-projets',
  imports: [ProjetCard],
  templateUrl: './projets.html',
  styleUrl: './projets.scss',
  animations: [slideAnimationBotomToTop],
})
export class Projets implements OnInit {
  private serviceProjet = inject(ServiceProjets);
  projets: Projet[] = [];
  ngOnInit(): void {
    this.projets = this.serviceProjet.getAllProjects();
  }
}
