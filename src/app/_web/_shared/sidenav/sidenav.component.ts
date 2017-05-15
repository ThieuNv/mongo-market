import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../_auth/auth.service';
import {UserService} from '../../../_auth/user.service';
import {stringify} from '@angular/core/src/util';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  title = 'Application';

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getUserData() {
    this.userService.getUserData().
      subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }
}
