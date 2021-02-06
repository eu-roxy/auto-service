import { Router } from '@angular/router';
import { UserInterface } from './../../../../core/interfaces/user.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup;
  public error: string;

  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(''),
    });
  }

  public submit(): void {
    if (this.form.valid) {
      let email: string = this.form.value['email'];
      let password: string = this.form.value['password'];

      this.authService.login(email, password).subscribe((response: UserInterface) => {
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
