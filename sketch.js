
/*
  This class creates the top word orb for thee title orb onslaught.
*/
class OrbTitle {
  /*
    The constructor sets the starting property of orb word.
    var x - the x position of the start button
    var y - the y position of the start button
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  /*
    This function draws the word orb. 
  */
  draw() {
    push();
    translate(this.x, this.y);
    textSize(100);
    textAlign(CENTER, CENTER);
    fill(200, 50, 50);
    stroke(0);
    strokeWeight(8);
    
    
    // Draw the letters r  and b of orb
    text('r', 15, 0);
    text('b', 65, 0);

    // Draw an orb in place of the O
    strokeWeight(4);
    fill(50, 100, 200);
    ellipse(-50, -10, 80, 80);

    // add eyes
    fill(255);
    noStroke();
    ellipse(-65, -20, 15, 15);
    ellipse(-35, -20, 15, 15);

    // add pupils
    fill(0);
    ellipse(-65, -20, 5, 5);
    ellipse(-35, -20, 5, 5);
    
    // reset text options
    fill(0);
    strokeWeight(1);
    textAlign(LEFT, BASELINE);
    pop();
  }
}


/*
  This class creates the top word onslaught for the title orb onslaught.
*/
class OnslaughtTitle {
  /*
    The constructor sets the starting property of orb word.
    var x - the x position of the start button
    var y - the y position of the start button
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  /*
    This function draws the word orb. 
  */
  draw() {
    push();
    translate(this.x, this.y);
    textSize(100);
    textAlign(CENTER, CENTER);
    fill(200, 50, 50);
    stroke(0);
    strokeWeight(8);
    
    
    // Draw the letters r  and b of orb
    text('n', -141, 0);
    text('s', -83, 0);
    text('l', -43, 0);
    text('a', 0, 0);
    text('u', 57, 0);
    text('g', 117, 0);
    text('h', 180, 0);
    text('t', 228, 0);

    // Draw an orb in place of the O
    strokeWeight(4);
    fill(175, 175, 0);
    ellipse(-219, -10, 80, 80);

    // add eyes
    fill(255);
    noStroke();
    ellipse(-234, -20, 15, 15);
    ellipse(-204, -20, 15, 15);

    // add pupils
    fill(0);
    ellipse(-234, -20, 5, 5);
    ellipse(-204, -20, 5, 5);
    
    // reset text options
    fill(0);
    strokeWeight(1);
    textAlign(LEFT, BASELINE);
    pop();
  }
}


/*
  This class creates cannon annimation.
*/
class CannonAnimation {
  /*
    The constructor sets the starting properties of the cannon.
    var x - the x position of the cannon
    var y - the y position of the cannon
    var angle - the angle to face
  */
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.cannonballs = [];
    this.shootTimer = 0;
  }
  
  /*
    This function draws the cannon.
  */
  draw() {
    push();
    translate(this.x, this.y);
    
    // draw the base of the cannon
    fill(100);
    stroke(0);
    strokeWeight(4);
    ellipse(0, 0, 80, 80);

    // Rotate to face orb
    rotate(this.angle);
    
    // draw the barrel
    fill(50);
    ellipse(-16, 0, 20, 40);
    rect(-16, -20, 56, 40);
    ellipse(40, 0, 23, 46);
    fill(0);
    ellipse(40, 0, 12, 24);
    strokeWeight(1);
    
    pop();
  }
  
  /*
    This finds the orbs in range and shoots them.
  */
  shoot() {
    if (this.shootTimer <= 0) {
      this.cannonballs.push(new CannonballAnimation(this.x, this.y, this.angle));
      this.shootTimer = 75;
    }
    else {
      this.shootTimer -= 1;
    }
  }
  
  /*
    Handle the movement and drawing of cannonballs.
  */
  cannonball() {
    for (var i = this.cannonballs.length - 1; i >= 0; i--) {
      var cannonball = this.cannonballs[i];
      cannonball.draw();
      cannonball.move();
      
      // delete if off screen
      if (cannonball.x > 850 || cannonball.y > 650 || cannonball.x < -50 || cannonball.y < -50) {
        this.cannonballs.splice(i, 1);
      }
    }
  }
}

