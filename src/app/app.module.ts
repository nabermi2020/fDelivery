import { AuthGuardService } from './auth/services/auth-guard.service';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { ProfileComponent } from './userprofile/profile/profile.component';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
