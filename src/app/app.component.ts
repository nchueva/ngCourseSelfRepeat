import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { products$, IProduct } from './mock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {

  public constructor() { }
  public title = 'ngPracticeCourse';
  public drawerSidenav: MatDrawer;
  public products: IProduct[] = [];

  public account = {
    name: 'Ihor',
    age: 33,
  };


  public products$: Observable<IProduct[]> = products$;

  public setSidenav(drawer: MatDrawer) {
    this.drawerSidenav = drawer;
  }
  public ngOnInit(): void {
    this.products$.subscribe( (products) => {
      console.log(products);

      this.products = products;
    } );
  }

}
