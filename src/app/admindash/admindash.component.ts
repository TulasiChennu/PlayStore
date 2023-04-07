import { Component, OnInit } from '@angular/core';
import { Game } from '../_model/game';
import { Playcard } from '../_model/playcard';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  constructor(private service: RestService) { }
  playcards: Playcard[] = [];
  games: Game[] = [];
  game = new Game();
  playcard = new Playcard();

  ngOnInit(): void {
   

  }

  



  AddGameToCard(pid: string, gid: string) {
    if (pid == "" && gid == "") {
      alert("Fill All the Data Required")
    } else {
      this.service.AddGameToplaycard(parseInt(pid), parseInt(gid)).subscribe(d => { console.log(d); alert("Game Added SuccessFull"); this.ngOnInit() }, f => console.log(f))
    }
  }
}
