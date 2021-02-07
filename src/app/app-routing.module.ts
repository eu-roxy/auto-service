import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';
import { InspectionsContainerComponent } from './views/service/containers/inspections-container/inspections-container.component';
import { VehiclesContainerComponent } from './views/service/containers/vehicles-container/vehicles-container.component';
import { ClientsContainerComponent } from './views/service/containers/clients-container/clients-container.component';
import { BaseComponent } from './shared/layout/base/base.component';
import { DashboardContainerComponent } from './views/service/containers/dashboard-container/dashboard-container.component';
import { LoginComponent } from './views/auth/components/login/login.component';

const routes: Routes = [
  {
    path: 'pages',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardContainerComponent
      },
      {
        path: 'clients',
        component: ClientsContainerComponent
      },
      {
        path: 'client/:clientId/vehicles',
        component: VehiclesContainerComponent
      },
      {
        path: 'vehicle/:vehicleId/inspections',
        component: InspectionsContainerComponent
      },
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
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