/*
  This class creates cannonballs shoot by the cannon tower animation.
*/
class CannonballAnimation {
  /*
    The constructor sets the starting properties of the cannonball.
    var x - the x position of the cannonball
    var y - the y position of the cannonball
    var angle - the direction to travell
  */
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.speed = 4;
    this.dx = cos(angle) * this.speed;
    this.dy = sin(angle) * this.speed;
  }
  
  /*
    Draws the cannonball.
  */
  draw() {
    push();
    translate(this.x, this.y);
    fill(50);
    stroke(0);
    strokeWeight(4);
    ellipse(0, 0, 30, 30);
    strokeWeight(1);
    pop();
  }
  
  /*
    Move the cannonball.
  */
  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}


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
    if (instructionOne === true) {
      instructionTwo = true;
      instructionOne = false;
      // reset health and coins for second screen
      instructionsCoins = 0;
      instructionsLives =3;
    }
    else if (instructionTwo === true) {
      optionScreen = true;
      instructionScreen = false;
      instructionTwo = false;
      this.play = true;
    }
    else if (optionScreen === true) {
      startGame = true;
    }
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
        text("Half", 20, 35);
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
        text("Double", 20, 35);
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
    }
    else if (this.medium === true) {
      this.medium = false;
      this.hard = true;
    }
    else {
      this.hard = false;
      this.easy = true;
    }
  }
}


/*
  This class creates straight path tiles.
*/
class StraightPathTile {
  /*
    The constructor sets the starting properties of the straight path tile.
    var x - the x position of the path tile
    var y - the y position of the path tile
    var orientation - the orientation of tile (v, h)
  */
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.size = 50;
  }
  
  /*
    This function draws the path tile. 
  */
  draw() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(0);
    // draw black square covering full tile
    rect(0, 0, this.size, this.size);
    // tile brown color
    fill(210, 180, 140);
    // fill in the path based on orientation
    if (this.orientation === 'h') {
      rect(0, 2.5, this.size, this.size - 5);
    }
    if (this.orientation === 'v') {
      rect(2.5, 0, this.size - 5, this.size);
    }
    pop();
  }
}


/*
  This class creates split path tiles.
*/
class SplitPathTile {
  /*
    The constructor sets the starting properties of the split path tile.
    var x - the x position of the path tile
    var y - the y position of the path tile
    var orientation - the orientation of tile (l, r, t, b)
  */
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.size = 50;
  }
  
  /*
    This function draws the path tile. 
  */
  draw() {
    push();
    translate(this.x + this.size / 2, this.y + this.size / 2)
    noStroke();
    fill(0);
    // draw black square covering full tile
    rect(-this.size / 2, -this.size / 2, this.size, this.size);
    // rotate based on orientation
    if (this.orientation === 't') {
      rotate(HALF_PI);
    } 
    else if (this.orientation === 'r') {
      rotate(PI);
    } 
    else if (this.orientation === 'b') {
      rotate(3 * HALF_PI);
    }
    // tile brown color
    fill(210, 180, 140);
    rect(-this.size / 2, -this.size / 2, this.size - 2.5, this.size);
    
    // inside corners outline
    fill(0);
    arc(-this.size / 2, -this.size / 2, 5, 5, 0, HALF_PI, PIE);
    arc(-this.size / 2, this.size / 2, 5, 5, -HALF_PI, 0, PIE);
    pop();
  }
}


