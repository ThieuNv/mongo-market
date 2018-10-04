import {EventEmitter, Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';   // include all operator like: map, catch,...

import {AppConfig} from '../app.config';
import {User} from '../_models/user.model';

@Injectable()
export class AuthService {

  fullNameEvent = new EventEmitter<string>();

  constructor(private http: Http) {}

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(AppConfig.dns_local, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
  }

  signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(AppConfig.dns_local + '/signin', body, {headers: headers})
      .map((response: Response) => {
        const data = response.json();
        console.log(data);
        this.fullNameEvent.emit(data.fullName);
        return data;
      })
      .catch((error: Response) => Observable.throw(error));
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
