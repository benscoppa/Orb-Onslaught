/*
  This class creates a start button that can be pressed to mobve from the title screen to the options screen.
*/
class StartButton {
  
  /*
    The constructor sets the starting property of the start button.
    var x - the x position of the start button
    var y - the y position of the start button
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.buttonTimer = 0;
  }
  
  /*
    This function draws the start button. 
  */
  draw() {
    push();
    translate(this.x, this.y);
    // Color and no border
    noStroke();
    // Create the rectangle of the start button
    fill(60);
    rect(0, 0, 220, 60);
    fill(240, 50, 50);
    rect(5, 5, 210, 50);
    // Add start text to button
    fill(0);
    textSize(40);
    text("START", 50, 45);
    pop();
  }
  
  /*
    This function is called when the start button is pressed advancing to option screen. 
  */
  pressed() {
    // start button animation
    this.y += 3;
    this.buttonTimer = 12;
    instructionScreen = true;
    // initialize the shop
    createShop();
    // create tower and orb images
    towerImages();
    orbImages();
  }
}


/*
  This class creates menu button for progressing through the instructions and options.
*/
class MenuButton {
  
  /*
    The constructor sets the starting property of the menu button.
    var x - the x position of the start button
    var y - the y position of the start button
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.buttonTimer = 0;
    this.play = false;
  }
  
  /*
    This function draws the start button. 
  */
  draw() {
    push();
    translate(this.x, this.y);
    // Color and no border
    noStroke();
    // Create the rectangle of the start button
    fill(60);
    rect(0, 0, 220, 60);
    textSize(40);
    // display next text
    if (this.play === false) {
      fill(90, 90, 170);
      rect(5, 5, 210, 50);
      fill(0);
      text("NEXT", 60, 45);
    }
    // display play text
    else {
      fill(42, 185, 42);
      rect(5, 5, 210, 50);
      fill(0);
      text("PLAY", 60, 45);      
    }
    pop();
  }
  
  /*
    This function is called when the menu button is pressed advancing through instructions and options. 
  */
  pressed() {
    // start button animation
    this.y += 3;
    this.buttonTimer = 12;
    // switch to second instruction screen
    if (instructionOne === true) {
      instructionTwo = true;
      instructionOne = false;
      // reset health and coins for second screen
      instructionsCoins = 0;
      instructionsLives = 5;
    }
    // switch to options screen
    else if (instructionTwo === true) {
      optionScreen = true;
      instructionScreen = false;
      instructionTwo = false;
      // update button to say play
      this.play = true;
      // set scalars to easiest
      speedScaler = 0.7;
      heathScaler = 0.5;
      coinsScaler = 2;
      livesScaler = 2;
    }
    // start the game
    else if (optionScreen === true) {
      startGame = true;
      // initialize the main game
      initializeGame();
    }
  }
}


/*
  This class creates returb button for returning to the options screen.
*/
class ReturnButton {
  
  /*
    The constructor sets the starting property of the return button.
    var x - the x position of the start button
    var y - the y position of the start button
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.buttonTimer = 0;
  }
  
  /*
    This function draws the start button. 
  */
  draw() {
    push();
    translate(this.x, this.y);
    // Color and no border
    noStroke();
    // Create the rectangle of the start button
    fill(60);
    rect(0, 0, 390, 60);
    textSize(30);
    // display next text
    fill(90, 90, 170);
    rect(5, 5, 380, 50);
    fill(0);
    text("RETURN TO OPTIONS", 37, 40);   
    pop();
  }
  
  /*
    This function is called when the menu button is pressed advancing through instructions and options. 
  */
  pressed() {
    // start button animation
    this.y += 3;
    this.buttonTimer = 12;
    // switch to options screen
    optionScreen = true;
    startGame = false;
    instructionScreen = false;
    instructionTwo = false;
    // reset lives
    gameLives = 25;
  }
}


/*
  This class creates options button for chaanging the difficulty modifiers.
*/
class OptionsButton {
  
