import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from 'app/warningAlert/warning.component';
import { SucessAlertComponent } from 'app/sucessAlert/sucess.component'

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SucessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
