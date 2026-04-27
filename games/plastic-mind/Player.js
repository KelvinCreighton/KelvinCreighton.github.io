class Player {
  constructor(x, y, size, speed, gravity, gravDir) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.gravity = gravity;
    this.gravDir = gravDir;
    
    this.xv = 0;
    this.yv = 0;
    this.kill = false;
    this.followX = true;
    this.followY = true;
  }
  
  nextFrame() {
    this.followX = true;
    this.followY = true;
    
    // Add gravity to player velocity
    this.yv += cos(this.gravDir) * this.gravity;
    this.xv += sin(this.gravDir) * this.gravity;
  }
  
  collision(o_x, o_y, o_w, o_h, o_type, index) {
    let nextX = this.x + this.xv;
    let nextY = this.y + this.yv;
    let swapCol = false;
    
    // Check for overlap in the next frame
    let overlapX = (nextX + this.size > o_x && nextX - this.size < o_x + o_w);
    let overlapY = (nextY + this.size > o_y && nextY - this.size < o_y + o_h);

    // Handle non-physics blocks (Zone detection)
    if (overlapX && overlapY) {
      if (o_type === 1) checkLevel = -1;
      else if (o_type === 2) this.followX = false;
      else if (o_type === 3) this.followY = false;
      else if (o_type === 4) swapCol = true;
      else if (o_type === 5) level += 1;
    }

    // Handle physics blocks (Type 0)
    // We only resolve if we are moving TOWARDS the block face to prevent "shooting"
    if (o_type === 0) {
      let buffer = 5; // How close you must be to the edge to trigger resolution

      // Vertical resolution
      if (overlapX) {
        // Hitting Top face
        if (this.yv > 0 && this.y + this.size <= o_y + buffer && nextY + this.size >= o_y) {
          this.yv = o_y - (this.y + this.size);
        }
        // Hitting Bottom face
        else if (this.yv < 0 && this.y - this.size >= o_y + o_h - buffer && nextY - this.size <= o_y + o_h) {
          this.yv = (o_y + o_h) - (this.y - this.size);
        }
      }
      
      // Update nextY after vertical resolution to help horizontal precision
      nextY = this.y + this.yv;
      overlapY = (nextY + this.size > o_y && nextY - this.size < o_y + o_h);

      // Horizontal resolution
      if (overlapY) {
        // Hitting Left face
        if (this.xv > 0 && this.x + this.size <= o_x + buffer && nextX + this.size >= o_x) {
          this.xv = o_x - (this.x + this.size);
        }
        // Hitting Right face
        else if (this.xv < 0 && this.x - this.size >= o_x + o_w - buffer && nextX - this.size <= o_x + o_w) {
          this.xv = (o_x + o_w) - (this.x - this.size);
        }
      }
    }
    
    if (swapCol) {
      blocks[index].type = -1;
      startSwap(100);    
    }
    
    // Bounds check for level reset (with safety margin)
    if (this.x + this.size < -500 || this.x - this.size > width + 500 || 
        this.y + this.size < -500 || this.y - this.size > height + 500) {
      checkLevel = -1;
    }
  }
  
  update() {
    if (this.followX) camX -= this.xv;
    else               this.x += this.xv;
    if (this.followY) camY -= this.yv;
    else               this.y += this.yv;
  }
  
  display() {
    stroke(0, 0, 255);
    strokeWeight(2);
    fill(0, 0, 255, 100);
    ellipse(this.x, this.y, this.size * 2, this.size * 2);
  }
}
