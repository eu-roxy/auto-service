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
    public vehicleService: VehiclesService) {}

  public ngOnInit(): void {
    if(this.data === null) {
      this.dialogTitle = 'New Vehicle';
      this.dialogActionButtonTitle = 'Add';
      this.data = {
        id: null,
        model: '',
        year: null,
        km: null,
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
    console.log('in create/update', data);
    if(data.id) {
      this.vehicleService.updateItem(data.id, data).subscribe(() => {
        console.log('success');
        this.dataChanged.emit();
        this.dialogRef.close();
      });
    } else {
      this.data.id = this.generateUniqId();
      this.data.image = 'https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG';
      this.vehicleService.createItem(data).subscribe(() => {
        console.log('created');
        this.dataChanged.emit();
        this.dialogRef.close();
      })
    }
  }

  private generateUniqId(): number{
    return Math.floor(Math.random() * 100)
  };

}
