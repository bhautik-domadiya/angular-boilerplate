import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginLayoutComponent} from './login-layout.component';
import {AuthComponent} from './components/auth/auth.component';
import {ForgetPasswordComponent} from './components/forget-password/forget-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: AuthComponent,
        data: {
          route: 'auth'
        }
      },
      {
        path: 'forget/:id',
        component: ForgetPasswordComponent,
        data: {
          route: 'auth/forget',
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
