import { Component } from '@angular/core';
import { User } from './_model/user';
import { RestService } from './_service/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineGame';

  constructor(private router: Router, public service: RestService) { }
  User = new User();
  ngOnInit(): void {
    this.User = this.service.getUser();

  }

  public logout() {
    alert("LoggedOut SuccessFully")
    this.router.navigate([''])
    this.service.setlogout();
    this.service.setUser(new User());
  }
}
