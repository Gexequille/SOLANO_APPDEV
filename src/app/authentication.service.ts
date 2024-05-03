import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  authenticated: boolean = false;

  credentials = [
    { username: 'user1', password: '1234' },
    { username: 'user2', password: '5678' },
    { username: 'admin', password: 'admin' },
  ];
  
  constructor() { }

  async authenticateUser(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const user = this.credentials.find(
        (cred) => cred.username === username && cred.password === password
      );
      if (user) {
        this.authenticated = true;
        resolve(true);
      } else {
        this.authenticated = false;
        reject('Invalid credentials');
      }
    });
  }

  signOut() {
    localStorage.removeItem('loggedInUser');
    this.authenticated = false;
  }

  addCredentials(username: string, password: string) {
    if (!this.isUsernameExists(username)) {
      this.credentials.push({ username, password });
    } else {
      throw new Error('Username already exists');
    }
  }

  isUsernameExists(username: string): boolean {
    return this.credentials.some((cred) => cred.username === username);
  }

}
