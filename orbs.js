/*
  This class creates standard blue orbs.
*/
class BlueOrb {
  /*
    The constructor sets the starting properties of the blue orb.
    var x - the x position of the orb
    var y - the y position of the orb
    var path - the path that the orb will move on
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