import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {checkToken} from '../helpers/localStorage';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(public router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // below if condition also check using Behaviour Subject and Authenticate User
    // TODO: set Routing access Logic based on Project
    if (!checkToken()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
