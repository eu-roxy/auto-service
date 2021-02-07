import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { InspectionInterface } from './../../../../core/interfaces/inspection.interface';
import { InspectionsService } from './../../../../core/services/inspections.service';
import { GlobalRegistryService } from './../../../../core/services/global-registry.service';
import { VehicleInterface } from './../../../../core/interfaces/vehicle.interface';
import { Component, Inject, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-vehicle',
  templateUrl: './add-edit-inspections.component.html',
  styleUrls: ['./add-edit-inspections.component.scss']
})

export class AddEditInspectionsComponent implements OnInit, OnDestroy {

  public dialogTitle: string;
  public dialogActionButtonTitle: string;

  private destroyNotifier: Subject<void> = new Subject<void>();

  @Output() public dataChanged: EventEmitter<void> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<AddEditInspectionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InspectionInterface,
    private inspectionsService: InspectionsService,
    private globalRegistryService: GlobalRegistryService) {}

  public ngOnInit(): void {
    if(this.data === null) {
      this.dialogTitle = 'New Inspection';
      this.dialogActionButtonTitle = 'Add';
      this.data = {
        id: null,
        vehicleId: null,
        cost: '',
        notes: '',
        date: ''
      };
    } else if(this.data) {
      this.dialogTitle = 'Inspection';
      this.dialogActionButtonTitle = 'Update';
    }
  }

  public ngOnDestroy(): void {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public addOrUpdateInspection(data: InspectionInterface): void {
    if(data.id) {
      this.inspectionsService.updateItem(data.id, data)
      .pipe(takeUntil(this.destroyNotifier))
      .subscribe(() => {
        console.log('success');
        this.dataChanged.emit();
        this.dialogRef.close();
      });
    } else {
      this.data.id = new Date().getTime();
      this.data.vehicleId = this.globalRegistryService.currentVehicleId;
      this.inspectionsService.createItem(data)
      .pipe(takeUntil(this.destroyNotifier))
      .subscribe(() => {
        console.log('created');
        this.dataChanged.emit();
        this.dialogRef.close();
      })
    }
  }

}
