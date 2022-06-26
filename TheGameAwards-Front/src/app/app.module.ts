import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesManagementComponent } from './pages/games-management/games-management.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    GamesManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