  /*
    The constructor sets the starting property of the options button.
    var x - the x position of the start button
    var y - the y position of the start button
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.buttonTimer = 0;
    // what option the button controls
    this.coins = false;
    this.speed = false;
    this.health = false
    this.lives = false;
    // the setting of the option
    this.easy = true;
    this.medium = false;
    this.hard = false;
  }
  
  /*
    This function draws the options button. 
  */
  draw() {
    push();
    translate(this.x, this.y);
    // Color and no border
    noStroke();
    // Create the rectangle of the options button
    fill(60);
    rect(0, 0, 180, 50);
    textSize(30);
    // display button text for each type of button
    // easy setting
    if (this.easy === true) {
      fill(90, 170, 90);
      rect(5, 5, 170, 40);
      fill(0);
      if (this.lives === true || this.coins === true) {
        text("Double", 20, 35);
      }
      else {
        text("Low", 20, 35);
      }
      // add smiley face
      fill(130, 210, 130);
      stroke(30, 110, 30);
      ellipse(150, 25, 30, 30);
      // mouth
      noFill();
      strokeWeight(4);
      arc(150, 29, 14, 11, PI*(1/8), PI*(7/8));
      // eyes
      ellipse(145, 21, 2, 2);
      ellipse(155, 21, 2, 2);
    }
    // medium setting
    else if (this.medium === true) {
      fill(90, 90, 170);
      rect(5, 5, 170, 40);
      fill(0);
      text("Normal", 20, 35);
      // add normal face
      fill(130, 130, 210);
      stroke(30, 30, 110);
      ellipse(150, 25, 30, 30);
      // mouth
      noFill();
      strokeWeight(4);
      line(144, 31, 156, 31);
      // eyes
      ellipse(145, 21, 2, 2);
      ellipse(155, 21, 2, 2);
    }
    // hard setting
    else if (this.hard === true) {
      fill(170, 90, 90);
      rect(5, 5, 170, 40);
      fill(0);
      if (this.lives === true) {
        text("One", 20, 35);
      }
      else if (this.coins === true){
        text("Half", 20, 35);
      }
      else {
        text("High", 20, 35);
      }
      // add angry face
      fill(210, 130, 130);
      stroke(110, 30, 30);
      ellipse(150, 25, 30, 30);
      // mouth
      noFill();
      strokeWeight(4);
      arc(150, 35, 14, 11, PI*(9/8), PI*(15/8));
      // eyes
      ellipse(145, 21, 2, 2);
      ellipse(155, 21, 2, 2);
    }
    pop();
  }
  
  /*
    This function is called when the menu button is pressed advancing through instructions and options. 
  */
  pressed() {
    // start button animation
    this.y += 3;
    this.buttonTimer = 12;
    // logic for switching through difficulties
    if (this.easy === true) {
      this.easy = false;
      this.medium = true;
      // update difficulty scalars to normal
      if (this.coins === true) {
        coinsScaler = 1;
      }
      else if (this.lives === true) {
        livesScaler = 1;
      }
      else if (this.health === true) {
        heathScaler = 1;
      }
      else if (this.speed === true) {
        speedScaler = 1;
      }
    }
    else if (this.medium === true) {
      this.medium = false;
      this.hard = true;
      // update difficulty scalars to hard
      if (this.coins === true) {
        coinsScaler = 0.5;
      }
      else if (this.lives === true) {
        livesScaler = 1 / gameLives;
      }
      else if (this.health === true) {
        heathScaler = 1.4;
      }
      else if (this.speed === true) {
        speedScaler = 1.2;
      }
    }
    else {
      this.hard = false;
      this.easy = true;
      // update difficulty scalars to easiest
      if (this.coins === true) {
        coinsScaler = 2;
      }
      else if (this.lives === true) {
        livesScaler = 2;
      }
      else if (this.health === true) {
        heathScaler = 0.5;
      }
      else if (this.speed === true) {
        speedScaler = 0.7;
      }
    }
  }
}

/*
  This class creates wave start button to manually start waves.
*/
class WaveStartButton {
  
  /*
    The constructor sets the starting property of the wave start button.
    var x - the x position of the wave start button
    var y - the y position of the wave start button
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.buttonTimer = 0;
    this.canStartWave = true;
  }
  
  /*
    This function draws the wave start button. 
  */
  draw() {
    push();
    translate(this.x, this.y);
    // Color and no border
    noStroke();
    // Create the rectangle of the options button
    fill(60);
    rect(0, 0, 35, 35);
    
    // color based on if wave can start.
    if (this.canStartWave) {
      fill(200);
    }
    else {
      fill(120);
    }
    rect(3, 3, 29, 29);
    
    // add play button
    fill(0);
    triangle(9, 8, 9, 27, 26, 17.5);
    
    pop();
  }
  
