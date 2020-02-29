import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public registrationForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.registrationForm = new FormGroup({
      'firstName': new FormControl(),
      'lastName': new FormControl(),
      'password': new FormControl(),
      'repeatPassword': new FormControl(),
      'login': new FormControl(),
      'phone': new FormControl(),
      'email': new FormControl(),
      'address': new FormControl()
    });
  }

  public test(): void {
    console.log(this.registrationForm);
  }

}
