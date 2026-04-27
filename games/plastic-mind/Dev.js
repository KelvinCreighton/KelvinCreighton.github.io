function DevFeatures() {
  if (buildMode)
    Builder();
  
  if (keyIsPressed && key === '`' && !devModeKey) {
    devMode = !devMode;
    devModeKey = true;
  } else if (!keyIsPressed) {
    devModeKey = false;
  }
  
  if (devMode) {
    let speed = 30;
    if (keys[keyPos[5]]) speed *= 2;
    if (keys[keyPos[4]]) speed *= 4;
    if (keys[keyPos[6]]) speed /= 2;
      
    if (keyIsPressed) {
      if (keyCode === LEFT_ARROW) camX += speed;
      if (keyCode === RIGHT_ARROW) camX -= speed;
      if (keyCode === UP_ARROW) camY += speed;
      if (keyCode === DOWN_ARROW) camY -= speed;
        
      if (player) {
        if (key === 'a' || key === 'A') player.x -= speed / 4;
        if (key === 'd' || key === 'D') player.x += speed / 4;
        if (key === 'w' || key === 'W') player.y -= speed / 4;
        if (key === 's' || key === 'S') player.y += speed / 4;
      }
      
      if (key === 'r' || key === 'R') {
        checkLevel = -1;
        devMode = false;
      }
      
      for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].type === -1)
          blocks[i].type = 4;
      }
    }
      
    if (keyIsPressed && (key === 'b' || key === 'B') && !buildModeKey) {
      buildMode = !buildMode;
      buildModeKey = true;
    } else if (!keyIsPressed) {
      buildModeKey = false;
    }
      
    let gridSize = 50;
    noFill();
    stroke(255, 100);
    strokeWeight(3);
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
    
    stroke(255, 25);
    strokeWeight(1);
    let xOffset = camX % gridSize;
    let yOffset = camY % gridSize;
    for (let x = 0; x < floor(width / gridSize) + 1; x++)
      line(x * gridSize + xOffset, 0, x * gridSize + xOffset, height + yOffset + gridSize);
    for (let y = 0; y < floor(height / gridSize) + 1; y++)
      line(0 + xOffset, y * gridSize + yOffset, width + xOffset + gridSize, y * gridSize + yOffset);
  } else {
    buildMode = false;
  }
}

function Builder() {
  // Placeholder for builder logic
}
