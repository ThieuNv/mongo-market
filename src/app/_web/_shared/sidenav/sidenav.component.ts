import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../_auth/auth.service';
import {UserService} from '../../../_auth/user.service';
import {stringify} from '@angular/core/src/util';
import {ChangeUxService} from '../../../_services/change-ux.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  title = 'Application';
  fullName: string;
  bgColor: string;

  constructor(private authService: AuthService, private userService: UserService, private changeUxService: ChangeUxService) { }

  ngOnInit() {
    this.bgColor = '#3f51b5';
    this.changeUxService.bgColorEvent
      .subscribe(bgcolor => this.bgColor = bgcolor);

    this.authService.fullNameEvent
      .subscribe((fullName: string) => this.fullName = fullName);
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
