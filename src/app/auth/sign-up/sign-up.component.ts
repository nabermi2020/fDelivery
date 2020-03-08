import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User, UserDetails } from './../user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public registrationForm: FormGroup;
  private password: string;
  private repeatedPassword: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.registrationForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'login': new FormControl('', [Validators.required, Validators.minLength(5)], this.checkLogin.bind(this)),
      passwords: new FormGroup({
        'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
        'repeatPassword': new FormControl('', [Validators.required, Validators.minLength(4)]),
      },
      {
        validators: this.validatePasswords.bind(this)
      }
      ),
      'phone': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'email': new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)], this.checkEmail.bind(this)),
      'address': new FormControl('')
    });
  }
  
  public onSignUp(): void {
    const newUser = new User(this.registrationForm.value);
    if (this.registrationForm.valid) {
      this.authService.signUp(newUser);
    }
    console.log(this.registrationForm);
  }

  get formField() {
    return this.registrationForm;
  }

  private checkLogin(control: FormControl): Promise<any> | Observable<any> {
    const login = control.value;
    let queryResult;

    const checkLogin = new Promise((resolve, reject) => {
     if (login.length >= 4) {
       this.authService.checkUser(login)
        .subscribe(
          (users: Array<UserDetails>) => {
            queryResult = users[0];

            if (queryResult && queryResult.login === login) {
              resolve({'loginIsForbidden': true});
            } else {
              resolve(null);
            }
          },

          err => {
            console.log(err);
          }
        )
     }
    });

    return checkLogin;
  }

  public checkEmail(control: FormControl): Promise<any> | Observable<any> {
    const email = control.value;

    const checkEmail  = new Promise( (resolve, reject) => {
      if (email.length >= 4) {
        this.authService.checkEmail(email).subscribe(
          (users: Array<UserDetails>) => {
            if (users[0] && users[0].email === email ) {
                resolve({'emailIsForbidden': true});
            } else {
              resolve(null);
            }
          }, 

          err => {
            console.log(err);
          }
        );
      }
    })

    return checkEmail;
  }


  private validatePasswords(registrationFormGroup: FormGroup): {doesMatchPassword: boolean} | null {
    const { password, repeatPassword } = { 
      password: registrationFormGroup.controls.password.value,
      repeatPassword: registrationFormGroup.controls.repeatPassword.value
    };
  
    if (repeatPassword !== password) {
        return {
            doesMatchPassword: true
        };
    }

    return null;
  }


}
