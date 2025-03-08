const myArray = [1,2,3]
console.log(myArray)
const myArray2 = new Array(1,2,3)
console.log(myArray2)

myArray.push(4)
console.log(myArray)
let lastEl = myArray.pop()
console.log(lastEl)
let firstEl = myArray.shift()
console.log(firstEl)
console.log(myArray)
myArray.unshift("first new added element!")
console.log(myArray)

const fruits = ['coconut', 'apple', 'cherry', 'mango']

for (let value of fruits) {
    console.log(value)
} 

for (let index in fruits) {
    console.log( typeof index)
}

for (let index in fruits) {
    console.log(Number(index) + 1, fruits[index])
}

