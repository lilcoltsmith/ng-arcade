import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import { FlappyPipe } from './classes/pipe';
import { Bird } from './classes/bird';

@Component({
  selector: 'app-flappy',
  templateUrl: './flappy.component.html',
  styleUrls: ['./flappy.component.css']
})
export class FlappyComponent implements OnInit {

private p5;

  constructor() { }

  ngOnInit() {
    const sketch = (s: any) => {
      var bird;
      var pipes = [];
      s.setup = () => {
        s.createCanvas(1280, 720);
        bird = new Bird(canvas);
        pipes.push(new FlappyPipe(canvas));
      };

      s.draw = () => {
        s.background(51);

        for(var i = pipes.length - 1; i >= 0; i--){
            pipes[i].show();
            pipes[i].update();

            if(pipes[i].hits(bird)){
                
            }

            if(pipes[i].offscreen()){
                pipes.splice(i, 1);
            }
        }

        bird.show();
            bird.update();

        if(s.frameCount % 100 == 0){
            pipes.push(new FlappyPipe(canvas));
        }
      };

      s.keyPressed = () => {
        if(s.key == ' ') {
            bird.flap();
        }
      };
  }

    let canvas = new p5(sketch);
  }
}
