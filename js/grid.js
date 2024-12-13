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
  