import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor() {
  }

  public authState: any = {
    isAuthenticated: false,
    username: undefined,
    roles: undefined,
    email: undefined,
    token: undefined
  };

  public setAuthState(state: any) {
    this.authState = {...this.authState, ...state };
  }
}
