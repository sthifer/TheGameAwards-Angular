import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestGamesService {

  constructor(private httpClient:HttpClient) { }

  public gameData = {
    title: "",
    description: "",
    genre: "",
    votes: "",
    platform: [],
    img: "",
    deletedid: "",
    id: ""
  }

  public clearGame(){
    this.gameData = {
      title: "",
      description: "",
      genre: "",
      votes: "",
      platform: [],
      img: "",
      deletedid: "",
      id: ""
    }
  }

  public editItem(item:any){
    this.gameData = item;
  }

  public getGames(){
    return this.httpClient.get("http://localhost:3000/games");
  }

  public postGame(newGame:any){
    return this.httpClient.post("http://localhost:3000/games", newGame);
  }

  public deleteGame(gameId:any){
    return this.httpClient.delete("http://localhost:3000/games/"+gameId);
  }

  public editGame(gameId:any, editedGame:any){
    return this.httpClient.put("http://localhost:3000/games/"+gameId, editedGame);
  }

}
