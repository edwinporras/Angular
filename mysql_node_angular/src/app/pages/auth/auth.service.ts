import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { UserResponse, User } from './../../shared/models/user.iterface';

import {catchError, map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Router } from 'express';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkToken();
  }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData: User): Observable<UserResponse | void>{
    return this.http.post<UserResponse>(`${environment.API_URL}/auth/login`, authData).pipe(map((res: UserResponse) => {
      // console.log('Res->', res);
      this.saveToken(res.token); // DESDE FRONT RECIBIMOS EL TOKEN
      this.loggedIn.next(true); // Setear token
      return res;
    }), catchError((err) => this.handlerError(err))
  );
  }

  regist(regData: User): Observable<UserResponse | void>{
    return this.http.post<UserResponse>(`${environment.API_URL}/users`, regData).pipe(map((res: UserResponse) => {
      // console.log('Res->', res);
      this.saveToken(res.token); // DESDE FRONT RECIBIMOS EL TOKEN
      this.loggedIn.next(false); // Setear token
      return res;
    }), catchError((err) => this.handlerError(err))
  );
  }

  logout(): void{
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    // this.router.navigate(['/login']);
  }
  private checkToken(): void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    console.log('Esta expirado ->', isExpired);
    isExpired ? this.logout() : this.loggedIn.next(true);
    // set userisLogged = isExpired
  }

  private saveToken(token: string): void{
    localStorage.setItem('token', token);
  }

  private handlerError(err): Observable<never> {
    let errorMessage = 'Un error ha ocurrido en la Data';
    if (err) {
      errorMessage = `Error code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
