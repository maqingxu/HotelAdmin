import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuperloginComponent } from './superlogin/superlogin.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    SuperloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy, }],
  bootstrap: [AppComponent]
})
export class AppModule { }
