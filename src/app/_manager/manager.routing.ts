import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {AccountComponent} from './account/account.component';
import {ProdManComponent} from './prod-man/prod-man.component';

// Define the routes
const MANAGER_ROUTES: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full',
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'product', component: ProdManComponent, loadChildren: './prod-man/prod-man.module#ProdManModule'
  },
  {
    path: 'accounts', component: AccountComponent
  }
];

export const managerRouting = RouterModule.forChild(MANAGER_ROUTES);
