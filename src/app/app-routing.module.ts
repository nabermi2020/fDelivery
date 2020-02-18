import { ProfileComponent } from './userprofile/profile/profile.component';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: ProductDashboardComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
