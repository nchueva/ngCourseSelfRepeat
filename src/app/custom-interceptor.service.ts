import { Injectable, OnInit } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IRes {
  data: any;
}

@Injectable()
export class CustomInterceptorService implements HttpInterceptor {

  //   constructor(
  //     //@Inject(BASE_URL_TOKEN) private baseUrl: string;
  //   ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const result = req.clone({ body: req.body });

    return

  //   public intercept<T extends IRes>( req: HttpRequest<T>, next: HttpHandler ): Observable<HttpEvent<T>> {
  //     const headers = req.headers
  //       .append('Content-Type', 'application/json')
  //       .append( 'Authorization', 'Bearer...');

  //        const jsonReq = req.clone( { headers,
  //       url: `${this.baseUrl}${req.url}`})
  //   };

  //   return next.handle(jsoneREq).pipe(
  //     filter(this.isHttpResponse),
  //     map( (res: HttpResponse<IRes>) => {
  //    return res.clone({body: res?.body?.data})
  // })
  //  );
}

// private isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
//   if (event is instanceof HttpResponse) {
//     return true;
//   }
//   return false;
// }
