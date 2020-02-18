import { AuthService } from './../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  public authenticationSubscription: Subscription;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.checkAuthenticationStatus();
  }

  public checkAuthenticationStatus(): void {
    this.authenticationSubscription = this.authService.authenticatedSubject.subscribe(
      (isUserAuthentucated: boolean) => {
        this.router.navigate([isUserAuthentucated? 'profile' : ''])
      }
    );
  }

  ngOnDestroy() {
    this.authenticationSubscription.unsubscribe();
  }

}
