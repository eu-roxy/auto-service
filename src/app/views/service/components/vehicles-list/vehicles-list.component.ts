import { MatDialog } from '@angular/material/dialog';
import { VehicleInterface } from './../../../../core/interfaces/vehicle.interface';
import { ClientInterface } from './../../../../core/interfaces/client.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AddEditVehicleComponent } from '../add-edit-vehicle/add-edit-vehicle.component';


@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent {

  @Input() client: ClientInterface;
  @Output() dataChanged: EventEmitter<void> = new EventEmitter();

  constructor (public dialog: MatDialog) {
  }

  public openDialog(vehicle: VehicleInterface): void {
    const dialogRef = this.dialog.open(AddEditVehicleComponent, {
      width: '500px',
      data: vehicle ? vehicle : null
    });
    dialogRef.componentInstance.dataChanged.subscribe(() => {
      this.dataChanged.emit();
    })
  }

}
