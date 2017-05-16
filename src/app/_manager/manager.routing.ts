import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {PostComponent} from './post/post.component';
import {AccountComponent} from './account/account.component';

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
    path: 'posts', component: PostComponent
  },
  {
    path: 'accounts', component: AccountComponent
  }
];

export const managerRouting = RouterModule.forChild(MANAGER_ROUTES);
