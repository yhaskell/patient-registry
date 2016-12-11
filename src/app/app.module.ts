import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRootComponent, PatientListComponent, LoginComponent, AddPatientComponent } from './components';
import { RouterModule }   from '@angular/router';

import { LoginInfoService } from './services/login-info';


import 'hammerjs';


@NgModule({
  declarations: [
    AppRootComponent,
    PatientListComponent,
    LoginComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: PatientListComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'add-patient',
        component: AddPatientComponent
      }
    ])
  ],
  providers: [ LoginInfoService ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }


