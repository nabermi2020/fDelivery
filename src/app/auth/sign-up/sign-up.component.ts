import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      'firstName': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'login': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'password': new FormControl('', [Validators.required]),
      'repeatPassword': new FormControl('', [Validators.required]),
      'phone': new FormControl(''),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'address': new FormControl('')
    });
  }
  
  public onSignUp(): void {
    const newUser = new User(this.registrationForm.value);
    if (this.registrationForm.valid) {
      this.authService.signUp(newUser);
    }
  }

  get formField() {
    return this.registrationForm;
  }

}
