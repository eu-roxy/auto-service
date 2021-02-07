import { takeUntil } from 'rxjs/operators';
import { GlobalRegistryService } from './../../../../core/services/global-registry.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { InspectionsService } from './../../../../core/services/inspections.service';
import { InspectionInterface } from './../../../../core/interfaces/inspection.interface';



@Component({
  templateUrl: './inspections-container.component.html'
})
export class InspectionsContainerComponent implements OnInit, OnDestroy{

  public inspections$: Observable<InspectionInterface[]>;

  private destroyNotifier: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute,
    private inspectionsService: InspectionsService,
    private globalRegistryService: GlobalRegistryService) {

  }

  ngOnInit() {
    this.route.params
    .pipe(takeUntil(this.destroyNotifier))
    .subscribe((params: Params) => {
      console.log(params);
      if (params['vehicleId']) {
        this.globalRegistryService.currentVehicleId = params['vehicleId'];
        this.reloadData();
      }
    });
  }

  ngOnDestroy() {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();
  }

  deleteInspection(id: number) {
    console.log(id);
    this.inspectionsService.deleteItem(id)
    .pipe(takeUntil(this.destroyNotifier))
    .subscribe(() => {
      this.reloadData();
    });
  }

  reloadData() {
    this.inspections$ = this.inspectionsService.getList({
      vehicleId: this.globalRegistryService.currentVehicleId
    });
  }
}
