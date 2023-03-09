import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { OauthService } from './oauth.service';

@Injectable({
  providedIn: 'root'
})
export class OauthGuard implements CanActivate {

  constructor(
    private authService: OauthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{// | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.isLoggedIn         // {1}
      .pipe(
        take(1),                              // {2}
        map((isLoggedIn: boolean) => {         // {3}
          if (!isLoggedIn){
            this.router.navigate(['login']);  // {4}
            return false;
          }
          return true;
        })
      )
  }

}
