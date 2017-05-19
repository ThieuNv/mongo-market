import {Routes, RouterModule} from '@angular/router';
import {ProdHomeComponent} from './prod-home/prod-home.component';
import {ProdListComponent} from './prod-list/prod-list.component';
import {ProdFormComponent} from './prod-form/prod-form.component';

// Define the routes
const PROD_MAN_ROUTES: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'home', component: ProdHomeComponent
  },
  {
    path: 'all', component: ProdListComponent
  },
  {
    path: 'create', component: ProdFormComponent
  },
  {
    path: 'edit', component: ProdFormComponent
  }
];

export const prodManRouting = RouterModule.forChild(PROD_MAN_ROUTES);
