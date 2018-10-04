import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_auth/user.service';
import {User} from '../../../_models/user.model';

@Component({
  selector: 'app-manage-cus',
  templateUrl: './manage-cus.component.html',
  styleUrls: ['./manage-cus.component.css']
})
export class ManageCusComponent implements OnInit {

  myUser: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.myUser = this.userService.getUser();
  }
}
