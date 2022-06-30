import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { GamesManagementComponent } from './pages/games-management/games-management.component';
import { RequestGamesService } from './services/request-games.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { FooterComponent } from './core/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PodiumComponent } from './pages/podium/podium.component';
import { AppPipesModule } from './app-pipes.module';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GamesManagementComponent,
    PodiumComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppPipesModule
  ],
  providers: [RequestGamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
