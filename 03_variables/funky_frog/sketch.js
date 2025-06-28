function setup() {
  createCanvas(400, 400);
  background(255); // White background

  let centerX = 200;
  let centerY = 200;

  // Step 1: Draw the frog’s green face
  fill(0, 200, 0);           // Bright frog green
  noStroke();                // No stroke for face
  ellipse(centerX, centerY, 200, 150); // Main face oval

  // Step 2: Draw white eyeballs with green outlines to match frog
  stroke(0, 200, 0);         // Same green as face
  strokeWeight(4);           // Bold outline
  fill(255);                 // White for the eyeball centers
  ellipse(centerX - 50, centerY - 75, 40, 40); // Left eye
  ellipse(centerX + 50, centerY - 75, 40, 40); // Right eye

  // Step 3: Pupils (black rectangles inside the eyes)
  noStroke();                // No outlines on pupils
  fill(0);                   // Black pupils
  rect(centerX - 55, centerY - 85, 10, 10); // Left pupil
  rect(centerX + 45, centerY - 85, 10, 10); // Right pupil

  // Step 4: Draw the mouth
  fill(0);                   // Black mouth
  ellipse(centerX, centerY + 30, 120, 50); // Positioned near bottom of face
}