import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
