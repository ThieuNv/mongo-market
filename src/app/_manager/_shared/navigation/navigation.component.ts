import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../_auth/auth.service';
import {UserService} from '../../../_auth/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

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
