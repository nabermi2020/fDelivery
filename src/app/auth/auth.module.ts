import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        AuthenticationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        FormsModule
    ]
})
export class AuthModule {}
