import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthStateService} from "./auth-state.service";
import jwtDecode from "jwt-decode";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = environment.backendHost;
    private accessToken!: string;

    constructor(private http: HttpClient, private authState: AuthStateService, private router: Router) {
    }

    public login(username: string, password: string) {

        let httpParams = new HttpParams().set("username", username).set("password", password);

        let headers = {
            headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
        }

        return this.http.post(`${this.apiUrl}/auth/login`, httpParams, headers);
    }

    loadProfile(userAuth: any) {

        // console.log("Just before parse JWT token: " + userAuth['access-token']);

        this.accessToken = userAuth['access-token'];

        let jwtDecoded: any = jwtDecode(this.accessToken);
        console.log("Token from AuthService: ")
        console.log(jwtDecoded)
        this.authState.setAuthState({
            isAuthenticated: true,
            username: jwtDecoded.sub,
            roles: jwtDecoded.scope,
            token: this.accessToken
        });

        window.localStorage.setItem('jwt-token', this.accessToken);

        console.log("Token from AuthStateService: ")
        console.log(this.authState.authState.token);
    }

    loadJWTTokenFromLocalStorage() {
        let jwtToken = window.localStorage.getItem('jwt-token');
        if (jwtToken) {
            this.loadProfile({
                "access-token": jwtToken
            });
            this.router.navigateByUrl('/auth/customers').then();
        }
    }
}
