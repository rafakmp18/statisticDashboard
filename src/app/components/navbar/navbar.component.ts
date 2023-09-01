import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  collapseShow = "hidden";
  constructor() { }

  ngOnInit() {
  }
  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }
}
