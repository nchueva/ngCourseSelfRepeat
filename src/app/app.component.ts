import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDrawer} from '@angular/material/sidenav';
import { products$, IProduct } from './mock';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';

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
  public products$: Observable<IProduct[]> = products$;
  public onlyFavorites = false;
 // public searchText = '';

//  public products: IProduct[] = [];

  public account = {
    name: 'Ihor',
    age: 33,
  };


  public setSidenav(drawer: MatDrawer) {
    this.drawerSidenav = drawer;
  }

   public ngOnInit(): void {
  //   this.products$.subscribe( (products) => {
  //     console.log(products);

  //     this.products = products;
  //   } );
   }

   public toggleOnlyFavorites(e: MatCheckboxChange) {
    this.onlyFavorites = e.checked;

   }


  //  search({target}: Event) {
  //   this.searchText = (target as HTMLInputElement).value;
  //  }

}
