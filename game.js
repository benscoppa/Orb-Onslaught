/*
  This function initlaizes objects for the main game.
*/
function initializeGame() {
  // add the tilemap for the main game
  tileMapArray = ["xxxxxxxxxsxxxxxx",
                  "         v      ",
                  "         v      ",
                  " 3hh4  3h1      ",
                  " v  v  v        ",
                  " v  2hhthhh4    ",
                  " v         v    ",
                  " 2h4       v    ",
                  "   v  3hhhh1    ",
                  "   v  v         ",
                  "   v  v         ",
                  "   v  2hhh4     ",
                  "   v      v     ",
                  "xxxexxxxxxexxxxx"]
    
  tilemap = new TileMap(0, -50, tileMapArray);
  tilemap.initialize();
  
  // set difficulty
  gameLives *= livesScaler;
  // always start with 50 coins
  gameCoins = 100;
  
  // game screen coin and heart
  gameHeart = new HeartIcon(25, 30, 30);
  gameCoin =  new CoinIcon(140, 30, 30);
  
  // reset the towers array
  towers = [];
  
  // initialize the waves array
  waveArray = createWaves();
  
  // create a wave  manager to handle the 2D array of waves
  waveManager = new WaveManager(waveArray, 475, -30);
  waveManager.startNextWave();
}


/*
  This function creates the shop for the game.
*/
function createShop() {
  // create the shop
  shop = new Shop(650, 0);
  
  // get an image of cannon for shop
  shopCannon = new Cannon(30, 25, []);
  noStroke();
  clear();
  shopCannon.draw();
  shopCannonImage = get(0, 0, 60, 50);
  
  // add coins to be drawn
  shopCoins.push(new CoinIcon(677.5, 137.5, 15));
}


/*
  This handles displaying and running the game.
*/
function gameScreen() {
  // draw the main tilemap
  tilemap.draw();
  // draw the shop
  shop.draw();
  for (var i  = shopCoins.length - 1; i >= 0; i--) {
    shopCoins[i].draw();
  }
  
  // display lives and coins
  textSize(40);
  fill(0);
  text(gameLives, 50, 45);
  gameHeart.draw();
  text(gameCoins, 165, 45);
  gameCoin.draw();
  
  // handle the build tower object if there is one
  if (buildTower != null) {
    handleBuildTower(buildTower);
    buildTower.draw();
  }
  
  // draw each tower and shoot
  for (var j = towers.length - 1; j >= 0; j--) {
    var tower = towers[j];
    if (pause === false) {
      tower.shoot();
    }
    tower.draw();
  }
  
  // update and draw the wave manager
  waveManager.update();
  waveManager.draw();
  
  // game over if lives get to 0
  if (gameLives <= 0) {
    gameLives = 0;
    gameOver = true;
    pause = true;
    buildTower = null;
    building = false;
  }
  // game won if all waves completed
  else if (waveManager.currentWaveIndex >= waveManager.waveArray.length && waveManager.waveInProgress === false) {
    gameWon = true;
    pause = true;
    buildTower = null;
    building = false;
  }
}