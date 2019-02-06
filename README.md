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
