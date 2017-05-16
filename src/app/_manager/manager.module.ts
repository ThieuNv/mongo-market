import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';
import {MaterializeModule} from 'angular2-materialize/dist';

import {managerRouting} from './manager.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    PostComponent,
    AccountComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    managerRouting
  ],
  providers: [ ],

})
export class ManagerModule { }
