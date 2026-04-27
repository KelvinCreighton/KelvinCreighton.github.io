let level = 1;
let checkLevel = -1;                              
let menu = 0;                                     
let isLoading = false;

let devMode = false;                          
let devModeKey = false;                               
let allowDev = true;                          

let buildMode = false;                        
let buildModeKey = false;                             

let camX = 0, camY = 0;

let blocks = [];                                   
let player = null;
let goal = null;

let powers = [];                   
let activePowers = new Array(26).fill(false);         
let totalPowerUse = 0;                                
let nextPower = 0;                                

let swapSetup = false;                                
let swapTimer = 0;                                
let swap1 = -1, swap2 = -1;                       

let activePowerFirst = -1, activePowerLast = -1;  

function setup() {
  createCanvas(720, 480);
  
  for (let i = 0; i < 64; i++)
    powers[i] = new Power();
    
  keysSetup(); 
}

function draw() {
  background(0);
  
  if (checkLevel != level && !isLoading) {
    isLoading = true;
    LevelSetup().then(() => {
      checkLevel = level;
      isLoading = false;
    }).catch(err => {
      console.error("LevelSetup failed:", err);
      isLoading = false;
    });
  }
  
  if (isLoading) {
    fill(255);
    noStroke();
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Loading Level " + level + "...", width/2, height/2);
    return;
  }
  
  if (level == 0)
    Menu();                
  else if (level > 0)
    Game();                
  
  if (allowDev)
    DevFeatures();           
}

function Game() {
  if (!player || !goal) return;

  if (!devMode) {
    player.nextFrame();                                                                                     
    
    for (let i = 0; i < powers.length; i++)
      if (powers[i].active)    
          powers[i].collision(player.x, player.y, player.size);                                             
          
    for (let i = 0; i < blocks.length; i++)
        player.collision(blocks[i].x+camX, blocks[i].y+camY, blocks[i].w, blocks[i].h, blocks[i].type, i);  
        
    player.collision(goal.x-goal.size/2+camX, goal.y-goal.size/2+camY, goal.size/1.5, goal.size/1.3, 5, 0); 
    
    player.update();                                                                                        
  }
  
  for (let i = 0; i < blocks.length; i++)
    blocks[i].display(i);           
    
  for (let i = 0; i < powers.length; i++)
    if (powers[i].active)
      powers[i].display();          
  
  goal.display();                   
  player.display();                 
  
  if (activePowerFirst !== -1) {
    let xOffset = activePowerFirst*20;
    let w = activePowerLast*20 - xOffset + 50;
    fill(100, 0, 100);
    stroke(50, 0, 50);
    strokeWeight(3);
    rectMode(CORNER);
    rect(xOffset, 0, w, 100);
    
    let displayKeys = ['Q', 'W', 'E', 'D', 'C', 'X', 'Z', 'A', 'S'];
    
    for (let i = 0; i < activePowers.length; i++) {
      if (activePowers[i]) {
        let x = i*20+25;
        let y = 25;
        
        showPowers(x, y, 15, keyPos[i]);    
        
        if (i < displayKeys.length) {
          noStroke();
          fill(255);
          textSize(15);
          textAlign(CENTER);
          text(displayKeys[i], x, y+25);
        }
        
        showPowers(x, y+45, 15, i);         
      }
    }
  }
  
  if (swapTimer > 0) {
    swapControls(swapTimer);    
    swapTimer -= 1;
  }
  
  if (!devMode) {
    for (let i = 0; i < totalKeys; i++) {
      if(keys[i] && !pressedKeys[i]) {
        UsePower(i);                        
        pressedKeys[i] = true;
      } else if (!keys[i] && pressedKeys[i]) {
        pressedKeys[i] = false;
      }
    }
  }
}
