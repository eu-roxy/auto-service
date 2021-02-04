import { ClientInterface } from './../../../../core/interfaces/client.interface';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html'
})
export class AddEditClientComponent {
  constructor(
    public dialogRef: MatDialogRef<AddEditClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClientInterface) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
