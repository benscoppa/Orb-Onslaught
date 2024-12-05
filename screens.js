/*
  This handles displaying the title screen.
*/
function titleScreenDraw() {
  
  // draw the word orb
  orbTitle.draw();
  // move the word orb into view
  if (orbTitle.x < 400) {
    orbTitle.x += 7;
  }
  
  // draw the word onslaught
  onslaughtTitle.draw();
  // move the word onslaughtinto view
  if (onslaughtTitle.x > 400 && orbTitle.x === 400) {
    onslaughtTitle.x -= 7;
  }
  
  // draw the creator information text
  if (onslaughtTitle.x === 400) {
    textSize(35);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text("Created By Ben Scoppa", 400, 513);
    textAlign(LEFT, BASELINE);
  
    // Add a shadow for button
    fill(0);
    rect(290, 413, 220, 60);
    // Draw the start button
    startButton.draw();
    
    // draw the cannon animataion
    cannonAnimationOne.cannonball();
    cannonAnimationOne.draw();
    cannonAnimationOne.shoot();
    
    cannonAnimationTwo.cannonball();
    cannonAnimationTwo.draw();
    cannonAnimationTwo.shoot();
  }
}


/*
  This handles displaying the instructions screen.
*/
function instructionScreenDraw() {
  // Add background for instructions window
  fill(220);
  stroke(0);
  rect(100, 25, 600, 550);
  
  // Add large instructions text
  textSize(40);
  fill(0);
  noStroke();
  text("Instructions", 300, 70);
  
  // add the instructions video box
  stroke(0);
  strokeWeight(4);
  fill(0);
  rect(150, 210, 500, 250);
  strokeWeight(1);
  
  // first set of instruction text
  if (instructionOne === true) {
    textSize(15);
    noStroke();
    text("Purchase towers from the shop and place them near the path to", 180, 100);
    text("defeat Orbs. Defeating Orbs rewards coins that can be used to", 180, 120);
    text("purchase upgrades and more powerful towers. Towers can be", 180, 140);
    text("upgraded to deal more damage, attack faster, or gain special", 180, 160);
    text("improved attacks that are sure to stop any foe.", 180, 180);
    
    // draw the instuctions one video tilemap
    instructionsOneTilemap.draw();
    
    // draw and move wave of orbs
    instructionsWaveOne.spawnOrbs();
    // restart the wave after its timer
    if (instructionsWaveOne.waveTimer <= 0) {
      instructionsWaveOne.waveTimer = 675;
      instructionsWaveOne.initialize();
      // reset health and coins after one wave
      instructionsCoins = 0;
      instructionsLives = 5;
    }
    else {
      instructionsWaveOne.waveTimer -= 1;
    }
    
    // cover the orbs when off instructions video screen
    fill(220);
    noStroke();
    rect(550, 160, 50, 48);
    rect(400, 462, 50, 48);
    fill(0);
    rect(550, 208, 50, 2);
    rect(400, 460, 50, 2);
    
    // add the cannons
    instructionsOneCannonOne.shoot();
    instructionsOneCannonOne.drawImage();
    
    instructionsOneCannonTwo.shoot();
    instructionsOneCannonTwo.drawImage();
  }
  
  // second set of instructions
  if (instructionTwo === true) {
    
    // draw the instuctions two video tilemap
    instructionsTwoTilemap.draw();
    
    // draw and move wave of orbs
    instructionsWaveTwo.spawnOrbs();
    // restart the wave after its timer
    if (instructionsWaveTwo.waveTimer <= 0) {
      instructionsWaveTwo.waveTimer = 800;
      instructionsWaveTwo.initialize();
      // reset health and coins after one wave
      instructionsCoins = 0;
      instructionsLives = 5;
    }
    else {
      instructionsWaveTwo.waveTimer -= 1;
    }
    
    // cover the orbs when off instructions video screen
    fill(220);
    noStroke();
    rect(400, 150, 50, 58);
    rect(500, 462, 50, 48);
    rect(200, 462, 50, 48);
    fill(0);
    rect(400, 208, 50, 2);
    rect(500, 460, 50, 2);
    rect(200, 460, 50, 2);
    
    textSize(15);
    noStroke();
    text("If an Orb reaches the end of the path you will lose a life. If you", 180, 100);
    text("lose all of your lives then the game is over. Make sure you have", 180, 120);
    text("each lane covered as eniemes will favor paths with less defenses.", 180, 140);
    text("Some enemies cannot be damaged by certain towers and others", 180, 160);
    text("take extra damage. Click a tower to learn how it effects Orbs.", 180, 180);
    
    // add the cannons
    instructionsTwoCannonOne.cannonball();
    instructionsTwoCannonOne.draw();
    instructionsTwoCannonOne.shoot();
    
    instructionsTwoCannonTwo.cannonball();
    instructionsTwoCannonTwo.draw();
    instructionsTwoCannonTwo.shoot();
  }
  
  // Add a shadow for button
  fill(0);
  rect(290, 493, 220, 60);
  // Draw the menu button for progressing through instructions and options
  menuButton.draw();
  
  //display coins and lives
  fill(0);
  textSize(25);
  text(instructionsCoins, 252, 240);
  instructionsCoin.draw();
  
  textSize(25);
  text(instructionsLives, 194, 240);
  instructionsHeart.draw()
}


