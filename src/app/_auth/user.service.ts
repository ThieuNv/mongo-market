import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';   // include all operator like: map, catch,...

import {AppConfig} from '../app.config';
import {User} from '../_models/user.model';


@Injectable()
export class UserService {

  userSourceEvent = new EventEmitter<User>();

  constructor(private http: Http) {}

  getUserData(): Observable<any> {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get(AppConfig.dns_local + '/data' + token)
      .map((response: Response) => {
        const data = response.json();
        this.userSourceEvent.emit(data.obj);
        return data;
      })
      .catch((error: Response) => Observable.throw(error));
  }

  // /update/customer/contact/:id
  updateCustomerContact(dataUpdate) {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : '';

    const body = JSON.stringify(dataUpdate);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.patch(AppConfig.dns_local + '/update/customer/contact/' + userId + token , body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
  }

// localhost:3000/apiUser/update/manager/detail/:id
  updateManagerDetail(myManager) {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : '';
    const body = JSON.stringify(myManager);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.patch(AppConfig.dns_local + '/update/manager/detail/' + userId + token , body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
  }

  getEmail() {
    return localStorage.getItem('validUser') ? JSON.parse(localStorage.getItem('validUser')).email : '';
  }

  getUser() {
    return localStorage.getItem('validUser') ? JSON.parse(localStorage.getItem('validUser')) : null;
  }

  getCustomer() {
    return localStorage.getItem('validUser') ? JSON.parse(localStorage.getItem('validUser')).customer : null;
  }

  getManager() {
    return localStorage.getItem('validUser') ? JSON.parse(localStorage.getItem('validUser')).manager : null;
  }

  getSocialMedia() {
    return localStorage.getItem('validUser') ? JSON.parse(localStorage.getItem('validUser')).manager.socialMedia : null;
  }

  getBasicData() {
    const user = localStorage.getItem('validUser') ? JSON.parse(localStorage.getItem('validUser')) : null;
    if (user != null) {
      return {
        email: user.email,
        fullName: user.fullName,
        birthday: user.birthday
      };
    }
    return null;
  }

}