/*
  This class creates corner path tiles.
*/
class CornerPathTile {
  /*
    The constructor sets the starting properties of the corner path tile.
    var x - the x position of the path tile
    var y - the y position of the path tile
    var orientation - the orientation of tile (ne, nw, se, sw)
  */
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.size = 50;
  }
  
  /*
    This function draws the path tile. 
  */
  draw() {
    push();
    // traslate to center of the tile
    translate(this.x + this.size / 2, this.y + this.size / 2);
    noStroke();

    // draw the grass backgound
    fill(90, 170, 90);
    rect(-this.size / 2, -this.size / 2, this.size, this.size);

    // rotate based on orientation
    if (this.orientation === 'sw') {
      rotate(HALF_PI);
    } 
    else if (this.orientation === 'ne') {
      rotate(PI);
    } 
    else if (this.orientation === 'nw') {
      rotate(3 * HALF_PI);
    }

    // Outline for path
    fill(0);
    arc(this.size / 4, this.size / 4, 3 * this.size / 2, 3 * this.size / 2, PI, PI + HALF_PI, PIE);
    rect(this.size / 2, -this.size / 2 + 2.5, -this.size / 4, -2.5);
    rect(-this.size / 2 + 2.5, this.size / 2, -2.5, -this.size / 4);

    // Actual path
    fill(210, 180, 140);
    arc(this.size / 4, this.size / 4, 3 * this.size / 2 - 5, 3 * this.size / 2 - 5, PI, PI + HALF_PI, PIE);
    rect(this.size / 2, -this.size / 2 + 2.5, -this.size / 4 - 1, this.size - 2.5);
    rect(-this.size / 2 + 2.5, this.size / 2, this.size - 2.5, -this.size / 4 - 1);
    
    // inside corner outline
    fill(0);
    arc(this.size / 2, this.size / 2, 5, 5, PI, PI + HALF_PI, PIE);
    pop();
  }
}


/*
  This class creates grass tiles.
*/
class GrassTile {
  /*
    The constructor sets the starting properties of the grass tile.
    var x - the x position of the grass tile
    var y - the y position of the grass tile
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
  }
  
  /*
    This function draws the grass tile. 
  */
  draw() {
    push();
    // Translate to tile's position
    translate(this.x, this.y);
    noStroke();

    // Draw the grass background
    fill(90, 170, 90);
    rect(0, 0, this.size, this.size);
    pop();
  }
}


/*
  This class creates the tilemaps.
*/
class TileMap {
  /*
    The constructor sets the starting properties of the tile map.
    var x - the x position of the tile map
    var y - the y position of the tile map
    var tilemap - the array that contains the tilemap
  */
  constructor(x, y, tilemap) {
    this.x = x;
    this.y = y;
    this.tilemap = tilemap;
    this.mapArray = [];
    this.paths = [];
  }
  
  /*
    This function initializes the tilemap. 
  */  
  initialize() {
    // the start of the paths
    var startTiles = [];
    
    // iterate through the tile map and add each object
    for (var i=0; i<this.tilemap.length; i++) {
      for (var j = 0; j < this.tilemap[i].length; j++) {
        var tile;
        var x = j * 50;
        var y = i * 50;
        // add each object to tilemap as an image
        // additionally find the starting point
        switch (this.tilemap[i][j]) {
          case ' ':
            tile = new GrassTile(0, 0);
            break;
          case 'h':
            tile = new StraightPathTile(0, 0, 'h');
            break;
          case 'v':
            tile = new StraightPathTile(0, 0, 'v');
            break;
          case '1':
            tile = new CornerPathTile(0, 0, 'ne');
            break;
          case '2':
            tile = new CornerPathTile(0, 0, 'nw');
            break;
          case '3':
            tile = new CornerPathTile(0, 0, 'se');
            break;
          case '4':
            tile = new CornerPathTile(0, 0, 'sw');
            break;
          case 'l':
            tile = new SplitPathTile(0, 0, 'l');
            break;
          case 'r':
            tile = new SplitPathTile(0, 0, 'r');
            break;
          case 't':
            tile = new SplitPathTile(0, 0, 't');
            break;
          case 'b':
            tile = new SplitPathTile(0, 0, 'b');
            break;
          // special case to find the start of the paths
          case 's':
            startTiles.push({ x: j, y: i });
            continue;
          default:
            continue;
        }
        tile.draw();
        this.mapArray.push({ tile: get(0, 0, 50, 50), x: x, y: y });
      }
    }
    // find the paths to the end from the starts
    for (var k = 0; k < startTiles.length; k++) {
      this.traversePaths(startTiles[k].x, startTiles[k].y);
    }
    
    // remove paths with no length
    for (var l = 0; l < this.paths.length; l++) {
      if (this.paths[l].length === 0) {
        this.paths.splice(l, 1);
      }
    }
  }
  
