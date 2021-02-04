import { ClientInterface } from './../../../../core/interfaces/client.interface';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnChanges {

  @Input() public clients: ClientInterface[] = [];

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'actions'];
  dataSource = new MatTableDataSource();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('clients') && this.clients) {
      this.dataSource = new MatTableDataSource(this.clients);
    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
