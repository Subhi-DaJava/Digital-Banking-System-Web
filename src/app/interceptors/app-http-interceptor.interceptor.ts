import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthStateService} from "../auth-services/auth-state.service";

@Injectable()
export class AppHttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private authStateService: AuthStateService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log("************")
    // console.log(request.url);
    if (!request.url.includes("/auth/login")) {
      let req = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.authStateService.authState.token)
      });

      return next.handle(req);
    } else {
      return next.handle(request);
    }
  }
}
