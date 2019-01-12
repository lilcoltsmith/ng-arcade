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

    highlight: boolean = false;
    
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
        if(this.highlight) {
            this.canvas.fill(255, 0, 0);
        }
        this.canvas.rect(this.x, 0, this.width, this.top);
        this.canvas.rect(this.x, this.bottom, this.width, this.canvas.height);
    }

    offscreen(): boolean {
        var state;
        this.x < -this.width ? state = true : state = false;
        return state;
    }

    hits(bird: any){
        if(bird.y < this.top || bird.y > this.bottom) {
            if(bird.x >this.x && bird.x < this.x+this.width) {
                this.highlight = true;
                return true;
            }
        }
    }

    update() {
        this.x -= this.speed;
    }
}