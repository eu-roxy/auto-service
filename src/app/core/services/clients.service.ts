import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientInterface } from './../interfaces/client.interface';
import { BaseService } from './base.service';


@Injectable()
export class ClientsService extends BaseService<ClientInterface> {

  constructor(public http: HttpClient) {
    super(http, '/clients')
  }

}
