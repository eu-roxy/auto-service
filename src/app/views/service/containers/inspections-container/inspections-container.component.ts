import { GlobalRegistryService } from './../../../../core/services/global-registry.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { InspectionsService } from './../../../../core/services/inspections.service';
import { InspectionInterface } from './../../../../core/interfaces/inspection.interface';



@Component({
  templateUrl: './inspections-container.component.html'
})
export class InspectionsContainerComponent {

  public inspections$: Observable<InspectionInterface[]>;

  constructor(private route: ActivatedRoute,
    private inspectionsService: InspectionsService,
    private globalRegistryService: GlobalRegistryService) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      if (params['vehicleId']) {
        this.globalRegistryService.currentVehicleId = params['vehicleId'];
        this.reloadData();
      }
    });
  }

  deleteInspection(id: number) {
    console.log(id);
    this.inspectionsService.deleteItem(id).subscribe(() => {
      this.reloadData();
    });
  }

  reloadData() {
    this.inspections$ = this.inspectionsService.getList({
      vehicleId: this.globalRegistryService.currentVehicleId
    });
  }
}
