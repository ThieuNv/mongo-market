import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../auth.service';
import {User} from '../user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
      ]),
      password: new FormControl(null, Validators.required),

    });
  }

  onSubmit() {
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    this.authService.signin(user)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          localStorage.setItem('fullName', data.fullName);
          if (data.targetAccount.indexOf('manager') === -1) {
            this.router.navigateByUrl('/customer');
          }
          if (data.targetAccount.indexOf('customer') === -1) {
            this.router.navigateByUrl('/manager');
          }
          this.router.navigateByUrl('/manager');
          console.log(data);
        },
        error => console.error(error)
      );
    this.myForm.reset();
  }

}
