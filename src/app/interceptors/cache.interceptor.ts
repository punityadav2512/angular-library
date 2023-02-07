import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { CacheResolveService } from '../services/cache-resolve.service';

const TIME_TO_LIVE = 3600;

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheResolver: CacheResolveService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(req.method !== 'GET'){
        return next.handle(req);
      }

      const cachedResponse = this.cacheResolver.get(req.url.toLowerCase());
      return cachedResponse? of(cachedResponse) : this.setRequest(req, next);
  }
  setRequest(req: HttpRequest<any>, next: HttpHandler , ): Observable<HttpEvent<any>>{
    return next.handle(req).pipe(
      tap(event => {
        if(event instanceof HttpResponse){
          this.cacheResolver.set(req.url.toLowerCase(), event,TIME_TO_LIVE );
        }
      })
    )
  }


}
