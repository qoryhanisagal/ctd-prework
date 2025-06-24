function setup() {
  // Step 1: Set up canvas and darker background
  createCanvas(400, 400);
  background(180, 160, 120); // Warm darker brown for placemat

  // Step 2: Draw the plate
  fill(255);            // White plate
  stroke(180);          // Light gray outline
  strokeWeight(4);
  ellipse(200, 250, 300, 300); // Plate centered

  noStroke(); // Turn off outlines for food

  // Step 3: Add toast (rectangle with rounded corners)
  fill(205, 133, 63); // Toast brown
  rect(125, 190, 60, 40, 10); // Left toast
  rect(215, 190, 60, 40, 10); // Right toast
}
