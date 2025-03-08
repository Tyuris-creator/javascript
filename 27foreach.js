const myArray = [1,2,3, 1000000]
console.log(myArray.length)

const res = [];

myArray.forEach(el => res.push(el * 2))

console.log(res) // не меняет оригинальный массив


const res2 = myArray.map(el => el * 3);
console.log(res2)

const res3 = myArray.map( function(el) {return el = el * 3} );
console.log(res3)

const res4 = myArray.map((el) => {return el * 3});
console.log(res4)


// forEach = METHOD used to iterate over the elements of an array and apply
// a specified function (callback) to each element
// array.forEach(callback)
// element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(displplay)

numbers.forEach(function(el) {
    console.log(el)
})

numbers.forEach(el => console.log(el))

function displplay(element) {
    console.log(element)
}

numbers.forEach((element,index, array) => console.log(typeof element,typeof index, typeof array))

numbers.forEach((element,index,array)=>console.log(array[index]**2,typeof index));



let fruits = ['apple', 'coconut', 'banana', 'cherry', 'mango']

fruits.forEach((el, index, array) => {
    array[index] = el.charAt(0).toUpperCase() + el.slice(1)
    console.log(array[index])
})