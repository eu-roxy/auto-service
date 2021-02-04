import { ClientsContainerComponent } from './views/service/containers/clients-container/clients-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './shared/layout/base/base.component';
import { DashboardContainerComponent } from './views/service/containers/dashboard-container/dashboard-container.component';

const routes: Routes = [
  {
    path: 'pages',
    component: BaseComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardContainerComponent
      },
      {
        path: 'clients',
        component: ClientsContainerComponent
      },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: '**',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
      path: '',
      redirectTo: 'pages',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
