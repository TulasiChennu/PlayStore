import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddgameComponent } from './addgame/addgame.component';
import { AddplaycardComponent } from './addplaycard/addplaycard.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { CaredashComponent } from './caredash/caredash.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PlaycardsComponent } from './playcards/playcards.component';
import { RegisterComponent } from './register/register.component';
import { UserdashComponent } from './userdash/userdash.component';
import { ViewgamesComponent } from './viewgames/viewgames.component';
import { ViewplaycardComponent } from './viewplaycard/viewplaycard.component';

const routes: Routes = [
  { path: "userdash", component: UserdashComponent },
  { path: "admindash", component: AdmindashComponent },
  { path: "ccaredash", component: CaredashComponent },
  { path: '', component: HomepageComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "gameroom", component: GameRoomComponent },
  { path: "askQuestion", component: AskQuestionComponent },
  { path: "playcard", component: PlaycardsComponent },
  { path: "home", component: HomeComponent },
  { path: "addplaycard", component: AddplaycardComponent },
  { path: "addgames", component: AddgameComponent },
  { path: "viewplaycard", component: ViewplaycardComponent },
  { path: "viewgames", component: ViewgamesComponent },
  { path: "contact", component: ContactusComponent },
  { path: "aboutus", component: AboutusComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
