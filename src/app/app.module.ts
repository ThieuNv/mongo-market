import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import {MessagesService} from './messages/messages.service';

import { FooterComponent } from './_shared/footer/footer.component';
import { BreadcrumbComponent } from './_shared/breadcrumb/breadcrumb.component';

import {AuthService} from './_auth/auth.service';
import {UserService} from './_auth/user.service';
import { SigninComponent } from './_auth/signin/signin.component';
import { SignupComponent } from './_auth/signup/signup.component';


import {ManagerComponent} from './_manager/manager.component';
import {NavigationComponent} from './_manager/_shared/navigation/navigation.component';


import {WebModule} from './_web/web.module';
import { WebComponent } from './_web/web.component';
import { SidenavComponent } from './_web/_shared/sidenav/sidenav.component';


import {CustomerComponent} from './_web/customer/customer.component';
import {SidenavCusComponent} from './_web/customer/sidenav-cus/sidenav-cus.component';
import {HeaderCusComponent} from './_web/customer/header-cus/header-cus.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,


    SigninComponent,
    SignupComponent,


    FooterComponent,
    BreadcrumbComponent,


    WebComponent,
    SidenavComponent,


    ManagerComponent,
    NavigationComponent,


    CustomerComponent,
    SidenavCusComponent,
    HeaderCusComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    routing,
    WebModule
  ],
  providers: [ MessagesService, AuthService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
