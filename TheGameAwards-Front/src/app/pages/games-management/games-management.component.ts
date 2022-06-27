import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestGamesService } from 'src/app/services/request-games.service';
import { title } from 'process';

@Component({
  selector: 'app-games-management',
  templateUrl: './games-management.component.html',
  styleUrls: ['./games-management.component.scss']
})
export class GamesManagementComponent implements OnInit {

  public gamesForm !: FormGroup;
  public newGame = this.requestGames.gameData;
  public gameID = this.requestGames.gameData.id;

  constructor(private requestGames:RequestGamesService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.requestGames.clearGame();

    this.gamesForm = this.formBuilder.group({
      //falta rellenar los campos de plataformas
      title: [this.newGame.title, [Validators.required]],
      description: [this.newGame.description, [Validators.required]],
      genre: [this.newGame.genre, [Validators.required]],
      img: [this.newGame.img, [Validators.required]]
    })

    this.gamesForm.valueChanges.subscribe((data) =>{
      this.newGame = data;
    })
    
  }

  public onSubmit() {
    if( this.gameID=== ""){
      this.newGame.deletedid="1";
      this.newGame.votes="0";
      this.requestGames.editGame(this.gameID,this.newGame).subscribe();
    }else{
      this.requestGames.postGame(this.newGame).subscribe();
    }
    //SweetAlert
    this.requestGames.clearGame()

    this.router.navigate(["/"]);
  }

  public onDelete(){
    //Cambiar confirm por SweetAlert
    if (confirm("¿Estas seguro de borrar el juego?") == true) {
      this.requestGames.deleteGame(this.gameID).subscribe();
      this.requestGames.clearGame();
      //SweetAlert de borrado
    } 

    this.router.navigate(["/"])

  }

}
