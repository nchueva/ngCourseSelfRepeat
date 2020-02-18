import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './mock';

@Pipe({
  name: 'productsFilter',
  pure: false,
})

export class ProductsFilterPipe implements PipeTransform {

  transform(products: IProduct[], searchText: string, onlyFavorites: boolean): IProduct[] {
    const result: IProduct[] = products;

    if(onlyFavorites) {
      return result.filter((product: IProduct) => product.isFavorite )
    }

    if (!searchText) {
      return result;
    }

    return result.filter( (product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(searchText);
    })
  }

}
