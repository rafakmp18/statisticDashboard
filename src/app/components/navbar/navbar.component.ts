import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  collapseShow = 'hidden';
  constructor(private userService: UserService) {}

  userData$ = this.userService.getRandomUser();

  ngOnInit() {}

  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }
}
