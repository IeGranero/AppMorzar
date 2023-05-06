import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FechaInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const body = event.body;
          this.convertdate(body);
        }
        return event;
      })
    );
  }

  convertdate(datos: producto[]): any{
    return datos.map((x) => {
      x.reviews?.map((x) => {
        x.date = new Date(x.date);
        return x;
      });
    });
  }
}
