import { RouterModule } from '@angular/router';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehiclesContainerComponent } from './containers/vehicles-container/vehicles-container.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEditClientComponent } from './components/add-edit-client/add-edit-client.component';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { ClientsContainerComponent } from './containers/clients-container/clients-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    DashboardContainerComponent,
    DashboardComponent,
    ClientsContainerComponent,
    ClientsTableComponent,
    AddEditClientComponent,
    VehiclesContainerComponent,
    VehiclesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: []
})
export class ServiceModule { }
