import { Router } from '@angular/router';
import { UserInterface } from './../../../../core/interfaces/user.interface';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy{
  public form: UntypedFormGroup;
  public error: string;

  private destroyNotifier: Subject<void> = new Subject<void>();

  constructor(private authService: AuthService, private router: Router) {
    this.form = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.email, Validators.required]),
      password: new UntypedFormControl(''),
    });
  }

  public ngOnDestroy(): void {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();
  }

  public submit(): void {
    if (this.form.valid) {
      let email: string = this.form.value['email'];
      let password: string = this.form.value['password'];

      this.authService.login(email, password)
      .pipe(takeUntil(this.destroyNotifier))
      .subscribe((response: UserInterface) => {
        if (!response) {
          this.error = 'Email or password were incorrect!';
        } else {
          this.router.navigate(['pages']);
        }

      })

    } else {
      this.error = 'Something went wrong';
    }
  }

}
