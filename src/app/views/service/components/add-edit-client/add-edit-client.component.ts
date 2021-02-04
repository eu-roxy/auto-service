import { ClientInterface } from './../../../../core/interfaces/client.interface';
import { Component, Inject, OnInit, OnChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.scss']
})
export class AddEditClientComponent implements OnInit {

  public dialogTitle: string;
  public dialogActionButtonTitle: string;

  constructor(
    public dialogRef: MatDialogRef<AddEditClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClientInterface) {}

  public ngOnInit(): void {
    if(this.data === null) {
      this.dialogTitle = 'New Client';
      this.dialogActionButtonTitle = 'Add';
      this.data = {
        id: null,
        firstName: '',
        lastName: '',
        address: '',
        email: '',
      };
    } else if(this.data)
    {
      this.dialogTitle = 'Client ' + this.data.firstName;
      this.dialogActionButtonTitle = 'Update';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public addOrUpdateClient(data: ClientInterface) {
    console.log('data', data);
  }
}
