import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesManagementComponent } from './pages/games-management/games-management.component';
import { PodiumComponent } from './pages/podium/podium.component';

const routes: Routes = [
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
