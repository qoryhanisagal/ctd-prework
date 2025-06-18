// A simple snowman using p5.js

function setup() {
  createCanvas(400, 400);      // Set canvas size
  background(220);             // Light gray background
  noStroke();                  // No outlines on shapes
}

function draw() {
  background(220);

  // Snowman body
  fill(255);                   // White color
  ellipse(200, 300, 100, 100); // Bottom circle
  ellipse(200, 220, 75, 75);   // Middle circle
  ellipse(200, 160, 50, 50);   // Head

  // Eyes
  fill(0);                     // Black color
  ellipse(190, 150, 5, 5);     // Left eye
  ellipse(210, 150, 5, 5);     // Right eye

  // Carrot nose
  fill(255, 102, 0);           // Orange
  triangle(200, 155, 200, 160, 220, 157);

  // Buttons
  fill(50);
  ellipse(200, 210, 5, 5);     // Upper button
  ellipse(200, 230, 5, 5);     // Lower button

  // Hat
  fill(0);
  rect(185, 135, 30, 10);      // Hat brim
  rect(190, 110, 20, 25);      // Hat top
}