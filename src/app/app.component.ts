import { GlobalRegistryService } from './core/services/global-registry.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auto-service';

  constructor(private globalRegistry: GlobalRegistryService) {
  }

}
