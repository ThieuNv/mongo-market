import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user.model';
import {UserService} from '../../_auth/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAccountsByAdmin()
      .subscribe( (data: any) =>
          this.accounts = data.obj,
      error => console.log(error)
  );
  }
}
