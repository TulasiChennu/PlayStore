import { Component, OnInit } from '@angular/core';
import { Game } from '../_model/game';
import { Playcard } from '../_model/playcard';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-viewgames',
  templateUrl: './viewgames.component.html',
  styleUrls: ['./viewgames.component.css']
})
export class ViewgamesComponent implements OnInit {



  constructor(private service: RestService) { }
  playcards: Playcard[] = [];
  games: Game[] = [];
  game = new Game();
  playcard = new Playcard();

  ngOnInit(): void {
    this.service.getallGame().subscribe(d => { console.log(d), this.games = d }, f => console.log(f));
    

  }

  savegame(gname: string, gimage: string, gcreated: string, glevel: string) {
    if (gname == "" && gimage == "" && gcreated == "" && glevel == "") {
      alert("Give all the data to Save")
    } else {
      this.game.name = gname;
      this.game.imageurl = gimage;
      this.game.createdby = gcreated;
      this.game.level = glevel;
      this.service.saveGame(this.game).subscribe(d => { console.log(d); alert("Succefully saved"); this.ngOnInit() }, f => console.log(f));
    }
  }

  

  updategame(id: number, name: string) {

    if (name == "") {
      alert("Fill All the Data Required")
    } else {
      this.service.updatename(id, name).subscribe(d => { console.log(d); alert("update SuccessFull"); this.ngOnInit() }, f => console.log(f));
    }

  }
  deletegame(id: number) {
    this.service.deletegame(id).subscribe(d => { alert("Delete Success"); this.ngOnInit() }, f => console.log(f))

  }




  AddGameToCard(pid: string, gid: string) {
    if (pid == "" && gid == "") {
      alert("Fill All the Data Required")
    } else {
      this.service.AddGameToplaycard(parseInt(pid), parseInt(gid)).subscribe(d => { console.log(d); alert("Game Added SuccessFull"); this.ngOnInit() }, f => console.log(f))
    }
  }
}
