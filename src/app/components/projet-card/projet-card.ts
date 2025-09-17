import { Component } from '@angular/core';
import { Projet } from '../../models/models';
import { Input } from '@angular/core';
@Component({
  selector: 'app-projet-card',
  imports: [],
  templateUrl: './projet-card.html',
  styleUrl: './projet-card.scss',
})
export class ProjetCard {
  @Input() projet!: Projet;
}
