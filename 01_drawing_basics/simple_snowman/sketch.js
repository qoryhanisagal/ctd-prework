function setup() {
  // Step 1: Set up the canvas
  // This sets up a 400x400 pixel drawing area with a light background
  createCanvas(400, 400);
  background(220);
  noStroke(); // Turn off shape outlines
}

function draw() {
  // Step 2: Clear the canvas each frame
  // This ensures a clean redraw (good habit even if nothing is animating yet)
  background(220);

  // Step 3: Draw the snowman’s body using three stacked ellipses
  fill(255); // White color

  // Bottom circle (largest)
  ellipse(200, 300, 100, 100);

  // Middle circle
  ellipse(200, 220, 75, 75);

  // Head (smallest)
  ellipse(200, 160, 50, 50);

  // Step 4: Add the eyes
  fill(0); // Black color for eyes
  ellipse(190, 150, 5, 5); // Left eye
  ellipse(210, 150, 5, 5); // Right eye

  // Step 5: Add a carrot nose using triangle()
  fill(255, 102, 0); // Orange color
  triangle(200, 155, 200, 160, 220, 157);

  // Step 6: Add buttons to the torso
  fill(50); // Dark gray
  ellipse(200, 210, 5, 5);
  ellipse(200, 230, 5, 5);

  // Step 7: Add a hat using two rectangles
  fill(0); // Black
  rect(185, 135, 30, 10); // Brim
  rect(190, 110, 20, 25); // Top
}