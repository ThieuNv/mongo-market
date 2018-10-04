import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';
import {MaterializeModule} from 'angular2-materialize/dist';

import {customerRouting} from './customer.routing';
import {ProfileCusComponent} from './profile-cus/profile-cus.component';
import {OrderCusComponent} from './order-cus/order-cus.component';
import {ManageCusComponent} from './manage-cus/manage-cus.component';
import {WishlistCusComponent} from './wishlist-cus/wishlist-cus.component';
import {EmailCusComponent} from './email-cus/email-cus.component';
import {CouponCusComponent} from './coupon-cus/coupon-cus.component';


@NgModule({
  declarations: [
    ProfileCusComponent,
    OrderCusComponent,
    WishlistCusComponent,
    ManageCusComponent,
    EmailCusComponent,
    CouponCusComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    customerRouting
  ],
  providers: [ ],

})
export class CustomerModule { }
