//------------------------------------------------------------------------
// Section 1
//------------------------------------------------------------------------
const len = str => str.length;
const name_len1 = ["Goku", "Vegeta", "Broly"].map(len);
console.log(name_len1);
//------------------------------------------------------------------------
// Section 2
//------------------------------------------------------------------------
const name_len2 = ["Frieza", "Cell"].map(str => str.length);
console.log(name_len2);
//------------------------------------------------------------------------
// Section 3
//------------------------------------------------------------------------
const reducer = (acc, curr) => acc + curr;
const sum1 = [1, 2, 3, 4, 5].reduce(reducer, 0);
console.log(sum1);
const sum2 = [1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0);
console.log(sum2);
