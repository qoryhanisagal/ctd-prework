function setup() {
  createCanvas(400, 400);
  background(255); 

  // Step 1: Variables make this flexible!
  let eyeSize = 10;        // I can tweak this for big or tiny eyes
  let toothLength = 20;    // Changing this adjusts both teeth at once

  // Step 2: Drawing the bunny’s ears first
  stroke(0);  // Turning stroke on so I get outlines
  noFill();   // Don’t want any color inside the ears
  ellipse(150, 70, 60, 120);  // Left ear
  ellipse(240, 70, 60, 120);  // Right ear

  // Step 3: Now the big round face
  ellipse(200, 170, 150, 150); // Centered face circle

  // Step 4: Eyes — using black fill this time
  fill(0);      
  noStroke();   // No outline on the eyes
  ellipse(170, 150, eyeSize, eyeSize); // Left eye
  ellipse(230, 150, eyeSize, eyeSize); // Right eye

  // Step 5: Simple mouth — just a horizontal line
  stroke(0);  
  line(150, 200, 250, 200);  // Drawing from left to right side of mouth

  // Step 6: Buck teeth — they’re rectangles with no fill
  noFill();
  rect(185, 200, 15, toothLength);  // Left tooth
  rect(200, 200, 15, toothLength);  // Right tooth
}