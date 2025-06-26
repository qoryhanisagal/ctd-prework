function setup() {
  // Step 1: Set up my canvas and background to feel like a cozy kitchen table
  createCanvas(400, 400);
  background(180, 160, 120); // I picked this warm brown to feel like a real placemat

  // Step 2: Draw the plate in the center
  fill(255);                // Clean white for the plate
  stroke(180);              // Subtle gray rim to give it depth
  strokeWeight(4);
  ellipse(200, 250, 300, 300); // I centered the plate visually so everything feels balanced

  noStroke(); // No harsh outlines for food – keeping it soft and simple

  // Step 3: Add my toast slices (a breakfast essential!)
  fill(205, 133, 63);        // This toasty brown looks just right
  rect(125, 190, 60, 40, 10); // Left slice – I gave it rounded edges to feel soft
  rect(215, 190, 60, 40, 10); // Right slice – same idea, symmetry matters

  // Step 4: Add jelly – because toast needs personality
  fill(220, 20, 60);          // I went for a bold berry red
  ellipse(155, 210, 30, 20);  // Positioned this jelly on the left toast only

  // Step 5: Time for my egg – this needed outlining so it didn’t disappear
  stroke(220);                // Light outline to make the white stand out
  strokeWeight(2);
  fill(255, 255, 240);        // Slightly off-white for that cooked egg white look
  ellipse(200, 270, 70, 50);  // Centered under the toast for visual balance

  noStroke();                 // No outline for the yolk
  fill(255, 204, 0);          // A warm, sunny yellow – just right for yolk
  ellipse(200, 270, 20, 20);  // Kept the yolk centered inside the egg white

  // Step 6: Add sausages – using arcs to give a little curve
  fill(160, 82, 45);          // Deep brown for cooked sausage
  stroke(110, 60, 30);        // A slightly darker edge adds contrast
  strokeWeight(2);

  // These arcs are a little trick I learned using HALF_PI and PI + HALF_PI
  arc(170, 310, 40, 70, HALF_PI, PI + HALF_PI); // First sausage curve
  arc(210, 310, 40, 70, HALF_PI, PI + HALF_PI); // Second sausage curve

  noStroke(); // Done with outlines for now

  // Step 7: Add my finishing touch – a title
  fill(0);                    // Black so it stands out
  textSize(20);
  textAlign(CENTER);
  text("Breakfast is Served", width / 2, 40); // Centered up top – just like a menu
}