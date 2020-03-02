import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/services/auth-guard.service';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProfileComponent } from '../userprofile/profile/profile.component';
import { ProfileDetailComponent } from '../userprofile/profile-detail/profile-detail.component';
import { ProductGridComponent } from './product-grid/product-grid.component';

const dashboardRoutes: Routes = [
    { path: '', component: ProductDashboardComponent, canActivate: [AuthGuardService], children: [
        { path: 'profile', component: ProfileComponent, children: [
            { path: ':id', component: ProfileDetailComponent }
        ]},

        { path: 'products', component: ProductGridComponent, children: [
            { path: ':category', component: ProductGridComponent }
        ] }
    ]},
      
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}