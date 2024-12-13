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