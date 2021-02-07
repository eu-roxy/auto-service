import { InspectionInterface } from './../../../../core/interfaces/inspection.interface';
import { VehicleInterface } from './../../../../core/interfaces/vehicle.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ClientInterface } from 'src/app/core/interfaces/client.interface';
import { ClientsService } from 'src/app/core/services/clients.service';
import { InspectionsService } from 'src/app/core/services/inspections.service';
import { VehiclesService } from 'src/app/core/services/vehicles.service';


@Component({
  templateUrl: './dashboard-container.component.html'
})
export class DashboardContainerComponent implements OnInit {

  public myClients: ClientInterface[] = [];
  public myCars: VehicleInterface[] = [];
  public myInspections: InspectionInterface[] = [];

  public totalCosts: number = 0;

  constructor(private clientsService: ClientsService,
              private inspectionsService: InspectionsService,
              private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.getMyClients();
  }

  public getMyClients(): void {
    this.clientsService.getList().subscribe((clients: ClientInterface[]) => {
      this.myClients = clients;
    });

    this.getMyCars();
  }

  public getMyCars(): void {
    this.vehiclesService.getList().subscribe((cars: VehicleInterface[]) => {
      let clientsIds = this.myClients.map(c => c.id);
      cars.forEach((car: VehicleInterface) => {
        if (clientsIds.includes(car.clientId)) {
          this.myCars.push(car);
        }
      });
    });

    this.getMyInspections();
  }

  public getMyInspections(): void {
    this.inspectionsService.getList().subscribe((insp: InspectionInterface[]) => {
      let carsIds = this.myCars.map(c => c.id);
      insp.forEach((i: InspectionInterface) => {
        if (carsIds.includes(i.id)) {
          this.myInspections.push(i);
        }

        this.totalCosts += parseInt(i.cost);
      });
    })
  }

}
