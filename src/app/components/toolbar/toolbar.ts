import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { slideAnimation } from '../../animations/animations';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink, NgbCollapseModule, RouterModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
  animations: [slideAnimation],
})
export class Toolbar {
  isCollapsed = window.innerWidth < 992;

  @HostListener('window:resize')
  onResize() {
    this.isCollapsed = window.innerWidth < 992;
  }

  onClick() {
    if (window.innerWidth < 992) this.isCollapsed = true;
  }
}
