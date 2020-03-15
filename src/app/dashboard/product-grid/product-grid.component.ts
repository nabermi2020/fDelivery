import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Observable, Subscription } from 'rxjs';
import { Product, ProductDetails} from 'src/app/shared/models/products.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  public products$: Observable<Array<ProductDetails>>;
  public productList: Array<ProductDetails> = [];
  public activeCategory = 'pizza';
  public loadingProducts = false;
  counter = 1;
  currentList;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchProductsByActiveCategory();
  }

  private fetchProducts(): void {
    // this.products$ =
    this.productService.getProducts().
      subscribe(
      (products: Array<ProductDetails>) => {
        this.productList = products;
        this.getElementsOnScroll();
      }
    );
  }

  private fetchProductsByActiveCategory(): void {
    this.route.firstChild.params.subscribe((params: Params) => {
      this.activeCategory = params.category;
      this.products$ = this.productService.getProductsByCategory(this.activeCategory);
    });
  }

  public onScroll(): void {
    this.loadingProducts = true;
    setTimeout(() => {
      this.getElementsOnScroll();
    }, 1000);
  }

  public getElementsOnScroll(): void {
    this.currentList = this.productList.slice(0, this.counter * 7);
    this.counter++;
    this.loadingProducts = false;
  }

}
