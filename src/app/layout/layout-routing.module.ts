import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'auth',
        children: [
          {
            path: 'register',
            component: RegisterComponent,
          },
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: '',
            redirectTo: 'register',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: '',
        loadChildren: () =>
          import('../global-feed/global-feed.module').then(
            (m) => m.GlobalFeedModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
