import { Component } from '@angular/core';
import {
  slideAnimationLeftToRight,
  slideAnimationBotomToTop,
} from '../../animations/animations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  animations: [slideAnimationLeftToRight, slideAnimationBotomToTop],
})
export class About {}
