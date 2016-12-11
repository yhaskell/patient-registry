import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginInfoService } from '../../services/login-info';


@Component({ selector: "patient-list", templateUrl: './patient-list.component.html', styleUrls: ['./patient-list.component.css'] })
export class PatientListComponent implements OnInit {

  constructor(private _loginInfoService: LoginInfoService) {}


  ngOnInit() {
    console.log(this._loginInfoService);
    if (this._loginInfoService.loggedIn == false) {
      this._loginInfoService.login();
    }
  }
}
