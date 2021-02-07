import { Subject } from 'rxjs';
import { Component, EventEmitter, Input, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditInspectionsComponent } from '../add-edit-inspections/add-edit-inspections.component';

import { InspectionInterface } from './../../../../core/interfaces/inspection.interface';
import { takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-inspections-list',
  templateUrl: './inspections-list.component.html',
  styleUrls: ['./inspections-list.component.scss']
})
export class InspectionsListComponent implements OnDestroy{

  @Input() inspections: InspectionInterface[] = [];

  @Output() public deleteInspectionEvent: EventEmitter<number> = new EventEmitter();
  @Output() public dataChanged: EventEmitter<void> = new EventEmitter();

  displayedColumns: string[] = ['id', 'date', 'cost', 'notes', 'actions'];
  dataSource = new MatTableDataSource();

  private destroyNotifier: Subject<void> = new Subject<void>();

  constructor (public dialog: MatDialog) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('inspections') && this.inspections) {
      this.dataSource = new MatTableDataSource(this.inspections);
    }
  }

  ngOnDestroy() {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();
  }

  openDialog(inspection?: InspectionInterface): void {
    const dialogRef = this.dialog.open(AddEditInspectionsComponent, {
      width: '500px',
      data: inspection ? inspection : null
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
