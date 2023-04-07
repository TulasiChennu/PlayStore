import { Component, OnInit } from '@angular/core';
import { Game } from '../_model/game';
import { RestService } from '../_service/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.css']
})
export class AddgameComponent implements OnInit {


 

  constructor(private service: RestService,private router: Router) { }
  
  games: Game[] = [];
  game = new Game();
 


  ngOnInit(): void {
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
      this.router.navigate(['viewgames']);
    }
  }

}