  /*
    find all posible paths handling  branches.
    var startX - the starting x position of the path
    var startY - the starting y position of the path
  */
  traversePaths(startX, startY) {
    var pathPoints = [];
    var visited = new Set();
    var stack = [{ x: startX, y: startY, path: [...pathPoints] }];

    // iterate through the stack
    while (stack.length > 0) {
      var { x, y, path } = stack.pop();
      var key = `${x},${y}`;

      // continue if the tile was alreay vidited
      if (visited.has(key)) continue;
      visited.add(key);

      // convert from tile cordinates to pixel cordinates
      path.push({ x: this.x + x * 50 + 25, y: this.y + y * 50 + 17 });

      // stop when an endpoint is reached
      if (this.tilemap[y][x] === 'e') {
        this.paths.push(path);
        continue;
      }

      // add each valid path from this tile to stack
      if (this.isPathTile(x, y + 1) && !visited.has(`${x},${y + 1}`)) {
        stack.push({ x, y: y + 1, path: [...path] });
      }
      if (this.isPathTile(x + 1, y) && !visited.has(`${x + 1},${y}`)) {
        stack.push({ x: x + 1, y, path: [...path] });
      }
      if (this.isPathTile(x, y - 1) && !visited.has(`${x},${y - 1}`)) {
        stack.push({ x, y: y - 1, path: [...path] });
      }
      if (this.isPathTile(x - 1, y) && !visited.has(`${x - 1},${y}`)) {
        stack.push({ x: x - 1, y, path: [...path] });
      }
    }
  }

  /*
    This function checks if a tile is part of the path.
    var x - the x position of the tile
    var y - the y position of the tile
  */
  isPathTile(x, y) {
    if (x < 0 || y < 0 || y >= this.tilemap.length || x >= this.tilemap[y].length) {
      return false;
    }
    let tile = this.tilemap[y][x];
    return tile === 'h' || tile === 'v' || tile === '1' || tile === '2' || tile === '3' || tile === '4' || tile === 'e' || tile === 'l' || tile === 'r' || tile === 't' || tile === 'b';
  }
  
  /*
    This function draws a tile from an image. 
    var tile - the tile to draw and its x and y cordinates
  */
  drawImage(tile) {
    image(tile.tile, tile.x, tile.y, 50, 50)
  }
  
  /*
    This function draws the tilemap. 
  */
  draw() {
    push();
    translate(this.x, this.y);
    // draw each tile from an image
    for (var i = 0; i < this.mapArray.length; i++) {
      this.drawImage(this.mapArray[i]);
    }
    pop();
  }
}


/*
  This class creates standard blue orbs.
*/
class BlueOrb {
  /*
    The constructor sets the starting properties of the blue orb.
    var x - the x position of the orb
    var y - the y position of the orb
    var spawnTime - the time it takes for specific orb to spawn
  */
  constructor(x, y, path, spawnTime) {
    this.x = x;
    this.y = y;
    // handle spawn timer
    this.spawnTimer = spawnTime;
    // handle the path and speed
    this.path = path;
    this.currentPath = 0;
    this.currentPoint = 0;
    this.speed = 1;
    // handle the bounce animation
    this.bounceHeight = 0.6;
    this.bounceFrequency = 0.2;
    this.time = 0;
    // handle reaching the end of the map
    this.end = false;
    // handle health
    this.health = 10;
    this.damage = false;
    this.damageTimer = 0;
  }
  
  /*
    This function draws the blue orb.
  */
  draw() {
    push();
    translate(this.x, this.y);
    // draw the orb
    stroke(0);
    strokeWeight(2);
    // hit marker
    if (this.damage) {
      fill(200, 50, 50);
      this.damageTimer--;

      // turn of effect after timer
      if (this.damageTimer <= 0) {
        this.damage = false;
      }
    } 
    // otherwise blue color
    else {
      fill(50, 100, 200);
    }
    ellipse(0, 0, 35, 35);

    // add eyes
    fill(255);
    noStroke();
    ellipse(-6.6, -4.4, 6.6, 6.6);
    ellipse(6.6, -4.4, 6.6, 6.6);

    // add pupils
    fill(0);
    ellipse(-6.6, -4.4, 2.5, 2.5);
    ellipse(6.6, -4.4, 2.5, 2.5);
    pop();
  }
  
