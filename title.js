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