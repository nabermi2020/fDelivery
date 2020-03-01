import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from './../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public registrationForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.registrationForm = new FormGroup({
      'firstName': new FormControl(),
      'lastName': new FormControl(),
      'login': new FormControl(),
      'password': new FormControl(),
      'repeatPassword': new FormControl(),
      'phone': new FormControl(),
      'email': new FormControl(),
      'address': new FormControl()
    });
  }
  
  public onSignUp(): void {
    const newUser = new User(this.registrationForm.value);
    this.authService.addUser(newUser);
  }

}
