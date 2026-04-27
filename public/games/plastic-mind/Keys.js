let totalKeys = 26;
let keyPos = new Array(totalKeys);
let keys = new Array(totalKeys).fill(false);
let pressedKeys = new Array(totalKeys).fill(false);

function keysSetup() {
  for (let i = 0; i < totalKeys; i++)
    keyPos[i] = i;
}

function keyPressed() {
  handleKey(key, true);
  if (key === ' ') startSwap(100);
}

function keyReleased() {
  handleKey(key, false);
}

function handleKey(k, state) {
  let lowerK = k.toLowerCase();
  if (lowerK === 'q') keys[keyPos[0]] = state;
  if (lowerK === 'w') keys[keyPos[1]] = state;
  if (lowerK === 'e') keys[keyPos[2]] = state;
  if (lowerK === 'd') keys[keyPos[3]] = state;
  if (lowerK === 'c') keys[keyPos[4]] = state;
  if (lowerK === 'x') keys[keyPos[5]] = state;
  if (lowerK === 'z') keys[keyPos[6]] = state;
  if (lowerK === 'a') keys[keyPos[7]] = state;
  if (lowerK === 's') keys[keyPos[8]] = state;
}
