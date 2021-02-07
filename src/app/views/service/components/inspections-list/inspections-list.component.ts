import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { InspectionInterface } from './../../../../core/interfaces/inspection.interface';



@Component({
  selector: 'app-inspections-list',
  templateUrl: './inspections-list.component.html',
  styleUrls: ['./inspections-list.component.scss']
})
export class InspectionsListComponent {

  @Input() inspections: InspectionInterface[] = [];

  @Output() public deleteInspectionEvent: EventEmitter<number> = new EventEmitter();
  // @Output() public dataChanged: EventEmitter<void> = new EventEmitter();

  displayedColumns: string[] = ['id', 'date', 'cost', 'notes', 'actions'];
  dataSource = new MatTableDataSource();

  constructor (public dialog: MatDialog) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('inspections') && this.inspections) {
      this.dataSource = new MatTableDataSource(this.inspections);
    }
  }

  openDialog(inspection?: InspectionInterface): void {
    // const dialogRef = this.dialog.open(AddEditClientComponent, {
    //   width: '500px',
    //   data: client ? client : null
    // });
    // dialogRef.componentInstance.dataChanged.subscribe(() => {
    //   this.dataChanged.emit();
    // });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
