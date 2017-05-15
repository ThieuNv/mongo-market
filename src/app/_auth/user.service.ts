import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';   // include all operator like: map, catch,...

import {AppConfig} from '../app.config';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  getUserData() {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get(AppConfig.dns_local + '/data' + token)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
