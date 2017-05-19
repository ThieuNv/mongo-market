import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MaterializeModule} from 'angular2-materialize';

import { prodManRouting} from './prod-man.routing';
import {ProdListComponent} from './prod-list/prod-list.component';
import {ProdFormComponent} from './prod-form/prod-form.component';
import {ProdHomeComponent} from './prod-home/prod-home.component';

@NgModule({
  declarations: [
    ProdHomeComponent,
    ProdListComponent,
    ProdFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    prodManRouting
  ],
  providers: [ ],

})
export class ProdManModule { }
