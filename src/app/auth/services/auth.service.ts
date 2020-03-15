import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User, UserDetails } from '../user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = false;
  public authenticatedSubject = new Subject<boolean>();
  public currentUser: UserDetails;
  private apiUrl = environment.apiUrl;

  public users: Array<User> = [
    new User({firstName: 'John', lastName: 'Smith', login: 'john_smith777', password: 'john777', phone: '+380501654784', email: 'john777@gmail.com', address: 'NY, Green Valley 15/64'}),
    new User({firstName: 'Michael', lastName: 'Naberezhnyi', login: 'michael777', password: 'test123', phone: '+380501865210', email: 'mnabe777@gmail.com', address: 'LA, Red Valley 7/32'}),
    new User({firstName: 'John', lastName: 'Doe', login: 'johnl777', password: 'demo1234', phone: '+380502565210', email: 'john_doe@gmail.com', address: 'Las Vegas, Yellow Road 7/32'})
  ];

  constructor(private router: Router,
              private http: HttpClient) {}

  public signInn(login: string, password: string): boolean {
    login = 'john_smith777';
    password = 'john777';

    this.users.forEach(
      (user: User) => {
        if (user.user.login === login &&
            user.user.password === password) {
          // this.currentUser = user;
          // this.isAuthenticated = true;
          // this.authenticatedSubject.next(this.isAuthenticated);
          return true;
        }
      });

    return false;
  }

  public signIn(login: string, password: string): any {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    let authStatus = false;

    this.http.get(`${this.apiUrl}/users?login=${login}&&password=${password}`, { headers })
      .subscribe(
        (res: Array<any>) => {
          if (res && res.length > 0) {
            this.currentUser = res[0];
            //console.log(res);
            this.isAuthenticated = true;
            this.authenticatedSubject.next(this.isAuthenticated);
            authStatus = true;
            return true;
          }
        },
        (err) => {
          console.log(err);
        }
      );

    return authStatus;
  }

  public signUp(user: User): void {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    this.http.post(`${this.apiUrl}/users`, user.user, { headers })
      .subscribe(
        (success: Response) => {
          this.router.navigate(['']);
        },
        (error: Response) => {
          console.log(error);
        }
      );
  }

  public logOut(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('userCredentials');
    this.authenticatedSubject.next(this.isAuthenticated);
  }

  public isAuthorized(): boolean {
    return this.isAuthenticated;
  }

  public getCurrentUserInfo(): UserDetails {
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

  public addUser(user: User): void {
    this.users.push(user);
  }

  public checkUser(login: string): Observable<Array<UserDetails>> {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.get<Array<UserDetails>>(`${this.apiUrl}/users?login=${login}`, { headers });
  }

  public checkEmail(email: string): Observable<Array<UserDetails>> {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.get<Array<UserDetails>>(`${this.apiUrl}/users?email=${email}`, { headers });
  }
}
