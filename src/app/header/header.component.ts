import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Input()
  public t: string;

  @Input()
  public d: MatDrawer;

  constructor() { }

  public toggleSidenav() {
    this.d.toggle();
  }

}
