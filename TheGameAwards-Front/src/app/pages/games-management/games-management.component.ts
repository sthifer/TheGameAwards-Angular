import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormGroup, FormBuilder,Validators,FormArray,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestGamesService } from 'src/app/services/request-games.service';

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
      img: [this.newGame.img, [Validators.required]],
      platform:  new FormArray([])
    })

    this.gamesForm.valueChanges.subscribe((data) =>{
      this.newGame = data;
      // if(data.ps4){
      //   this.newGame.platform.push(data.ps4.value);
      // }
    })
    
  }

  public onSubmit() {
    //console.log(this.newGame)
    if( this.gameID=== ""){
      this.newGame.deletedid="1";
      this.newGame.votes="0";
      console.log(this.newGame)
      this.requestGames.postGame(this.newGame).subscribe();
    }else{
      //console.log(this.newGame)
      this.requestGames.editGame(this.gameID,this.newGame).subscribe();
    }
    //SweetAlert
    this.requestGames.clearGame()

    //this.router.navigate(["/"]);
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

  public onCheckboxChange(event: any) {
    const platform = (this.gamesForm.controls['platform'] as FormArray);
    if (event.target.checked) {
      platform.push(new FormControl(event.target.value));
    } else {
      const index = platform.controls
      .findIndex(x => x.value === event.target.value);
      platform.removeAt(index);
    }
    // this.newGame.platform= selectedPlatform.value;
    

  }

}
