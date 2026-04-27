class Block {
  constructor(x, y, w, h, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type;
  }
  
  display(index) {
    noFill();
    noStroke();
    strokeWeight(2);
    rectMode(CORNER);
    
    if (devMode) {
      fill(255);
      textSize(20);
      textAlign(CENTER);
      
      let centerX = this.x + this.w / 2 + camX;
      let centerY = this.y + this.h / 2 + camY;
      
      if (this.type == 2) {
        text("X", centerX, centerY);
        fill(100, 100, 255, 20);
      } else if (this.type == 3) {
        text("Y", centerX, centerY);
        fill(255, 100, 100, 20);
      } else {
        text(String(index), centerX, centerY + 5);
      }
      stroke(255);
    }
    
    if (this.type == 0) { stroke(0, 255, 0); fill(0, 255, 0, 25); }
    else if (this.type == 1) { stroke(255, 0, 0); fill(255, 0, 0, 25); }
    else if (this.type == 4) { stroke(0, 0, 255); fill(0, 0, 255, 25); }

    rect(this.x + camX, this.y + camY, this.w, this.h);
  }
}
