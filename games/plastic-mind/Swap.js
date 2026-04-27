function startSwap(timer) {
    if (swapTimer > 0)
      Swap();
    swapSetup = true;
    swapTimer = timer;
}

function swapControls(timer) {
  if (swapSetup) {
    swap1 = swap2 = -1;
    let attempts = 0;
    while ((swap1 == -1 || !activePowers[swap1]) && attempts < 100) {
      swap1 = floor(random(0, 25));
      attempts++;
    }
    attempts = 0;
    while ((swap2 == -1 || !activePowers[swap2] || swap2 == swap1) && attempts < 100) {
      swap2 = floor(random(0, 25));
      attempts++;
    }
    swapSetup = false;
  }
  
  fill(255);
  stroke(0);
  strokeWeight(1);
  textSize(20);
  textAlign(LEFT);
  text("Swap: " + (timer / 10).toFixed(1), width - 125, 25);
  
  textSize(15);
  text("<=> ", width - 95, 55);
  if (swap1 !== -1 && swap2 !== -1) {
    showPowers(width - 110, 50, 25, keyPos[swap1]);
    showPowers(width - 45, 50, 25, keyPos[swap2]);
  }
  
  if (timer == 1)
    Swap();
}

function Swap() {
  if (swap1 !== -1 && swap2 !== -1) {
    let temp = keyPos[swap1];
    keyPos[swap1] = keyPos[swap2];
    keyPos[swap2] = temp;
  }
}
