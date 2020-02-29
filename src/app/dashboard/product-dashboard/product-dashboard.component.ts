import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  
  }

}
