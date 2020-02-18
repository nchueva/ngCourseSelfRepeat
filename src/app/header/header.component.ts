import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Input()
  public set t(value: string) {
    if (!value) {
      console.log('!value');
      return;
    }
    this.titleContent = `<span style='color: red'>${value}</span>`;
    console.log(this.titleContent);
  }

  @Input()
  public d: MatDrawer;


  public rates = [
    {value: 24, currency: 'EUR'},
    {value: 20, currency: 'USD'},
    {value: 0.4, currency: 'RUB'},
  ]
  public titleContent = '';

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  public toggleSidenav() {
    this.d.toggle();
  }
}
