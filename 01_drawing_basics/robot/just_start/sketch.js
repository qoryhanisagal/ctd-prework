function setup() {
  // Step 1: Set up canvas and colors
  createCanvas(400, 400);
  background(200, 0, 200); // Orange Background

  //Step 2: Shadow glow effect
  fill(100, 0, 100, 80); // Semi-transparent dark purple
  ellipse(200, 220, 240, 240); // Slight glow under robot
  noStroke();
}

function draw() {
  background(200, 0, 200); // Reset every frame
  // Step 3: Draw title
  textSize(24);
  textAlign(CENTER);
  fill(255, 215, 0); // Gold
  text("Robot", width / 2, 40); // Draw title each frame

  // Step 4: Draw robot head (rounded shape)
  fill(180); // Silver-gray
  rect(100, 100, 200, 200, 40); // Rounded corners make it look modern

  // Step 5: Add glowing eyes
  fill(0, 200, 255); // Bright cyan
  ellipse(150, 160, 30, 30); // Left eye
  ellipse(250, 160, 30, 30); // Right eye

  // Inner glow
  fill(0, 255, 255, 80); // Light glow with transparency
  ellipse(150, 160, 50, 50);
  ellipse(250, 160, 50, 50);

    // Lime green iris (smaller than glow, larger than pupil)
  fill(100, 255, 100); 
  ellipse(150, 160, 18, 18);
  ellipse(250, 160, 18, 18);

  // Yellow retina/pupil (center dot)
  fill(255, 255, 0); 
  ellipse(150, 160, 8, 8);
  ellipse(250, 160, 8, 8);

  // Step 6: Futuristic mouth (soundbar style)
  fill(100);
  rect(160, 230, 10, 20);
  rect(180, 230, 10, 10);
  rect(200, 230, 10, 15);
  rect(220, 230, 10, 10);
  rect(240, 230, 10, 20);

  // Step 7: Add antenna or neural link
  stroke(255);
  strokeWeight(2);
  line(200, 100, 200, 60); // Antenna wire
  fill(255, 0, 150); // Neon pink node
  ellipse(200, 60, 10, 10);

  noLoop(); // Stop redraw
}