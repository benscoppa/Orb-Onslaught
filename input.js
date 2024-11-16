/*
  This function gets proper scale based on window.
*/
function updateWindowScale() {
  windowScale = min(windowWidth / baseWidth, windowHeight / baseHeight);
  resizeCanvas(baseWidth * windowScale, baseHeight * windowScale);
}

/*
  This function adjust the window scale if resized.
*/
function windowResized() {
  updateWindowScale();
}


/*
  This function controls mouse clicking inputs. 
*/
function mouseClicked() {
  
  // Get the mouse position adjusted for window size
  var xCor = mouseX  / windowScale;
  var yCor = mouseY / windowScale;
  
  // If the game is in the title screen after title animation
  if (titleScreen === true && onslaughtTitle.x === 400) {
    // If the start button is pressed call the start button animation and progress to option screen
    if ((xCor >= startButton.x) && (xCor <= startButton.x + 220) && (yCor >= startButton.y) && (yCor < startButton.y + 60)) {
      startButton.pressed();
    }
  }
  
  // If the game is in the instruction screen
  if (instructionScreen === true && startButton.buttonTimer === 0) {
    // If the menu button is pressed call the menu button animation and progress to next screen
    if ((xCor >= menuButton.x) && (xCor <= menuButton.x + 220) && (yCor >= menuButton.y) && (yCor < menuButton.y + 60)) {
      menuButton.pressed();
    }
  }
  
  // If the game is in the options screen
  if (optionScreen === true && menuButton.buttonTimer === 0) {
    // If the menu button is pressed call the menu button animation and progress to next screen
    if ((xCor >= menuButton.x) && (xCor <= menuButton.x + 220) && (yCor >= menuButton.y) && (yCor < menuButton.y + 60)) {
      menuButton.pressed();
    }
    
    // handle the options buttons switching through difficulties
    if ((xCor >= coinButton.x) && (xCor <= coinButton.x + 180) && (yCor >= coinButton.y) && (yCor < coinButton.y + 50)) {
      coinButton.pressed();
    }
    if ((xCor >= speedButton.x) && (xCor <= speedButton.x + 180) && (yCor >= speedButton.y) && (yCor < speedButton.y + 50)) {
      speedButton.pressed();
    }
    if ((xCor >= healthButton.x) && (xCor <= healthButton.x + 180) && (yCor >= healthButton.y) && (yCor < healthButton.y + 50)) {
      healthButton.pressed();
    }
    if ((xCor >= livesButton.x) && (xCor <= livesButton.x + 180) && (yCor >= livesButton.y) && (yCor < livesButton.y + 50)) {
      livesButton.pressed();
    }
  }
  
  // if the game is in the game screen and not building
  if (startGame === true && building === false && shop) {
    // if the cannon is selected purchase a new cannon
    if ((xCor >= shop.x + 5) && (xCor <= shop.x + 72.5) && (yCor >= shop.y + 60) && (yCor <= shop.y + 150)) {
      // if there are enough coins to buy the cannon
      if (gameCoins >= 40) {
        buildTower = new Cannon(xCor, yCor, []);
        building = true;
      }
      // animation for cannon being too expensive
      else if (gameCoins < 40) {
        shop.cannonExpensive = true;
        shop.expensiveTimer = 10;
      }
    }
  }
  // if building is true either place the tower or return it to the shop
  else if (startGame === true && building === true) {
    // return cannon to the shop
    if ((xCor >= shop.x - 20) && (xCor <= shop.x + 120) && (yCor >= shop.y) && (yCor <= shop.y + 365)) {
      buildTower = null;
      building = false;
    }
    // place the tower where clicked if it is a valid location
    else if (buildTower.canPlace){
      buildTower.displayRange = false;
      // give it the current wave
      buildTower.currentWave = waveManager.currentWave.wave;
      towers.push(buildTower);
      buildTower = null;
      building = false;
      gameCoins -= 40;
    }
  }
  
  // if the game is over or won
  if (gameOver === true || gameWon === true) {
    // if retuen button is clicked return to options screen
    if ((xCor >= returnToOptionsButton.x) && (xCor <= returnToOptionsButton.x + 390) && (yCor >= returnToOptionsButton.y) && (yCor < returnToOptionsButton.y + 60)) {
      returnToOptionsButton.pressed();
    }
  }
}