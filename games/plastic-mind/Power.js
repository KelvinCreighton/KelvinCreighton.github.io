class Power {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 0;
    this.half = 0;
    this.type = 0;
    this.active = false;
  }
  
  collision(p_x, p_y, p_size) {
    if (p_x + p_size >= this.x - this.half + camX && p_x - p_size <= this.x + this.half + camX && p_y + p_size >= this.y - this.half + camY && p_y - p_size <= this.y + this.half + camY) {
      if (this.type >= 0 && this.type <= 7) {
        let angle = PI / 4 * this.type - PI / 4;  
        player.xv = sin(angle) * player.speed;
        player.yv = -cos(angle) * player.speed;
      }
    }
    
    if (this.type == 8)
      resetPowers(this.size);
  }
  
  activate(x, y, type) {
    this.x = x;
    this.y = y;
    this.half = this.size / 2;
    this.type = type;
    this.active = true;
  }
  
  display() {
    showPowers(this.x + camX, this.y + camY, this.size, this.type);
  }
}

function UsePower(type) {
  if (activePowers[type]) {
    powers[nextPower].activate(mouseX - camX, mouseY - camY, type);
    nextPower += 1;
    nextPower %= totalPowerUse;
  }
}

function showPowers(x, y, size, type) {
  stroke(255, 0, 255);
  strokeWeight(2);
  fill(255, 0, 255, 30);
  
  if (type >= 0 && type <= 8) {
    rectMode(CENTER);
    rect(x, y, size, size);
    
    if (type != 8) {
      push();
      translate(x, y);
      rotate(PI / 4 * type - PI / 4);
      line(-size / 2, 0, 0, -size / 2);
      line(0, -size / 2, size / 2, 0);
      line(size / 2, 0, -size / 2, 0);
      pop();
    }
  }
}

function resetPowers(size) {
  for (let i = 0; i < powers.length; i++) {
    powers[i].active = false;
    powers[i].size = size;
  }
}

function powerSelect(int_ary) {
  for (let i = 0; i < activePowers.length; i++)
    activePowers[i] = false;
    
  for (let i = 0; i < int_ary.length; i++)
    activePowers[int_ary[i]] = true;
}
