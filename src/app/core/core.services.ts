import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ClientsService } from './services/clients.service';


@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    ClientsService
  ]
})
export class CoreServices { }
