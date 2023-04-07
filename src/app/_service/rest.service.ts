import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../_model/game';
import { Playcard } from '../_model/playcard';
import { Query } from '../_model/query';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root' //service will be provided in the root injector
})
export class RestService {

  constructor(private http: HttpClient) { } // used to make HTTP requests
  user: User = new User();

  uri: string = ""  //string that represents the base URI for API requests.
  login: boolean = false;
  public setUser(user: User) {
    this.user = user
  }
  public getUser() {
    return this.user;
  }

  public setlogin() {
    this.login = true
  }
  public setlogout() {
    this.login = false;
  }
  public isLoggedin() {
    return this.login;
  }

  public registerUser(user: User) {
    return this.http.post("http://localhost:8085/Customer/register", user);
  }

  public loginUser(user: User): Observable<User> {
    return this.http.get<User>(`http://localhost:8085/Customer/login/${user.email}/${user.password}`);
  }

  public rolematch(role: string): boolean {
    let ismatch = false;
    const userrole = this.user.role; //compares the role of the current user with a given role
    if (userrole === role) {
      ismatch = true;
      return ismatch;
    } else {
      return ismatch;
    }
  }

  public getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>("http://localhost:8085/Admin/getAllGames");
  }

  public getUserQuestions(id: number): Observable<Query[]> {
    return this.http.get<Query[]>(`http://localhost:8085/Customer/GetUserQuestions/${id}`);
  }

  public AddQuestion(question: string, uid: number) {
    return this.http.put(`http://localhost:8085/Customer/AddQuestion/${uid}/${question}`, question);
  }
  // user operation

  // to show all the playcards

  public ShowPlaycards(): Observable<Playcard[]> {
    return this.http.get<Playcard[]>("http://localhost:8085/Admin/getAllPlaycards");
  }

  public AddPlaycard(uid: number, pcid: number) {
    return this.http.put(`http://localhost:8085/Customer/BuyAPlaycard/${uid}/${pcid}`, uid);
  }
  public getuserbyId(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8085/Customer/getuserById/${id}`)
  }

  public RemoveCards(uid: number) {
    return this.http.put(`http://localhost:8085/Customer/RemoveCards/${uid}`, uid);
  }

  public GetUserGames(uid: number, pcid: number): Observable<Game[]> {
    return this.http.get<Game[]>(`http://localhost:8085/Customer/GetUserGames/${uid}/${pcid}`)
  }

  public getAllquries(): Observable<Query[]> {
    return this.http.get<Query[]>("http://localhost:8085/CustomerCare/getAllQueries");
  }

  public AddResponse(id: number, text: string) {
    return this.http.put(`http://localhost:8085/CustomerCare/updateQuery/${id}/${text}`, id);
  }

  public getallGame(): Observable<Game[]> {
    return this.http.get<Game[]>(`http://localhost:8085/Admin/getAllGames`)
  }
  public getallplaycards(): Observable<Playcard[]> {
    return this.http.get<Playcard[]>(`http://localhost:8085/Admin/getAllPlaycards`)
  }

  public saveGame(game: Game) {
    return this.http.post("http://localhost:8085/Admin/AddGame", game)
  }

  public savePlaycard(game: Playcard) {
    return this.http.post("http://localhost:8085/Admin/AddPlaycard", game)
  }

  public deletepc(id: number) {
    return this.http.delete(`http://localhost:8085/Admin/DeletePlaycard/${id}`)
  }
  public deletegame(id: number) {
    return this.http.delete(`http://localhost:8085/Admin/DeleteGame/${id}`)
  }

  public updatename(gid: number, name: string) {
    return this.http.put(`http://localhost:8085/Admin/UpdateGame/${gid}/${name}`, gid)
  }

  public updatediscount(gid: number, discount: number) {
    return this.http.put(`http://localhost:8085/Admin/UpdateDiscount/${gid}/${discount}`, gid)
  }

  public AddGameToplaycard(pid: number, gid: number) {
    return this.http.put(`http://localhost:8085/Admin/AddGameTocard/${pid}/${gid}`, pid)
  }


}
