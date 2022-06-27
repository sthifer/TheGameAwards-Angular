import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RequestGamesService } from 'src/app/services/request-games.service';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.scss']
})
export class PodiumComponent implements OnInit {

  bestThreeGames:any[] = [];
  

  constructor(private requestGames:RequestGamesService) { }

  ngOnInit(): void {
    this.requestGames.getGames().subscribe((sortedGames:any) => {
        this.bestThreeGames = sortedGames.sort(this.compare);
        this.bestThreeGames.slice(0,3);
        [this.bestThreeGames[0], this.bestThreeGames[1]] = [this.bestThreeGames[1], this.bestThreeGames[0]];   
    });
    
  }

  compare(a:any, b:any){
    if(a.votes < b.votes){
      return 1;
    }
    if(a.votes > b.votes){
        return -1;
    }
    return 0;
  }

}
