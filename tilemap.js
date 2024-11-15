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

    // Actual path
    fill(210, 180, 140);
    arc(this.size / 4, this.size / 4, 3 * this.size / 2 - 5, 3 * this.size / 2 - 5, PI, PI + HALF_PI, PIE);
    rect(this.size / 2, -this.size / 2 + 2.5, -this.size / 4 - 1, this.size - 2.5);
    rect(-this.size / 2 + 2.5, this.size / 2, this.size - 2.5, -this.size / 4 - 1);
    
    // add more outline for straight section on ends of turn
    fill(0);
    rect(this.size / 2, -this.size / 2 + 2.5, -this.size / 4 - 5, -2.5);
    rect(-this.size / 2 + 2.5, this.size / 2, -2.5, -this.size / 4 - 5);
    
    // inside corner outline
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