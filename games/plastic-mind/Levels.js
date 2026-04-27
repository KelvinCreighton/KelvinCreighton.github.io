async function LevelSetup() {
  console.log("LevelSetup started for level: " + level);
  
  // Reset basics
  camX = -14;
  camY = 0;
  keysSetup();
  
  // 0: Player
  let p = await FileReader(0);
  if (!p || p.length === 0 || p[0].length < 6) {
    console.warn("Using default player settings");
    p = [[width / 2, height / 2, 25, 5, 0.2, 0]];
  }
  player = new Player(p[0][0], p[0][1], p[0][2], p[0][3], p[0][4], p[0][5]);
    
  // 1: Goal
  let g = await FileReader(1);
  if (!g || g.length === 0 || g[0].length < 3) {
    console.warn("Using default goal settings");
    g = [[0, 0, 25]];
  }
  goal = new Goal(g[0][0], g[0][1], g[0][2]);
  
  // 2: Powers
  let p1 = await FileReader(2);
  if (!p1 || p1.length < 2) {
    console.warn("Using default power settings");
    p1 = [[25, 8], [0, 1, 2, 3, 4, 5, 6, 7, 8]];
  }
  resetPowers(p1[0][0]);
  totalPowerUse = floor(p1[0][1]);
  powerSelect(p1[1].map(v => floor(v)));
    
  // 3: Blocks
  let b = await FileReader(3);
  blocks = [];
  if (b && b.length > 0) {
    for (let i = 0; i < b.length; i++) {
      let bx = b[i][0];
      let by = b[i][1];
      let bw = b[i][2];
      let bh = b[i][3];
      
      if (bw < 0) {
        bx += bw;
        bw *= -1;
      }
      if (bh < 0) {
        by += bh;
        bh *= -1;
      }
      blocks.push(new Block(bx, by, bw, bh, floor(b[i][4])));  
    }
  }
  
  activePowerFirst = activePowerLast = -1;
  for (let i = 0; i < activePowers.length; i++) {
    if (activePowers[i]) {
      if (activePowerFirst === -1) activePowerFirst = i;
      activePowerLast = i;
    }
  }
  console.log("LevelSetup complete");
}
