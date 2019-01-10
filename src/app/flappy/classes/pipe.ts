import * as p5 from 'p5';
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";

export class FlappyPipe {
    top: number;
    bottom: number;
    x: number;
    width: number;
    speed: number;
    canvas: any;
    
    constructor(canvas: any){
        this.canvas = canvas;
        this.top = canvas.random(120, canvas.height - 240);
        this.bottom = this.top + 120;
        this.x = canvas.width;
        this.width = 20;
        this.speed = 4;
    }

    show() {
        this.canvas.fill(255);
        this.canvas.rect(this.x, 0, this.width, this.top);
        this.canvas.rect(this.x, this.bottom, this.width, this.canvas.height);
    }

    update() {
        this.x -= this.speed;
    }
}