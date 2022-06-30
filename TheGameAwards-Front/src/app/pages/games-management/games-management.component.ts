
import Swal from 'sweetalert2'

// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

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

  public plaformArray:any = {  };

  constructor(private requestGames:RequestGamesService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.requestGames.clearGame();

    this.gamesForm = this.formBuilder.group({
      title: [this.newGame.title, [Validators.required]],
      description: [this.newGame.description, []],
      genre: [this.newGame.genre, [Validators.required]],
      img: [this.newGame.img, [Validators.required]],
      platform:  new FormArray([])
    })

    this.gamesForm.valueChanges.subscribe((data) =>{
      this.newGame = data;
    })

    
    if (this.gameID !== ""){
      
      this.plaformArray.ps4 = this.newGame.platform.find(element => element=='PS4');
      this.plaformArray.ps5 = this.newGame.platform.find(element => element=='PS5');
      this.plaformArray.pc = this.newGame.platform.find(element => element=='PC');
      this.plaformArray.switch = this.newGame.platform.find(element => element=='SWITCH');
      this.plaformArray.xboxx = this.newGame.platform.find(element => element=='XBOX X');
      this.plaformArray.xboxs = this.newGame.platform.find(element => element=='XBOX S');
      this.plaformArray.xboxone = this.newGame.platform.find(element => element=='XBOX ONE');
    }
    
    
  }

  public onSubmit() {
    //console.log(this.newGame)
    if (!this.gamesForm.valid){
      Swal.fire('The form is not correct.\n Please check it.');
      return
    }

    let message:string ="";
    if( this.gameID=== ""){
      this.newGame.deletedid="1";
      this.newGame.votes="0";
      this.requestGames.postGame(this.newGame).subscribe();
      message="Game created";
    }else{
      //console.log(this.newGame)
      this.requestGames.editGame(this.gameID,this.newGame).subscribe();
      message="Game edited";
    }
    //SweetAlert
    
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
    
    
    this.requestGames.clearGame();
    
    setTimeout(() => {
    this.router.navigate(["/"]);
  }, 600);
  }

  public onDelete(){
    //Cambiar confirm por SweetAlert

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.requestGames.deleteGame(this.gameID).subscribe();
        this.requestGames.clearGame();
        //SweetAlert de borrado
          
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Game deleted',
            showConfirmButton: false,
            timer: 1500
          })
        
        setTimeout(() => {
            this.router.navigate(["/"])
          }
        , 600);
      }
    })

    

  }

  public onCheckboxChange(event: any) {
    console.log(event);
    
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
