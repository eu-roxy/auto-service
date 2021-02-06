import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { VehicleInterface } from './../interfaces/vehicle.interface';

@Injectable()
export class VehiclesService extends BaseService<VehicleInterface> {

  constructor(public http: HttpClient) {
    super(http, '/vehicles')
  }

}
