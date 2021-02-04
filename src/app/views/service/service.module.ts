import { HttpClientModule } from '@angular/common/http';
import { AddEditClientComponent } from './components/add-edit-client/add-edit-client.component';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

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
    AddEditClientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: []
})
export class ServiceModule { }
