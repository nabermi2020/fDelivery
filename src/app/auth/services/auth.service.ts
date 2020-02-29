import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: boolean = false;
  public authenticatedSubject = new Subject<boolean>();
  public currentUser: User;

  public users: Array<User> = [
    new User({firstName: "John", lastName: "Smith", login: "john_smith777", password: "john777", phone: "+380501654784", email: "john777@gmail.com", address: "NY, Green Valley 15/64"}),
    new User({firstName: "Michael", lastName: "Naberezhnyi", login: "michael777", password: "test123", phone: "+380501865210", email: "mnabe777@gmail.com", address: "LA, Red Valley 7/32"}),
    new User({firstName: "John", lastName: "Doe", login: "johnl777", password: "demo1234", phone: "+380502565210", email: "john_doe@gmail.com", address: "Las Vegas, Yellow Road 7/32"})
  ];

  constructor(private router: Router) {}

  public signIn(login: string, password: string): string {
    login = "john_smith777";
    password = "john777";
    
    this.users.forEach(
      (user: User) => {
        if (user.user.login === login && user.user.password === password) {
          this.currentUser = user;
          this.isAuthenticated = true;
          this.authenticatedSubject.next(this.isAuthenticated);
          return 'success';
        } 
      });
      return 'error';
  }

  public logOut(): void {
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);
    this.authenticatedSubject.next(this.isAuthenticated);
  }

  public isAuthorized(): boolean {
    return this.isAuthenticated;
  }

  public getCurrentUserInfo(): User {
    return this.currentUser;
  }

  public getUserById(id: number): User {
    let activeUser: User;

    this.users.forEach(
      (user: User) => {
        if (user.user.userId == id) {
          activeUser = user;
        }
    });

    return activeUser;
  }
}
