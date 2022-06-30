
import { HomeComponent } from './pages/home/home.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesManagementComponent } from './pages/games-management/games-management.component';
import { PodiumComponent } from './pages/podium/podium.component';

const routes: Routes = [
    
  {
    path:"", pathMatch:"full", component: HomeComponent, data:{animation: 'isLeft'} 
  },
{
    path: "management", component: GamesManagementComponent, data:{animation: 'isRight'}
  },
  {
    path: "podium", component: PodiumComponent, data:{animation: 'isRigth'} 
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
