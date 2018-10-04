import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MaterializeModule} from 'angular2-materialize';

import {managerRouting} from './manager.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import {ProdManComponent} from './prod-man/prod-man.component';
import {ProdHomeComponent} from './prod-man/prod-home/prod-home.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AccountComponent,

    ProdManComponent

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
