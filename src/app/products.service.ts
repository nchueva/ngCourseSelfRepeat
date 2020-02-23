import { IProduct, products$ } from './mock';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  public constructor(
    private http: HttpClient,
 ) { }

  public getProduct(): Observable<IProduct[]> {
    console.log(this.http);
    // return this.http.get<IProduct[]>(url: `/products}`);

    return products$;
  }
}

