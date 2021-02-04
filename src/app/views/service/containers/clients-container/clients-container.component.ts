import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from './../../../../core/services/clients.service';
import { ClientInterface } from './../../../../core/interfaces/client.interface';
import { map } from 'rxjs/operators';


@Component({
  templateUrl: './clients-container.component.html'
})
export class ClientsContainerComponent implements OnInit {


  public clients$: Observable<ClientInterface[]>;

  constructor (private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.clients$ = this.clientsService.getList();

  }

  deleteClient(id: number) {
    console.log(id);
    this.clientsService.deleteItem(id).subscribe(() => {
      this.clients$ = this.clientsService.getList();
    });
  }


}
