import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../mock';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent {

  @Input()
  public product: IProduct;

  @Input()
public isOdd: boolean;

public constructor() {};

public toggleFavorite() {
  this.product.isFavorite = !this.product.isFavorite;
}

}
