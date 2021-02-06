import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  constructor(private authService: AuthService, private router: Router) {

  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
