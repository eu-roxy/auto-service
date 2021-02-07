import { GlobalRegistryService } from './../../../../core/services/global-registry.service';
import { VehicleInterface } from './../../../../core/interfaces/vehicle.interface';
import { VehiclesService } from './../../../../core/services/vehicles.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './vehicles-container.component.html'
})
export class VehiclesContainerComponent implements OnInit {

  public vehicle$: Observable<Array<VehicleInterface>>;

  constructor(private route: ActivatedRoute,
    private vehiclesService: VehiclesService,
    private globalRegistryService: GlobalRegistryService) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      if (params['clientId']) {
        this.globalRegistryService.currentClientId = params['clientId'];
        this.reloadData();
      }
    });
  }

  public deleteVehicle(id: number): void {
    this.vehiclesService.deleteItem(id).subscribe(() => {
      this.reloadData();
    })
  }

  public reloadData(): void {
    this.vehicle$ = this.vehiclesService.getList({clientId: this.globalRegistryService.currentClientId});
  }

}
