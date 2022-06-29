import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterGamesPipe } from './pipes/filter-games.pipe';



@NgModule({
  declarations: [
    FilterGamesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class AppPipesModule { }
