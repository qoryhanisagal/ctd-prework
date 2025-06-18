function setup() {
  createCanvas(400, 400); // Sets up a 400x400 pixel canvas
  background(255);        // Sets the background color to white
}

function draw() {
  // I'm going for a frog face.
  // Face (big circle in the center)
  ellipse(200, 200, 150, 150);

  // Mouth (same x, lower y, stretched width)
  ellipse(200, 250, 100, 20);

  // Left Eye (left side, higher up)
  ellipse(150, 150, 30, 30);

  // Right Eye (same height, mirrored x)
  ellipse(250, 150, 30, 30);
}