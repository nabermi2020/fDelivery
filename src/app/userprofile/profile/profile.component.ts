import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/auth/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public id: number;
  public user: User;

  constructor(private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.fetchUserInfo();
  }

  private fetchUserInfo(): void {
    this.id = this.route.snapshot.children[0].params.id;
    this.user = this.authService.getUserById(this.id);
  }

}
