import { ClientInterface } from './../../../../core/interfaces/client.interface';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent {

  @Input() client: ClientInterface;

}
