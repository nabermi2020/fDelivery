import { Injectable } from '@angular/core';
import {Product, ProductDetails} from '../models/products.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  private products: Array<Product> = [];
  public onProductAdded = new Subject<any>();

  constructor() {}

  public addProduct(product: ProductDetails): void {
    this.products.push(new Product(product));
    this.onProductAdded.next(this.products);
  }

  public getProducts(): Array<Product> {
    return this.products;
  }

}
