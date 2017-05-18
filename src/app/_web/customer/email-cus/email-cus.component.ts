import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../../../_auth/user.service';
import {Customer} from '../../../_models/customer.model';


@Component({
  selector: 'app-email-cus',
  templateUrl: './email-cus.component.html',
  styleUrls: ['./email-cus.component.css']
})
export class EmailCusComponent implements OnInit {

  customer: Customer;
  email: string;

  myForm: FormGroup;
  showForm: Boolean = false;

  constructor(private userService: UserService) {
    this.email = this.userService.getEmail();
    this.customer = this.userService.getCustomer();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      phone: new FormControl(null, Validators.required),
      deliverAddr: new FormControl(null, Validators.required),
      paymentAddr: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const updateData = {
      phoneNumber: this.myForm.value.phone,
      deliverAddress: this.myForm.value.deliverAddr,
      paymentAddress: this.myForm.value.paymentAddr
    };
    this.userService.updateCustomerContact(updateData)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
    this.myForm.reset();
  }

  openForm() {
   this.showForm = true;
  }
  closeForm() {
    this.showForm = false;
  }
}
