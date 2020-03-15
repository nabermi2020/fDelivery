import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {Product, ProductDetails} from '../models/products.model';


@Component({
  selector: 'app-notify-bar',
  templateUrl: './notify-bar.component.html',
  styleUrls: ['./notify-bar.component.scss']
})
export class NotifyBarComponent implements OnInit {
  public addedProduct: ProductDetails;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: ProductDetails) { }

  ngOnInit(): void {
    this.bindNotificationData();
  }

  private bindNotificationData(): void {
    this.addedProduct = this.data;
  }

}
