import { Component, Input, signal } from '@angular/core';
import { Education } from '../../models/models';

@Component({
  selector: 'app-education-card',
  imports: [],
  templateUrl: './education-card.html',
  styleUrl: './education-card.scss',
})
export class EducationCard {
  @Input() etude!: Education;
}
