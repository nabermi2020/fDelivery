import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  public isAuthorized: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute) {}
  
  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): boolean {
    if (this.isAuthorized) {
      return true;
    } else {
      this.router.navigate([''], { relativeTo: this.route });
      return false;
    }
  }
}
