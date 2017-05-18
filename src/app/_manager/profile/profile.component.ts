import { Component, OnInit } from '@angular/core';
import {Manager} from '../../_models/manager.model';
import {UserService} from '../../_auth/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SocialMedia} from '../../_models/social-media.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myForm: FormGroup;
  manager: Manager;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      about: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
      facebook: new FormControl(null, Validators.required),
      twitter: new FormControl(null, Validators.required),
      google: new FormControl(null, Validators.required),
    });

    this.manager = this.userService.getManager();
  }

  onSubmit() {
    const media = new SocialMedia(
        this.myForm.value.facebook,
      this.myForm.value.twitter,
      this.myForm.value.google,
      null
    );
    const myManager = new Manager(this.myForm.value.username,
      this.myForm.value.gender, null,
      this.myForm.value.about, media, this.myForm.value.message
    );

    console.log(myManager);
    this.userService.updateManagerDetail(myManager)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.myForm.reset();
  }
}
