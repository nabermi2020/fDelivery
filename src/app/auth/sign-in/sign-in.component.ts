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

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  public navToDashboard(): void {
    this.router.navigate(['dashboard']);
  }

  public onLogin(form: NgForm): void {
    const login = form.value.login;
    const password = form.value.password;
    this.authService.signIn(login, password);
  }
}