  /*
    This function moves the blue orb along its single path.
  */
  move() {
    // stop once the path is completed
    if (!this.path || this.currentPoint >= this.path.length) {
      this.end = true;
      return;
    }

    var target = this.path[this.currentPoint];
    var dx = target.x - this.x;
    var dy = target.y - this.y;
    var distance = dist(this.x, this.y, target.x, target.y);

    // move towards the target point
    if (distance > this.speed) {
      this.x += (dx / distance) * this.speed;
      this.y += (dy / distance) * this.speed;
    } 
    else {
      this.x = target.x;
      this.y = target.y;
      this.currentPoint++;
    }
    
    // update time and add bounce effect
    this.time += this.bounceFrequency;
    var bounceOffset = sin(this.time) * this.bounceHeight;
    // smaller bounce if moving vertically
    if (this.y == target.y) {
      this.y += bounceOffset / 2;
    }
    else {
      this.y += bounceOffset;
    }
  }
}


/*
  This class creates standard blue orbs.
*/
class YellowOrb {
  /*
    The constructor sets the starting properties of the blue orb.
    var x - the x position of the orb
    var y - the y position of the orb
    var path - the path for the orb to follow
    var spawnTime - the time it takes for specific orb to spawn
  */
  constructor(x, y, path, spawnTime) {
    this.x = x;
    this.y = y;
    // handle spawn timer
    this.spawnTimer = spawnTime;
    // handle the path and speed
    this.path = path;
    this.currentPath = 0;
    this.currentPoint = 0;
    this.speed = 1.5;
    // handle the bounce animation
    this.bounceHeight = 0.7;
    this.bounceFrequency = 0.3;
    this.time = 0;
    // handle reaching the end of the map
    this.end = false;
    // handle health
    this.health = 10;
    this.damage = false;
  }
  
  /*
    This function draws the blue orb.
  */
  draw() {
    push();
    translate(this.x, this.y);
    // draw the orb
    stroke(0);
    strokeWeight(2);
    fill(175, 175, 0);
    ellipse(0, 0, 35, 35);

    // add eyes
    fill(255);
    noStroke();
    ellipse(-6.6, -4.4, 6.6, 6.6);
    ellipse(6.6, -4.4, 6.6, 6.6);

    // add pupils
    fill(0);
    ellipse(-6.6, -4.4, 2.5, 2.5);
    ellipse(6.6, -4.4, 2.5, 2.5);
    pop();
  }
  
  /*
    This function moves the blue orb along its single path.
  */
  move() {
    // stop once the path is completed
    if (!this.path || this.currentPoint >= this.path.length) {
      this.end = true;
      instructionsLives -= 1;
      return;
    }

    // find the distance too target point
    var target = this.path[this.currentPoint];
    var dx = target.x - this.x;
    var dy = target.y - this.y;
    var distance = dist(this.x, this.y, target.x, target.y);

    // move towards the target point
    if (distance > this.speed) {
      this.x += (dx / distance) * this.speed;
      this.y += (dy / distance) * this.speed;
    } 
    else {
      this.x = target.x;
      this.y = target.y;
      this.currentPoint++;
    }
    
    // update time and add bounce effect
    this.time += this.bounceFrequency;
    var bounceOffset = sin(this.time) * this.bounceHeight;
    this.y += bounceOffset;
  }
}


/*
  This class creates waves of orbs based on an input array.
*/
class WaveCreator {
  /*
    The constructor sets the starting properties of wave creator.
    var x - the x position of the orb
    var y - the y position of the orb
    var orbs - the array of orbs, path, and spawn timer
    waveTimer - the timer for the entire wave to complete
  */
  constructor(x, y, orbs, waveTimer) {
    this.x = x;
    this.y = y;
    this.orbs = orbs;
    this.waveTimer = waveTimer;
    this.wave = [];
  }
  
  /*
    This function initalizes the wave of orbs, and their paths and spawn timers.
  */
  initialize() {
    // iterate through each orb in the wave
    for (var i = 0; i < this.orbs.length; i++) {
      var orb = this.orbs[i];
      // blue orb
      if (orb.type === 'b') {
        this.wave.push(new BlueOrb(this.x, this.y, orb.path, orb.spawnTime));
      }
      // yellow orb
      else if (orb.type === 'y') {
        this.wave.push(new YellowOrb(this.x, this.y, orb.path, orb.spawnTime));
      }
    }
  }
  
