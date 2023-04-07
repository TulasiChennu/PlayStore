import { Component, OnInit } from '@angular/core';
import { Playcard } from '../_model/playcard';
import { RestService } from '../_service/rest.service';

@Component({
  selector: 'app-viewplaycard',
  templateUrl: './viewplaycard.component.html',
  styleUrls: ['./viewplaycard.component.css']
})
export class ViewplaycardComponent implements OnInit {

  constructor(private service: RestService) { }
  playcards: Playcard[] = [];
  
  playcard = new Playcard();

  ngOnInit(): void {
   
    this.service.getallplaycards().subscribe(d => { console.log(d); this.playcards = d }, f => console.log(f));

  }

 

  saveplaycard(pname: string, pprice: string, poffer: string) {
    if (pname == "" && pprice == "" && poffer == "") {
      alert("Give all the data to Save")
    } else {
      this.playcard.name = pname;
      this.playcard.price = parseInt(pprice);
      this.playcard.offer = parseInt(poffer);
      this.service.savePlaycard(this.playcard).subscribe(d => { console.log(d); alert("Succefully saved"); this.ngOnInit() }, f => console.log(f));
    }


  }

 

  updatepc(id: number, discount: string) {
    if (discount == "") {
      alert("Fill All the Data Required")
    } else {
      this.service.updatediscount(id, parseInt(discount)).subscribe(d => { console.log(d); alert("update SuccessFull"); this.ngOnInit() }, f => console.log(f));
    }


  }
  deletepc(id: number) {
    this.service.deletepc(id).subscribe(d => { alert("Delete Success"); this.ngOnInit() }, f => console.log(f))
  }



  AddGameToCard(pid: string, gid: string) {
    if (pid == "" && gid == "") {
      alert("Fill All the Data Required")
    } else {
      this.service.AddGameToplaycard(parseInt(pid), parseInt(gid)).subscribe(d => { console.log(d); alert("Game Added SuccessFull"); this.ngOnInit() }, f => console.log(f))
    }
  }
}
