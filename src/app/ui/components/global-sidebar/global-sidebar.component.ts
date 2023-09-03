import { Component } from '@angular/core';

@Component({
  selector: 'app-global-sidebar',
  templateUrl: './global-sidebar.component.html',
  styleUrls: ['./global-sidebar.component.scss'],
})
export class GlobalSidebarComponent {
  collapseShow = 'hidden';

  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }
}
