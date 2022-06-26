import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { GamesManagementComponent } from './pages/games-management/games-management.component';



import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [

    
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GamesManagementComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
