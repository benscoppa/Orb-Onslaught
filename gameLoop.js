/*
  This function sets up the game
*/
function setup() {
  
  // create canvas
  canvas = createCanvas(baseWidth, baseHeight);
  // scale canavs to window
  updateWindowScale();
  // change the font
  textFont('Palatino Linotype');
  
  // initialize title objects
  orbTitle = new OrbTitle(-104, 210);
  onslaughtTitle = new OnslaughtTitle(1100, 310);
  
  // initialize start button
  startButton = new StartButton(290, 410);
  buttons.push(startButton);
  // initialize menu button
  menuButton = new MenuButton(290, 490);
  buttons.push(menuButton);

  // initialize coins option button
  coinButton = new OptionsButton(340, 200);
  coinButton.coins = true;
  buttons.push(coinButton);
  // initialize speed option button
  speedButton = new OptionsButton(340, 270);
  speedButton.speed = true;
  buttons.push(speedButton);
  // initialize health option button
  healthButton = new OptionsButton(340, 340);
  healthButton.health = true;
  buttons.push(healthButton);
  // initialize lives option button
  livesButton = new OptionsButton(340, 410);
  livesButton.lives = true;
  buttons.push(livesButton);
  
  // cannon animations
  cannonAnimationOne = new CannonAnimation(200, 190, -PI/4);
  cannonAnimationTwo = new CannonAnimation(600, 190, -3 * PI/4);
  
  // initialize tilemaps
  instructionsOneTilemapArray = ["xxxxxxxxsx",
                                 "        v ",
                                 "  3hhhhh1 ",
                                 "  v       ",
                                 "  2hh4    ",
                                 "     v    ",
                                 "xxxxxexxxx"];
  instructionsOneTilemap = new TileMap(150, 160, instructionsOneTilemapArray);
  instructionsOneTilemap.initialize();
  
  instructionsTwoTilemapArray = ["xxxxxsxxxx",
                                 "     v    ",
                                 "  3hhth4  ",
                                 "  v    v  ",
                                 " 31    v  ",
                                 " v     v  ",
                                 "xexxxxxexx"];
  instructionsTwoTilemap = new TileMap(150, 160, instructionsTwoTilemapArray);
  instructionsTwoTilemap.initialize();
  
  // instructions one wave array
  instructionsOneWaveArray = [{ type: 'b', path: instructionsOneTilemap.paths[0], spawnTime: 60 },
                              { type: 'b', path: instructionsOneTilemap.paths[0], spawnTime: 120 },
                              { type: 'b', path: instructionsOneTilemap.paths[0], spawnTime: 180 },
                              { type: 'b', path: instructionsOneTilemap.paths[0], spawnTime: 210 }];
  instructionsWaveOne = new WaveCreator(575, 185, instructionsOneWaveArray, 675);
  instructionsWaveOne.initialize();
  
  // tinstuctions two wave array
  instructionsTwoWaveArray = [{ type: 'b', path: instructionsTwoTilemap.paths[0], spawnTime: 60 },
                              { type: 'b', path: instructionsTwoTilemap.paths[0], spawnTime: 120 },
                              { type: 'y', path: instructionsTwoTilemap.paths[1], spawnTime: 360 },
                              { type: 'y', path: instructionsTwoTilemap.paths[1], spawnTime: 400 }];
  instructionsWaveTwo = new WaveCreator(425, 185, instructionsTwoWaveArray, 800);
  instructionsWaveTwo.initialize();
  
  // instruction screen cannons
  instructionsOneCannonOne = new Cannon(520, 340, instructionsWaveOne.wave);
  instructionsOneCannonTwo = new Cannon(210, 300, instructionsWaveOne.wave);
  
  instructionsTwoCannonOne = new Cannon(215, 265, instructionsWaveTwo.wave);
  instructionsTwoCannonTwo = new Cannon(200, 325, instructionsWaveTwo.wave);
  
  // instructions screen coin and heart
  instructionsCoin =  new CoinIcon(235, 230, 20);
  instructionsHeart = new HeartIcon(175, 230, 20);
  
  // menu buutton for returning to options
  returnToOptionsButton = new ReturnButton(205, 330);
  buttons.push(returnToOptionsButton);
}


/*
  This function draws and handles movement and other game functions every frame.
*/
function draw() {
  // grass background
  background(90, 170, 90);
  
  // scale based on window
  push();
  scale(windowScale);
  
  // handle any active button timers
  for (var i = buttons.length - 1; i >= 0; i--) {
    button = buttons[i];
    if (button.buttonTimer > 0) {
    button.buttonTimer -= 1;
    }
    if (button.buttonTimer === 5) {
      button.y -= 3;
    }
  }
  
  // dispalay title screen
  if (titleScreen === true) {
    titleScreenDraw();
  }
  
  // dispalay intructions screen
  if (instructionScreen === true && startButton.buttonTimer <= 0) {
    titleScreen = false;
    instructionScreenDraw();
  }
  
  // dispalay options screen
  if (optionScreen === true && returnToOptionsButton.buttonTimer <= 0) {
    gameOver = false;
    gameWon = false;
    pause = false;
    optionScreenDraw();
  }
  
  // start the game
  if (startGame === true && menuButton.buttonTimer <= 0) {
    optionScreen = false;
    gameScreen();
  }
  
  // game over screen
  if (gameOver === true) {
    gameOverScreen();
  }
  // game won screen
  else if (gameWon === true) {
    gameWonScreen();
  }
  
  pop();
}