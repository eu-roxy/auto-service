import { AddEditClientComponent } from './../add-edit-client/add-edit-client.component';
import { ClientInterface } from './../../../../core/interfaces/client.interface';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnChanges {

  @Input() public clients: ClientInterface[] = [];
  @Output() public deleteClientEvent: EventEmitter<number> = new EventEmitter();

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'actions'];
  dataSource = new MatTableDataSource();

  constructor (public dialog: MatDialog) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('clients') && this.clients) {
      this.dataSource = new MatTableDataSource(this.clients);
    }
  }

  openDialog(client: ClientInterface): void {
    const dialogRef = this.dialog.open(AddEditClientComponent, {
      width: '250px',
      data: client
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
