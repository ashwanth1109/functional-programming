# functional-programming

Practice repo for the functional programming paradigm

### My notes on Mary Rose Cook article on functional programming

Reference: https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming

### Characteristics of functional programming

1. Language features that aid functional programming - data immutability, first class functions, tail call optimization

2. Programming techniques used to write functional code - mapping, reducing, pipelining, recursing, currying and the use of higher order functions.

3. Advantageous properties of functional programming - parallelization, lazy evaluation and determinism.

### The core principle

The absence of side effects.
Meaning - It doesn't rely on data outside the current function and it doesn't change data that exists outside the current function.
Hence these functions are pure and follow the principle of immutability.

```javascript
// Unfunctional function
const increment = () => {
    a += 1; // a is a global variable that is being mutated
};
```

```javascript
// Functional function
const increment = a => {
    return a + 1;
};
```

### List iteration

We don't iterate over lists using loops. Instead we use map and reduce.

#### Map

Map takes a function and runs on a collection of items. (1) It makes a new, empty collection (2) runs the function on each item in the original collection (3) inserts each return value into the new collection (4) returns the new collection.

```javascript
// in this case, map takes in a named function.
const len = str => str.length;
const name_len1 = ["Goku", "Vegeta", "Broly"].map(len);
// collection.map(callback)
```

```javascript
// in this case, map takes in an anonymous, inlined function
const name_len2 = ["Frieza", "Cell"].map(str => str.length);
```

#### Reduce

Reduce takes a function and runs on a collection of items.
It returns a value that is created by combining the items (or) simplifying them.

```javascript
// pass in callback as a reducer function
const reducer = (acc, curr) => acc + curr;
const sum1 = [1, 2, 3, 4, 5].reduce(reducer, 0);
// pass in callback as an inline function
const sum2 = [1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0);
```

#### So, why should we use map and reduce?

Code in a loop may affect variables defined before it or code that runs after it. By convention, map and reduce are functional.

Map and reduce are elemental operations that form building blocks of operations such as filter etc. They can be transformed into complex elements without compromising code readability.

#### Writing code declaratively, and not imperatively

```javascript
//------------------------------------------------------------------------
// IMPERATIVE PROGRAM
//------------------------------------------------------------------------
time = 5;
carPositions = [1, 1, 1];

while (time) {
    // decrease time
    time--;
    console.log("\n");
    for (let i = 0; i < carPositions.length; i++) {
        // move car
        if (Math.random() > 0.3) {
            carPositions[i] += 1;
        }
        // draw car
        let logStr = "";
        for (let j = 0; j < carPositions[i]; j++) logStr += "-";
        console.log(logStr);
    }
}
```

We can make this program declarative by bundling pieces of code into functions.

```javascript
// ------------------------------------------------------------
// FUNCTIONAL PROGRAM
// ------------------------------------------------------------
// moveCars method - no mutation on carPositions array
const moveCars = carPositions => {
    return carPositions.map(x => (Math.random() > 0.3 ? x + 1 : x));
    // map does not mutate original array, forEach does
};
// increaseTimeStep method - no state mutation as new object is returned
const increaseTimeStep = state => {
    return {
        time: state.time - 1,
        carPositions: moveCars(state.carPositions)
    };
};
// outputCar method
const outputCar = carPosition => {
    // no mutation on carPosition value - returning a new string
    return "-".repeat(carPosition);
};
// draw method - i dont think this is a pure function as logging is a side effect, maybe?
// but no mutation of carPositions array as map doesnt mutate as mentioned before
const draw = carPositions => {
    console.log(carPositions.map(outputCar).join("\n"));
};
// race method
const race = state => {
    console.log(`Time: ${state.time}`); // possible side effect
    draw(state.carPositions);
    if (state.time) {
        race(increaseTimeStep(state)); // recursive call
    }
};
// START OF THE PIPELINE - pass in the initial state
race({
    time: 5,
    carPositions: [1, 1, 1]
});
```

This program is functional as (1) there are no shared variables (2) functions take parameters (3) no mutation of values and newly created variables are directly returned

#### Pipeline Architecture

In this section, we want to try and convert the following imperative program into a functional one.

For this problem, we have an array of bands. We want to transform some of the properties of these band objects.

```javascript
// ------------------------------------------------------------
// class template for creating objects for bands
// ------------------------------------------------------------
class Band {
    constructor(name, country, active = false) {
        this.name = name;
        this.country = country;
        this.active = active;
    }
}
// ------------------------------------------------------------
// array of bands
// ------------------------------------------------------------
const bands = [
    new Band("beatles", "CANADA"),
    new Band("led zeppelin", "CANADA"),
    new Band("coldplay", "CANADA", true)
];
```

One data transformation that we plan for is to capitalize first letter of each word in the name property of the band objects. So, we extend the prototype of string with a method called capitalize.

```javascript
// ------------------------------------------------------------
// capitalize prototype function
// ------------------------------------------------------------
String.prototype.capitalize = function() {
    return this.split(" ")
        .map(str => str.charAt(0).toUpperCase() + str.slice(1))
        .join(" ");
};
```

Now, we define the imperative approach to format this array of objects.

```javascript
// ------------------------------------------------------------
// formatBands function - imperative loop
// ------------------------------------------------------------
const formatBands = bands => {
    for (const band of bands) {
        band.country = "UK";
        band.name = band.name.capitalize();
    }
};
```
