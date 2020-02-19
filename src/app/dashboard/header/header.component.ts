import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeCategory: string = 'Pizza';
  public activeUser: string = 'Test';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public logOut(): void {
    this.authService.logOut();
  }
}
