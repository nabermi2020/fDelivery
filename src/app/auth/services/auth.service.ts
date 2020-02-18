import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: boolean = false;
  public authenticatedSubject = new Subject<boolean>();
  public currentUser: any;

  private usersCredentials: Array<{login: string, password: string }> = [
    { login: 'test', password: '1233' },
    { login: 'demo', password: 'demo@1234' },
    { login: 'admin', password: 'admin@777' },
  ];

  constructor(private router: Router) {}

  public signIn(login: string, password: string): void {
    this.usersCredentials.forEach(
      (credentials: {login: string, password: string}) => {
        if (credentials.login === login && credentials.password === password) {
          this.currentUser = credentials;
          this.isAuthenticated = true;
        }

        this.authenticatedSubject.next(this.isAuthenticated);
      }
    );
  }

  public logOut(): void {
    this.authenticatedSubject.next(this.isAuthenticated);
  }

  public isAuthorized(): boolean {
    return this.isAuthenticated;
  }
}
