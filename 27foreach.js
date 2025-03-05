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