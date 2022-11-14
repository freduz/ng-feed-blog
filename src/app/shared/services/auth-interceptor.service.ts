import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistanceService } from './persistance.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get('accessToken');
    const clonedRequest = req.clone({
      headers: req.headers.append('Authorization', `Token ${token || ''}`),
    });
    return next.handle(clonedRequest);
  }

  constructor(private persistenceService: PersistanceService) {}
}
