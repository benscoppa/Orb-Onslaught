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
    // move existing cannonballs
    this.cannonball();
    
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
    this.speed = 6;
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
  This class creates tesla towers.
*/
class Tesla {
  /*
    The constructor sets the starting properties of the cannon.
    var x - the x position of the cannon
    var y - the y position of the cannon
    var wave - the starting wave to shoot
  */
  constructor(x, y, wave) {
    this.x = x;
    this.y = y;
    this.range = 80;
    this.chainRange = 70;
    this.orbsInRange = new Set();
    this.currentWave = wave;
    this.shootTimer = 0;
    this.lightningArray = [];
    this.damage = 2.5;
    this.displayRange = false;
    this.canPlace = true;
  }
  
  /*
    This function draws the tesla.
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
    
    // draw the base of the tesla
    fill(100);
    stroke(0);
    strokeWeight(2);
    ellipse(0, 0, 40, 40);
    
    // draw the shaft
    fill(220, 0, 0);
    ellipse(0, 2, 10, 10);
    rect(-5, -10, 10, 10);
    
    fill(192);
    rect(-10, -13, 20, 6);
    
    fill(220, 0, 0);
    ellipse(0, -10, 10, 10);
    
    // create the coil ring
    var ring = createGraphics(40, 40);

    ring.fill(192);
    ring.stroke(0);
    ring.strokeWeight(2);
    ring.ellipse(20, 20, 30, 30);

    ring.erase();
    ring.ellipse(20, 20, 17, 17);
    ring.noErase();
    
    ring.noFill();
    ring.ellipse(20, 20, 17, 17);
    
    image(ring, -20, -30);
  
    strokeWeight(1);
    
    pop();
    
    // draw the lightning
    for (var i = this.lightningArray.length - 1; i >= 0; i--) {
      this.lightningArray[i].draw();
    }  
  }
  
  /*
    This function shoots orbs and handles lightning bolts.
  */
  shoot() {
    
    // decrement shoot timer
    this.shootTimer -= 1;
      
    // shoot lightning if timer is done
    if (this.shootTimer <= 0) {
      this.lightning();
      this.shootTimer = 25;
    }
    
    // update each bolt
    for (var i = this.lightningArray.length - 1; i >= 0; i--) {
      var bolt = this.lightningArray[i];
      bolt.update();
      bolt.draw();

      // delete bolt if timer expired
      if (bolt.timer <= 0) {
        this.lightningArray.splice(i, 1);
      }
    }
  }
  
  /*
    handle creating new lightning bolts
  */
  lightning() {
    
    // find the nearest orb within tower range
    var targetOrb = this.currentWave.reduce((nearest, orb) => {
      // make sure orb is not outside range or dead
      if (dist(this.x, this.y, orb.x, orb.y) > this.range || orb.health <= 0) {
        return nearest;
      } 
      return !nearest || dist(this.x, this.y, orb.x, orb.y) < dist(this.x, this.y, nearest.x, nearest.y) ? orb : nearest;
    }, null);
    
    // return if no target orb
    if (targetOrb === null) {
      return;
    }
    
    // damage the target orb
    targetOrb.health -= this.damage;
    targetOrb.damage = true;
    targetOrb.damageTimer = 10;

    // find nearest orb to target orb within chain range
    var chainTarget = this.currentWave.reduce((nearest, orb) => {
      // make sure the orb is not the taget orb, outside the chain range or dead
      if (orb === targetOrb || dist(targetOrb.x, targetOrb.y, orb.x, orb.y) > this.chainRange || orb.health <= 0) {
        return nearest;
      } 
      return !nearest || dist(targetOrb.x, targetOrb.y, orb.x, orb.y) < dist(targetOrb.x, targetOrb.y, nearest.x, nearest.y) ? orb : nearest;
    }, null);

    // damage the chain orb if it exist
    if (chainTarget) {
      chainTarget.health -= this.damage;
      chainTarget.damage = true;
      chainTarget.damageTimer = 10;

      // lightning to both orbs
      this.lightningArray.push(new Lightning(this.x, this.y - 15, targetOrb.x, targetOrb.y, chainTarget.x, chainTarget.y));
    } 
    // lightning to one orb
    else {
      this.lightningArray.push(new Lightning(this.x, this.y - 15, targetOrb.x, targetOrb.y, null, null));
    }
  }
}


/*
  This class creates lightning shoot from tesla towers.
*/
class Lightning {
  /*
    The constructor sets the starting properties of the lightning.
    var startX - the start x position of the lightning
    var startY - the start y position of the lightning
    var targetX - the target x position of the lightning
    var targetY - the target y position of the lightning
    var chainX - the chain x position of the lightning if there is one
    var chainY - the chain y position of the lightning if there is one
  */
  constructor(startX, startY, targetX, targetY, chainX, chainY) {
    this.startX = startX;
    this.startY = startY;
    this.targetX = targetX;
    this.targetY = targetY;
    this.chainX = chainX;
    this.chainY = chainY;
    this.timer = 12;
  }

  /*
    This function draws the lightning.
  */
  draw() {
    push();
    if (this.timer > 0) {
      stroke(160, 200, 215, map(this.timer, 0, 12, 0, 255));
      strokeWeight(4);
      line(this.startX, this.startY, this.targetX, this.targetY);
      
      // only draw chain if there is a chain target
      if (this.chainX !== null && this.chainY !== null) {
        line(this.targetX, this.targetY, this.chainX, this.chainY);
      }
    }
    pop();
  }

  /*
    This function updates the lightning timer.
  */
  update() {
    this.timer--;
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