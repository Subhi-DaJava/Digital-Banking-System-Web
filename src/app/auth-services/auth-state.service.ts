import {Injectable} from '@angular/core';
import {Router} from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class AuthStateService {

    constructor(private router: Router) {
    }

    public authState: any = {
        isAuthenticated: false,
        username: undefined,
        roles: undefined,
        email: undefined,
        token: undefined,
        badRequest400: undefined,
    };

    public setAuthState(state: any) {
        this.authState = {...this.authState, ...state};
    }

    logout() {
        this.setAuthState({});
        //window.localStorage.setItem("jwt-token", "");
        window.localStorage.removeItem('jwt-token');
        this.router.navigateByUrl("/login").then();
    }
}
