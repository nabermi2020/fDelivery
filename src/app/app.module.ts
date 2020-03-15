import { AuthService } from './auth/services/auth.service';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './shared/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { EditModalService } from './shared/services/edit-modal.service';
import { ProductCartService } from './shared/services/product-cart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifyBarComponent } from './shared/notify-bar/notify-bar.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    ProductService,
    EditModalService,
    ProductCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
