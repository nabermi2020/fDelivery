import { Injectable } from '@angular/core';
import { Product, ProductDetails } from '../models/products.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  private products: Array<Product> = [];
  public onProductAdded = new Subject<any>();

  constructor() {}

  public addProduct(product: ProductDetails): void {
    const productId = product.productId;

    if (!this.checkForDuplicates(productId)) {
      this.products.push(new Product(product));
    } else {
      this.changeProductsQuantity(productId);
    }

    this.onProductAdded.next(this.products);
  }

  private changeProductsQuantity(productId: number): void {
    this.products.forEach((item: Product) => {
      if (item.product.productId === productId) {
        ++item.product.productQuantity;
      }
    });
  }

  private checkForDuplicates(id: number): boolean {
    let isDublicated = false;
    this.products.forEach((item: Product) => {
      if (item.product.productId === id) {
        isDublicated = true;
      }
    });

    return isDublicated;
  }

  public calculateProductsQuantity(): number {
    let productsQuantity = 0;

    this.products.forEach((product: Product) => {
      productsQuantity += product.product.productQuantity;
    });

    return productsQuantity;
  }



  public getProducts(): Array<Product> {
    return this.products;
  }

  public deleteProductById(id: number): void {
    this.products.forEach((item, index) => {
      if (item.product.productId === id) {
        this.products.splice(index, 1);
      }
    });

    this.onProductAdded.next(this.products);
  }

}
