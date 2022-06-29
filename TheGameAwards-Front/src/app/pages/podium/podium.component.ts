import { animate } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { RequestGamesService } from 'src/app/services/request-games.service';
import party from "party-js";
@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.scss']
})
export class PodiumComponent implements OnInit, AfterViewInit{

  bestThreeGames:any[] = [];
  @ViewChild('boThree') game!:ElementRef;
  

  constructor(private requestGames:RequestGamesService) { }

  ngOnInit(): void {
    this.requestGames.getGames().subscribe((sortedGames:any) => {
        this.bestThreeGames = sortedGames.sort(this.compare);
        this.bestThreeGames.slice(0,3);
        [this.bestThreeGames[0], this.bestThreeGames[1]] = [this.bestThreeGames[1], this.bestThreeGames[0]];   
    });   
    
  }

  public ngAfterViewInit(): void
  {
      party.confetti(this.game.nativeElement);
      
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
