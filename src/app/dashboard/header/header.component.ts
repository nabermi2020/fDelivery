import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import {User, UserDetails} from 'src/app/auth/user.model';
import {Router} from '@angular/router';
import {ProductCartService} from '../../shared/services/product-cart.service';

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
    this.activeUser = this.authService.getCurrentUserInfo();
    console.log(this.activeUser);
    this.userId = this.activeUser.userId;

    this.productCartService.onProductAdded.
        subscribe(
          res => {
            this.productQuantity = this.productCartService.calculateProductsQuantity();
          },
        err => {
            console.log(err);
        }
        );
    // console.log(this.activeUser);
    // console.log(this.userId);
  }

  public logOut(): void {
    this.authService.logOut();
  }

  public openCart(): void {
    this.router.navigate(['dashboard/cart']);
  }
}
