import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AddEditClientComponent } from './../add-edit-client/add-edit-client.component';
import { ClientInterface } from './../../../../core/interfaces/client.interface';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnChanges, OnDestroy {

  @Input() public clients: ClientInterface[] = [];
  @Output() public deleteClientEvent: EventEmitter<number> = new EventEmitter();
  @Output() public dataChanged: EventEmitter<void> = new EventEmitter();

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'actions'];
  dataSource = new MatTableDataSource();

  private destroyNotifier: Subject<void> = new Subject<void>();

  constructor (public dialog: MatDialog) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('clients') && this.clients) {
      this.dataSource = new MatTableDataSource(this.clients);
    }
  }

  ngOnDestroy() {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();
  }

  openDialog(client?: ClientInterface): void {
    const dialogRef = this.dialog.open(AddEditClientComponent, {
      width: '500px',
      data: client ? client : null
    });
    dialogRef.componentInstance.dataChanged
    .pipe(takeUntil(this.destroyNotifier))
    .subscribe(() => {
      this.dataChanged.emit();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
