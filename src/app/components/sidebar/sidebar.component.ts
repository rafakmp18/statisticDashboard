import { Component, OnInit } from '@angular/core';
import {
  Subscription,
  delay,
  forkJoin,
  interval,
  switchMap,
  take,
  timer,
} from 'rxjs';
import { UserResponse } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  collapseShow = 'hidden';

  usersData: UserResponse = { results: [] };

  private subscription: Subscription | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.initializeUserArray();
    this.startAutoRefresh();
  }

  ngOnDestroy(): void {
    this.stopAutoRefresh();
  }

  initializeUserArray(): void {
    this.userService.getMultipleUsers().subscribe((data) => {
      this.usersData = data;
    });
  }

  startAutoRefresh(): void {
    this.subscription = timer(10000, 10000).subscribe(() => {
      this.usersData.results.pop();
      this.userService.getRandomUser().subscribe((data) => {
        this.usersData.results.unshift(data.results[0]);
      });
    });
  }

  stopAutoRefresh(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  restartCounterAndGetUser(): void {
    this.stopAutoRefresh();

    this.userService.getRandomUser().subscribe((data) => {
      this.usersData.results.pop();
      this.usersData.results.unshift(data.results[0]);
    });

    this.startAutoRefresh();
  }

  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }
}
