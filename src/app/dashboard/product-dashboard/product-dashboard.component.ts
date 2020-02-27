import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  public products: Array<any>;

  constructor(private authService: AuthService,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

}
