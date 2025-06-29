// This variable controls how big the sun is
let sunSize = 30;

function setup() {
  createCanvas(400, 400); // Sets up the canvas once
}

function draw() {
  // I reset the background every frame so the sun doesn't leave a trail
  background(102, 230, 255); // Light blue sky

  // I'm increasing the sun's size by 1 pixel each time draw() runs
  sunSize = sunSize + 1;

  // Now I draw the sun using the updated size
  fill(255, 204, 0); // Yellow sun color
  ellipse(200, 298, sunSize, sunSize); // Centered low on the canvas

  // Drawing the land along the bottom
  fill(76, 168, 67); // A soft green for the ground
  rect(0, 300, 400, 100); // Full-width green rectangle for land
}