import { Component, OnInit, Input } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { Board } from '../classes/board';

@Component({
  selector: 'app-minesweeper-main',
  templateUrl: './minesweeper-main.component.html',
  styleUrls: ['./minesweeper-main.component.css']
})
export class MinesweeperMainComponent implements OnInit {

  boardSize: number;
  mineCount: number;
  action: string;
  board: Board;

  constructor() { }

  ngOnInit() {
    this.easy();
    this.startNewGame();
  }

  startNewGame(){
    this.board = new Board(this.boardSize, this.mineCount);
    this.action = 'uncovor';
    this.board.initializeTiles();
    this.board.countAdjacentMines();
    console.log(this.board);
  }

  easy(){
    this.boardSize = 10;
    this.mineCount = 10;
    this.startNewGame();
  }

  medium(){
    this.boardSize = 15;
    this.mineCount = 25;
    this.startNewGame();
  }

  hard(){
    this.boardSize = 20;
    this.mineCount = 40;
    this.startNewGame();
  }

  setActionUncovor(){
    this.action = 'uncovor';
  }

  setActionFlag(){
    this.action = 'flag';
  }

}
