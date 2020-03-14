import { Component, OnInit } from '@angular/core';
import {ProductCartService} from '../../shared/services/product-cart.service';
import {Product} from '../../shared/models/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cart: Array<Product> = [];

  constructor(private productCart: ProductCartService) { }

  ngOnInit(): void {
    this.cart = this.productCart.getProducts();
  }

  public deleteCurrentProduct(product: Product): void {
    const productId = product.product.productId;
    this.productCart.deleteProductById(productId);
  }

}
