/*
  This class creates the shop for purchasing towers.
*/
class Shop {
  /*
    The constructor sets the starting properties of the shop.
    var x - the x position of the shop
    var y - the y position of the shop
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.cannonExpensive = false;
    this.teslaExpensie = false;
    this.crossbowExpensive = false;
    this.expensiveTimer = 0;
  }
  
  /*
    This function draws the shop.
  */
  draw() {
    push();
    translate(this.x, this.y);
    fill(150);
    strokeWeight(1);
    stroke(0);
    // draw the shop
    rect(0, 0, 150, 345);
    // draw the shop text
    fill(100);
    rect(5, 5, 140, 50);
    textSize(45);
    fill(200, 50, 50);
    strokeWeight(4);
    text("SHOP", 15, 45);
    
    // update the too expensive timer
    if (this.expensiveTimer > 0) {
      this.expensiveTimer -= 1;
    }
    // reset all timers
    else if (this.expensiveTimer === 0) {
      this.cannonExpensive = false;
      this.teslaExpensie = false;
      this.crossbowExpensive = false;
    }
    
    strokeWeight(1);
    
    // draw placeholders for towers
    fill(70, 130, 180);
    if (this.cannonExpensive === true) {
      fill(255, 59, 48);
    }
    rect(5, 60, 67.5, 90);
    
    fill(70, 130, 180);
    if (this.crossbowExpensive === true) {
      fill(255, 59, 48);
    }
    rect(77.5, 60, 67.5, 90);
    
    fill(180, 180, 70);
    if (this.teslaExpensie === true) {
      fill(255, 59, 48);
    }
    rect(5, 155, 67.5, 90);
    
    fill(180, 180, 70);
    rect(77.5, 155, 67.5, 90);
    
    fill(130, 70, 180);
    rect(5, 250, 67.5, 90);
    
    fill(130, 70, 180);
    rect(77.5, 250, 67.5, 90);
    
    textSize(13);
    fill(0);
    
    // draw the icon of each tower in the shop
    image(cannonImage, 7.5, 65);
    text("Cannon", 15, 124.5);
    text(cannonCost, 40, 142.5);
    
    image(crossbowImage, 80, 65);
    text("Crossbow", 82, 124.5);
    text(crossbowCost, 110, 142.5);
    
    image(teslaImage, 7.5, 155);
    text("Tesla", 23, 219.5);
    text(teslaCost, 40, 237.5);
    
    pop();
  }
}


/*
  This class creates icons for coins.
*/
class  CoinIcon {
  /*
    The constructor sets the starting properties of the coin.
    var x - the x position of the coin
    var y - the y position of the coin
    var radius - the radius of the coin
  */
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  
   /*
    This function draws the coin.
  */
  draw() {
    push();
    translate(this.x, this.y);
    
    fill(212, 175, 55);
    stroke(168, 134, 38);
    strokeWeight(this.radius / 7);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}


/*
  This class creates icons for hearts.
*/
class  HeartIcon {
  /*
    The constructor sets the starting properties of the heart.
    var x - the x position of the heart
    var y - the y position of the heart
    var size - the radius of the heart
  */
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  
   /*
    This function draws the heart.
  */
  draw() {
    push();
    translate(this.x, this.y);
    
    fill(220, 20, 60);
    stroke(150, 0, 0);
    strokeWeight(this.size / 7);
    
    // heart shape
    beginShape();
    // center point of two top curves
    vertex(0, -this.size * 0.25);
    // left curve
    bezierVertex(-this.size * 0.15, -this.size * 0.6, -this.size * 0.9, -this.size * 0.5, -this.size * 0.33, this.size * 0.3);
    // bottom curve connection
    bezierVertex(-this.size * 0.15, this.size * 0.55, this.size * 0.15, this.size * 0.55, this.size * 0.33, this.size * 0.3);
    // right curve
    bezierVertex(this.size * 0.9, -this.size * 0.5, this.size * 0.15, -this.size * 0.6, 0, -this.size * 0.25);   
    endShape(CLOSE);
    
    pop();
  }
}