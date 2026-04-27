class Goal {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  
  display() {
    fill(255, 255, 0);
    noStroke();
    ellipse(this.x + camX, this.y + camY, this.size, this.size);
    fill(0, 0, 0);
    ellipse(this.x + camX, this.y + camY, this.size / 1.75, this.size / 1.75);
  }
}
