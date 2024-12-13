class Shapes {
    constructor() {
      this.rect1 = {};
      this.rect2 = {};
      this.circle = {};
      this.pixelcircle = {};
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
  
      this.pixelcircle = {
        x: random(-width, 0),
        y: random(-height, 0),
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
        
      } else if (this.graphicsMode === 2) {
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
      } else {
        // Pixel circle
        blendMode(REMOVE);
        fill(255,255,255);
        image(img, this.pixelcircle.x, this.pixelcircle.y, 2*min(width, height), 2*min(width, height));
        blendMode(BLEND);
      }
    }
  }