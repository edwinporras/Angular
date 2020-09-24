import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from './../../pages/auth/auth.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private authSvc: AuthService){

  }
  canActivate(): Observable<boolean> {
    return this.authSvc.isLogged.pipe(take(1), map((isLogged: boolean) => !isLogged));
  }
}
