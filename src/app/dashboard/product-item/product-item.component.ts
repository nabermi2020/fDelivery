import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from '../../shared/models/products.model';
import {ProductCartService} from '../../shared/services/product-cart.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotifyBarComponent} from '../../shared/notify-bar/notify-bar.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() productData: ProductDetails;
  private notifyDuration = 2;
  public onProductAdded: boolean = false;


  constructor(private productCartService: ProductCartService,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  public addProductToCart(): void {
    this.productCartService.addProduct(this.productData);
    this.changeProductStatus();
    this.showNotification();
  }

  private showNotification(): void {
    setTimeout(() => {
      this.snackBar.openFromComponent(NotifyBarComponent, {
        duration: this.notifyDuration * 1000,
        data: this.productData
      });
    }, 400);
  }

  private changeProductStatus(): void {
    this.onProductAdded = true;
    setTimeout(() => {
      this.onProductAdded = false;
    }, 1000);
  }
}
