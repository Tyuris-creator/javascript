// alows an iterable such as an array or string
// to be extended into separate elements
// (unpack the elements)

let numbers = [1,2,3,4,5];

let max = Math.max(numbers)
console.log(max)

let maximum = Math.max(...numbers);
console.log(maximum)

console.log(numbers)

const myName = 'Michail'
const letters0 = {...myName}
console.log(letters0)
const letters1 = [...myName]
console.log(letters1)