import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDrawer} from '@angular/material/sidenav';
import { products$, IProduct } from './mock';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {

  public title = 'ngPracticeCourse';
  public drawerSidenav: MatDrawer;
  public products$: Observable<IProduct[]> = this.productService.getProduct();
  public onlyFavorites = false;


  public constructor(private readonly productService: ProductsService) { }

  public setSidenav(drawer: MatDrawer) {
    this.drawerSidenav = drawer;
  }

   public ngOnInit(): void {
    console.log(this.productService);
   }

   public toggleOnlyFavorites(e: MatCheckboxChange) {
    this.onlyFavorites = e.checked;

   }

}
