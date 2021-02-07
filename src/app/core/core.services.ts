import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthGuard } from './guard/auth.guard';
import { VehiclesService } from './services/vehicles.service';
import { AuthService } from './services/auth.service';
import { ClientsService } from './services/clients.service';
import { InspectionsService } from './services/inspections.service';


@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    ClientsService,
    AuthService,
    AuthGuard,
    VehiclesService,
    InspectionsService
  ]
})
export class CoreServices { }
