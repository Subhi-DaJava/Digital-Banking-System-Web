import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthStateService} from "./auth-state.service";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.backendHost;
  private accessToken!: string;

  constructor(private http: HttpClient, private authState: AuthStateService) {
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
    console.log("Token from AuthStateService: ")
    console.log(this.authState.authState.token);
  }
}
