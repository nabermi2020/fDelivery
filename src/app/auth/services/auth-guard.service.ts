import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  public isAuthorized: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {}
  
  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthorized()) {
      return true;
    } else {
      this.router.navigate([''], { relativeTo: this.route });
      return false;
    }
  }
}
