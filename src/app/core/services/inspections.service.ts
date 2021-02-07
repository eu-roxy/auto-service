import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InspectionInterface } from './../interfaces/inspection.interface';
import { BaseService } from './base.service';


@Injectable()
export class InspectionsService extends BaseService<InspectionInterface> {

  constructor(public http: HttpClient) {
    super(http, '/inspections')
  }

}
