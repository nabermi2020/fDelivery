import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeCategory: string = 'Pizza';
  public activeUser: User;
  public userId: number;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.activeUser = this.authService.getCurrentUserInfo();
    this.userId = this.activeUser.user.userId;
    // console.log(this.activeUser);
    // console.log(this.userId);
  }

  public logOut(): void {
    this.authService.logOut();
  }
}
