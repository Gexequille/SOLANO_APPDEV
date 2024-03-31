import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated: boolean = false;
  constructor() { }

  canActivate(){
    return this.authenticated;
  }
  canDeactivate(){
    return this.authenticated = true;
  }
}
