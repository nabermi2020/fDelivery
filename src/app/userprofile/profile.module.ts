import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileDetailComponent,
        EditProfileComponent
    ],
    imports: [
        CommonModule
    ],
    exports: []
})
export class ProfileModule {}