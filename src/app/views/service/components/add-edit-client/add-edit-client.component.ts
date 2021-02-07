import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ClientsService } from './../../../../core/services/clients.service';
import { ClientInterface } from './../../../../core/interfaces/client.interface';
import { Component, Inject, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.scss']
})
export class AddEditClientComponent implements OnInit, OnDestroy {

  @Output() public dataChanged: EventEmitter<void> = new EventEmitter();

  public dialogTitle: string;
  public dialogActionButtonTitle: string;

  private destroyNotifier: Subject<void> = new Subject<void>();

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
        email: ''
      };
    } else if(this.data) {
      this.dialogTitle = 'Client ' + this.data.firstName;
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

  public addOrUpdateClient(data: ClientInterface) {
    if (data.id) {
      this.clientsService.updateItem(data.id, data)
      .pipe(takeUntil(this.destroyNotifier))
      .subscribe(() => {
        console.log('success');
        this.dataChanged.emit();
        this.dialogRef.close();
      });
    } else {
      this.data.id = new Date().getTime();
      this.clientsService.createItem(data)
      .pipe(takeUntil(this.destroyNotifier))
      .subscribe(() => {
        console.log('created');
        this.dataChanged.emit();
        this.dialogRef.close();
      });
    }
  }

}
