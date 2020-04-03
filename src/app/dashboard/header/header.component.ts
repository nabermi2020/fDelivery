import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import {User, UserDetails} from 'src/app/auth/user.model';
import {Router} from '@angular/router';
import {ProductCartService} from '../../shared/services/product-cart.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeCategory = 'Pizza';
  public activeUser: UserDetails;
  public userId: number;
  public productQuantity = 0;
  public totalPrice: number = 0;

  constructor(private authService: AuthService,
              private router: Router,
              private productCartService: ProductCartService) { }

  ngOnInit(): void {
    this.fetchUserData();
    this.subscribeToCartState();
  }

  private subscribeToCartState(): void {
    this.productCartService.onProductAdded.
    subscribe({
      next: this.onProductAddedSuccess.bind(this),
      error: this.onProductAddedError.bind(this)
    });
  }

  private onProductAddedSuccess(successStatus): void {
    this.productQuantity = this.productCartService.calculateProductsQuantity();
    this.totalPrice = this.productCartService.getTotalPrice();
  }

  private onProductAddedError(err): void {
    console.log(err);
  }

  public logOut(): void {
    this.authService.logOut();
  }

  private fetchUserData(): void {
    this.activeUser = this.authService.getCurrentUserInfo();
    this.userId = this.activeUser.userId;
    console.log(this.activeUser);
  }

  public openCart(): void {
    this.router.navigate(['dashboard/cart']);
  }
}
