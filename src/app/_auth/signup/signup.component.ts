import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../../_models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')
      ]),
      password: new FormControl(null, Validators.required),
      birthday: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const user = new User(this.myForm.value.email,
                          this.myForm.value.password,
                          this.myForm.value.fullName,
                          this.myForm.value.birthday);

    console.log(user);
    this.authService.signup(user)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.myForm.reset();
  }

}
