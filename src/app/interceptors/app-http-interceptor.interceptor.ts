import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthStateService} from "../auth-services/auth-state.service";
import {Router} from "@angular/router";

@Injectable()
export class AppHttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private authStateService: AuthStateService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log("************")
    // console.log(request.url);
    if (!request.url.includes("/auth/login")) {
      let req = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.authStateService.authState.token)
      });

      return next.handle(req).pipe(
        catchError(err => {
          if (err.status == 401) {
            this.authStateService.logout();
          }
          if (err.status == 403) {
            this.router.navigateByUrl('/auth/not-authorized').then();
          }
          if (err.status == 400) {
           this.authStateService.setAuthState({
             badRequest400: "You could not delete the customer who details the bank accounts!"
           });
          }
          return throwError(err.message);
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
