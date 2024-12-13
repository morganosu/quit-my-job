const FPS = 60;
const waitFrames = FPS * 1;
let lastTime = 0;

let grid, lines, shapes, colours, randomEffectSelector;

function setup() {
  createCanvas(1000, 1000);
  frameRate(FPS);
  blendMode(BLEND);

  grid = new Grid();
  lines = new Lines();
  shapes = new Shapes();
}

function draw() {
  if (frameCount - lastTime >= waitFrames) {
    setRandomValues();
    lastTime = frameCount;
    
    let colourPairs = [
      ["white", "black"],
      ["pink", "green"],
      ["orange", "darkblue"],
      ["black", "white"],
      ["navy", "coral"],
      ["yellow", "purple"],
      ["lightblue", "gray"],
      ["red", "gold"],
      ["beige", "forestgreen"],
      ["magenta", "yellowgreen"],
      ["turquoise", "plum"],
      ["lightgray", "red"],
      ["fuchsia", "slateblue"],
      ["lightpink", "olive"],
      ["cyan", "darkgreen"],
      ["lightyellow", "forestgreen"],
      ["limegreen", "royalblue"],
    ];

    let main = colourPairs[colours][0];
    let highlight = colourPairs[colours][1];

    background(main);

    grid.draw(highlight, randomEffectSelector);
    lines.draw(main, randomEffectSelector);
    shapes.draw();
  }
}

function setRandomValues() {
  grid.setRandomValues();
  lines.setRandomValues();
  shapes.setRandomValues();
  colours = floor(random(17));
  randomEffectSelector = floor(random(20));
}

class Grid {
  constructor() {
    this.squareAmount = 0;
    this.squareSize = 0;
  }

  setRandomValues() {
    this.squareAmount = floor(random(2, 20));
    this.squareWidth = width / this.squareAmount;
    this.squareHeight = height / this.squareAmount;
  }

  draw(highlight, randomEffectSelector) {
    for (let i = 1; i < this.squareAmount - 1; i++) {
      for (let j = 1; j < this.squareAmount - 1; j++) {
        let highlighted = floor(random(5));
        if (highlighted === 0) {
          fill(highlight);
          if (randomEffectSelector === 0) {
            blendMode(DIFFERENCE);
          }
          rect(this.squareWidth * i, this.squareHeight * j, this.squareWidth, this.squareHeight);
          blendMode(BLEND);
        }
      }
    }
  }
}

class Lines {
  constructor() {
    this.lineCount = 0;
    this.lineDistanceVertical = 0;
    this.lineDistanceHorizontal = 0;
    this.vertical = 0;
    this.horizontal = 0;
    this.strokeThickness = 0;
  }

  setRandomValues() {
    this.lineCount = grid.squareAmount * floor(random(2, 10));
    this.lineDistanceVertical = width / this.lineCount;
    this.lineDistanceHorizontal = height / this.lineCount;
    this.vertical = floor(random(3));
    this.horizontal = floor(random(4));
    this.strokeThickness = floor(random(2, 5));
  }

  draw(main, randomEffectSelector) {
    if (this.vertical === 1) {
      for (let k = 1; k < this.lineCount; k++) {
        stroke(main);
        strokeWeight(this.strokeThickness);
        if (randomEffectSelector === 1 || randomEffectSelector === 3) {
          blendMode(DIFFERENCE);
        }
        line(k * this.lineDistanceVertical, 0, k * this.lineDistanceVertical, height);
        blendMode(BLEND);
      }
    }

    if (this.horizontal === 1) {
      for (let l = 1; l < this.lineCount; l++) {
        stroke(main);
        strokeWeight(this.strokeThickness);
        if (randomEffectSelector === 2 || randomEffectSelector === 3) {
          blendMode(DIFFERENCE);
        }
        if (randomEffectSelector !== 1) {
          line(0, l * this.lineDistanceHorizontal, width, l * this.lineDistanceHorizontal);
        }
        blendMode(BLEND);
      }
    }
  }
}

class Shapes {
  constructor() {
    this.rect1 = {};
    this.rect2 = {};
    this.circle = {};
    this.graphicsMode = 0;
    this.halfChance = 0;
  }

  setRandomValues() {
    this.rect1 = {
      x: random(width*0.05, width*0.5),
      y: random(height*0.05, height*0.5),
      width: random(width*0.05, width*0.6),
      height: random(height*0.05, height*0.6),
    };

    this.rect2 = {
      x: random(width*0.1, width*0.5),
      y: random(height*0.1, height*0.7),
      width: random(width*0.05, width*0.4),
      height: random(height*0.05, height*0.4),
    };

    this.circle = {
      size: random(0.1, 0.6) * min(width, height),
      x: random(width * 0.1, width - width * 0.1),
      y: random(height * 0.1, height - height * 0.1),
    };

    this.graphicsMode = floor(random(8));
    this.halfChance = floor(random(2));
  }

  draw() {
    noStroke();
    if (this.graphicsMode === 0) {
      // Rectangles only
      blendMode(DIFFERENCE);
      fill(255);
      rect(this.rect1.x, this.rect1.y, this.rect1.width, this.rect1.height);
      if (this.halfChance === 0) {
        blendMode(BURN);
        fill(0);
        rect(this.rect2.x, this.rect2.y, this.rect2.width, this.rect2.height);
      }
      blendMode(BLEND);
    } else if (this.graphicsMode === 1) {
      // Circle only
      blendMode(DIFFERENCE);
      fill(255);
      circle(width / 2, height / 2, min(width, height) * 0.75);
      blendMode(BLEND);
    } else {
      // Rectangles and circle
      blendMode(DIFFERENCE);
      fill(255);
      circle(this.circle.x, this.circle.y, this.circle.size);
      fill(255);
      rect(this.rect1.x, this.rect1.y, this.rect1.width, this.rect1.height);
      if (this.halfChance === 0) {
        blendMode(BURN);
        fill(0);
        rect(this.rect2.x, this.rect2.y, this.rect2.width, this.rect2.height);
      }
      blendMode(BLEND);
    }
  }
}
