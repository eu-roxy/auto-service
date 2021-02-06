import { VehiclesService } from './../../../../core/services/vehicles.service';
import { ClientsService } from './../../../../core/services/clients.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { isNumber } from 'util';
import { ClientInterface } from 'src/app/core/interfaces/client.interface';


@Component({
  templateUrl: './vehicles-container.component.html'
})
export class VehiclesContainerComponent implements OnInit {

  public client$: Observable<ClientInterface>;

  constructor(private router: ActivatedRoute,
    private clientsService: ClientsService,
    private vehcileService: VehiclesService) {

  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      console.log(params);
      if (params['clientId']) {
        this.client$ = this.clientsService.getItem(params['clientId']);
      }
    });
  }

  public reloadData(): void {
    console.log('in reload data');
  }

}
