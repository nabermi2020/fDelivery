import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule
    ],
    exports: []
})
export class ProfileModule {}