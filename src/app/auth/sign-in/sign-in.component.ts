import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public authStatus = true;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {}

  public navToDashboard(): void {
    this.router.navigate(['dashboard']);
  }

  public onLogin(form: NgForm): void {
    const { login, password } = {
      login: form.value.login,
      password: form.value.password
    };
    console.log(login, password);
    this.authStatus = this.authService.signIn(login, password);

    this.authService.authenticatedSubject.subscribe(
      (isAuthenticated: boolean) => {
        if (this.authService.isAuthenticated) {
          localStorage.setItem('userCredentials', JSON.stringify({login, password}));
        }
      }
    );
  }
}
