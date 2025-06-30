function setup() {
  createCanvas(400, 400); // Standard canvas size
  noStroke();             // I don't want outlines on my shapes
}

// Variables for cloud positions and sun size
var leftX = 100;       // Position for the left cloud, covering part of the sun
var rightX = 300;      // Position for the right cloud
var sunRadius = 40;    // Sun starts small so it can "explode"

function draw() {
  // Clear background each frame to avoid trails
  background(184, 236, 255); // Light blue sky

  // Draw the sun (centered and growing each frame)
  fill(255, 170, 0); // Bright orange sun
  ellipse(200, 100, sunRadius, sunRadius);

  // Make the sun grow
  sunRadius += 2;

  // Move the clouds outward (away from center)
  leftX -= 1;    // Left cloud shifts left
  rightX += 1;   // Right cloud shifts right

  // Draw the clouds
  fill(255); // White cloud color

  // Left cloud pieces
  ellipse(leftX, 150, 126, 97);
  ellipse(leftX + 62, 150, 70, 60);
  ellipse(leftX - 62, 150, 70, 60);

  // Right cloud pieces
  ellipse(rightX, 100, 126, 97);
  ellipse(rightX + 62, 100, 70, 60);
}