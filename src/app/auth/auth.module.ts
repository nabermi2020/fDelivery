import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        FormsModule
    ]
})
export class AuthModule {}