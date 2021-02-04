import { ClientsService } from './../../../../core/services/clients.service';
import { ClientInterface } from './../../../../core/interfaces/client.interface';
import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.scss']
})
export class AddEditClientComponent implements OnInit {

  @Output() public dataChanged: EventEmitter<void> = new EventEmitter();

  public dialogTitle: string;
  public dialogActionButtonTitle: string;

  constructor(
    public dialogRef: MatDialogRef<AddEditClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClientInterface,
    private clientsService: ClientsService) {}

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
        vehicles: []
      };
    } else if(this.data) {
      this.dialogTitle = 'Client ' + this.data.firstName;
      this.dialogActionButtonTitle = 'Update';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public addOrUpdateClient(data: ClientInterface) {
    console.log('data', data);

    if (data.id) {
      this.clientsService.updateItem(data.id, data).subscribe(() => {
        console.log('success');
        this.dataChanged.emit();
        this.dialogRef.close();
      });
    } else {
      this.clientsService.createItem(data).subscribe(() => {
        console.log('created');
        this.dataChanged.emit();
        this.dialogRef.close();
      });
    }

  }
}
