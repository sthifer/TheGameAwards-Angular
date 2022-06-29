import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RequestGamesService } from 'src/app/services/request-games.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public allGames:any[] = [];
  public suggestedGames:any[] = [];
  

  constructor(private requestGames:RequestGamesService) { }

  ngOnInit(): void {
    this.requestGames.getGames().subscribe((games:any) => {
      this.allGames = games;
    });
  }

  public onInput(event:any){
    this.suggestedGames.length = 0;
    if(event.target.value != ''){
      for(let game of this.allGames){
        if(game.title.toUpperCase().startsWith(event.target.value.toUpperCase())){
          this.suggestedGames.push(game);
        }
      }
      console.log(this.suggestedGames);
      
    }
    
  }

}
