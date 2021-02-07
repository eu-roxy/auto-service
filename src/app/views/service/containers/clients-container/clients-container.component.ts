import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from './../../../../core/services/clients.service';
import { ClientInterface } from './../../../../core/interfaces/client.interface';


@Component({
  templateUrl: './clients-container.component.html'
})
export class ClientsContainerComponent implements OnInit {


  public clients$: Observable<ClientInterface[]>;

  constructor (private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  deleteClient(id: number) {
    this.clientsService.deleteItem(id).subscribe(() => {
      this.reloadData();
    });
  }

  reloadData() {
      this.clients$ = this.clientsService.getList();
  }


}
