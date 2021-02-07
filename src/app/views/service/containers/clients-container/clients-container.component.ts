import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientsService } from './../../../../core/services/clients.service';
import { ClientInterface } from './../../../../core/interfaces/client.interface';


@Component({
  templateUrl: './clients-container.component.html'
})
export class ClientsContainerComponent implements OnInit, OnDestroy {


  public clients$: Observable<ClientInterface[]>;

  private destroyNotifier: Subject<void> = new Subject<void>();

  constructor (private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  ngOnDestroy() {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();
  }

  deleteClient(id: number) {
    this.clientsService.deleteItem(id)
    .pipe(takeUntil(this.destroyNotifier))
    .subscribe(() => {
      this.reloadData();
    });
  }

  reloadData() {
      this.clients$ = this.clientsService.getList();
  }


}
