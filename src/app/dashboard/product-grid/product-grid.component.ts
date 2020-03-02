import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { Observable, Subscription } from "rxjs";
import { Product } from "src/app/shared/models/products.model";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-product-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.scss"]
})
export class ProductGridComponent implements OnInit {
  public products$: Observable<Array<Product>>;
  public activeCategory: string = "pizza";

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchProductsByActiveCategory();
  }

  private fetchProducts(): void {
    this.products$ = this.productService.getProducts();
  }

  private fetchProductsByActiveCategory(): void {
    this.route.firstChild.params.subscribe((params: Params) => {
      this.activeCategory = params.category;
      this.products$ = this.productService.getProductsByCategory(this.activeCategory);
    });
  }

}
