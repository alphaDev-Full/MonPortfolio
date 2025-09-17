import { Component, OnInit, Input } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progress',
  imports: [NgbProgressbarModule],
  templateUrl: './progress.html',
  styleUrl: './progress.scss',
})
export class Progress implements OnInit {
  @Input() name!: string;
  currentProgress = 0;
  @Input({ required: true }) targetProgress!: number;

  ngOnInit(): void {
    const interval = setInterval(() => {
      if (this.currentProgress < this.targetProgress) {
        this.currentProgress++;
      } else {
        clearInterval(interval);
      }
    }, 10);
  }
}
