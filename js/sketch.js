const FPS = 60;
const waitFrames = FPS * 1;
let lastTime = 0;

let grid, lines, shapes, colours, randomEffectSelector;

function preload() {
  img = loadImage('/images/blurred_pixel_circle.png');
}

function setup() {
  createCanvas(1000, 1000);
  frameRate(FPS);
  blendMode(BLEND);
  noStroke();

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

function fillScreen(r, g, b, alpha, blend) {
  let alphaScaled = alpha * 255;
  let c = color(r, g, b, alphaScaled);
  fill(c);
  noStroke();
  blendMode(blend);
  rect(0, 0, width, height);
  blendMode(BLEND);
}