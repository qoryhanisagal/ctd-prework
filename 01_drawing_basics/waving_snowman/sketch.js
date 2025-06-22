function setup() {
  createCanvas(400, 400);     // Step 1: Set up canvas
  background(220);            // Step 2: Light gray background
  noStroke();                 // Step 3: No outlines on shapes

  // Step 4: Draw ground (BEFORE snowman to appear behind it)
  fill(240);                  // Light snowy color
  rect(0, 300, 400, 100);     // Full width ground at bottom
                             // (x=0, y=300, width=400, height=100)

  // Step 5: Draw snowman (bottom to top)
  fill(255);                  // White for snow

  ellipse(200, 300, 100, 100); // Bottom
  ellipse(200, 220, 75, 75);   // Middle
  ellipse(200, 160, 50, 50);   // Head

  // Step 6: Add eyes
  fill(0);
  ellipse(190, 150, 5, 5);
  ellipse(210, 150, 5, 5);

  // Step 7: Add carrot nose
  fill(255, 102, 0);
  triangle(200, 155, 200, 160, 220, 157);

    // Step 8: Add waving arm (right arm raised)
  stroke(102, 51, 0);         // Brown stick color
  strokeWeight(4);           // Make the stick thicker
  line(230, 220, 280, 150);  // Right arm waving up

  // Left arm for balance
  line(170, 220, 120, 220);  // Straight out to left

  // Step 9: Add buttons

  // Red button 1 (top)
  fill(255, 0, 0); // Red
  ellipse(200, 215, 6, 6);

  // Gold button 2
  fill(255, 215, 0); // Gold (RGB for gold tone)
  ellipse(200, 230, 6, 6);

  // Red button 3
  fill(255, 0, 0); // Red
  ellipse(200, 245, 6, 6);
}