  /*
    This function is called when the wave start button is pressed. 
  */
  pressed() {
    // press button down
    this.y += 3;
    this.canStartWave = false;
    
    // start the next wave
    waveManager.startNextWave();
  }
  
  /*
    This function is called when the wave start button is unpressed. 
  */
  unpressed() {
    // press button down
    this.y -= 3;
    this.canStartWave = true;
  }
}


/*
  This class creates auto wave button to auto start waves.
*/
class AutoWaveButton {
  
  /*
    The constructor sets the starting property of the auto wave button.
    var x - the x position of the button
    var y - the y position of the button
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.buttonTimer = 0;
    this.down = false;
  }
  
  /*
    This function draws the auto wave button. 
  */
  draw() {
    push();
    translate(this.x, this.y);
    // Color and no border
    noStroke();
    // Create the rectangle of the auto wave button
    fill(60);
    rect(0, 0, 35, 35);
    
    // color based on if pressed down
    if (this.down === false) {
      fill(200);
    }
    else {
      fill(120);
    }
    rect(3, 3, 29, 29);
    
    // add auto button
    fill(0);
    noStroke();
    ellipse(17.5, 17.5, 22, 22);
    
    // color based on if pressed down
    if (this.down === false) {
      fill(200);
    }
    else {
      fill(120);
    }
    
    // draw arrows
    ellipse(17.5, 17.5, 13, 13);
    rect(15, 5, 6, 7);
    triangle(15, 5, 24, 5, 21, 12);
    rect(14, 23, 6, 7);
    triangle(20, 30, 11, 30, 14, 23);
    
    fill(0);
    triangle(12, 5.5, 15, 15, 19, 9);
    triangle(23, 29.5, 20, 20, 16, 26);
    
    pop();
  }
  
  /*
    This function is called when the wave start button is pressed. 
  */
  pressed() {
    // press button down
    this.y += 3;
    this.down = true;
    
    // press wave start button as well if can start wave
    if (waveStartButton.canStartWave === true) {
      waveStartButton.pressed();
    }
    // set auto waves to true
    waveManager.autoWaves = true;
  }
  
  /*
    This function is called when the wave start button is unpressed. 
  */
  unpressed() {
    // unpress button
    this.y -= 3;
    this.down = false;
    // set auto waves to false
    waveManager.autoWaves = false;
  }
}


/*
  This class creates towers button that plus up window to read about each tower.
*/
class TowersButton {
  
  /*
    The constructor sets the starting property of the towers button.
    var x - the x position of the button
    var y - the y position of the button
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.buttonTimer = 0;
  }
  
  /*
    This function draws the towers button. 
  */
  draw() {
    push();
    translate(this.x, this.y);
    // Color and no border
    noStroke();
    // Create the rectangle of the auto wave button
    fill(60);
    rect(0, 0, 140, 50);
    fill(90, 90, 170);
    rect(3, 3, 134, 44);
    fill(0);
    textSize(27);
    textAlign(CENTER, CENTER);
    text('TOWERS', 70, 28);
    textAlign(LEFT, BASELINE);
    pop();
  }
  
  /*
    This function is called when the towers button is pressed. 
  */
  pressed() {
    this.y += 3;
    this.buttonTimer = 12;
    towersMenu = true;
    pause = true;
  }
}

/*
  This class creates button to exit out of tower menu.
*/
class TowersExitButton {
  
  /*
    The constructor sets the starting property of the towers button.
    var x - the x position of the button
    var y - the y position of the button
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.buttonTimer = 0;
  }
  
  /*
    This function draws the towers exit button. 
  */
  draw() {
    push();
    translate(this.x, this.y);
    // Color and no border
    noStroke();
    // Create the rectangle of the button
    fill(60);
    rect(0, 0, 35, 35);
    fill(240, 50, 50);
    rect(3, 3, 29, 29);
    fill(0);
    textSize(27);
    textAlign(CENTER, CENTER);
    text('X', 17.5, 20);
    textAlign(LEFT, BASELINE);
    pop();
  }
  
  /*
    This function is called when the towers exit button is pressed. 
  */
  pressed() {
    this.y += 3;
    this.buttonTimer = 12;
    pause = false;
  }
}