/*
  This handles displaying the options screen.
*/
function optionScreenDraw() {
  
  // Add background for options window
  fill(220);
  rect(100, 25, 600, 550);
  
  // Add large options text
  textSize(40);
  fill(0);
  noStroke();
  text("Options", 300, 70);
  
  textSize(15);
  noStroke();
  text("The options section contains modifiers that can make the game", 180, 100);
  text("easier or harder. You may want to start with easier modifiers", 180, 120);
  text("while you learn how each tower and enemy type works and", 180, 140);
  text("then move on to a challenge. Each modifer can be adjusted", 180, 160);
  text("seperatedly to create many different replayable experiences.", 180, 180);
  
  // Add dummy options for changing gamemodes
  textSize(20);
  text("Coins", 250, 230);
  text("Speed", 250, 300);
  text("Health", 250, 370);
  text("Lives", 250, 440);
  
  // Add a shadow for menu button
  fill(0);
  rect(290, 493, 220, 60);
  // Draw the menu button for progressing through instructions and options
  menuButton.draw();
  
  // Add a shadow for coin button
  fill(0);
  rect(340, 203, 180, 50);
  // Draw the coins button
  coinButton.draw();
  
  // Add a shadow for speed button
  fill(0);
  rect(340, 273, 180, 50);
  // Draw the speed button
  speedButton.draw();
  
  // Add a shadow for health button
  fill(0);
  rect(340, 343, 180, 50);
  // Draw health button
  healthButton.draw();
  
  // Add a shadow for lives button
  fill(0);
  rect(340, 413, 180, 50);
  // Draw the lives button
  livesButton.draw();
}


/*
  This handles displaying the game over screen.
*/
function gameOverScreen() {
  // Add background for game over window
  fill(200);
  stroke(0);
  strokeWeight(2);
  rect(160, 125, 480, 290);
  
  fill(120);
  rect(185, 150, 430, 160);
  
  // Add large game over text
  textSize(40);
  fill(230, 40, 20);
  noStroke();
  // game over and indicate rounds survived
  textAlign(CENTER, CENTER);
  text("GAME OVER", 400, 200);
  text(`You Survived ${waveManager.currentWaveIndex - 1} Waves`, 400, 250);
  textAlign(LEFT, BASELINE);
  
  // Add a shadow for lives button
  fill(0);
  rect(205, 333, 390, 60);
  // draw options button
  returnToOptionsButton.draw()
}


/*
  This handles displaying the game won screen.
*/
function gameWonScreen() {
  // Add background for game over window
  fill(200);
  stroke(0);
  strokeWeight(2);
  rect(160, 125, 480, 290);
  
  fill(120);
  rect(185, 150, 430, 160);
  
  // Add large game over text
  textSize(40);
  fill(20, 230, 40);
  noStroke();
  // game over and indicate rounds survived
  textAlign(CENTER, CENTER);
  text("GAME WON", 400, 200);
  text(`You Survived`, 400, 250);
  textAlign(LEFT, BASELINE);
  
  // Add a shadow for lives button
  fill(0);
  rect(205, 333, 390, 60);
  // draw options button
  returnToOptionsButton.draw()
}