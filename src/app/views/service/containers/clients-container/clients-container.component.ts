import { Component, OnInit } from '@angular/core';
import { ClientsService } from './../../../../core/services/clients.service';
import { ClientInterface } from './../../../../core/interfaces/client.interface';


@Component({
  templateUrl: './clients-container.component.html'
})
export class ClientsContainerComponent implements OnInit {


  public clients: ClientInterface[] = [];

  constructor (private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.clients = [];

    this.clientsService.getList().subscribe((clients: ClientInterface[]) => {
      this.clients = clients;
    });

  }


}
