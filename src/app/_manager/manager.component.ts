import { Component, OnInit } from '@angular/core';
import {UserService} from '../_auth/user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserData()
      .subscribe(
        data => localStorage.setItem('validUser',  JSON.stringify(data.obj))
      );
  }

}
