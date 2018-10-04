import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterializeModule} from 'angular2-materialize';

import { prodManRouting} from './prod-man.routing';
import {ProdListComponent} from './prod-list/prod-list.component';
import {ProdFormComponent} from './prod-form/prod-form.component';
import {ProdHomeComponent} from './prod-home/prod-home.component';
import { ProdComponent } from './prod/prod.component';

@NgModule({
  declarations: [
    ProdHomeComponent,
    ProdListComponent,
    ProdFormComponent,
    ProdComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    prodManRouting
  ]
})
export class ProdManModule { }
