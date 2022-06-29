import { GestionComponent } from './pages/gestion/gestion.component';
import { HomeComponent } from './pages/home/home.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesManagementComponent } from './pages/games-management/games-management.component';
import { PodiumComponent } from './pages/podium/podium.component';

const routes: Routes = [
    
  {
    path:"", pathMatch:"full", component: HomeComponent
  },
{
    path: "management", component: GamesManagementComponent,
  },
  {
    path: "podium", component: PodiumComponent,
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
