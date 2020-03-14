import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from '../../shared/models/products.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() productData: ProductDetails;
  constructor() { }

  ngOnInit(): void {}

}
