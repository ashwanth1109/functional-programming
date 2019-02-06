//------------------------------------------------------------------------
// IMPERATIVE PROGRAM
//------------------------------------------------------------------------
time = 5;
carPositions = [1, 1, 1];

while (time) {
  // decrease time
  time--;
  for (let i = 0; i < carPositions.length; i++) {
    console.log("\n");
    // move car
    if (Math.random() > 0.3) {
      carPositions[i] += 1;
    }
    // draw car
    console.log("-" * carPositions);
  }
}
