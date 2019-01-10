import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinesweeperMainComponent } from './minesweeper-main/minesweeper-main.component';
import { BoardComponent } from './board/board.component';
import { FormsModule } from '@angular/forms';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MinesweeperMainComponent,
    BoardComponent,
    TileComponent
  ],
  exports: [
    MinesweeperMainComponent
  ]
})
export class MinesweeperModule { }
