import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { BaseService } from './base.service';
import { UserInterface } from './../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<UserInterface> {

  constructor(public http: HttpClient) {
    super(http, '/users')
  }


  public logout(): void {
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_password');
  }

  public login(email: string, password: string): Observable<UserInterface> {
    return this.getList().pipe(
      map((users: UserInterface[]) => {
        let user = users.find((value: UserInterface) => (value.email === email && value.password === password ));
        if (user) {
          localStorage.setItem('user_id', String(user.id));
          localStorage.setItem('user_email', user.email);
          localStorage.setItem('user_password', user.password);
        }
        return user;
      }),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  public keepAlive(): Observable<boolean> {
    return this.getItem(localStorage.getItem('user_id')).pipe(
      map((user: UserInterface) => {
        if (user.email === localStorage.getItem('user_email') && user.password === localStorage.getItem('user_password')) {
          return true;
        }
        return false;
      }),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

}
