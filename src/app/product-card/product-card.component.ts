import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../mock';
import { ModalService } from '../modal/modal.service';
import { CardModalContentComponent } from './card-modal-content/card-modal-content.component';

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

  public constructor(
    private readonly modalService: ModalService,
  ) {
  };

  public toggleFavorite() {
    this.product.isFavorite = !this.product.isFavorite;
  }

  public addToCart() {
    this.modalService.open({
      component: CardModalContentComponent,
      context: {
        product: this.product,
        save: () => {
          console.log('save');
          this.modalService.close();
        },
        close: () => {
          console.log('close');
          this.modalService.close();
        }
      }
    })
  }

}
