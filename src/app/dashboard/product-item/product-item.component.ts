import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from '../../shared/models/products.model';
import {ProductCartService} from '../../shared/services/product-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() productData: ProductDetails;

  constructor(private productCartService: ProductCartService) {}

  ngOnInit(): void {}

  public addProductToCart(): void {
    this.productCartService.addProduct(this.productData);
  }
}
