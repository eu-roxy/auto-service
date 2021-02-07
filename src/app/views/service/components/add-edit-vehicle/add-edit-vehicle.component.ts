import { GlobalRegistryService } from './../../../../core/services/global-registry.service';
import { VehiclesService } from './../../../../core/services/vehicles.service';
import { VehicleInterface } from './../../../../core/interfaces/vehicle.interface';
import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-vehicle',
  templateUrl: './add-edit-vehicle.component.html',
  styleUrls: ['./add-edit-vehicle.component.scss']
})

export class AddEditVehicleComponent implements OnInit {

  public dialogTitle: string;
  public dialogActionButtonTitle: string;

  @Output() public dataChanged: EventEmitter<void> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<AddEditVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VehicleInterface,
    private vehicleService: VehiclesService,
    private globalRegistryService: GlobalRegistryService) {}

  public ngOnInit(): void {
    if(this.data === null) {
      this.dialogTitle = 'New Vehicle';
      this.dialogActionButtonTitle = 'Add';
      this.data = {
        id: null,
        model: '',
        year: null,
        km: null,
        clientId: null,
        image: ''
      };
    } else if(this.data) {
      this.dialogTitle = 'Vehicle ' + this.data.model;
      this.dialogActionButtonTitle = 'Update';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public addOrUpdateVehicle(data: VehicleInterface): void {
    if(data.id) {
      this.vehicleService.updateItem(data.id, data).subscribe(() => {
        console.log('success');
        this.dataChanged.emit();
        this.dialogRef.close();
      });
    } else {
      this.data.id = new Date().getTime();
      this.data.image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/BMW_G20_IMG_0167.jpg/1200px-BMW_G20_IMG_0167.jpg';
      this.data.clientId = this.globalRegistryService.currentClientId;
      this.vehicleService.createItem(data).subscribe(() => {
        console.log('created');
        this.dataChanged.emit();
        this.dialogRef.close();
      })
    }
  }

}
