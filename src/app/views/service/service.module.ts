import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { ClientsContainerComponent } from './containers/clients-container/clients-container.component';
import { AddEditClientComponent } from './components/add-edit-client/add-edit-client.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehiclesContainerComponent } from './containers/vehicles-container/vehicles-container.component';
import { AddEditVehicleComponent } from './components/add-edit-vehicle/add-edit-vehicle.component';
import { InspectionsListComponent } from './components/inspections-list/inspections-list.component';
import { InspectionsContainerComponent } from './containers/inspections-container/inspections-container.component';


@NgModule({
  declarations: [
    ClientsContainerComponent,
    ClientsTableComponent,
    AddEditClientComponent,
    VehiclesContainerComponent,
    VehiclesListComponent,
    AddEditVehicleComponent,
    InspectionsContainerComponent,
    InspectionsListComponent
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
