import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title = 'ngPracticeCourse';
  public drawerSidenav: MatDrawer;

  public setSidenav(drawer: MatDrawer) {
    this.drawerSidenav = drawer;
  }

  public constructor() {}
}
