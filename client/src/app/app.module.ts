import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinesweeperModule } from './minesweeper/minesweeper.module';
import { FlappyComponent } from './flappy/flappy.component';

@NgModule({
  declarations: [
    AppComponent,
    FlappyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MinesweeperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
