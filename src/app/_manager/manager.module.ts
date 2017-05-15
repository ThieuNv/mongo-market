import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';
import {MaterializeModule} from 'angular2-materialize/dist';

import {managerRouting} from './manager.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    managerRouting
  ],
  providers: [ ],

})
export class ManagerModule { }
