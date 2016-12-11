import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdSnackBar } from '@angular/material';

import { LoginInfoService } from '../../services/login-info';

@Component({ selector: 'login', templateUrl: './login.component.html', styleUrls: ['./login.component.css'], providers: [ MdSnackBar ] })
export class LoginComponent {

  private email: string = "";
  private password: string = "";

  private processing: boolean = false;

  constructor(private _snackbar: MdSnackBar, private _router: Router, private _loginInfoService: LoginInfoService ) {}

  onSubmit() {
    this.processing = true;
    setTimeout(() => {
      var result = this._loginInfoService.test(this.email, this.password);

      this.processing = false;

      if (!result) {
        this._snackbar.open("Невозможно войти: ошибочное имя или пароль", "OK", { duration: 3000 });
      } else {
        this._loginInfoService.onLogin(this.email);
      }
    }, 1000);
  }
}
