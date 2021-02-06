import { GlobalRegistryService } from './../../../../core/services/global-registry.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from './../../../../core/services/clients.service';
import { ClientInterface } from './../../../../core/interfaces/client.interface';
import { map } from 'rxjs/operators';
import { UserRole } from 'src/app/core/enums/user-roles.enum';


@Component({
  templateUrl: './clients-container.component.html'
})
export class ClientsContainerComponent implements OnInit {


  public clients$: Observable<ClientInterface[]>;

  constructor (private clientsService: ClientsService,
               private globalRegistry: GlobalRegistryService) {
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
    setTimeout(() => {
      let params = {};
      if (this.globalRegistry.loggedUser.role === UserRole.MECHANIC) {
        params['userId'] = this.globalRegistry.loggedUser.id;
      }

      this.clients$ = this.clientsService.getList(params);
    });

  }


}
