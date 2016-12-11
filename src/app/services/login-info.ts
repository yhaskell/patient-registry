import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class LoginInfoService {
  loggedIn: boolean = false;

  email: string;

  constructor(private _router: Router) {}

  private _rollback: string;

  login(rollback?: string) {
    this._rollback = rollback;
    this._router.navigate(['/login']);
  }

  onLogin(email: string) {
    this.email = email;
    this.loggedIn = true;
    this._router.navigate([this._rollback || '/']);
  }


  test(email, password) {
    // return true;
    return email == "test@test.com" && password == "123";
  }
}
