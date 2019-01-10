import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { MinesweeperMainComponent } from './minesweeper/minesweeper-main/minesweeper-main.component';
import { FlappyComponent } from './flappy/flappy.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'games/minesweeper', component: MinesweeperMainComponent },
  { path: 'games/flappy', component: FlappyComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
