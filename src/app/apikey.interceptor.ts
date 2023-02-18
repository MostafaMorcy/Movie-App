import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifiedReq=request.clone(
    {
      url:request.url.replace('api_key=','api_key=fcba8b1bf14befeab6d05aed4c7c53b6')
    }
    )
    return next.handle(modifiedReq);
  }
}
//request.url.replace('api_key=','api_key=fcba8b1bf14befeab6d05aed4c7c53b6')