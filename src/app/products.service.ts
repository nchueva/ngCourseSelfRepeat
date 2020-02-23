import { IProduct, products$ } from './mock';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class ProductsService {

  public constructor(
    private http: HttpClient,

    // or we can write without @Injectable but with @Inject
    // @Inject(HttpClient) private http: any;
    // it becomes ==>
    // @Ingect(baseUrl) private baseUrl: string,
    // and it becomes ==>
    // @Ingect(BASE_URL_TOKEN) private baseUrl: string,
 ) { }

  public getProduct(): Observable<IProduct[]> {
    console.log(this.http);
    // return this.http.get<{data: IProduct[]}>(`${this.baseUrl/products}`, {
    //  headers: {
    //    'Autorization': 'Bearer...',
    //  }
    // }).pipe<IProduct[]>(
    //     map(res => res.data)
    //   );

    return products$;
  }
}

