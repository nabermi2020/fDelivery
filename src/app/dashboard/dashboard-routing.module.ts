import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/services/auth-guard.service';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProfileComponent } from '../userprofile/profile/profile.component';
import { ProfileDetailComponent } from '../userprofile/profile-detail/profile-detail.component';

const dashboardRoutes: Routes = [
    { path: 'dashboard', component: ProductDashboardComponent, canActivate: [AuthGuardService], children: [
        { path: 'profile', component: ProfileComponent, children: [
            { path: ':id', component: ProfileDetailComponent }
        ] }
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}