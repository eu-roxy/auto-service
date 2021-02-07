import { takeUntil } from 'rxjs/operators';
import { GlobalRegistryService } from './../../../../core/services/global-registry.service';
import { VehicleInterface } from './../../../../core/interfaces/vehicle.interface';
import { VehiclesService } from './../../../../core/services/vehicles.service';
import { Observable, Subject } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './vehicles-container.component.html'
})
export class VehiclesContainerComponent implements OnInit, OnDestroy {

  public vehicle$: Observable<VehicleInterface[]>;

  private destroyNotifier: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute,
    private vehiclesService: VehiclesService,
    private globalRegistryService: GlobalRegistryService) {

  }

  ngOnInit() {
    this.route.params
    .pipe(takeUntil(this.destroyNotifier))
    .subscribe((params: Params) => {
      console.log(params);
      if (params['clientId']) {
        this.globalRegistryService.currentClientId = params['clientId'];
        this.reloadData();
      }
    });
  }

  ngOnDestroy() {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();
  }

  public deleteVehicle(id: number): void {
    this.vehiclesService.deleteItem(id)
    .pipe(takeUntil(this.destroyNotifier))
    .subscribe(() => {
      this.reloadData();
    })
  }

  public reloadData(): void {
    this.vehicle$ = this.vehiclesService.getList({clientId: this.globalRegistryService.currentClientId});
  }

}
