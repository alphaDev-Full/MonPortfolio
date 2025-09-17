import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { EducationCard } from '../education-card/education-card';
import { ServiceEducations } from '../../services/service-educations';
import { slideAnimationBotomToTop } from '../../animations/animations';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-educations',
  imports: [EducationCard, NgbCarouselModule, CommonModule],
  templateUrl: './educations.html',
  styleUrl: './educations.scss',
  animations: [slideAnimationBotomToTop],
})
export class Educations implements OnInit {
  private serviceEducation = inject(ServiceEducations);

  educationGroups: any[][] = [];

  ngOnInit(): void {
    const all = this.serviceEducation.getAllsEducation();

    // Grouper les cartes par 2
    for (let i = 0; i < all.length; i += 2) {
      this.educationGroups.push(all.slice(i, i + 2));
    }
  }
}
