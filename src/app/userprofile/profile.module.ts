import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileDetailComponent,
        EditProfileComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [

    ]
})
export class ProfileModule {}
