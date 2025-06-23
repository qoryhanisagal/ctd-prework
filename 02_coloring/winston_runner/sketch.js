function setup() {
  // Step 1: Set up the canvas
  createCanvas(400, 400);
  background(148, 251, 255); // Sky blue
  //Add Title
  textSize(24);          // Large readable font
  textAlign(CENTER);     // Center horizontally
  fill(0);               // Black text for visibility
  text("Winston the Runner", width / 2, 40); // Draw at top center


  // Step 2: Draw the face
  // I'm using fill to make the face yellow, and ellipse to draw a big round face
  fill(255, 255, 0); // Bright yellow
  ellipse(202, 208, 300, 300); // Face shape

  // Step 3: Draw the eyes
  // I switch fill to black for the eyes and use two ellipses
  fill(0); // Black
  ellipse(157, 151, 40, 40); // Left eye
  ellipse(304, 142, 40, 40); // Right eye

  // Step 4: Draw the mouth
  // I want Winston to have a big red mouth, so I use a red ellipse here
  fill(255, 0, 0); // Red
  ellipse(257, 240, 120, 136); // Mouth shape

  // Step 5: Add a headband
  // I'm adding a diagonal headband with a thick black line across his forehead
  stroke(250, 115, 246);          // Black outline for the headband
  strokeWeight(15);    // Make the headband thick
  line(83, 116, 271, 74); // Diagonal placement

  // Step 6: Add earrings
  // I decided to give Winston gold earrings for some flair
  noStroke();         // I don’t want outlines around the earrings
  fill(255, 215, 0);  // Gold color (RGB for gold)

  // Left earring
  ellipse(65, 215, 20, 20); // Positioned on left side

  // Right earring
  ellipse(340, 215, 20, 20); // Positioned on right side
}