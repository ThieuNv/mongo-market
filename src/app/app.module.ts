import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';


import { FooterComponent } from './_shared/footer/footer.component';
import { BreadcrumbComponent } from './_shared/breadcrumb/breadcrumb.component';
import { CustomCardComponent } from './_shared/custom-card/custom-card.component';


import { SigninComponent } from './_auth/signin/signin.component';
import { SignupComponent } from './_auth/signup/signup.component';


import {ManagerComponent} from './_manager/manager.component';
import {HeaderManComponent} from './_manager/_shared/header-man/header-man.component';
import {SidenavLeftComponent} from './_manager/_shared/sidenav-left/sidenav-left.component';
import {SidenavRightComponent} from './_manager/_shared/sidenav-right/sidenav-right.component';
import {FooterManComponent} from './_manager/_shared/footer-man/footer-man.component';


import {WebModule} from './_web/web.module';
import { WebComponent } from './_web/web.component';
import { SidenavComponent } from './_web/_shared/sidenav/sidenav.component';


import {CustomerComponent} from './_web/customer/customer.component';
import {SidenavCusComponent} from './_web/customer/sidenav-cus/sidenav-cus.component';
import {HeaderCusComponent} from './_web/customer/header-cus/header-cus.component';


import {ProductService} from './_services/product.service';
import {AuthService} from './_auth/auth.service';
import {UserService} from './_auth/user.service';
import {MessagesService} from './messages/messages.service';


import { DropdownDirective } from './_directives/dropdown.directive';
import { HighlightDirective } from './_directives/highlight.directive';
import { TestDirectiveComponent } from './_test/test-directive/test-directive.component';
import { ShowmoreDirective } from './_directives/showmore.directive';
import { ChangeBackgroundDirective } from './_directives/change-background.directive';
import { ChangeColorDirective } from './_directives/change-color.directive';
import { BasicHighlightDirective } from './_directives/basic-highlight.directive';
import { BetterHighlightDirective } from './_directives/better-highlight.directive';
import {ChangeUxService} from './_services/change-ux.service';



@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,


    SigninComponent,
    SignupComponent,


    FooterComponent,
    BreadcrumbComponent,
    CustomCardComponent,


    WebComponent,
    SidenavComponent,


    ManagerComponent,
    HeaderManComponent,
    SidenavLeftComponent,
    SidenavRightComponent,
    FooterManComponent,


    CustomerComponent,
    SidenavCusComponent,
    HeaderCusComponent,


    DropdownDirective,


    HighlightDirective,


    TestDirectiveComponent,


    ShowmoreDirective,


    ChangeBackgroundDirective,


    ChangeColorDirective,


    BasicHighlightDirective,


    BetterHighlightDirective



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
  providers: [ MessagesService, AuthService, UserService , ProductService, ChangeUxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
