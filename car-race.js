//------------------------------------------------------------------------
// IMPERATIVE PROGRAM
//------------------------------------------------------------------------
// time = 5;
// carPositions = [1, 1, 1];
// while (time) {
//     // decrease time
//     time--;
//     console.log("\n");
//     for (let i = 0; i < carPositions.length; i++) {
//         // move car
//         if (Math.random() > 0.3) {
//             carPositions[i] += 1;
//         }
//         // draw car
//         let logStr = "";
//         for (let j = 0; j < carPositions[i]; j++) logStr += "-";
//         console.log(logStr);
//     }
// }

// ------------------------------------------------------------
// FUNCTIONAL PROGRAM
// ------------------------------------------------------------
// moveCars method
const moveCars = carPositions => {
    return carPositions.map(x => (Math.random() > 0.3 ? x + 1 : x));
};
// increaseTimeStep method
const increaseTimeStep = state => {
    return {
        time: state.time - 1,
        carPositions: moveCars(state.carPositions)
    };
};
// outputCar method
const outputCar = carPosition => {
    return "-".repeat(carPosition);
};
// draw method
const draw = carPositions => {
    console.log(carPositions.map(outputCar).join("\n"));
};
// race method
const race = state => {
    console.log(`Time: ${state.time}`);
    draw(state.carPositions);
    if (state.time) {
        race(increaseTimeStep(state));
    }
};
// START OF THE PIPELINE - pass in the initial state
race({
    time: 5,
    carPositions: [1, 1, 1]
});
