import { AuthenticationComponent } from './authentication/authentication.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';

const authRoutes = [
    { path: 'authentication', component: AuthenticationComponent, children: [
        { path: 'sign-in', component: SignInComponent },
        { path: 'sign-up', component: SignUpComponent },
    ]},
    { path: '', redirectTo: 'authentication/sign-in', pathMatch: 'full' }  
]

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}