  /*
    This function spawns the orbs based on their timer and deleting them at end of path.
  */
  spawnOrbs() {
    for (var i = this.wave.length - 1; i >= 0; i--) {
      var orb = this.wave[i];
      if (orb.spawnTimer <= 0) {
        orb.draw();
        orb.move();
      } 
      else {
        orb.spawnTimer -= 1;
      }
      
      // delete orbs that reach the end of the path
      if (orb.end === true) {
        this.wave.splice(i, 1);
      }
      
      // delete orbs that are killed
      if (orb.health <= 0) {
        this.wave.splice(i, 1);
        instructionsCoins += 1;
      }
    }
  }
}


/*
  This class creates cannon towers.
*/
class Cannon {
  /*
    The constructor sets the starting properties of the cannon.
    var x - the x position of the cannon
    var y - the y position of the cannon
    var wave - the starting wave to shoot
  */
  constructor(x, y, wave) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.range = 100;
    this.orbsInRange = new Set();
    this.currentWave = wave;
    this.shootTimer = 0;
    this.damage = 5;
    this.cannonballs = [];
  }
  
  /*
    This function draws the cannon.
  */
  draw() {
    push();
    translate(this.x, this.y);
    
    // draw the base of the cannon
    fill(100);
    stroke(0);
    strokeWeight(2);
    ellipse(0, 0, 40, 40);

    // Rotate to face orb
    rotate(this.angle);
    
    // draw the barrel
    fill(50);
    ellipse(-8, 0, 10, 20);
    rect(-8, -10, 28, 20);
    ellipse(20, 0, 11.5, 23);
    fill(0);
    ellipse(20, 0, 6, 12);
    strokeWeight(1);
    
    pop();
  }
  
  /*
    This finds the orbs in range and shoots them.
  */
  shoot() {
    // remove orbs not in range or dead
    for (var orb of this.orbsInRange) {
      if (dist(this.x, this.y, orb.x, orb.y) >= this.range || orb.health <= 0) {
        this.orbsInRange.delete(orb);
      }
    }
    
    // add to orb to range
    for (var newOrb of this.currentWave) {
      if (!this.orbsInRange.has(newOrb) && dist(this.x, this.y, newOrb.x, newOrb.y) <= this.range) {
        this.orbsInRange.add(newOrb);
      }
    }
    
    // decrement shoot timer
    this.shootTimer -= 1;
    
    // return if no orbs in rangae to shoot
    if (this.orbsInRange.size === 0) {
      return;
    }
    
    // face toward the orb
    var targetOrb = [...this.orbsInRange][0];
    var dx = targetOrb.x - this.x;
    var dy = targetOrb.y - this.y;
    this.angle = atan2(dy, dx);
      
    // shoot the target orb
    if (this.shootTimer <= 0) {
      this.cannonballs.push(new Cannonball(this.x, this.y, this.angle));
      this.shootTimer = 45;
    }
  }
  
  /*
    Handle the movement and drawing of cannonballs.
  */
  cannonball() {
    for (var i = this.cannonballs.length - 1; i >= 0; i--) {
      var cannonball = this.cannonballs[i];
      cannonball.draw();
      cannonball.move();
      
      // TODO: fix this logic
      if (cannonball.x > 645 || cannonball.y > 465) {
        this.cannonballs.splice(i, 1);
        break;
      }
      
      // check collisions with orbs
      for (var j = this.currentWave.length - 1; j >= 0; j--) {
        var orb = this.currentWave[j];
        // if the cannonball hits an orb
        if (dist(cannonball.x, cannonball.y, orb.x, orb.y) <= 20) {
          this.cannonballs.splice(i, 1);
          orb.health -= this.damage;
          orb.damage = true;
          orb.damageTimer = 10;
          break;
        }
      }
    }
  }
}

/*
  This class creates cannonballs shoot by the cannon tower.
*/
class Cannonball {
  /*
    The constructor sets the starting properties of the cannonball.
    var x - the x position of the cannonball
    var y - the y position of the cannonball
    var angle - the direction to travell
  */
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.speed = 4;
    this.dx = cos(angle) * this.speed;
    this.dy = sin(angle) * this.speed;
  }
  
  /*
    Draws the cannonball.
  */
  draw() {
    push();
    translate(this.x, this.y);
    fill(50);
    stroke(0);
    strokeWeight(2);
    ellipse(0, 0, 15, 15);
    strokeWeight(1);
    pop();
  }
  
  /*
    Move the cannonball.
  */
  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

