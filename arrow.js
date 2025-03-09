// arrow function = a concise way to write function expression
// good for simple functions that u use only once (parameters) => some code

const hello = (name) => console.log("Hello!");

hello('Misha')

const name1 = function (name) { 
    return setTimeout(() => console.log(`Hello, ${name}`), 3000)
}

name1("Misha")

const numbers = [1,2,3,4,5,6]

const squares = numbers.map((el)=> Math.pow(el,2))
console.log(squares)