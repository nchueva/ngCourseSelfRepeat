import { of, Observable} from 'rxjs';


export interface IProduct {

    _id: string;
    title: string;
    img: string;
    price: number;
    author: string;
    isFavorite: boolean;

}

export const products = [
  {
    _id: '5e3c1ea178a3995c4b0b961d',
    title: 'Product 111',
    img: 'assets/images/product-4.jpg',
    price: 2345,
    author: 'Igor',
    isFavorite: false
  },
  {
    _id: '5e3c1ea178a3995c4b0b961e',
    title: 'Product 2345',
    img: 'assets/images/product-2.jpg',
    price: 221,
    author: 'Vlad',
    isFavorite: false
  },
  {
    _id: '5e3c1ea178a3995c4b0b961f',
    title: 'Product 41',
    img: 'assets/images/product-6.jpg',
    price: 2344,
    author: 'Lena',
    isFavorite: false
  },
  {
    _id: '5e3c1ea178a3995c4b0b9620',
    title: 'Product 31',
    img: 'assets/images/product-7.jpg',
    price: 334,
    author: 'Lena',
    isFavorite: false
  },
  {
    _id: '5e3c1ea178a3995c4b0b9621',
    title: 'Product 11',
    img: 'assets/images/product-8.jpg',
    price: 22,
    author: 'Igor',
    isFavorite: false
  },
  {
    _id: '5e3c1ea178a3995c4b0b9622',
    title: 'Product 231',
    img: 'assets/images/product-5.jpg',
    price: 23,
    author: 'Vlad',
    isFavorite: true
  },
  {
    _id: '5e3c1ea178a3995c4b0b9623',
    title: 'Product 122',
    img: 'assets/images/product-9.jpg',
    price: 1200,
    author: 'Max',
    isFavorite: true
  },
  {
    _id: '5e3c1ea178a3995c4b0b9624',
    title: 'Product 234',
    img: 'assets/images/product-3.jpg',
    price: 333,
    author: 'Igor',
    isFavorite: true
  },
  {
    _id: '5e3c1ea178a3995c4b0b9625',
    title: 'Product 1',
    img: 'assets/images/product-1.jpg',
    price: 200,
    author: 'Igor',
    isFavorite: true,
  }
];

export const products$: Observable<IProduct[]> = of(products);
