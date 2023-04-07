import { Component, OnInit } from '@angular/core';
import { Playcard } from '../_model/playcard';
import { RestService } from '../_service/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addplaycard',
  templateUrl: './addplaycard.component.html',
  styleUrls: ['./addplaycard.component.css']
})
export class AddplaycardComponent implements OnInit {


  constructor(private service: RestService, private router: Router) { }
  playcards: Playcard[] = [];
  
  playcard = new Playcard();

  ngOnInit(): void {
  }

  saveplaycard(pname: string, pprice: string, poffer: string) {
    if (pname == "" && pprice == "" && poffer == "") {
      alert("Give all the data to Save")
    } else {
      this.playcard.name = pname;
      this.playcard.price = parseInt(pprice);
      this.playcard.offer = parseInt(poffer);
      this.service.savePlaycard(this.playcard).subscribe(d => { console.log(d); alert("Succefully saved"); this.ngOnInit() }, f => console.log(f));
      this.router.navigate(['viewplaycard']);
    }


  }

}
