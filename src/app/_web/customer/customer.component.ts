import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_auth/user.service';
import {User} from '../../_models/user.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUserData()
      .subscribe(
        data => {
          localStorage.setItem('validUser', JSON.stringify(data.obj));
        }
      );
  }
}
