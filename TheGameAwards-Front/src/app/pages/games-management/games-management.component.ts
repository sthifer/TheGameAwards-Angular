import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestGamesService } from 'src/app/services/request-games.service';

@Component({
  selector: 'app-games-management',
  templateUrl: './games-management.component.html',
  styleUrls: ['./games-management.component.scss']
})
export class GamesManagementComponent implements OnInit {

  constructor(private requestGames:RequestGamesService) { }

  ngOnInit(): void {
    
    
  }

}
