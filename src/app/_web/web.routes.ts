import {Routes} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
import {CustomerComponent} from './customer/customer.component';

export const WEB_ROUTES: Routes =  [
  {
    path: '', redirectTo: 'categories', pathMatch: 'full'
  },
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'detail-product', component: ProductComponent
  },
  {
    path: 'detail-product/:id', component: ProductComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'customer', component: CustomerComponent, loadChildren: './_web/customer/customer.module#CustomerModule'
  },
];

