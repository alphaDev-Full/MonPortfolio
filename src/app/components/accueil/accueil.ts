import { Component, OnInit } from '@angular/core';
import {
  slideAnimationLeftToRight,
  slideAnimationBotomToTop,
} from '../../animations/animations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
  animations: [slideAnimationLeftToRight, slideAnimationBotomToTop],
})
export class Accueil {}
