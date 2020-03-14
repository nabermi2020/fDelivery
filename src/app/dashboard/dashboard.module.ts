import { NgModule } from '@angular/core';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileModule } from '../userprofile/profile.module';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations: [
        ProductDashboardComponent,
        SidebarComponent,
        HeaderComponent,
        ProductGridComponent,
        ProductItemComponent,
        CartComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ProfileModule,
        FormsModule
    ],
    exports: [
    ]
})
export class DashboardModule {}
