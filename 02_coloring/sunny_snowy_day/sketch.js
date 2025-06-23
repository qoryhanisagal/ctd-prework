function setup() {
  createCanvas(400, 400); // Step 1: Create a 400x400 pixel canvas

  // Step 2: Set a bright sky background and title
  background(0, 255, 255); // Bright cyan to represent a clear sunny day
  textSize(24);
  textAlign(CENTER);
  fill(0); // Black text
  text("Waving Snowman", width / 2, 40); // Title at the top center

  // Step 3: Remove outlines from shapes (I'll turn stroke back on later when needed)
  noStroke();

  // Step 4: Draw grassy ground (not snowy this time)
  fill(152, 251, 152); // Light spring green
  rect(0, 300, 400, 100); // Ground spans the full width and bottom portion of canvas

  // Step 5: Draw the sun in the sky
  fill(255, 255, 0); // Bright yellow sun
  ellipse(60, 60, 80, 80); // Circular sun near top-left corner

  // Step 6: Draw the snowman’s body (from bottom to top)
  fill(255); // White for snow
  ellipse(200, 300, 100, 100); // Bottom snowball
  ellipse(200, 220, 75, 75);   // Middle snowball
  ellipse(200, 150, 50, 50);   // Head

  // Step 7: Add eyes to the snowman’s face
  fill(0); // Black for the eyes
  ellipse(190, 140, 5, 5); // Left eye
  ellipse(210, 140, 5, 5); // Right eye

  // Step 8: Add a carrot nose
  fill(255, 102, 0); // Orange for carrot
  triangle(200, 145, 200, 150, 220, 147); // Pointy carrot nose

  // Step 9: Add a hat on top of the head
  fill(0); // Black hat
  rect(185, 120, 30, 10); // Brim of the hat
  rect(190, 90, 20, 30);  // Top of the hat

  // Step 10: Add arms using brown stick lines
  stroke(139, 69, 19);   // Brown color
  strokeWeight(4);       // Thicker lines for arms

  line(240, 220, 290, 150); // Right arm raised in a wave
  line(170, 220, 120, 220); // Left arm straight out for balance

  // Step 11: Add colorful buttons down the middle
  noStroke(); // Turn off stroke for clean button edges

  fill(255, 0, 0);       // Red button (top)
  ellipse(200, 215, 6, 6);

  fill(255, 215, 0);     // Gold button (middle)
  ellipse(200, 230, 6, 6);

  fill(255, 0, 0);       // Red button (bottom)
  ellipse(200, 245, 6, 6);
}