import { VehiclesService } from './services/vehicles.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';
import { ClientsService } from './services/clients.service';


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
    VehiclesService
  ]
})
export class CoreServices { }
