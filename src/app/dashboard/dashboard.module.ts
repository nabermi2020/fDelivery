import { NgModule } from '@angular/core';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileModule } from '../userprofile/profile.module';
import { ProductGridComponent } from './product-grid/product-grid.component';

@NgModule({
    declarations: [
        ProductDashboardComponent, 
        SidebarComponent,
        HeaderComponent,
        ProductGridComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ProfileModule
    ],
    exports: [

    ]
})
export class DashboardModule {}