import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss']
})
export class DashboardCardsComponent {

  @Input() public clientsNumber: number = 0;
  @Input() public registeredCars: number = 0;
  @Input() public inspections: number = 0;
  @Input() public totalCosts: number = 0;

}
