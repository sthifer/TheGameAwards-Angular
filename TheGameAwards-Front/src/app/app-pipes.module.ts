import { NgModule } from '@angular/core';
import { FilterGamesPipe } from './pipes/filter-games.pipe';



@NgModule({
  declarations: [
    FilterGamesPipe
  ],
  imports: [
    
  ],
  exports:[
    FilterGamesPipe
  ]
})
export class AppPipesModule { }
