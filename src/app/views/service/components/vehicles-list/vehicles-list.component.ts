import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { VehicleInterface } from './../../../../core/interfaces/vehicle.interface';
import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AddEditVehicleComponent } from '../add-edit-vehicle/add-edit-vehicle.component';


@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnDestroy{

  @Input() vehicles: VehicleInterface[];
  @Output() dataChanged: EventEmitter<void> = new EventEmitter();
  @Output() deleteVehicleEvent: EventEmitter<void> = new EventEmitter();

  private destroyNotifier: Subject<void> = new Subject<void>();

  constructor (public dialog: MatDialog) {
  }

  ngOnDestroy() {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();
  }

  public openDialog(vehicle?: VehicleInterface): void {
    const dialogRef = this.dialog.open(AddEditVehicleComponent, {
      width: '500px',
      data: vehicle ? vehicle : null
    });
    dialogRef.componentInstance.dataChanged
    .pipe(takeUntil(this.destroyNotifier))
    .subscribe(() => {
      this.dataChanged.emit();
    })
  }

}
