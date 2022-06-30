import { RequestGamesService } from 'src/app/services/request-games.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
  public gameData: any [] = [];

  constructor(private requestGamesService: RequestGamesService, private router: Router ) { }
  
  popConfirm() {
    Swal.fire({
    title: "<h3 style='color:black'>"+ 'Perfection!'+ "</h3>",
    padding: '3em',
    text: 'Thank you for voting, Pacha approves!',
    imageUrl: 'https://i.kym-cdn.com/entries/icons/facebook/000/019/698/8RKAP94.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    confirmButtonColor: '#fe00ae',
    background: 'rgba(0,230,245,.8)',
  })
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

