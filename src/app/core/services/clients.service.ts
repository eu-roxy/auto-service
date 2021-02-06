import { GlobalRegistryService } from './global-registry.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientInterface } from './../interfaces/client.interface';
import { BaseService } from './base.service';
import { UserRole } from '../enums/user-roles.enum';


@Injectable()
export class ClientsService extends BaseService<ClientInterface> {

  constructor(public http: HttpClient, private globalRegistry: GlobalRegistryService) {
    super(http, '/clients')
  }

  public getList(): Observable<ClientInterface[]> {
    let params = {};
    if (this.globalRegistry.loggedUser.role === UserRole.MECHANIC) {
      params['userId'] = this.globalRegistry.loggedUser.id;
    }

    return super.getList(params);

  }

}
