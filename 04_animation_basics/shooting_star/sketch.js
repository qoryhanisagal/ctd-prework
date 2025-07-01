// Step 1: Create a larger canvas for more shooting space
function setup() {
  createCanvas(600, 600); // Increased from 400x400 to 600x600
}

// Step 2: I’m starting with two stars, each with its own position
var x1 = 0;
var y1 = 0;

var x2 = 600;
var y2 = 600;

// Step 3: draw() runs continuously to animate the stars
function draw() {
  // Step 4: Set up the nighttime background
  background(30, 30, 30); // Dark charcoal gray

  // Step 5: Add a starry backdrop (random static stars)
  for (var i = 0; i < 50; i++) {
    fill(255);
    noStroke();
    ellipse(random(0, 600), random(0, 600), 1, 1); // match canvas size
  }

  // Step 6: First shooting star — moving down and right
  fill(255, 242, 0); // Bright yellow
  ellipse(x1, y1, 10, 10);
  x1 += 3; // Move right
  y1 += 2; // Move down

  // Step 7: Second shooting star — moving up and left
  fill(255); // White
  ellipse(x2, y2, 8, 8);
  x2 -= 2; // Move left
  y2 -= 3; // Move up
}