// handle scaling to fit window
var baseWidth = 800;
var baseHeight = 600;
var windowScale;

// Title objects
var orbTitle = new OrbTitle(-104, 210);
var onslaughtTitle = new OnslaughtTitle(1100, 310);

// cannon animations
var cannonAnimationOne;
var cannonAnimationTwo;


// booleans for progressing through menus and game
var titleScreen = true;
var instructionScreen = false;
var optionScreen = false;
var startGame = false;
// booleans for progresing through instructions
var instructionOne = true;
var instructionTwo = false;

// array to store button objects
var buttons = [];

// start button object
var startButton = new StartButton(290, 410);
buttons.push(startButton);
// menu button object
var menuButton = new MenuButton(290, 490);
buttons.push(menuButton);

// coins option button
var coinButton = new OptionsButton(340, 200);
coinButton.coins = true;
buttons.push(coinButton);
// speed option button
var speedButton = new OptionsButton(340, 270);
speedButton.speed = true;
buttons.push(speedButton);
// health option button
var healthButton = new OptionsButton(340, 340);
healthButton.health = true;
buttons.push(healthButton);
// lives option button
var livesButton = new OptionsButton(340, 410);
livesButton.lives = true;
buttons.push(livesButton);

// instuctions one tilemap object
var instructrionsOneTilemap;

// instrucctions two tilemap object
var instructionsTwoTilemap;

// instructions screen waves
var instructionsOneWave;
var instructionsTwoWave;

// instructions one cannon objects
var instructionsOneCannonOne;
var instructionsOneCannonTwo;

// instructions two cannon objects
var instructionsTwoCannonOne;
var instructionsTwoCannonTwo;

// keep track of lives and coins in the instructions
var instructionsCoins = 0;
var instructionsLives = 3;

/*
  This function sets up the game
*/
function setup() {
  // createCanvas(800, 600);
  createCanvas(windowWidth, windowHeight);
  textFont('Palatino Linotype');
  updateWindowScale();
  
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
  instructionsWaveOne = new WaveCreator(575, 185, instructionsOneWaveArray, 600);
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
  
  instructionsTwoCannonOne = new Cannon(215, 255, instructionsWaveTwo.wave);
  instructionsTwoCannonTwo = new Cannon(200, 325, instructionsWaveTwo.wave);
}


/*
  This function draws and handles movement and other game functions every frame.
*/
function draw() {
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
  if (optionScreen === true) {
    optionScreenDraw();
  }
  
  // start the game
  if (startGame === true && menuButton.buttonTimer <= 0) {
    optionScreen = false;
    // start game function
  }
  
  pop();
}

/*
  This function gets proper scale based on window.
*/
function updateWindowScale() {
  windowScale = min(windowWidth / baseWidth, windowHeight / baseHeight);
}


/*
  This function controls mouse clicking inputs. 
*/
function mouseClicked() {
  
  // Get the mouse position adjusted for window size
  var xCor = mouseX / windowScale;
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
}


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
      instructionsWaveOne.waveTimer = 600;
      instructionsWaveOne.initialize();
      // reset health and coins after one wave
      instructionsCoins = 0;
      instructionsLives = 3;
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
    instructionsOneCannonOne.cannonball();
    instructionsOneCannonOne.draw();
    instructionsOneCannonOne.shoot();
    
    instructionsOneCannonTwo.cannonball();
    instructionsOneCannonTwo.draw();
    instructionsOneCannonTwo.shoot();
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
      instructionsLives =3;
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
  fill(255, 215, 0);
  textSize(25);
  text("Coins " + instructionsCoins, 265, 240);
  
  fill(220, 20, 60);
  textSize(25);
  text("Lives " + instructionsLives, 160, 240);
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
  text("The options scetion contains modifiers that can make the game", 180, 100);
  text("easier or harder. You may want to start with easier modifiers", 180, 120);
  text("while you learn how each tower and enemy type works and", 180, 140);
  text("then move on to a challenge. Each modifer can be adjusted", 180, 160);
  text("seperatedly to create many diffrent replayable experiences.", 180, 180);
  
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