import CanvasOption from "./CanvasOption.js";

class Particle extends CanvasOption{
  constructor(x, y){
    super();
    this.x = x;
    this.y = y;
  }
  update() {

  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Particle