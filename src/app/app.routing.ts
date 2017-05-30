import {Routes, RouterModule} from '@angular/router';

import {WEB_ROUTES} from './_web/web.routes';

import {MessagesComponent} from './messages/messages.component';
import {SigninComponent} from './_auth/signin/signin.component';
import {SignupComponent} from './_auth/signup/signup.component';
import {ManagerComponent} from './_manager/manager.component';
import {WebComponent} from './_web/web.component';
import {TestDirectiveComponent} from './_test/test-directive/test-directive.component';


// Define the routes
const APP_ROUTES: Routes = [
  {
    path: '', redirectTo: 'page', pathMatch: 'full'
  },
  {
    path: 'page', component: WebComponent, children: WEB_ROUTES
  },
  {
    path: 'messages', component: MessagesComponent
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'manager', component: ManagerComponent, loadChildren: './_manager/manager.module#ManagerModule'
  },
  {
    path: 'test', component: TestDirectiveComponent,
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
