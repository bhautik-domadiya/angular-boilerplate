import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseLayoutComponent} from './base-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then((m) => m.LoginModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../user-demo/user-demo.module').then((m) => m.UserDemoModule)
      },
      // {
      //   path: '**',
      //   component: PageNotFoundComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseLayoutRoutingModule {
}
