import { RequestGamesService } from 'src/app/services/request-games.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
  public gameData: any [] = [];
  public filter:string;
  constructor(private requestGamesService: RequestGamesService, private router: Router ) {
    this.filter = "";
  }

  ngOnInit(): void {
    this.requestGamesService.getGames().subscribe((data:any)=>{
      console.log(data)
      this.gameData = data
    })
  }



  public catchGame(game:any){
    this.requestGamesService.editItem(game);
    this.router.navigate(["/management"])
  }
}