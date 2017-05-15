import {Routes, RouterModule} from '@angular/router';
import {ManageCusComponent} from './manage-cus/manage-cus.component';
import {OrderCusComponent} from './order-cus/order-cus.component';
import {WishlistCusComponent} from './wishlist-cus/wishlist-cus.component';
import {ProfileCusComponent} from './profile-cus/profile-cus.component';
import {EmailCusComponent} from './email-cus/email-cus.component';
import {CouponCusComponent} from './coupon-cus/coupon-cus.component';

// Define the routes
const CUSTOMER_ROUTES: Routes = [
  {
    path: '', redirectTo: 'manage-account', pathMatch: 'full',
  },
  {
    path: 'manage-account', component: ManageCusComponent
  },
  {
    path: 'orders', component: OrderCusComponent
  },
  {
    path: 'wishlist', component: WishlistCusComponent
  },
  {
    path: 'profile', component: ProfileCusComponent
  },
  {
    path: 'email', component: EmailCusComponent
  },
  {
    path: 'coupon', component: CouponCusComponent
  }
];

export const customerRouting = RouterModule.forChild(CUSTOMER_ROUTES);
