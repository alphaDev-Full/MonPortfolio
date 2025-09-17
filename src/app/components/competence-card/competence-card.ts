import { Component, inject, OnInit, Input } from '@angular/core';
import { ServicePortfolio } from '../../services/service-portfolio';
import { TypeCopetence } from '../../models/models';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { Progress } from '../progress/progress';

@Component({
  selector: 'app-competence-card',
  imports: [NgbProgressbarModule, Progress],
  templateUrl: './competence-card.html',
  styleUrl: './competence-card.scss',
})
export class CompetenceCard {
  
  @Input() competence!: TypeCopetence;
}
