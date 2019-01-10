import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MinesweeperModule } from './minesweeper/minesweeper.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FirstComponent } from './first/first.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MinesweeperModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
