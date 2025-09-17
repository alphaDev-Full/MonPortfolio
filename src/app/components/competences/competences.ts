import { Component, inject, OnInit, signal } from '@angular/core';
import { CompetenceCard } from '../competence-card/competence-card';
import { ServicePortfolio } from '../../services/service-portfolio';
import { TypeCopetence } from '../../models/models';
import { NgClass } from '@angular/common';
import {
  slideAnimationBotomToTop,
  slideAnimationLeftToRight,
} from '../../animations/animations';

@Component({
  selector: 'app-competences',
  imports: [CompetenceCard, NgClass],
  templateUrl: './competences.html',
  styleUrl: './competences.scss',
  animations: [slideAnimationBotomToTop, slideAnimationLeftToRight],
})
export class Competences implements OnInit {
  private serviceCmp = inject(ServicePortfolio);
  competences!: TypeCopetence[];
  type = signal('backend');

  ngOnInit(): void {
    this.competences = this.serviceCmp.getCompetences();
  }

  onClik(type: string): void {
    this.type.set(type);
  }
}
