import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/auth/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private userIdSubscription: Subscription;
  public id: number;
  public user: User;
  objectKeys = Object.keys;
  public userViewTemplate = {
    'First Name': '',
    'Last Name': '',
    'Login': '',
    'Phone': '',
    'Email': '',
    'Address': ''
  };

  constructor(private route: ActivatedRoute,
              private authService: AuthService) { }
  
  ngOnInit(): void {
    this.fetchUserInfo();
    this.mapUserData();
    console.log(this.userViewTemplate);
    this.fetchUserId();
  }

  private fetchUserInfo(): void {
    this.id = this.route.snapshot.children[0].params.id;
    this.user = this.authService.getUserById(this.id);
  }

  private mapUserData(): void {
    this.userViewTemplate['First Name'] = this.user.user.firstName;
    this.userViewTemplate['Last Name'] = this.user.user.lastName;
    this.userViewTemplate['Login'] = this.user.user.login;
    this.userViewTemplate['Phone'] = this.user.user.phone;
    this.userViewTemplate['Email'] = this.user.user.email;
    this.userViewTemplate['Address'] = this.user.user.address;
  }

  private fetchUserId(): void {
    this.userIdSubscription = this.route.firstChild.params
      .subscribe(
        (params: Params) => {
          this.id = params.id;
        }
      );
  }

  ngOnDestroy() {
    this.userIdSubscription.unsubscribe();
  }

}
