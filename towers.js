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
    this.displayRange = false;
    this.canPlace = true;
  }
  
  /*
    This function draws the cannon.
  */
  draw() {
    push();
    translate(this.x, this.y);
    
    // draw the range indicator if active
    if (this.displayRange === true) {
      noStroke();
      // gray if placeable red if not
      if (this.canPlace === true) {
        fill(128, 128, 128, 128);
      }
      else {
        fill(255, 0, 0, 128);
      }
      ellipse(0, 0, this.range * 2, this.range * 2);
    }
    
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
      
      // delete the cannonball off screen
      if (cannonball.x > 810 || cannonball.y > 610 || cannonball.x < -10 || cannonball.y < -10) {
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


/*
  This function handles a build tower updating its location, range indicator and its placeablility.
  var buildTower - the current buildTower tower object
*/
function handleBuildTower(buildTower) {
  var xCor = mouseX / windowScale;
  var yCor = mouseY / windowScale;
    
  // check if mouse is over shop and display range if not
  var inShop = (xCor >= shop.x - 20) && (xCor <= shop.x + 120) && (yCor >= shop.y) && (yCor <= shop.y + 365);
  buildTower.displayRange = !inShop;
    
  // tower can be placed when not over shop and on not over unplaceable tiles
  buildTower.canPlace = !inShop && tilemap.canPlaceTower(xCor, yCor);
    
  buildTower.x = xCor;
  buildTower.y = yCor;
}