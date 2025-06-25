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

  // Step 4: Add strawberry jelly on left toast
  fill(220, 20, 60); // Deep reddish-pink for jelly
  ellipse(155, 210, 30, 20); // Jelly blob on toast (x, y, width, height)

  // Step 5: Add fried egg
  fill(255, 255, 240);  // Egg white
  ellipse(200, 270, 70, 50);
  fill(255, 204, 0);    // Egg yolk
  ellipse(200, 270, 20, 20);

  // Step 6: Add chicken sausage (long and oval)
  fill(222, 184, 135); // Chicken sausage color
  ellipse(200, 320, 100, 25); // Horizontal sausage

  // Step 7: Add text title
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Breakfast is Served", width / 2, 40);
}
}
