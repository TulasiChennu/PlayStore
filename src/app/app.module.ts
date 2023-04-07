import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserdashComponent } from './userdash/userdash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { CaredashComponent } from './caredash/caredash.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { PlaycardsComponent } from './playcards/playcards.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { AddplaycardComponent } from './addplaycard/addplaycard.component';
import { ViewplaycardComponent } from './viewplaycard/viewplaycard.component';
import { AddgameComponent } from './addgame/addgame.component';
import { ViewgamesComponent } from './viewgames/viewgames.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashComponent,
    AdmindashComponent,
    CaredashComponent,
    HeaderComponent,
    RegisterComponent,
    GameRoomComponent,
    AskQuestionComponent,
    PlaycardsComponent,
    HomepageComponent,
    HomeComponent,
    AddplaycardComponent,
    ViewplaycardComponent,
    AddgameComponent,
    ViewgamesComponent,
    ContactusComponent,
    AboutusComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
