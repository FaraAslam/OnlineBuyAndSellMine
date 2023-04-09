import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{UserService} from '../services/user/user.service'
import{AccountService} from '../services/account/account.service'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  UserType: any;
  constructor(private accountService: AccountService, private router: Router){
    this.UserType = this.accountService.getUserType();
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.accountService.isLoggedIn !== true && this.UserType !== 'Admin') {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      }
    return true;
  }
  
}
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  UserType: any;
  constructor(private accountService: AccountService, private router: Router) {
    this.UserType = this.accountService.getUserType();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.accountService.isLoggedIn !== true && this.UserType !== 'Vistor') {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    }
    return true;
  }
}
