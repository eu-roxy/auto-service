import { GlobalRegistryService } from './../services/global-registry.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AuthService } from '../services/auth.service';



@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
              private globalRegistry: GlobalRegistryService) { }

  public canActivate(): Observable<boolean> {
    return new Observable((o: Observer<boolean>) => {
      o.next(true);
      o.complete();
      this.authService.keepAlive().subscribe(
        (response: boolean) => {
          if (response) {
            o.next(true);
            o.complete();
            this.globalRegistry.test = 123;
          } else {
            o.next(false);
            o.complete();
            this.router.navigate(['login']);
          }
        },
        () => {
          o.next(false);
          o.complete();
          this.router.navigate(['login']);
        }
      );

    });
  }

}
